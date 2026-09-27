import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  Brain,
  ArrowRight,
  BookOpen,
  HelpCircle,
  Layers,
  ArrowLeft,
  Compass,
  Sparkles,
} from 'lucide-react';
import {
  PRIMARY_MIND_CATEGORIES,
  getTopicsByCategory,
  CURRICULUM_CATALOG,
} from '../../../core/mind/mindCurriculum';
import {
  getCategoryKeyFromSlug,
  generateCategoryUrl,
  generateBreadcrumbSchema,
  generateCanonicalUrl,
  DEFAULT_BASE_URL,
} from '../../../core/mind/mindSeo';
import { PrimaryMindCategoryKey, MindTopicDetail } from '../../../core/mind/types';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export function generateStaticParams() {
  return Object.values(PRIMARY_MIND_CATEGORIES).map((cat) => ({
    category: cat.slug,
  }));
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const categoryKey = getCategoryKeyFromSlug(params.category);
  if (!categoryKey || !PRIMARY_MIND_CATEGORIES[categoryKey]) {
    return {
      title: 'Track Not Found | Mentalab Mind',
    };
  }

  const category = PRIMARY_MIND_CATEGORIES[categoryKey];
  const canonicalUrl = generateCategoryUrl(category.slug);

  const title = `Mentalab Mind — ${category.titleEn}: Concepts, Mechanisms & Everyday Examples`;
  const description = `${category.descriptionEn} Learn how ${category.titleEn.toLowerCase()} impact decision making with peer-reviewed psychological research and real-life scenarios.`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function CategoryLandingPage({ params }: CategoryPageProps) {
  const categoryKey = getCategoryKeyFromSlug(params.category);
  if (!categoryKey || !PRIMARY_MIND_CATEGORIES[categoryKey]) {
    notFound();
  }

  const category = PRIMARY_MIND_CATEGORIES[categoryKey];
  const topics = getTopicsByCategory(categoryKey, 'en');
  const canonicalUrl = generateCategoryUrl(category.slug);

  // Category-specific FAQs answering genuine search intent
  const categoryFaqs: Record<
    string,
    Array<{ question: string; answer: string }>
  > = {
    'cognitive-biases': [
      {
        question: 'What is a cognitive bias?',
        answer:
          'A cognitive bias is a systematic error in thinking that occurs when people are processing and interpreting information. These mental shortcuts (heuristics) help the brain make quick decisions but can lead to irrational judgment.',
      },
      {
        question: 'Can cognitive biases be eliminated completely?',
        answer:
          'No, cognitive biases are hardwired into human cognitive architecture. However, through metacognitive awareness, structured decision checklists, and epistemic humility, their harmful impacts can be significantly reduced.',
      },
      {
        question: 'Why did human brains develop cognitive biases?',
        answer:
          'From an evolutionary perspective, prehistoric survival prioritized speed and metabolic economy over scientific precision. Running from an ambiguous sound preserved life; pausing to calculate exact probabilities carried lethal risks.',
      },
    ],
    'social-psychology': [
      {
        question: 'What is the primary focus of social psychology?',
        answer:
          'Social psychology studies how individual thoughts, feelings, and behaviors are influenced by the actual, imagined, or implied presence of other human beings.',
      },
      {
        question: 'Why does social proof have such a strong influence on decisions?',
        answer:
          'Under conditions of uncertainty, humans unconsciously assume that the collective choices of the crowd reflect hidden knowledge or reduced risk, outsourcing independent analysis to the group.',
      },
    ],
    'manipulation-awareness': [
      {
        question: 'How do you distinguish emotional manipulation from honest disagreement?',
        answer:
          'Honest disagreement focuses on verifiable facts, shared goals, and allows for mutual agency. Emotional manipulation relies on manufactured guilt, shifting realities (gaslighting), and covert obligations.',
      },
      {
        question: 'What are effective psychological defenses against manipulation?',
        answer:
          'Core defenses include establishing explicit personal boundaries, recognizing obligation traps early, slowing down before responding to artificial urgency, and anchoring to objective reality.',
      },
    ],
  };

  const currentFaqs = categoryFaqs[category.slug] || [
    {
      question: `Why is studying ${category.titleEn} valuable?`,
      answer: `Understanding ${category.titleEn} gives you agency over your own cognitive processes, helping you make clearer decisions, communicate with less friction, and recognize subtle influence.`,
    },
  ];

  const breadcrumbs = [
    { name: 'Home', url: DEFAULT_BASE_URL },
    { name: 'Mentalab Mind', url: `${DEFAULT_BASE_URL}/mind` },
    { name: category.titleEn, url: canonicalUrl },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      generateBreadcrumbSchema(breadcrumbs),
      {
        '@type': 'CollectionPage',
        name: `Mentalab Mind — ${category.titleEn}`,
        description: category.descriptionEn,
        url: canonicalUrl,
        hasPart: topics.map((t) => ({
          '@type': 'Article',
          name: t.title,
          description: t.shortDescription,
          url: generateCanonicalUrl(t.slug || t.id, DEFAULT_BASE_URL, category.slug),
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: currentFaqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400">
          <Link href="/mind" className="hover:text-white flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Mentalab Mind</span>
          </Link>
          <span>/</span>
          <span className="text-violet-400 font-semibold">{category.titleEn}</span>
        </nav>

        {/* Hero Section */}
        <section aria-label="Category Overview" className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950/30 to-slate-950 border border-slate-800 shadow-xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono font-medium">
            <Layers className="w-3.5 h-3.5 text-violet-400" />
            <span>TRACK {category.displayOrder} • COGNITIVE DOMAIN</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Mentalab Mind — {category.titleEn}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
            {category.descriptionEn} Grounded in meta-analyses, systematic reviews, and real-life everyday scenarios.
          </p>

          <div className="pt-2 flex items-center gap-3 text-xs font-mono text-slate-400">
            <span>{topics.length} Published Concepts</span>
            <span>•</span>
            <span>4-Layer Progressive Clarity</span>
          </div>
        </section>

        {/* Topics List in this Track */}
        <section aria-label="Concepts & Mental Models" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-violet-400" />
              <span>Concepts & Models in this Track</span>
            </h2>
            <span className="text-xs text-slate-400 font-mono">
              {topics.length} {topics.length === 1 ? 'Topic' : 'Topics'}
            </span>
          </div>

          {topics.length === 0 ? (
            <div className="p-10 rounded-2xl bg-slate-900/40 border border-dashed border-slate-800 text-center text-slate-400 text-xs">
              Upcoming topics in this track are currently in peer-review and will be published shortly.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {topics.map((topic) => (
                <Link
                  key={topic.slug || topic.id}
                  href={`/mind/${category.slug}/${topic.slug || topic.id}`}
                  className="group p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-violet-500/40 transition-all flex flex-col justify-between shadow-sm"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                        {topic.difficulty}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500">
                        {topic.estimatedReadingMinutes || 4} min read
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors">
                      {topic.title}
                    </h3>

                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                      {topic.oneLineExplanation || topic.shortDescription}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-violet-400">
                    <span>Read 4-Layer Guide & Practice</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Category FAQs (Genuine Educational Value) */}
        <section aria-label="Frequently Asked Questions" className="space-y-4 pt-6 border-t border-slate-800/80">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-cyan-400" />
            <span>Frequently Asked Questions About {category.titleEn}</span>
          </h2>

          <div className="space-y-3">
            {currentFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1.5"
              >
                <h3 className="text-sm font-semibold text-slate-200">
                  {faq.question}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Explore Other Tracks */}
        <section aria-label="Other Psychology Tracks" className="pt-6 border-t border-slate-800/80">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-bold text-slate-300 uppercase tracking-wider font-mono">
              Explore Related Tracks
            </h2>
            <Link href="/mind" className="text-xs text-violet-400 hover:text-violet-300 font-semibold">
              View All Tracks →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {Object.values(PRIMARY_MIND_CATEGORIES)
              .filter((c) => c.slug !== category.slug)
              .slice(0, 4)
              .map((otherCat) => (
                <Link
                  key={otherCat.slug}
                  href={`/mind/${otherCat.slug}`}
                  className="p-3 rounded-xl bg-slate-900/40 hover:bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                >
                  {otherCat.titleEn}
                </Link>
              ))}
          </div>
        </section>
      </div>
    </>
  );
}
