import type { MetadataRoute } from 'next';

const BASE_URL = 'https://handlyr.org';

// AI / answer-engine crawlers we explicitly welcome so Handlyr can be cited
// in ChatGPT, Claude, Perplexity, Google AI Overviews / Gemini, etc.
const AI_BOTS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: '/api/' },
      ...AI_BOTS.map((userAgent) => ({ userAgent, allow: '/', disallow: '/api/' })),
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
