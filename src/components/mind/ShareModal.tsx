'use client';

import React, { useState } from 'react';
import {
  X,
  Share2,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageCircle,
  Globe,
  Sparkles,
  Shield,
  Layers,
  Smartphone,
} from 'lucide-react';
import { MindTopicDetail, MindSharePlatform, MindLanguageCode } from '../../core/mind/types';
import {
  generateDirectTopicUrl,
  generateShareText,
  executeShare,
} from '../../core/mind/mindEngagementEngine';
import { ShareableInsightCard } from './ShareableInsightCard';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  topic: MindTopicDetail;
  languageCode?: MindLanguageCode;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  topic,
  languageCode = 'en',
}) => {
  const [copiedLink, setCopiedLink] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'link' | 'insight'>('link');

  if (!isOpen) return null;

  const directUrl = generateDirectTopicUrl(topic.slug, languageCode);
  const naturalShareText = generateShareText(topic.title);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(directUrl);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2200);
      executeShare({ topic, platform: 'clipboard', lang: languageCode });
    } catch {
      // Fallback
    }
  };

  const handlePlatformShare = (platform: MindSharePlatform) => {
    executeShare({ topic, platform, lang: languageCode });
  };

  const hasNativeShare = typeof navigator !== 'undefined' && Boolean(navigator.share);

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl p-6 sm:p-7 space-y-5 text-slate-200">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-violet-950 text-violet-400 border border-violet-800/50">
              <Share2 className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg font-black text-white tracking-tight">
                Share Psychology Concept
              </h3>
              <p className="text-xs text-slate-400">
                Direct educational link with zero tracking or promotional noise
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Toggle: Topic Link vs Shareable Educational Insight */}
        <div className="flex p-1 rounded-2xl bg-slate-900 border border-slate-800 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('link')}
            className={`flex-1 py-2 rounded-xl font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'link'
                ? 'bg-violet-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Direct Topic Link</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('insight')}
            className={`flex-1 py-2 rounded-xl font-bold transition-all flex items-center justify-center gap-1.5 ${
              activeTab === 'insight'
                ? 'bg-violet-600 text-white shadow'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Shareable Insight</span>
          </button>
        </div>

        {/* ================================================================= */}
        {/* TAB 1: DIRECT TOPIC LINK & SOCIAL TARGETS */}
        {/* ================================================================= */}
        {activeTab === 'link' && (
          <div className="space-y-5 animate-in fade-in">
            {/* Natural Share Text Preview */}
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-1.5">
              <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block tracking-wider">
                Preview Share Text
              </span>
              <p className="text-xs sm:text-sm text-slate-200 italic font-medium">
                &ldquo;{naturalShareText}&rdquo;
              </p>
            </div>

            {/* Direct URL Box with Copy Button */}
            <div className="space-y-1.5">
              <label className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-bold">
                Direct Topic URL (Lands directly on {topic.title})
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={directUrl}
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 select-all focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleCopy}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 shrink-0 transition-all ${
                    copiedLink
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                      : 'bg-violet-600 hover:bg-violet-500 text-white shadow-md shadow-violet-600/20'
                  }`}
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Share Target Buttons */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-bold">
                Share Directly via:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {/* Native Mobile Share if supported */}
                {hasNativeShare && (
                  <button
                    type="button"
                    onClick={() => handlePlatformShare('native_share')}
                    className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <Smartphone className="w-4 h-4 text-violet-400" />
                    <span>Mobile Share</span>
                  </button>
                )}

                {/* WhatsApp */}
                <button
                  type="button"
                  onClick={() => handlePlatformShare('whatsapp')}
                  className="p-3 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 text-emerald-200 border border-emerald-700/50 text-xs font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </button>

                {/* Telegram */}
                <button
                  type="button"
                  onClick={() => handlePlatformShare('telegram')}
                  className="p-3 rounded-xl bg-sky-950/40 hover:bg-sky-900/50 text-sky-200 border border-sky-700/50 text-xs font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-4 h-4 text-sky-400" />
                  <span>Telegram</span>
                </button>

                {/* X (Twitter) */}
                <button
                  type="button"
                  onClick={() => handlePlatformShare('twitter')}
                  className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-medium flex items-center justify-center gap-2 transition-colors font-mono"
                >
                  <span className="font-bold text-sm">𝕏</span>
                  <span>Share on X</span>
                </button>

                {/* Facebook */}
                <button
                  type="button"
                  onClick={() => handlePlatformShare('facebook')}
                  className="p-3 rounded-xl bg-blue-950/40 hover:bg-blue-900/50 text-blue-200 border border-blue-700/50 text-xs font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <span className="font-bold text-sm text-blue-400">f</span>
                  <span>Facebook</span>
                </button>

                {/* Clipboard */}
                <button
                  type="button"
                  onClick={handleCopy}
                  className="p-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 text-xs font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy Link</span>
                </button>
              </div>
            </div>

            {/* Privacy Safeguard Callout */}
            <div className="p-3 rounded-2xl bg-indigo-950/20 border border-indigo-500/20 text-indigo-300 text-[11px] flex items-center gap-2">
              <Shield className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
              <span>
                Shared links never include personal identifiers, user scores, or private session cookies.
              </span>
            </div>
          </div>
        )}

        {/* ================================================================= */}
        {/* TAB 2: SHAREABLE EDUCATIONAL INSIGHT CARD */}
        {/* ================================================================= */}
        {activeTab === 'insight' && (
          <div className="space-y-4 animate-in fade-in">
            <p className="text-xs text-slate-400">
              Share this key psychological insight with your colleagues, friends, or social audience:
            </p>
            <ShareableInsightCard topic={topic} onShared={onClose} />
          </div>
        )}

        {/* Close Button */}
        <div className="pt-2 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
