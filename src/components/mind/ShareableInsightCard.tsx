'use client';

import React, { useState } from 'react';
import {
  Quote,
  Sparkles,
  Share2,
  Copy,
  Check,
  ExternalLink,
  Brain,
  MessageCircle,
} from 'lucide-react';
import { MindTopicDetail, ShareableInsight } from '../../core/mind/types';
import { getShareableInsight, executeShare } from '../../core/mind/mindEngagementEngine';

interface ShareableInsightCardProps {
  topic: MindTopicDetail;
  className?: string;
  onShared?: () => void;
}

export const ShareableInsightCard: React.FC<ShareableInsightCardProps> = ({
  topic,
  className = '',
  onShared,
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const insight: ShareableInsight = getShareableInsight(topic);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(insight.shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
      if (onShared) onShared();
    } catch {
      // Fallback
    }
  };

  const handleShareToWhatsApp = () => {
    executeShare({
      topic,
      platform: 'whatsapp',
      customText: `"${insight.quote}"\n\n— Read why on Mentalab:`,
    });
    if (onShared) onShared();
  };

  const handleShareToX = () => {
    executeShare({
      topic,
      platform: 'twitter',
      customText: `"${insight.quote}"\n\nLearn more about ${topic.title}:`,
    });
    if (onShared) onShared();
  };

  return (
    <div
      className={`relative rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-violet-950/70 via-slate-950 to-indigo-950/70 border border-violet-500/40 shadow-2xl overflow-hidden ${className}`}
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 right-0 w-44 h-44 bg-violet-600/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16" />
      <div className="absolute bottom-0 left-0 w-44 h-44 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -ml-16 -mb-16" />

      {/* Header Bar: Mentalab Mind Branding & Topic Badge */}
      <div className="flex items-center justify-between gap-3 pb-4 border-b border-violet-500/20 relative z-10">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-xl bg-violet-600/30 border border-violet-500/50 flex items-center justify-center text-violet-300">
            <Brain className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-black tracking-wider uppercase text-white font-mono block leading-none">
              Mentalab Mind
            </span>
            <span className="text-[10px] text-violet-300/80 font-mono">
              Scientific Cognitive Psychology
            </span>
          </div>
        </div>

        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-300 bg-violet-950/80 border border-violet-700/60 px-2.5 py-0.5 rounded-full">
          {topic.title}
        </span>
      </div>

      {/* Quote Body */}
      <div className="py-5 sm:py-6 relative z-10 space-y-3">
        <Quote className="w-8 h-8 text-violet-400/40 rotate-180" />
        <p className="text-base sm:text-xl font-bold text-white leading-relaxed tracking-tight">
          &ldquo;{insight.quote}&rdquo;
        </p>
      </div>

      {/* Footer & Action Bar */}
      <div className="pt-4 border-t border-violet-500/20 flex flex-wrap items-center justify-between gap-3 relative z-10">
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
          <span>mentalab.in</span>
          <span className="text-violet-400">•</span>
          <span className="text-violet-300/90 font-medium">Educational Insight</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className={`px-3 py-1.5 rounded-xl border text-xs font-medium font-mono flex items-center gap-1.5 transition-all ${
              copied
                ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-600/20'
                : 'bg-slate-900/80 hover:bg-slate-800 text-slate-200 border-slate-700'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-white" />
                <span>Copied Quote</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-slate-400" />
                <span>Copy Quote</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleShareToWhatsApp}
            title="Share Quote to WhatsApp"
            className="p-1.5 rounded-xl bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-700/50 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleShareToX}
            title="Share Quote to X"
            className="px-2.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-bold transition-colors font-mono"
          >
            𝕏
          </button>
        </div>
      </div>
    </div>
  );
};
