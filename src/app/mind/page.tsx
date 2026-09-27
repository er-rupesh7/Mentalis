import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Brain,
  Shield,
  Eye,
  Scale,
  Sparkles,
  Users,
  Radio,
  ArrowRight,
  Bookmark,
  Layers,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import { getCurriculumCategories, CURRICULUM_CATALOG } from '../../core/mind/mindCurriculum';
import { MentalabMindView } from '../../components/mind/MentalabMindView';
import { generateCanonicalUrl, generateBreadcrumbSchema } from '../../core/mind/mindSeo';

export const metadata: Metadata = {
  title: 'Mentalab Mind: Cognitive Psychology, Biases & Mental Models',
  description:
    'Master mental models, cognitive biases, persuasion mechanics, and psychological defenses through structured, peer-reviewed educational layers and real-world scenarios.',
  alternates: {
    canonical: 'https://mentalab.in/mind',
  },
  openGraph: {
    title: 'Mentalab Mind: Cognitive Psychology, Biases & Mental Models',
    description:
      'Understand how your brain works, recognize subtle influence, and think independently with empirical cognitive science.',
    url: 'https://mentalab.in/mind',
    type: 'website',
  },
};

export default function MindLandingPage() {
  const categories = getCurriculumCategories('en');

  // Featured flagship topics for search crawler discovery & fast indexing
  const featuredTopics = [
    {
      title: 'Confirmation Bias',
      slug: 'confirmation-bias',
      categorySlug: 'cognitive-biases',
      categoryTitle: 'Cognitive Biases',
      summary: 'Why our brains seek facts that confirm existing beliefs while dismissing counter-evidence.',
      difficulty: 'Beginner',
      readTime: '4 min',
    },
    {
      title: 'Social Proof & The Bandwagon Effect',
      slug: 'social-proof-and-bandwagon',
      categorySlug: 'social-psychology',
      categoryTitle: 'Social Psychology',
      summary: 'Why we look to the crowd to decide what is correct under uncertainty.',
      difficulty: 'Beginner',
      readTime: '4 min',
    },
    {
      title: 'Anchoring Effect',
      slug: 'anchoring-effect',
      categorySlug: 'cognitive-biases',
      categoryTitle: 'Cognitive Biases',
      summary: 'How the first piece of information disproportionately warps all subsequent numerical estimations.',
      difficulty: 'Intermediate',
      readTime: '5 min',
    },
    {
      title: 'Healthy Boundaries',
      slug: 'healthy-boundaries',
      categorySlug: 'relationships-communication',
      categoryTitle: 'Relationships & Communication',
      summary: 'How to communicate clear personal boundaries without passive aggression or defensive hostility.',
      difficulty: 'Beginner',
      readTime: '6 min',
    },
    {
      title: 'Algorithmic Reinforcement & Outrage Traps',
      slug: 'algorithmic-reinforcement',
      categorySlug: 'digital-psychology',
      categoryTitle: 'Digital Psychology',
      summary: 'How engagement algorithms trap attention by amplifying moral outrage and confirmation loops.',
      difficulty: 'Intermediate',
      readTime: '5 min',
    },
    {
      title: 'First Principles Thinking',
      slug: 'first-principles-thinking',
      categorySlug: 'critical-thinking',
      categoryTitle: 'Critical Thinking',
      summary: 'Breaking complex problems down to fundamental truths to reason up independently from facts.',
      difficulty: 'Advanced',
      readTime: '5 min',
    },
  ];

  const breadcrumbs = [
    { name: 'Home', url: 'https://mentalab.in' },
    { name: 'Mentalab Mind', url: 'https://mentalab.in/mind' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      generateBreadcrumbSchema(breadcrumbs),
      {
        '@type': 'WebSite',
        name: 'Mentalab Mind',
        url: 'https://mentalab.in/mind',
        description:
          'Peer-reviewed cognitive psychology curriculum, mental models, and persuasion defense mechanics.',
        publisher: {
          '@type': 'Organization',
          name: 'Mentalab',
          url: 'https://mentalab.in',
        },
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

      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-10">
        {/* SEO Header & Semantic Track Discovery */}
        <section aria-label="Mentalab Mind Overview" className="space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-violet-400">
            <Brain className="w-4 h-4" />
            <span>EMPIRICAL COGNITIVE PSYCHOLOGY & MENTAL MODELS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Understand your mind.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400">
              Recognize influence.
            </span>{' '}
            Think independently.
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Welcome to Mentalab Mind. We translate academic cognitive psychology and decision science into four structured layers: 30-second conceptual clarity, empirical mechanisms, real-life Indian scenarios, and interactive decision practice.
          </p>
        </section>

        {/* 10 Primary Content Areas (Crawled by Googlebot) */}
        <section aria-label="Curriculum Tracks" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-violet-400" />
              <span>Systematic Tracks & Content Areas</span>
            </h2>
            <span className="text-xs font-mono text-slate-400">{categories.length} Primary Domains</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/mind/${cat.slug}`}
                className="group p-4 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-violet-500/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-violet-400">
                      Track {cat.displayOrder}
                    </span>
                    <span className="text-[11px] font-mono text-slate-500">
                      {cat.topicCount} {cat.topicCount === 1 ? 'Topic' : 'Topics'}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {cat.subtitle || cat.description}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-800/70 flex items-center justify-between text-xs text-slate-400 group-hover:text-violet-300 transition-colors">
                  <span>Explore Track</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Concepts Section for Fast Indexing */}
        <section aria-label="Featured Psychology Topics" className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-cyan-400" />
              <span>Featured Mental Models & Cognitive Biases</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredTopics.map((topic) => (
              <Link
                key={topic.slug}
                href={`/mind/${topic.categorySlug}/${topic.slug}`}
                className="group p-5 rounded-2xl bg-slate-900/50 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-cyan-400">
                      {topic.categoryTitle}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {topic.difficulty}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                    {topic.summary}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-semibold text-cyan-400">
                  <span>Read 4-Layer Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Interactive App Experience */}
        <section aria-label="Interactive Learning Workspace" className="pt-6 border-t border-slate-800">
          <div className="mb-4">
            <h2 className="text-lg font-bold text-white">Interactive Learning Experience</h2>
            <p className="text-xs text-slate-400">Explore interactive scenarios, practice questions, and progressive reading layers below.</p>
          </div>
          <MentalabMindView />
        </section>
      </div>
    </>
  );
}
