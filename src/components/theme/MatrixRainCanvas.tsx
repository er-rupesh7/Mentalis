'use client';

import React, { useEffect, useRef } from 'react';
import { useQuizStore } from '../../core/store/useQuizStore';

const MATH_GLYPHS = [
  '0', '1', '+', '×', '÷', '−', '=', '≠', '√', '∛', '²', '³',
  'π', '∞', '∑', 'θ', 'λ', '∆', '%', '∫', '≈', '≤', '≥'
];

export const MatrixRainCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { themeConfig, reducedMotion } = useQuizStore();
  const enabled = themeConfig?.matrixRainEnabled && !reducedMotion;

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const drops: number[] = new Array(columns).fill(1).map(() => Math.floor(Math.random() * -50));

    // Accent color theme resolution
    const accent = themeConfig?.accentColor || 'emerald';
    const headColor = '#ffffff';
    let trailColor = 'rgba(16, 185, 129, 0.85)'; // emerald
    let glowColor = '#10b981';

    if (accent === 'violet') {
      trailColor = 'rgba(168, 85, 247, 0.85)';
      glowColor = '#a855f7';
    } else if (accent === 'cyan') {
      trailColor = 'rgba(6, 182, 212, 0.85)';
      glowColor = '#06b6d4';
    } else if (accent === 'amber') {
      trailColor = 'rgba(245, 158, 11, 0.85)';
      glowColor = '#f59e0b';
    } else if (accent === 'rose') {
      trailColor = 'rgba(244, 63, 94, 0.85)';
      glowColor = '#f43f5e';
    }

    let lastFrame = 0;
    const fpsInterval = 1000 / 30; // 30 FPS for optimal battery and smooth flow

    const render = (currentTime: number) => {
      animId = requestAnimationFrame(render);

      const elapsed = currentTime - lastFrame;
      if (elapsed < fpsInterval) return;
      lastFrame = currentTime - (elapsed % fpsInterval);

      // Translucent slate fade for trail effect
      ctx.fillStyle = 'rgba(2, 6, 23, 0.12)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = MATH_GLYPHS[Math.floor(Math.random() * MATH_GLYPHS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Draw bright head glyph
        ctx.fillStyle = headColor;
        ctx.shadowBlur = 8;
        ctx.shadowColor = glowColor;
        ctx.fillText(char, x, y);

        // Draw glow trail glyph
        ctx.fillStyle = trailColor;
        ctx.shadowBlur = 4;
        ctx.fillText(char, x, y - fontSize);
        ctx.shadowBlur = 0;

        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, [enabled, themeConfig?.accentColor, reducedMotion]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-25 transition-opacity duration-1000"
    />
  );
};
