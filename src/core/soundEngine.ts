/**
 * Web Audio API Procedural Sound Synthesizer
 * Zero external audio files required. Generates pleasant, low-latency procedural sound cues.
 * Can be swapped with React Native Sound / Flutter audio adapter via identical method signatures.
 */

class SoundEngine {
  private ctx: AudioContext | null = null;
  private enabled: boolean = true;

  constructor() {
    // AudioContext will be initialized on first user interaction to satisfy browser policies
  }

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        this.ctx = new AudioCtxClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public setEnabled(enabled: boolean) {
    this.enabled = enabled;
  }

  public isEnabled(): boolean {
    return this.enabled;
  }

  /**
   * Subtle harmonious success chime (C5 + E5 dyad with gentle decay)
   */
  public playSuccess() {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const freqs = [523.25, 659.25]; // C5, E5

    freqs.forEach((freq, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + index * 0.04);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.12, now + index * 0.04 + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.04 + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + index * 0.04);
      osc.stop(now + index * 0.04 + 0.36);
    });
  }

  /**
   * Higher-order pentatonic celebration for streak milestones
   */
  public playStreak(streak: number) {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    // Pentatonic ascending run: C5, D5, E5, G5, A5, C6
    const notes = [523.25, 587.33, 659.25, 783.99, 880.0, 1046.5];
    const count = Math.min(notes.length, 3 + Math.floor(streak / 5));

    for (let i = 0; i < count; i++) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(notes[i], now + i * 0.06);

      gain.gain.setValueAtTime(0, now + i * 0.06);
      gain.gain.linearRampToValueAtTime(0.14, now + i * 0.06 + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.3);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + i * 0.06);
      osc.stop(now + i * 0.06 + 0.31);
    }
  }

  /**
   * Gentle, non-punitive low thud for incorrect answers
   */
  public playError() {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.exponentialRampToValueAtTime(90, now + 0.22);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.23);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.24);
  }

  /**
   * Crisp rhythmic wooden click for Anzan flash cadence
   */
  public playTick() {
    if (!this.enabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(400, now + 0.025);

    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.035);
  }

  /**
   * Subtle neutral tap/click for UI actions and non-punitive skips
   */
  public playClick() {
    this.playTick();
  }
}

export const soundEngine = new SoundEngine();
