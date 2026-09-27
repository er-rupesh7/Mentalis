'use client';

import React, { useState, useEffect } from 'react';
import {
  Bookmark,
  BookOpen,
  Trash2,
  Share2,
  ArrowRight,
  Brain,
  Search,
  Sparkles,
  Layers,
  CheckCircle,
  ExternalLink,
  X,
  Compass,
} from 'lucide-react';
import { MindBookmarkItem, MindDifficulty } from '../../core/mind/types';
import { fetchUserBookmarks, toggleTopicBookmark } from '../../core/mind/mindEngagementEngine';
import { FALLBACK_TOPIC_CONFIRMATION_BIAS_EN } from '../../core/mind/mindDbEngine';

interface SavedTopicsViewProps {
  userId?: string;
  onSelectTopic: (topicId: string) => void;
  onClose?: () => void;
  onOpenShareModal?: (topicSlug: string, topicTitle: string) => void;
}

export const SavedTopicsView: React.FC<SavedTopicsViewProps> = ({
  userId,
  onSelectTopic,
  onClose,
  onOpenShareModal,
}) => {
  const [savedItems, setSavedItems] = useState<MindBookmarkItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterDifficulty, setFilterDifficulty] = useState<MindDifficulty | 'all'>('all');
  const [removedNotification, setRemovedNotification] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    async function loadBookmarks() {
      setIsLoading(true);
      const items = await fetchUserBookmarks(userId);
      if (mounted) {
        setSavedItems(items);
        setIsLoading(false);
      }
    }
    loadBookmarks();
    return () => {
      mounted = false;
    };
  }, [userId]);

  const handleRemoveBookmark = async (item: MindBookmarkItem, e: React.MouseEvent) => {
    e.stopPropagation();
    // Create minimal topic object for removal
    const mockTopic = {
      ...FALLBACK_TOPIC_CONFIRMATION_BIAS_EN,
      id: item.topicId,
      slug: item.topicSlug,
      title: item.title,
    };
    await toggleTopicBookmark(userId, mockTopic);
    setSavedItems((prev) => prev.filter((b) => b.topicId !== item.topicId));
    setRemovedNotification(`Removed "${item.title}" from saved topics`);
    setTimeout(() => {
      setRemovedNotification(null);
    }, 2800);
  };

  const filteredItems = savedItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.oneLineExplanation && item.oneLineExplanation.toLowerCase().includes(searchQuery.toLowerCase())) ||
      item.categoryTitle.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty =
      filterDifficulty === 'all' || item.difficulty === filterDifficulty;
    return matchesSearch && matchesDifficulty;
  });

  const getDifficultyBadge = (difficulty: MindDifficulty) => {
    switch (difficulty) {
      case 'beginner':
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
            Beginner
          </span>
        );
      case 'intermediate':
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-violet-500/10 text-violet-300 border border-violet-500/20">
            Intermediate
          </span>
        );
      case 'advanced':
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/20">
            Advanced
          </span>
        );
    }
  };

  return (
    <div className="w-full space-y-6 animate-in fade-in duration-200">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-950/30 to-slate-900 border border-slate-800 shadow-xl">
        <div className="space-y-1.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono font-medium">
            <Bookmark className="w-3.5 h-3.5 text-amber-400" />
            <span>SAVED KNOWLEDGE LIBRARY</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight flex items-center gap-3">
            <span>Saved Mind Topics</span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono font-normal">
              {savedItems.length} {savedItems.length === 1 ? 'topic' : 'topics'}
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Mental models, cognitive biases, and psychological heuristics you have earmarked for review, reflection, and practice.
          </p>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="self-start sm:self-center px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-all"
          >
            <X className="w-3.5 h-3.5" />
            <span>Return to Tracks</span>
          </button>
        )}
      </div>

      {/* Toast Notification */}
      {removedNotification && (
        <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-amber-300 flex items-center justify-between animate-in fade-in slide-in-from-top-2 duration-150">
          <span>{removedNotification}</span>
          <button
            onClick={() => setRemovedNotification(null)}
            className="text-slate-400 hover:text-white ml-2"
          >
            ✕
          </button>
        </div>
      )}

      {/* Filter and Search Bar */}
      {savedItems.length > 0 && (
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-900/60 p-3 rounded-2xl border border-slate-800">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter your saved mental models..."
              className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider hidden sm:inline mr-1">
              Tier:
            </span>
            {(['all', 'beginner', 'intermediate', 'advanced'] as const).map((tier) => (
              <button
                key={tier}
                onClick={() => setFilterDifficulty(tier)}
                className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all whitespace-nowrap ${
                  filterDifficulty === tier
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                    : 'bg-slate-950/60 text-slate-400 hover:text-white border border-slate-800/80'
                }`}
              >
                {tier}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Bookmarks Grid / Empty State */}
      {isLoading ? (
        <div className="p-12 text-center text-slate-400 text-xs font-mono">
          Loading your saved library...
        </div>
      ) : savedItems.length === 0 ? (
        <div className="p-12 rounded-3xl bg-slate-900/40 border border-dashed border-slate-800 text-center space-y-4 max-w-lg mx-auto">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
            <Bookmark className="w-7 h-7" />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-base font-bold text-white">No saved topics yet</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              When you encounter a concept or decision tool that you want to revisit later, click the <strong className="text-slate-200">Bookmark</strong> button on any topic to save it here.
            </p>
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold shadow-lg shadow-violet-600/20 transition-all"
            >
              Explore Psychology Topics
            </button>
          )}
        </div>
      ) : filteredItems.length === 0 ? (
        <div className="p-8 text-center text-slate-400 text-xs">
          No saved topics match your filter query.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectTopic(item.topicId)}
              className="group relative p-5 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-violet-500/40 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-violet-400 font-medium">
                      {item.categoryTitle}
                    </span>
                    {getDifficultyBadge(item.difficulty)}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">
                    {new Date(item.savedAt).toLocaleDateString(undefined, {
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-violet-300 transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {item.oneLineExplanation || item.shortDescription}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={(e) => handleRemoveBookmark(item, e)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-400 hover:bg-red-500/10 transition-colors text-[11px] flex items-center gap-1"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Remove</span>
                  </button>

                  {onOpenShareModal && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenShareModal(item.topicSlug, item.title);
                      }}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-violet-300 hover:bg-violet-500/10 transition-colors text-[11px] flex items-center gap-1"
                      title="Share topic"
                    >
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Share</span>
                    </button>
                  )}
                </div>

                <div className="flex items-center gap-1 text-xs font-semibold text-violet-400 group-hover:translate-x-0.5 transition-transform">
                  <span>Open Topic</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
