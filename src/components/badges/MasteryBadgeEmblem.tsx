'use client';

import React from 'react';
import {
  Zap,
  Flame,
  Target,
  Sparkles,
  Award,
  Trophy,
  Shield,
  Crown,
} from 'lucide-react';
import { getMasteryBadgeById, MasteryBadge } from '../../core/badges/masteryBadges';

interface MasteryBadgeEmblemProps {
  badgeId: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showTitle?: boolean;
  className?: string;
}

const SIZE_MAP = {
  xs: { box: 'w-6 h-6', icon: 'w-3 h-3', text: 'text-[9px]' },
  sm: { box: 'w-8 h-8', icon: 'w-4 h-4', text: 'text-[10px]' },
  md: { box: 'w-10 h-10', icon: 'w-5 h-5', text: 'text-xs' },
  lg: { box: 'w-16 h-16', icon: 'w-8 h-8', text: 'text-sm' },
  xl: { box: 'w-24 h-24', icon: 'w-12 h-12', text: 'text-base' },
};

export const MasteryBadgeEmblem: React.FC<MasteryBadgeEmblemProps> = ({
  badgeId,
  size = 'md',
  showTitle = false,
  className = '',
}) => {
  const badge = getMasteryBadgeById(badgeId);
  const sizeConfig = SIZE_MAP[size];

  if (!badge) {
    return (
      <div
        className={`${sizeConfig.box} rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center ${className}`}
      >
        <Award className={`${sizeConfig.icon} text-slate-500`} />
      </div>
    );
  }

  const renderIcon = () => {
    const props = { className: `${sizeConfig.icon} text-white drop-shadow-md` };
    switch (badge.iconName) {
      case 'flame':
        return <Flame {...props} />;
      case 'zap':
        return <Zap {...props} />;
      case 'target':
        return <Target {...props} />;
      case 'sparkles':
        return <Sparkles {...props} />;
      case 'award':
        return <Award {...props} />;
      case 'trophy':
        return <Trophy {...props} />;
      case 'crown':
        return <Crown {...props} />;
      case 'shield':
      default:
        return <Shield {...props} />;
    }
  };

  return (
    <div className={`inline-flex flex-col items-center justify-center gap-1 ${className}`}>
      <div
        className={`${sizeConfig.box} relative rounded-2xl p-[1.5px] shadow-lg flex items-center justify-center transition-transform group-hover:scale-105`}
        style={{
          background: `linear-gradient(135deg, ${badge.primaryColor}, ${badge.secondaryColor})`,
          boxShadow: `0 0 14px ${badge.glowColor}`,
        }}
      >
        <div
          className="w-full h-full rounded-[14px] flex items-center justify-center"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${badge.primaryColor}33, #070a14 85%)`,
          }}
        >
          {renderIcon()}
        </div>
      </div>

      {showTitle && (
        <span
          className={`font-bold font-mono text-center truncate max-w-[120px] ${sizeConfig.text}`}
          style={{ color: badge.primaryColor }}
        >
          {badge.title}
        </span>
      )}
    </div>
  );
};
