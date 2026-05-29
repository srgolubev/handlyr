import type { ComponentType } from 'react';
import {
  PackageIcon,
  MonitorIcon,
  LayersIcon,
  BlindsIcon,
  CabinetIcon,
  WrenchIcon,
  SettingsIcon,
} from '@/components/icons';

type IconComponent = ComponentType<{ className?: string }>;

// Single source of truth mapping a service slug to its SVG icon, so the
// homepage, services index, and service/area detail pages all render the same
// crisp icon set (instead of OS-dependent emoji).
export const SERVICE_ICON: Record<string, IconComponent> = {
  'furniture-assembly': PackageIcon,
  'tv-mounting': MonitorIcon,
  'shelf-installation': LayersIcon,
  'blinds-installation': BlindsIcon,
  'cabinet-installation': CabinetIcon,
  'drywall-repair': WrenchIcon,
  'general-repairs': SettingsIcon,
};
