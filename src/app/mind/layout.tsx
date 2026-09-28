import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import { MindNavHeader } from '../../components/mind/MindNavHeader';
import { MindNavigationProgressBar } from '../../components/mind/MindNavigationProgressBar';
import { MentalabLoader } from '../../components/mind/MentalabLoader';

export const metadata: Metadata = {
  metadataBase: new URL('https://mentalab.in'),
  title: {
    template: '%s',
    default: 'Mentalab Mind: Cognitive Psychology, Biases & Mental Models',
  },
  description:
    'Rigorous cognitive psychology, mental models, cognitive biases, persuasion mechanics, and manipulation defenses grounded in scientific evidence.',
  openGraph: {
    siteName: 'Mentalab Mind',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function MindLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 flex flex-col min-h-screen bg-slate-950 text-slate-100 antialiased">
      <Suspense fallback={null}>
        <MindNavigationProgressBar />
      </Suspense>
      <MindNavHeader />
      <div className="flex-1 flex flex-col">
        <Suspense fallback={<MentalabLoader fullScreen={false} />}>
          {children}
        </Suspense>
      </div>
    </div>
  );
}
