'use client';

import { useEffect, useRef } from 'react';
import type { Map as LeafletMap, GeoJSON as LeafletGeoJSON, Layer, PathOptions } from 'leaflet';

const COLOR_BLUE = '#1A4FD0';
const COLOR_ORANGE = '#F97316';

const defaultStyle: PathOptions = {
  color: COLOR_BLUE,
  fillColor: COLOR_BLUE,
  weight: 2,
  opacity: 0.9,
  fillOpacity: 0.28,
};

const hoverStyle: PathOptions = {
  color: COLOR_ORANGE,
  fillColor: COLOR_ORANGE,
  weight: 2.5,
  opacity: 1,
  fillOpacity: 0.40,
};

export default function ServiceAreasMap() {
  const mapRef = useRef<LeafletMap | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef.current) return;
    if (!containerRef.current) return;

    Promise.all([
      import('leaflet'),
      fetch('/service-areas.geojson').then((r) => r.json()),
    ]).then(([L, geojsonData]) => {
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      });

      const map = L.map(containerRef.current!, {
        zoomControl: false,
        scrollWheelZoom: false,
        dragging: true,
        doubleClickZoom: true,
        attributionControl: true,
      });

      mapRef.current = map;

      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 19,
        }
      ).addTo(map);

      const geoLayer = L.geoJSON(geojsonData, {
        style: () => ({ ...defaultStyle }),
        onEachFeature(feat, lyr) {
          const name = feat.properties?.name as string;

          lyr.bindTooltip(name, {
            permanent: false,
            sticky: true,
            className: 'leaflet-area-tooltip',
            direction: 'top',
            offset: [0, -4],
          });

          lyr.on('mouseover', () => {
            (lyr as LeafletGeoJSON).setStyle(hoverStyle);
            (lyr as Layer & { bringToFront?: () => void }).bringToFront?.();
          });
          lyr.on('mouseout', () => {
            (lyr as LeafletGeoJSON).setStyle(defaultStyle);
          });
        },
      }).addTo(map);

      map.fitBounds(geoLayer.getBounds(), { padding: [28, 28] });
    });

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ height: '420px', width: '100%' }}
      aria-label="Interactive map showing Handlyr service areas"
      role="img"
    />
  );
}
