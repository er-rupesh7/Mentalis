'use client';

import React, { useState, useEffect } from 'react';
import { UserX } from 'lucide-react';
import { BadgeEmblem } from '../badges/BadgeEmblem';
import { MasteryBadgeEmblem } from '../badges/MasteryBadgeEmblem';

export interface UserAvatarProps {
  displayName?: string | null;
  avatarUrl?: string | null;
  avatarType?: 'google' | 'badge' | 'mastery' | 'deleted' | null;
  selectedBadgeLevel?: number | null;
  selectedMasteryBadgeId?: string | null;
  level?: number | null;
  email?: string | null;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showOnlineDot?: boolean;
  isOnline?: boolean;
  className?: string;
}

const PIXEL_SIZES = {
  xs: { box: 'w-6 h-6', text: 'text-[10px]', dot: 'w-2 h-2 -bottom-0.5 -right-0.5' },
  sm: { box: 'w-8 h-8', text: 'text-xs', dot: 'w-2.5 h-2.5 -bottom-0.5 -right-0.5' },
  md: { box: 'w-10 h-10', text: 'text-sm', dot: 'w-3 h-3 bottom-0 right-0' },
  lg: { box: 'w-16 h-16', text: 'text-xl', dot: 'w-4 h-4 bottom-0.5 right-0.5' },
  xl: { box: 'w-24 h-24', text: 'text-3xl', dot: 'w-5 h-5 bottom-1 right-1' },
};

export const UserAvatar: React.FC<UserAvatarProps> = ({
  displayName,
  avatarUrl,
  avatarType = 'google',
  selectedBadgeLevel = 1,
  selectedMasteryBadgeId = null,
  level = 1,
  email,
  size = 'md',
  showOnlineDot = false,
  isOnline = false,
  className = '',
}) => {
  const [imageError, setImageError] = useState(false);
  const sizeConfig = PIXEL_SIZES[size];

  useEffect(() => {
    setImageError(false);
  }, [avatarUrl]);

  // 0. Deleted User Mode
  if (avatarType === 'deleted') {
    return (
      <div className={`relative inline-flex shrink-0 items-center justify-center ${className}`}>
        <div className={`${sizeConfig.box} rounded-full bg-slate-800 border border-slate-700/80 flex items-center justify-center text-slate-500`}>
          <UserX className={size === 'xs' ? 'w-3 h-3' : size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
        </div>
      </div>
    );
  }

  const emailPrefix = email?.split('@')[0];
  const isEmailLike = (name?: string | null) =>
    !name ||
    name.toLowerCase() === 'unknown' ||
    name.toLowerCase() === 'learner' ||
    (emailPrefix && name.toLowerCase() === emailPrefix.toLowerCase());

  const cleanName = !isEmailLike(displayName)
    ? displayName!
    : 'Mentalist';
  const initial = cleanName.charAt(0).toUpperCase() || 'M';

  // 1. Mastery Badge Avatar Mode
  if (avatarType === 'mastery' && selectedMasteryBadgeId) {
    return (
      <div className={`relative inline-flex shrink-0 items-center justify-center ${className}`}>
        <MasteryBadgeEmblem badgeId={selectedMasteryBadgeId} size={size} showTitle={false} />
        {showOnlineDot && (
          <span
            className={`absolute ${sizeConfig.dot} rounded-full border-2 border-slate-950 ${
              isOnline ? 'bg-emerald-500 shadow-sm shadow-emerald-500/80 animate-pulse' : 'bg-slate-500'
            }`}
            title={isOnline ? 'Online now' : 'Offline'}
          />
        )}
      </div>
    );
  }

  // 2. 1000-Level Badge Avatar Mode
  if (avatarType === 'badge') {
    const badgeLevel = selectedBadgeLevel || level || 1;
    return (
      <div className={`relative inline-flex shrink-0 items-center justify-center ${className}`}>
        <BadgeEmblem level={badgeLevel} size={size} showLevel={false} showStars={false} />
        {showOnlineDot && (
          <span
            className={`absolute ${sizeConfig.dot} rounded-full border-2 border-slate-950 ${
              isOnline ? 'bg-emerald-500 shadow-sm shadow-emerald-500/80 animate-pulse' : 'bg-slate-500'
            }`}
            title={isOnline ? 'Online now' : 'Offline'}
          />
        )}
      </div>
    );
  }

  // 3. Google / Default Avatar Mode
  // If user has a Google avatar photo, display it; otherwise display their max rank badge emblem
  return (
    <div className={`relative inline-flex shrink-0 items-center justify-center ${className}`}>
      {avatarUrl && !imageError ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={avatarUrl}
          alt={cleanName}
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
          onError={() => setImageError(true)}
          className={`${sizeConfig.box} rounded-full object-cover border border-violet-500/40 shadow-sm`}
        />
      ) : (
        <BadgeEmblem level={level || 1} size={size} showLevel={false} showStars={false} />
      )}

      {showOnlineDot && (
        <span
          className={`absolute ${sizeConfig.dot} rounded-full border-2 border-slate-950 ${
            isOnline ? 'bg-emerald-500 shadow-sm shadow-emerald-500/80 animate-pulse' : 'bg-slate-500'
          }`}
          title={isOnline ? 'Online now' : 'Offline'}
        />
      )}
    </div>
  );
};
