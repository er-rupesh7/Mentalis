'use client';

import React from 'react';
import { getBadgeForLevel, BadgeInfo } from '../../core/levelEngine';

interface BadgeEmblemProps {
  level: number;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'hero';
  showLevel?: boolean;
  showStars?: boolean;
  showTitle?: boolean;
  className?: string;
  animateGlow?: boolean;
}

const SIZE_MAP = {
  xs: { box: 28, stroke: 1.5, fontSize: 8, starSize: 4 },
  sm: { box: 36, stroke: 2, fontSize: 10, starSize: 5 },
  md: { box: 48, stroke: 2.5, fontSize: 11, starSize: 6 },
  lg: { box: 72, stroke: 3, fontSize: 13, starSize: 8 },
  xl: { box: 104, stroke: 3.5, fontSize: 16, starSize: 10 },
  hero: { box: 148, stroke: 4, fontSize: 20, starSize: 14 },
};

export const BadgeEmblem: React.FC<BadgeEmblemProps> = ({
  level,
  size = 'md',
  showLevel = true,
  showStars = true,
  showTitle = false,
  className = '',
  animateGlow = false,
}) => {
  const badge: BadgeInfo = getBadgeForLevel(level);
  const { box, stroke, fontSize } = SIZE_MAP[size];
  const { tier, subRank, stars } = badge;

  // Center SVG Insignia based on tier
  const renderCenterInsignia = () => {
    switch (tier.iconName) {
      case 'shield': // Bronze
        return (
          <path
            d="M50 20 L75 32 L75 58 C75 75 50 88 50 88 C50 88 25 75 25 58 L25 32 Z"
            fill="url(#primaryGrad)"
            stroke="#fff"
            strokeWidth="2"
            strokeOpacity="0.4"
          />
        );
      case 'blades': // Silver
        return (
          <g transform="scale(0.85) translate(8, 8)">
            <path d="M30 20 L70 80 M70 20 L30 80" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
            <path d="M50 15 L62 45 L50 78 L38 45 Z" fill="url(#primaryGrad)" stroke="#fff" strokeWidth="2" />
          </g>
        );
      case 'wreath': // Gold
        return (
          <g>
            <circle cx="50" cy="50" r="22" fill="none" stroke="url(#primaryGrad)" strokeWidth="5" strokeDasharray="6 3" />
            <polygon points="50,30 55,42 68,42 58,51 62,64 50,55 38,64 42,51 32,42 45,42" fill="#fff" />
          </g>
        );
      case 'crystal': // Platinum
        return (
          <polygon
            points="50,18 78,36 78,64 50,82 22,64 22,36"
            fill="url(#primaryGrad)"
            stroke="#ffffff"
            strokeWidth="3"
            strokeLinejoin="round"
          />
        );
      case 'diamond': // Diamond
        return (
          <g>
            <polygon points="50,15 82,42 50,85 18,42" fill="url(#primaryGrad)" stroke="#ffffff" strokeWidth="3" />
            <line x1="18" y1="42" x2="82" y2="42" stroke="#fff" strokeWidth="1.5" strokeOpacity="0.7" />
            <line x1="50" y1="15" x2="50" y2="85" stroke="#fff" strokeWidth="1.5" strokeOpacity="0.7" />
          </g>
        );
      case 'crown': // Crown
        return (
          <g transform="translate(0, -2)">
            <path
              d="M24 65 L20 35 L38 48 L50 24 L62 48 L80 35 L76 65 Z"
              fill="url(#primaryGrad)"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            <circle cx="20" cy="33" r="3" fill="#fff" />
            <circle cx="50" cy="22" r="3.5" fill="#ffd700" />
            <circle cx="80" cy="33" r="3" fill="#fff" />
          </g>
        );
      case 'ace': // Ace
        return (
          <g>
            <path
              d="M50 16 C60 30 78 40 78 56 C78 72 64 80 50 80 C36 80 22 72 22 56 C22 40 40 30 50 16 Z"
              fill="url(#primaryGrad)"
              stroke="#ffffff"
              strokeWidth="3"
            />
            <polygon points="50,42 54,52 64,52 56,58 59,68 50,62 41,68 44,58 36,52 46,52" fill="#fff" />
          </g>
        );
      case 'dragon': // Master
        return (
          <g>
            <circle cx="50" cy="50" r="28" fill="none" stroke="url(#primaryGrad)" strokeWidth="4" />
            <path
              d="M32 50 Q50 20 68 50 Q50 80 32 50 Z"
              fill="url(#primaryGrad)"
              stroke="#fff"
              strokeWidth="2"
            />
            <circle cx="50" cy="50" r="8" fill="#fff" />
          </g>
        );
      case 'vortex': // Grandmaster
        return (
          <g>
            <circle cx="50" cy="50" r="30" fill="url(#primaryGrad)" stroke="#fff" strokeWidth="2" strokeDasharray="8 4" />
            <polygon points="50,18 60,38 82,38 64,52 70,74 50,60 30,74 36,52 18,38 40,38" fill="#fff" />
          </g>
        );
      case 'solar': // Conqueror
      default:
        return (
          <g>
            {/* Pulsing solar rays */}
            <g stroke="url(#primaryGrad)" strokeWidth="3" strokeLinecap="round">
              <line x1="50" y1="6" x2="50" y2="18" />
              <line x1="50" y1="82" x2="50" y2="94" />
              <line x1="6" y1="50" x2="18" y2="50" />
              <line x1="82" y1="50" x2="94" y2="50" />
              <line x1="18" y1="18" x2="27" y2="27" />
              <line x1="73" y1="73" x2="82" y2="82" />
              <line x1="82" y1="18" x2="73" y2="27" />
              <line x1="27" y1="73" x2="18" y2="82" />
            </g>
            {/* Golden Core Shield */}
            <circle cx="50" cy="50" r="24" fill="url(#primaryGrad)" stroke="#ffffff" strokeWidth="3" />
            <polygon points="50,30 56,42 70,43 59,53 63,67 50,59 37,67 41,53 30,43 44,42" fill="#fff" />
          </g>
        );
    }
  };

  const isConqueror = tier.id === 'conqueror';

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      <div
        className={`relative flex items-center justify-center rounded-full transition-transform ${
          animateGlow || isConqueror ? 'hover:scale-105' : ''
        }`}
        style={{
          width: box,
          height: box,
          filter: `drop-shadow(0 0 ${size === 'hero' ? '24px' : '10px'} ${tier.glowColor})`,
        }}
        title={`${badge.title} (Level ${level})`}
      >
        <svg
          viewBox="0 0 100 100"
          width={box}
          height={box}
          className="w-full h-full overflow-visible"
        >
          <defs>
            <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={tier.primaryColor} />
              <stop offset="100%" stopColor={tier.secondaryColor} />
            </linearGradient>

            <linearGradient id="crestBorder" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="50%" stopColor={tier.primaryColor} />
              <stop offset="100%" stopColor={tier.secondaryColor} />
            </linearGradient>

            <filter id="badgeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Outer Crest Ring */}
          <polygon
            points="50,3 91,24 91,76 50,97 9,76 9,24"
            fill="#090d16"
            stroke="url(#crestBorder)"
            strokeWidth={stroke}
            strokeLinejoin="round"
          />

          {/* Inner Inset Shading */}
          <polygon
            points="50,8 86,26 86,74 50,92 14,74 14,26"
            fill="#0f172a"
            fillOpacity="0.85"
            stroke={tier.primaryColor}
            strokeWidth="1"
            strokeOpacity="0.4"
          />

          {/* Center Graphic */}
          {renderCenterInsignia()}

          {/* Sub-Rank Ribbon / Roman Numeral at Bottom */}
          {size !== 'xs' && (
            <g transform="translate(0, 7)">
              <rect
                x="32"
                y="74"
                width="36"
                height="14"
                rx="4"
                fill="#090d16"
                stroke={tier.primaryColor}
                strokeWidth="1.5"
              />
              <text
                x="50"
                y="85"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="10"
                fontWeight="900"
                fontFamily="system-ui, sans-serif"
                letterSpacing="1"
              >
                {subRank}
              </text>
            </g>
          )}

          {/* Star Clusters */}
          {showStars && (size === 'lg' || size === 'xl' || size === 'hero') && (
            <g transform="translate(0, -6)">
              {Array.from({ length: stars }).map((_, i) => {
                const total = stars;
                const spread = 12;
                const startX = 50 - ((total - 1) * spread) / 2;
                const cx = startX + i * spread;
                return (
                  <polygon
                    key={i}
                    points={`${cx},11 ${cx + 2.5},16 ${cx + 8},16 ${cx + 3.5},20 ${cx + 5},26 ${cx},22 ${cx - 5},26 ${cx - 3.5},20 ${cx - 8},16 ${cx - 2.5},16`}
                    fill="#ffd700"
                    stroke="#fff"
                    strokeWidth="0.5"
                  />
                );
              })}
            </g>
          )}
        </svg>

        {/* Level Tag Overlay */}
        {showLevel && (
          <div
            className="absolute -bottom-1 px-1.5 py-0.5 rounded-full bg-slate-950/90 border font-mono font-black text-white shadow-md leading-none whitespace-nowrap"
            style={{
              borderColor: tier.primaryColor,
              fontSize: Math.max(8, fontSize - 3),
            }}
          >
            {level === 1000 ? 'MAX' : `${level}`}
          </div>
        )}
      </div>

      {/* Optional Title Label */}
      {showTitle && (
        <div className="mt-2 text-center">
          <p className="text-xs font-bold text-white tracking-wide">{badge.title}</p>
          <p className="text-[10px] text-slate-400 font-mono">
            {tier.name} • Level {level}
          </p>
        </div>
      )}
    </div>
  );
};
