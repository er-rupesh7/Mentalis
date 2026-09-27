import { MetadataRoute } from 'next';
import { DEFAULT_BASE_URL } from '../core/mind/mindSeo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/mind', '/mind/'],
        disallow: [
          '/api/',
          '/admin',
          '/*?*draft*',
          '/*?*token*',
          '/*?*session*',
          '/*?tab=mind*',
          '/*?view=mind*',
        ],
      },
    ],
    sitemap: `${DEFAULT_BASE_URL}/sitemap.xml`,
  };
}
