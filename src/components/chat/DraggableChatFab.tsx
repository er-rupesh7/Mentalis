'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { MessageCircle, GripVertical } from 'lucide-react';

interface DraggableChatFabProps {
  onClick: () => void;
  badgeCount?: number;
  hasUnread?: boolean;
}

const STORAGE_KEY = 'mentalis_floating_chat_pos_v2';
const BUTTON_WIDTH = 105;
const BUTTON_HEIGHT = 44;
const PADDING_EDGE = 16;
const TOP_MIN = 72; // Well below top navigation bar
const BOTTOM_PAD_MOBILE = 90; // Above mobile bottom navigation bar
const BOTTOM_PAD_DESKTOP = 32;

export const DraggableChatFab: React.FC<DraggableChatFabProps> = ({
  onClick,
  badgeCount = 0,
  hasUnread = false,
}) => {
  const controls = useAnimation();
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [snappedSide, setSnappedSide] = useState<'left' | 'right'>('right');
  const isDraggingRef = useRef(false);
  const currentPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Calculate safe coordinates based on viewport and target side
  const computeSnappedPosition = useCallback(
    (side: 'left' | 'right', targetY: number) => {
      const windowWidth = typeof window !== 'undefined' ? window.innerWidth : 400;
      const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
      const isMobile = windowWidth < 640;
      const bottomLimit = windowHeight - BUTTON_HEIGHT - (isMobile ? BOTTOM_PAD_MOBILE : BOTTOM_PAD_DESKTOP);

      const clampedY = Math.min(Math.max(targetY, TOP_MIN), Math.max(TOP_MIN, bottomLimit));
      const targetX = side === 'left' ? PADDING_EDGE : Math.max(PADDING_EDGE, windowWidth - BUTTON_WIDTH - PADDING_EDGE);

      return { x: targetX, y: clampedY };
    },
    []
  );

  // Initialize position from localStorage or default to bottom-right
  useEffect(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const isMobile = windowWidth < 640;

    let initialSide: 'left' | 'right' = 'right';
    let initialY = windowHeight - BUTTON_HEIGHT - (isMobile ? BOTTOM_PAD_MOBILE : BOTTOM_PAD_DESKTOP);

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.side === 'left' || parsed.side === 'right') {
          initialSide = parsed.side;
        }
        // Only accept if strictly inside viewport safe zone (>= 0.2 and <= 0.85)
        // This ensures stale top-left coordinates never stick to the top navigation header
        if (typeof parsed.topRatio === 'number' && parsed.topRatio >= 0.2 && parsed.topRatio <= 0.85) {
          initialY = parsed.topRatio * windowHeight;
        }
      }
    } catch {
      // fallback to defaults
    }

    setSnappedSide(initialSide);
    const initialPos = computeSnappedPosition(initialSide, initialY);
    currentPosRef.current = initialPos;
    setPos(initialPos);
  }, [computeSnappedPosition]);

  // Animate into place on mount and keep controls synchronized
  useEffect(() => {
    if (pos) {
      controls.start({
        x: pos.x,
        y: pos.y,
        opacity: 1,
        scale: 1,
        transition: { duration: 0.22, ease: 'easeOut' },
      });
    }
  }, [pos, controls]);

  // Keep clamped on window resize
  useEffect(() => {
    if (!pos) return;

    const handleResize = () => {
      const nextPos = computeSnappedPosition(snappedSide, currentPosRef.current.y);
      currentPosRef.current = nextPos;
      setPos(nextPos);
      controls.start({
        x: nextPos.x,
        y: nextPos.y,
        transition: { type: 'spring', stiffness: 350, damping: 25 },
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [computeSnappedPosition, controls, pos, snappedSide]);

  const handleDragStart = () => {
    isDraggingRef.current = true;
  };

  const handleDragEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: { point: { x: number; y: number }; offset: { x: number; y: number } }
  ) => {
    const dragDistance = Math.hypot(info.offset.x, info.offset.y);

    // If it was a quick tap or negligible movement, consider it a click
    if (dragDistance < 6) {
      isDraggingRef.current = false;
      onClick();
      return;
    }

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Snap to the closest horizontal edge (left or right half)
    const releaseX = info.point.x;
    const releaseY = info.point.y;
    const newSide: 'left' | 'right' = releaseX < windowWidth / 2 ? 'left' : 'right';
    setSnappedSide(newSide);

    const snapped = computeSnappedPosition(newSide, releaseY - BUTTON_HEIGHT / 2);
    currentPosRef.current = snapped;
    setPos(snapped);

    // Save to localStorage for seamless persistence
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          side: newSide,
          topRatio: Math.max(0.2, Math.min(0.85, snapped.y / windowHeight)),
        })
      );
    } catch {
      // Ignore quota errors
    }

    controls.start({
      x: snapped.x,
      y: snapped.y,
      transition: { type: 'spring', stiffness: 400, damping: 28 },
    });

    // Guard against synthetic click event immediately following release
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 120);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isDraggingRef.current) {
      onClick();
    }
  };

  if (!pos) return null;

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.12}
      initial={{ x: pos.x, y: pos.y, opacity: 0, scale: 0.9 }}
      animate={controls}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      whileDrag={{
        scale: 1.08,
        boxShadow: '0 20px 25px -5px rgba(124, 58, 237, 0.5), 0 8px 10px -6px rgba(124, 58, 237, 0.5)',
      }}
      className="fixed top-0 left-0 z-40 touch-none select-none"
      style={{
        width: BUTTON_WIDTH,
        height: BUTTON_HEIGHT,
      }}
    >
      <button
        type="button"
        onClick={handleClick}
        className={`w-full h-full flex items-center justify-between px-3 rounded-full bg-gradient-to-tr from-violet-600 via-indigo-600 to-emerald-600 hover:from-violet-500 hover:to-emerald-500 text-white shadow-xl shadow-violet-600/30 border border-violet-400/40 cursor-grab active:cursor-grabbing transition-shadow active:scale-95 group backdrop-blur-md ${
          snappedSide === 'left' ? 'rounded-l-lg' : 'rounded-r-lg'
        }`}
        title="Drag anywhere to move (snaps to edge) • Tap to open chat"
        aria-label="Friends & 1v1 Math Chat"
      >
        {/* Subtle Grip Handle Indicator */}
        <div className="flex items-center text-white/50 group-hover:text-white/80 transition-colors">
          <GripVertical className="w-3.5 h-3.5 -ml-1" />
        </div>

        {/* Message Icon + Presence Dot */}
        <div className="relative flex items-center justify-center">
          <MessageCircle className="w-4 h-4 text-white group-hover:rotate-6 transition-transform" />
          {(badgeCount > 0 || hasUnread) && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-slate-950 animate-pulse" />
          )}
        </div>

        {/* Chat Text */}
        <span className="text-xs font-bold font-sans tracking-wide pr-1">
          {badgeCount > 0 ? `Chat (${badgeCount})` : 'Chat'}
        </span>
      </button>
    </motion.div>
  );
};
