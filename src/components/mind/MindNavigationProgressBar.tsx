'use client';

import React, { useEffect, useState, useTransition } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { MentalabSpinner } from './MentalabLoader';

export const MindNavigationProgressBar: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);

  // Complete navigation when route changes
  useEffect(() => {
    if (isNavigating) {
      setProgress(100);
      const timer = setTimeout(() => {
        setIsNavigating(false);
        setProgress(0);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [pathname, searchParams]);

  // Intercept click on any internal /mind links
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;

      const href = target.getAttribute('href');
      if (
        href &&
        href.startsWith('/mind') &&
        !href.startsWith('#') &&
        !target.hasAttribute('download') &&
        target.getAttribute('target') !== '_blank'
      ) {
        // Only trigger if navigating to a different URL
        const currentUrl = window.location.pathname + window.location.search;
        if (href !== currentUrl) {
          setIsNavigating(true);
          setProgress(35);
          // Increment progress slightly while waiting
          const t1 = setTimeout(() => setProgress((p) => Math.max(p, 65)), 150);
          const t2 = setTimeout(() => setProgress((p) => Math.max(p, 85)), 400);
          return () => {
            clearTimeout(t1);
            clearTimeout(t2);
          };
        }
      }
    };

    document.addEventListener('click', handleDocumentClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleDocumentClick, { capture: true });
    };
  }, []);

  if (!isNavigating) return null;

  return (
    <div
      role="progressbar"
      aria-label="Loading Mind Page"
      aria-valuenow={progress}
      className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none transition-opacity duration-300"
    >
      {/* Top glowing progress line */}
      <div className="h-[2.5px] w-full bg-slate-900/60 backdrop-blur-sm overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-violet-500 via-indigo-400 to-fuchsia-400 transition-all duration-300 ease-out shadow-lg shadow-violet-500/50"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Floating mentalab spinner badge */}
      <div className="absolute top-3 right-4 sm:right-6 pointer-events-auto animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-violet-500/40 shadow-xl shadow-slate-950/80 backdrop-blur-md">
          <MentalabSpinner size="xs" />
          <span className="text-xs font-mono font-medium text-violet-200 tracking-tight">
            Loading Mind...
          </span>
        </div>
      </div>
    </div>
  );
};

export default MindNavigationProgressBar;
