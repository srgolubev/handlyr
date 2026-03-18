'use client';

import { useEffect, useRef } from 'react';
import type { Map as LeafletMap, GeoJSON as LeafletGeoJSON, Layer, PathOptions } from 'leaflet';

// ---------------------------------------------------------------------------
// GeoJSON polygons — simplified but geographically accurate outlines
// ---------------------------------------------------------------------------

type AreaFeature = GeoJSON.Feature<GeoJSON.Polygon, { name: string }>;

const SERVICE_AREA_FEATURES: AreaFeature[] = [
  // Manhattan — approximate outline of the island
  {
    type: 'Feature',
    properties: { name: 'Manhattan, NY' },
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [-74.0199, 40.6998], // Battery Park tip
        [-74.0175, 40.7003],
        [-74.0155, 40.7020],
        [-74.0130, 40.7060],
        [-74.0110, 40.7100],
        [-74.0100, 40.7150],
        [-74.0060, 40.7210],
        [-74.0030, 40.7270],
        [-74.0010, 40.7310],
        [-73.9990, 40.7360],
        [-73.9975, 40.7410],
        [-73.9940, 40.7470],
        [-73.9900, 40.7520],
        [-73.9870, 40.7570],
        [-73.9860, 40.7620],
        [-73.9840, 40.7680],
        [-73.9820, 40.7730],
        [-73.9810, 40.7790],
        [-73.9800, 40.7840],
        [-73.9790, 40.7900],
        [-73.9780, 40.7960],
        [-73.9770, 40.8020],
        [-73.9760, 40.8080],
        [-73.9740, 40.8140],
        [-73.9720, 40.8200],
        [-73.9700, 40.8260],
        [-73.9670, 40.8320],
        [-73.9620, 40.8380],
        [-73.9570, 40.8430],
        [-73.9520, 40.8470],
        [-73.9460, 40.8510],
        [-73.9400, 40.8550],
        [-73.9340, 40.8580],
        [-73.9280, 40.8610],
        [-73.9220, 40.8640],
        [-73.9170, 40.8680],
        [-73.9120, 40.8710],
        [-73.9070, 40.8740],
        [-73.9020, 40.8770],
        [-73.8990, 40.8790],
        [-73.9080, 40.8760], // Inwood tip (~Dyckman St area)
        [-73.9100, 40.8680],
        [-73.9120, 40.8620],
        [-73.9180, 40.8550],
        [-73.9250, 40.8480],
        [-73.9320, 40.8420],
        [-73.9380, 40.8360],
        [-73.9420, 40.8290],
        [-73.9450, 40.8220],
        [-73.9460, 40.8150],
        [-73.9470, 40.8080],
        [-73.9480, 40.8010],
        [-73.9490, 40.7940],
        [-73.9500, 40.7870],
        [-73.9510, 40.7800],
        [-73.9520, 40.7720],
        [-73.9530, 40.7650],
        [-73.9540, 40.7580],
        [-73.9570, 40.7510],
        [-73.9610, 40.7440],
        [-73.9650, 40.7380],
        [-73.9700, 40.7320],
        [-73.9740, 40.7260],
        [-73.9770, 40.7200],
        [-73.9800, 40.7140],
        [-73.9830, 40.7080],
        [-73.9880, 40.7030],
        [-73.9940, 40.6990],
        [-74.0000, 40.6970],
        [-74.0060, 40.6960],
        [-74.0120, 40.6968],
        [-74.0175, 40.6980],
        [-74.0199, 40.6998], // close
      ]],
    },
  },

  // Brooklyn — approximate outer boundary
  {
    type: 'Feature',
    properties: { name: 'Brooklyn, NY' },
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [-74.0431, 40.5891], // Southwest tip (Sea Gate / Coney Island area)
        [-74.0160, 40.5760],
        [-73.9930, 40.5720],
        [-73.9740, 40.5760],
        [-73.9530, 40.5810],
        [-73.9290, 40.5870],
        [-73.9100, 40.5940],
        [-73.8870, 40.6060],
        [-73.8730, 40.6150],
        [-73.8620, 40.6250],
        [-73.8550, 40.6350],
        [-73.8550, 40.6450],
        [-73.8600, 40.6540],
        [-73.8680, 40.6620],
        [-73.8780, 40.6700],
        [-73.8900, 40.6770],
        [-73.9020, 40.6820],
        [-73.9160, 40.6870],
        [-73.9280, 40.6920],
        [-73.9380, 40.6970],
        [-73.9450, 40.7030],
        [-73.9490, 40.7100],
        [-73.9510, 40.7170],
        [-73.9520, 40.7220],
        [-73.9800, 40.7230], // Williamsburg Bridge area
        [-73.9900, 40.7070],
        [-73.9940, 40.6990],
        [-74.0000, 40.6920],
        [-74.0080, 40.6840],
        [-74.0160, 40.6760],
        [-74.0230, 40.6680],
        [-74.0280, 40.6590],
        [-74.0310, 40.6490],
        [-74.0330, 40.6380],
        [-74.0340, 40.6260],
        [-74.0360, 40.6150],
        [-74.0400, 40.6050],
        [-74.0431, 40.5891], // close
      ]],
    },
  },

  // Jersey City, NJ — rough outline
  {
    type: 'Feature',
    properties: { name: 'Jersey City, NJ' },
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [-74.0640, 40.6820], // SW corner
        [-74.0820, 40.6900],
        [-74.0950, 40.6980],
        [-74.1030, 40.7060],
        [-74.1070, 40.7150],
        [-74.1050, 40.7240],
        [-74.0990, 40.7320],
        [-74.0900, 40.7380],
        [-74.0790, 40.7420],
        [-74.0680, 40.7430],
        [-74.0600, 40.7400],
        [-74.0530, 40.7350],
        [-74.0480, 40.7280],
        [-74.0450, 40.7200],
        [-74.0440, 40.7110],
        [-74.0450, 40.7020],
        [-74.0490, 40.6940],
        [-74.0560, 40.6870],
        [-74.0640, 40.6820], // close
      ]],
    },
  },

  // Hoboken, NJ — small rectangle-ish city on Hudson waterfront
  {
    type: 'Feature',
    properties: { name: 'Hoboken, NJ' },
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [-74.0340, 40.7340], // SE waterfront
        [-74.0280, 40.7360],
        [-74.0250, 40.7390],
        [-74.0230, 40.7440],
        [-74.0240, 40.7500],
        [-74.0260, 40.7550],
        [-74.0300, 40.7590],
        [-74.0360, 40.7610],
        [-74.0430, 40.7620],
        [-74.0490, 40.7600],
        [-74.0540, 40.7560],
        [-74.0560, 40.7510],
        [-74.0550, 40.7450],
        [-74.0520, 40.7400],
        [-74.0470, 40.7360],
        [-74.0410, 40.7340],
        [-74.0340, 40.7340], // close
      ]],
    },
  },

  // Weehawken, NJ — narrow strip above Hoboken along Hudson
  {
    type: 'Feature',
    properties: { name: 'Weehawken, NJ' },
    geometry: {
      type: 'Polygon',
      coordinates: [[
        [-74.0200, 40.7620], // SE waterfront corner
        [-74.0160, 40.7660],
        [-74.0150, 40.7710],
        [-74.0170, 40.7770],
        [-74.0210, 40.7820],
        [-74.0270, 40.7850],
        [-74.0360, 40.7860],
        [-74.0450, 40.7850],
        [-74.0530, 40.7820],
        [-74.0590, 40.7770],
        [-74.0620, 40.7710],
        [-74.0610, 40.7650],
        [-74.0570, 40.7620],
        [-74.0510, 40.7610],
        [-74.0440, 40.7615],
        [-74.0370, 40.7618],
        [-74.0300, 40.7618],
        [-74.0240, 40.7616],
        [-74.0200, 40.7620], // close
      ]],
    },
  },
];

// ---------------------------------------------------------------------------
// Colour constants
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export default function ServiceAreasMap() {
  const mapRef = useRef<LeafletMap | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Guard: already initialised
    if (mapRef.current) return;
    if (!containerRef.current) return;

    // Leaflet must be loaded in the browser only
    import('leaflet').then((L) => {
      // Fix the default marker icon paths broken by webpack
      // (we don't use markers here but it avoids console warnings)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
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

      // CartoDB Positron — clean light tiles, no API key needed
      L.tileLayer(
        'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
          subdomains: 'abcd',
          maxZoom: 19,
        }
      ).addTo(map);

      // Collect layer bounds for fit
      const boundsCollection: L.LatLngBounds[] = [];

      SERVICE_AREA_FEATURES.forEach((feature) => {
        const layer = L.geoJSON(feature as GeoJSON.GeoJsonObject, {
          style: () => ({ ...defaultStyle }),
          onEachFeature(feat, lyr) {
            const name = feat.properties?.name as string;

            // Tooltip
            lyr.bindTooltip(name, {
              permanent: false,
              sticky: true,
              className: 'leaflet-area-tooltip',
              direction: 'top',
              offset: [0, -4],
            });

            // Hover
            lyr.on('mouseover', () => {
              (lyr as LeafletGeoJSON).setStyle(hoverStyle);
              (lyr as Layer & { bringToFront?: () => void }).bringToFront?.();
            });
            lyr.on('mouseout', () => {
              (lyr as LeafletGeoJSON).setStyle(defaultStyle);
            });
          },
        }).addTo(map);

        boundsCollection.push(layer.getBounds());
      });

      // Fit map to all areas with padding
      if (boundsCollection.length > 0) {
        const combined = boundsCollection.reduce((acc, b) => acc.extend(b));
        map.fitBounds(combined, { padding: [28, 28] });
      }
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
