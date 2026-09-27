import { MetadataRoute } from 'next';
import { CURRICULUM_CATALOG, PRIMARY_MIND_CATEGORIES } from '../core/mind/mindCurriculum';
import { DEFAULT_BASE_URL } from '../core/mind/mindSeo';
import { getMindSupportedLanguages, MIND_HREFLANG_MAP } from '../core/mind/mindLanguages';
import { PrimaryMindCategoryKey } from '../core/mind/types';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = DEFAULT_BASE_URL;
  const languages = getMindSupportedLanguages();
  const currentDate = new Date();

  const entries: MetadataRoute.Sitemap = [
    // 1. Root Platform
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    // 2. Mentalab Mind Hub
    {
      url: `${baseUrl}/mind`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // 3. Category Landing Pages
  for (const cat of Object.values(PRIMARY_MIND_CATEGORIES)) {
    entries.push({
      url: `${baseUrl}/mind/${cat.slug}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  }

  // 4. Published Topics with Multilingual Alternates
  for (const [topicKey, record] of Object.entries(CURRICULUM_CATALOG)) {
    const topic = record.en || record.hinglish || Object.values(record)[0];
    if (topic && topic.categoryId) {
      const catKey = topic.categoryId as PrimaryMindCategoryKey;
      const categorySlug = PRIMARY_MIND_CATEGORIES[catKey]?.slug || 'cognitive-biases';
      const slug = topic.slug || topic.id || topicKey;
      const topicCanonical = `${baseUrl}/mind/${categorySlug}/${slug}`;

      // Build hreflang alternates dictionary
      const languagesMap: Record<string, string> = {};
      for (const lang of languages) {
        const hreflang = MIND_HREFLANG_MAP[lang.code] || lang.code;
        languagesMap[hreflang] =
          lang.code === 'en' ? topicCanonical : `${topicCanonical}?lang=${lang.code}`;
      }
      languagesMap['x-default'] = topicCanonical;

      entries.push({
        url: topicCanonical,
        lastModified: topic.publishedAt ? new Date(topic.publishedAt) : currentDate,
        changeFrequency: 'weekly',
        priority: 0.9,
        alternates: {
          languages: languagesMap,
        },
      });
    }
  }

  return entries;
}
