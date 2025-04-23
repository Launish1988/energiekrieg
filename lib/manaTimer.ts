/**
 * Präziser, pausierbarer Countdown-Timer (Millisekunden-genau).
 */
export class ManaTimer {
  private durationMs: number;
  private readonly onExpire: () => void;
  private readonly onTick?: (msLeft: number) => void;
  private readonly tickInterval: number;

  private timerId: ReturnType<typeof setTimeout> | null = null;
  private tickId: ReturnType<typeof setInterval> | null = null;
  private remainingMs: number;
  private startTs: number | null = null;

  constructor(
    durationSeconds: number,
    onExpire: () => void,
    opts: { onTick?: (msLeft: number) => void; tickEveryMs?: number } = {},
  ) {
    this.durationMs   = durationSeconds * 1_000;
    this.remainingMs  = this.durationMs;
    this.onExpire     = onExpire;
    this.onTick       = opts.onTick;
    this.tickInterval = opts.tickEveryMs ?? 500;
  }

  /* ---------- Steuerung ---------- */
  start() {
    if (this.timerId) return;
    this.startTs = Date.now();
    this.timerId = setTimeout(() => this.handleExpire(), this.remainingMs);
    if (this.onTick) {
      this.tickId = setInterval(
        () => this.onTick!(this.getRemainingMs()),
        this.tickInterval,
      );
    }
  }

  pause() {
    if (!this.timerId || this.startTs === null) return;
    clearTimeout(this.timerId);
    if (this.tickId) clearInterval(this.tickId);
    this.timerId = this.tickId = null;
    this.remainingMs -= Date.now() - this.startTs;
    this.startTs = null;
  }

  resume() {
    if (this.timerId || this.remainingMs <= 0) return;
    this.start();
  }

  stop() {
    if (this.timerId) clearTimeout(this.timerId);
    if (this.tickId) clearInterval(this.tickId);
    this.timerId = this.tickId = null;
    this.remainingMs = this.durationMs;
    this.startTs = null;
  }

  /** Reset auf neue Dauer (oder ursprüngliche). */
  reset(durationSeconds?: number) {
    this.stop();
    if (durationSeconds) {
      this.durationMs  = durationSeconds * 1_000; // ← ZWEI separate Zuweisungen
      this.remainingMs = this.durationMs;
    }
  }

  /* ---------- Abfragen ---------- */
  getRemainingMs(): number {
    return this.startTs
      ? Math.max(0, this.remaining
