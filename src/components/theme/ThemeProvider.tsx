'use client';

import React, { useEffect } from 'react';
import { useQuizStore } from '../../core/store/useQuizStore';

export interface ThemeColors {
  hex: string;
  rgb: string;
  hover: string;
  glow: string;
  lightBg: string;
  border: string;
}

export const THEME_COLOR_MAP: Record<string, ThemeColors> = {
  violet: {
    hex: '#8b5cf6',
    rgb: '139, 92, 246',
    hover: '#7c3aed',
    glow: 'rgba(139, 92, 246, 0.45)',
    lightBg: 'rgba(139, 92, 246, 0.15)',
    border: 'rgba(139, 92, 246, 0.40)',
  },
  emerald: {
    hex: '#10b981',
    rgb: '16, 185, 129',
    hover: '#059669',
    glow: 'rgba(16, 185, 129, 0.45)',
    lightBg: 'rgba(16, 185, 129, 0.15)',
    border: 'rgba(16, 185, 129, 0.40)',
  },
  cyan: {
    hex: '#06b6d4',
    rgb: '6, 182, 212',
    hover: '#0891b2',
    glow: 'rgba(6, 182, 212, 0.45)',
    lightBg: 'rgba(6, 182, 212, 0.15)',
    border: 'rgba(6, 182, 212, 0.40)',
  },
  amber: {
    hex: '#f59e0b',
    rgb: '245, 158, 11',
    hover: '#d97706',
    glow: 'rgba(245, 158, 11, 0.45)',
    lightBg: 'rgba(245, 158, 11, 0.15)',
    border: 'rgba(245, 158, 11, 0.40)',
  },
  rose: {
    hex: '#f43f5e',
    rgb: '244, 63, 94',
    hover: '#e11d48',
    glow: 'rgba(244, 63, 94, 0.45)',
    lightBg: 'rgba(244, 63, 94, 0.15)',
    border: 'rgba(244, 63, 94, 0.40)',
  },
};

export const FONT_MAP: Record<string, string> = {
  inter: "'Inter', system-ui, -apple-system, sans-serif",
  space_mono: "'Space Mono', monospace",
  outfit: "'Outfit', system-ui, sans-serif",
  roboto: "'Roboto', system-ui, sans-serif",
};

export const ThemeProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const themeConfig = useQuizStore((s) => s.themeConfig);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    const accentKey = themeConfig?.accentColor || 'violet';
    const fontKey = themeConfig?.fontFamily || 'inter';
    const sizeKey = themeConfig?.fontSize || 'standard';
    const matrixEnabled = !!themeConfig?.matrixRainEnabled;

    const colors = THEME_COLOR_MAP[accentKey] || THEME_COLOR_MAP.violet;
    const fontCss = FONT_MAP[fontKey] || FONT_MAP.inter;

    let fontSize = '16px';
    let scale = '1.0';
    if (sizeKey === 'compact') {
      fontSize = '14.5px';
      scale = '0.92';
    } else if (sizeKey === 'large') {
      fontSize = '17.5px';
      scale = '1.10';
    }

    const root = document.documentElement;
    root.style.setProperty('--color-primary', colors.hex);
    root.style.setProperty('--color-primary-rgb', colors.rgb);
    root.style.setProperty('--color-primary-hover', colors.hover);
    root.style.setProperty('--color-primary-glow', colors.glow);
    root.style.setProperty('--color-primary-light-bg', colors.lightBg);
    root.style.setProperty('--color-primary-border', colors.border);
    root.style.setProperty('--font-current', fontCss);
    root.style.setProperty('--app-font-scale', scale);
    root.style.fontSize = fontSize;
    root.style.fontFamily = fontCss;

    root.setAttribute('data-theme', accentKey);
    root.setAttribute('data-font', fontKey);
    root.setAttribute('data-matrix', matrixEnabled ? 'true' : 'false');
    root.setAttribute('data-size', sizeKey);
    root.setAttribute('data-tactile', themeConfig?.tactile3DEnabled !== false ? 'true' : 'false');

    if (document.body) {
      document.body.style.fontFamily = fontCss;
    }
  }, [themeConfig]);

  return <>{children}</>;
};
