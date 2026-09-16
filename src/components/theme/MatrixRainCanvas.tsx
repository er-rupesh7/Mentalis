'use client';

import React, { useEffect, useRef } from 'react';
import { useQuizStore } from '../../core/store/useQuizStore';

const MATH_GLYPHS = [
  '0', '1', '+', '×', '÷', '−', '=', '≠', '√', '∛', '²', '³',
  'π', '∞', '∑', 'θ', 'λ', '∆', '%', '∫', '≈', '≤', '≥', '9', '8', '7'
];

export const MatrixRainCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { themeConfig, reducedMotion } = useQuizStore();
  // Default to enabled if themeConfig is undefined
  const enabled = (themeConfig?.matrixRainEnabled ?? true) && !reducedMotion;

  useEffect(() => {
    if (!enabled) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let surgeMultiplier = 1.0;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const handleSurge = () => {
      surgeMultiplier = 2.8;
    };
    window.addEventListener('mentalis_matrix_surge', handleSurge);

    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const rows = Math.floor(height / fontSize);
    
    // Distribute drops across the entire screen from frame 0 with random speeds
    const drops: number[] = new Array(columns).fill(0).map(() => Math.floor(Math.random() * rows));
    const speeds: number[] = new Array(columns).fill(1).map(() => 0.65 + Math.random() * 0.7);

    // Accent color theme resolution
    const accent = themeConfig?.accentColor || 'violet';
    const headColor = '#ffffff';
    let baseRgb = '168, 85, 247'; // violet
    let glowColor = '#a855f7';

    if (accent === 'emerald') {
      baseRgb = '16, 185, 129';
      glowColor = '#10b981';
    } else if (accent === 'cyan') {
      baseRgb = '6, 182, 212';
      glowColor = '#06b6d4';
    } else if (accent === 'amber') {
      baseRgb = '245, 158, 11';
      glowColor = '#f59e0b';
    } else if (accent === 'rose') {
      baseRgb = '244, 63, 94';
      glowColor = '#f43f5e';
    }

    let lastFrame = 0;
    const fpsInterval = 1000 / 30; // 30 FPS for buttery performance

    const render = (currentTime: number) => {
      animId = requestAnimationFrame(render);

      const elapsed = currentTime - lastFrame;
      if (elapsed < fpsInterval) return;
      lastFrame = currentTime - (elapsed % fpsInterval);

      // Smooth decay of surge
      if (surgeMultiplier > 1.0) {
        surgeMultiplier = Math.max(1.0, surgeMultiplier - 0.08);
      }

      // Atmospheric fade clear for persistent smooth trails
      ctx.fillStyle = 'rgba(2, 6, 23, 0.09)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `bold ${fontSize}px "Space Mono", "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = MATH_GLYPHS[Math.floor(Math.random() * MATH_GLYPHS.length)];
        const x = i * fontSize;
        const currentY = drops[i] * fontSize;

        // 1. Bright energetic leading glyph with neon radial glow
        ctx.fillStyle = headColor;
        ctx.shadowBlur = surgeMultiplier > 1.2 ? 16 : 10;
        ctx.shadowColor = glowColor;
        ctx.fillText(char, x, currentY);

        // 2. Cascading glowing trail with diminishing alpha
        ctx.shadowBlur = surgeMultiplier > 1.2 ? 8 : 4;
        ctx.fillStyle = `rgba(${baseRgb}, 0.90)`;
        ctx.fillText(char, x, currentY - fontSize);

        ctx.shadowBlur = 0;
        ctx.fillStyle = `rgba(${baseRgb}, 0.65)`;
        ctx.fillText(MATH_GLYPHS[(i + 3) % MATH_GLYPHS.length], x, currentY - fontSize * 2);

        ctx.fillStyle = `rgba(${baseRgb}, 0.40)`;
        ctx.fillText(MATH_GLYPHS[(i + 7) % MATH_GLYPHS.length], x, currentY - fontSize * 3);

        ctx.fillStyle = `rgba(${baseRgb}, 0.20)`;
        ctx.fillText(MATH_GLYPHS[(i + 11) % MATH_GLYPHS.length], x, currentY - fontSize * 4);

        // Reset drop smoothly when off screen
        if (currentY > height + 80 && Math.random() > 0.82) {
          drops[i] = 0;
          speeds[i] = 0.65 + Math.random() * 0.7;
        }

        drops[i] += speeds[i] * (surgeMultiplier > 1.5 ? 2.2 : 1.0);
      }
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mentalis_matrix_surge', handleSurge);
      cancelAnimationFrame(animId);
    };
  }, [enabled, themeConfig?.accentColor, reducedMotion]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 opacity-80 sm:opacity-90 transition-opacity duration-700"
    />
  );
};
