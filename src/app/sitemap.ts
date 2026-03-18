import type { MetadataRoute } from 'next';

const BASE_URL = 'https://handlyr.org';

const SERVICE_SLUGS = [
  'furniture-assembly',
  'tv-mounting',
  'shelf-installation',
  'blinds-installation',
  'cabinet-installation',
  'drywall-repair',
  'general-repairs',
];

const AREA_SLUGS = [
  'brooklyn',
  'manhattan',
  'jersey-city',
  'hoboken',
  'weehawken',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`,              lastModified, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/services`,      lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/service-areas`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/about`,         lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/projects`,      lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/contact`,       lastModified, changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${BASE_URL}/privacy`,       lastModified, changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE_URL}/terms`,         lastModified, changeFrequency: 'yearly',  priority: 0.3 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICE_SLUGS.map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const areaPages: MetadataRoute.Sitemap = AREA_SLUGS.map((slug) => ({
    url: `${BASE_URL}/service-areas/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  return [...staticPages, ...servicePages, ...areaPages];
}
