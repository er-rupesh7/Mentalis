'use client';

import React, { useState } from 'react';
import {
  X,
  Cloud,
  Smartphone,
  Trophy,
  ShieldCheck,
  AlertCircle,
  Loader2,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { useQuizStore } from '../../core/store/useQuizStore';
import { signInWithGoogle, isSupabaseConfigured } from '../../lib/supabase/client';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, setAuthModalOpen } = useQuizStore();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isAuthModalOpen) return null;

  const isConfigured = isSupabaseConfigured();

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const { error } = await signInWithGoogle();
      if (error) {
        setErrorMessage(error.message);
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'An unexpected error occurred during Google sign in.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
      onClick={() => setAuthModalOpen(false)}
    >
      <div
        className="relative w-full h-[100dvh] sm:h-auto sm:max-h-[90vh] sm:max-w-md rounded-none sm:rounded-2xl bg-slate-900/95 border-0 sm:border sm:border-slate-700/80 p-5 sm:p-6 pb-20 sm:pb-6 shadow-2xl shadow-violet-950/30 overflow-y-auto flex flex-col text-slate-100 custom-scrollbar"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow accent */}
        <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-violet-600/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-36 h-36 rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={() => setAuthModalOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors z-10"
          title="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-5 shrink-0">
          <div className="p-3 rounded-2xl bg-gradient-to-tr from-violet-600 to-indigo-500 text-white shadow-lg shadow-violet-600/30 mb-3">
            <Cloud className="w-7 h-7" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-1.5">
            Log In with Google Account
            <Sparkles className="w-4 h-4 text-amber-400" />
          </h2>
          <p className="text-xs text-slate-400 mt-1 max-w-xs">
            Use your Google account to log in, save calculations to the cloud, and sync your profile DP across devices.
          </p>
        </div>

        {/* Zero-Spam & Trust Notice Box */}
        <div className="mb-4 p-3.5 rounded-2xl bg-violet-950/30 border border-violet-500/30 text-xs text-slate-200 shrink-0">
          <div className="flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-bold text-white text-[11px] uppercase tracking-wider text-emerald-300">
                Zero Spam & Privacy Guarantee
              </p>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                We shall <strong>never send notifications or promotional emails</strong> to your mail — don’t worry! Google login is used <strong>solely for authentication and saving your data</strong> to the database. You can permanently <strong>delete your account whenever you want</strong> in Settings.
              </p>
            </div>
          </div>
        </div>

        {/* Error Notification */}
        {errorMessage && (
          <div className="mb-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Supabase Not Configured Warning */}
        {!isConfigured && (
          <div className="mb-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold">Supabase Credentials Needed</p>
              <p className="text-[11px] text-amber-200/80 leading-relaxed">
                Add <code className="bg-amber-950/60 px-1 py-0.5 rounded text-amber-100">NEXT_PUBLIC_SUPABASE_URL</code> and{' '}
                <code className="bg-amber-950/60 px-1 py-0.5 rounded text-amber-100">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> to your environment variables to activate live cloud sync.
              </p>
            </div>
          </div>
        )}

        {/* Google Sign In Button */}
        <button
          onClick={handleGoogleSignIn}
          disabled={isLoading || !isConfigured}
          className={`w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl font-bold text-sm transition-all shadow-md shrink-0 ${
            isConfigured
              ? 'bg-white hover:bg-slate-100 active:scale-[0.99] text-slate-900 shadow-white/10 hover:shadow-lg'
              : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
          }`}
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin text-violet-600" />
              <span>Connecting to Google...</span>
            </>
          ) : (
            <>
              {/* Google G SVG */}
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.02h3.87c2.26-2.09 3.67-5.17 3.67-9.12z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.87-3.02c-1.08.72-2.45 1.16-4.06 1.16-3.13 0-5.78-2.11-6.73-4.96H1.28v3.12C3.25 21.36 7.34 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.27 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.61H1.28C.46 8.23 0 10.06 0 12s.46 3.77 1.28 5.39l3.99-3.12z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.77c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.25 2.64 1.28 6.61l3.99 3.12c.95-2.85 3.6-4.96 6.73-4.96z"
                />
              </svg>
              <span>Continue with Google Account</span>
            </>
          )}
        </button>

        {/* Continue as Guest option */}
        <div className="mt-3 text-center shrink-0">
          <button
            type="button"
            onClick={() => setAuthModalOpen(false)}
            className="text-xs text-slate-400 hover:text-slate-200 transition-colors py-1.5 px-3 rounded-lg hover:bg-slate-800/60"
          >
            Continue as Guest for now
          </button>
        </div>

        {/* Benefits List */}
        <div className="mt-4 space-y-2 border-t border-slate-800/80 pt-3 text-xs text-slate-300 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-1 rounded-md bg-violet-900/40 text-violet-400">
              <Cloud className="w-3.5 h-3.5" />
            </div>
            <span>Automatic cloud backup for your brain matrix & stats</span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-1 rounded-md bg-indigo-900/40 text-indigo-400">
              <Smartphone className="w-3.5 h-3.5" />
            </div>
            <span>Switch effortlessly between mobile and desktop</span>
          </div>

          <div className="flex items-center gap-2.5">
            <div className="p-1 rounded-md bg-amber-900/40 text-amber-400">
              <Trophy className="w-3.5 h-3.5" />
            </div>
            <span>Multiplayer 1v1 Duels, Social Chat & Global Rankings</span>
          </div>
        </div>

        {/* Offline Guarantee */}
        <div className="mt-3 p-2.5 rounded-xl bg-slate-800/50 border border-slate-700/40 flex items-start gap-2.5 shrink-0">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
          <p className="text-[10px] text-slate-400 leading-snug">
            <strong className="text-slate-300">100% Offline Promise:</strong> You can practice completely offline without an account.
          </p>
        </div>
      </div>
    </div>
  );
};
