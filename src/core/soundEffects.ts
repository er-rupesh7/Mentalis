/**
 * Zero-Latency Procedural Audio Synthesizer for Mentalis
 * Uses native Web Audio API with zero external audio files.
 * Provides hyper-satisfying mechanical tactile feedback, ascending combo chimes,
 * and celebratory level-up fanfares.
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioCtxClass) {
      audioCtx = new AudioCtxClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume().catch(() => {});
  }
  return audioCtx;
}

/**
 * Mechanical tactile numpad / button click (15ms crisp pop)
 */
export function playClickSound(): void {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, ctx.currentTime + 0.025);

    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.025);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.025);
  } catch {}
}

/**
 * Ascending harmonic chime on correct answer.
 * Shifts upward in pitch and resonance as the user builds their combo streak!
 */
export function playCorrectSound(streakCount: number = 1): void {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    // Semitone shift based on streak: +0, +2, +4, +5, +7, +9, +12 semitones
    const semitones = Math.min(16, Math.floor(streakCount / 2) * 2);
    const multiplier = Math.pow(2, semitones / 12);

    const baseFreqs = [523.25, 659.25, 783.99]; // C5, E5, G5 triad
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.18, now);
    masterGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    masterGain.connect(ctx.destination);

    baseFreqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const noteGain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq * multiplier, now + idx * 0.04);

      noteGain.gain.setValueAtTime(0.15, now + idx * 0.04);
      noteGain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);

      osc.connect(noteGain);
      noteGain.connect(masterGain);

      osc.start(now + idx * 0.04);
      osc.stop(now + 0.35);
    });
  } catch {}
}

/**
 * Triumphant fanfare when reaching 5x, 10x, or 20x combo streaks!
 */
export function playComboFanfare(multiplier: number = 3): void {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const freqs = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
    const stepDuration = 0.06;

    freqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq * (multiplier >= 5 ? 1.25 : 1.0), now + idx * stepDuration);

      gain.gain.setValueAtTime(0.2, now + idx * stepDuration);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * stepDuration + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * stepDuration);
      osc.stop(now + idx * stepDuration + 0.25);
    });
  } catch {}
}

/**
 * Gentle, non-punitive error tone (soft low-frequency warm thud)
 */
export function playErrorSound(): void {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(220, now);
    osc.frequency.exponentialRampToValueAtTime(110, now + 0.12);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.14);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(now + 0.14);
  } catch {}
}

/**
 * Glorious Level Up celebratory fanfare!
 */
export function playLevelUpFanfare(): void {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const arpeggio = [523.25, 659.25, 783.99, 1046.5, 1318.51, 1567.98]; // C5 - E5 - G5 - C6 - E6 - G6
    const step = 0.07;

    arpeggio.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * step);

      gain.gain.setValueAtTime(0.22, now + idx * step);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * step + 0.4);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + idx * step);
      osc.stop(now + idx * step + 0.4);
    });
  } catch {}
}
