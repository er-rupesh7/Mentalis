'use client';

import React from 'react';
import { Brain, Sparkles } from 'lucide-react';

export interface MentalabSpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  label?: string;
  sublabel?: string;
  className?: string;
  inline?: boolean;
}

export const MentalabSpinner: React.FC<MentalabSpinnerProps> = ({
  size = 'md',
  label,
  sublabel,
  className = '',
  inline = false,
}) => {
  const sizeConfig = {
    xs: {
      container: 'w-5 h-5',
      ring: 'border-[2px]',
      brain: 'w-2.5 h-2.5',
      ping: 'w-6 h-6',
      iconBox: 'w-5 h-5 rounded-md',
      labelSize: 'text-xs',
      sublabelSize: 'text-[10px]',
    },
    sm: {
      container: 'w-8 h-8',
      ring: 'border-[2px]',
      brain: 'w-4 h-4',
      ping: 'w-9 h-9',
      iconBox: 'w-8 h-8 rounded-lg',
      labelSize: 'text-xs',
      sublabelSize: 'text-[10px]',
    },
    md: {
      container: 'w-12 h-12',
      ring: 'border-[2.5px]',
      brain: 'w-6 h-6',
      ping: 'w-14 h-14',
      iconBox: 'w-12 h-12 rounded-xl',
      labelSize: 'text-sm',
      sublabelSize: 'text-xs',
    },
    lg: {
      container: 'w-16 h-16',
      ring: 'border-[3px]',
      brain: 'w-8 h-8',
      ping: 'w-20 h-20',
      iconBox: 'w-16 h-16 rounded-2xl',
      labelSize: 'text-base',
      sublabelSize: 'text-xs',
    },
    xl: {
      container: 'w-24 h-24',
      ring: 'border-[3.5px]',
      brain: 'w-12 h-12',
      ping: 'w-28 h-28',
      iconBox: 'w-24 h-24 rounded-3xl',
      labelSize: 'text-lg',
      sublabelSize: 'text-sm',
    },
  }[size];

  const content = (
    <div className={`relative flex items-center justify-center shrink-0 ${sizeConfig.container}`}>
      {/* Outer pulsating energy wave (for md, lg, xl) */}
      {(size === 'md' || size === 'lg' || size === 'xl') && (
        <div
          className={`absolute rounded-full bg-violet-600/15 animate-ping pointer-events-none ${sizeConfig.ping}`}
        />
      )}

      {/* Rotating Conic Gradient Spinner Ring */}
      <div
        className={`absolute inset-0 rounded-full border-t-violet-400 border-r-indigo-400 border-b-fuchsia-500/25 border-l-transparent animate-spin ${sizeConfig.ring}`}
        style={{ animationDuration: '0.85s' }}
      />

      {/* Central Neuro Core Box */}
      <div
        className={`relative z-10 flex items-center justify-center bg-gradient-to-br from-slate-900 to-indigo-950 border border-violet-500/30 shadow-md shadow-violet-950/40 ${sizeConfig.iconBox}`}
      >
        <Brain className={`text-violet-300 animate-pulse ${sizeConfig.brain}`} />
        {(size === 'lg' || size === 'xl') && (
          <div className="absolute -top-1 -right-1">
            <Sparkles className="w-3.5 h-3.5 text-indigo-300 animate-bounce" />
          </div>
        )}
      </div>
    </div>
  );

  if (inline) {
    return (
      <div className={`inline-flex items-center gap-2 text-slate-300 ${className}`}>
        {content}
        {label && (
          <span className={`font-medium ${sizeConfig.labelSize} tracking-tight`}>
            {label}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center gap-3 text-center ${className}`}>
      {content}
      {(label || sublabel) && (
        <div className="space-y-1">
          {label && (
            <div className={`font-medium text-slate-200 tracking-tight flex items-center justify-center gap-2 ${sizeConfig.labelSize}`}>
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-ping inline-block" />
              <span>{label}</span>
            </div>
          )}
          {sublabel && (
            <p className={`text-slate-400 font-mono ${sizeConfig.sublabelSize}`}>
              {sublabel}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export interface MentalabLoaderProps {
  title?: string;
  subtitle?: string;
  fullScreen?: boolean;
  className?: string;
}

export const MentalabLoader: React.FC<MentalabLoaderProps> = ({
  title = 'Mentalab Mind',
  subtitle = 'Synthesizing Cognitive Architecture...',
  fullScreen = true,
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center ${
        fullScreen ? 'min-h-[70vh] w-full px-4' : 'py-12 w-full px-4'
      } bg-transparent text-slate-100 select-none animate-in fade-in duration-300 ${className}`}
    >
      <MentalabSpinner size={fullScreen ? 'lg' : 'md'} />

      {/* Typography & Status Indicator */}
      <div className="mt-5 text-center space-y-1.5 max-w-sm">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/50 border border-violet-800/40 text-xs font-mono text-violet-300 font-semibold tracking-wide shadow-sm shadow-violet-950/40">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-ping" />
          <span>{title}</span>
        </div>
        <p className="text-sm font-medium text-slate-400 tracking-tight">
          {subtitle}
        </p>
      </div>

      {/* Micro Progress Scanline */}
      <div className="w-48 h-1 bg-slate-900/80 rounded-full overflow-hidden mt-4 border border-slate-800/60 shadow-inner">
        <div className="h-full bg-gradient-to-r from-violet-500 via-indigo-400 to-violet-500 rounded-full w-2/3 animate-[pulse_1.5s_ease-in-out_infinite]" />
      </div>
    </div>
  );
};

export default MentalabLoader;
