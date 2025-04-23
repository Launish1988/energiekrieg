/**
 * Präziser, pausierbarer Countdown-Timer.
 */
export class ManaTimer {
  private durationMs: number;
  private readonly onExpire: () => void;
  private readonly onTick?: (ms: number) => void;
  private readonly tickInterval: number;

  private timerId: ReturnType<typeof setTimeout> | null = null;
  private tickId: ReturnType<typeof setInterval> | null = null;
  private remainingMs: number;
  private startTs: number | null = null;

  constructor(
    seconds: number,
    onExpire: () => void,
    opts: { onTick?: (ms: number) => void; tickEveryMs?: number } = {},
  ) {
    this.durationMs   = seconds * 1_000;
    this.remainingMs  = this.durationMs;
    this.onExpire     = onExpire;
    this.onTick       = opts.onTick;
    this.tickInterval = opts.tickEveryMs ?? 500;
  }

  /* ------- Steuerung ------- */
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

  /** Reset auf neue oder ursprüngliche Dauer. */
  reset(seconds?: number) {
    this.stop();
    if (seconds) {
      this.durationMs  = seconds * 1_000;   // ← EINZEL-Zuweisungen
      this.remainingMs = this.durationMs;
    }
  }

  /* ------- Abfragen ------- */
  getRemainingMs(): number {
    return this.startTs
      ? Math.max(0, this.remainingMs - (Date.now() - this.startTs))
      : this.remainingMs;
  }

  getRemainingSeconds(): number {
    return Math.floor(this.getRemainingMs() / 1_000);
  }

  /* ------- intern ------- */
  private handleExpire() {
    this.stop();
    this.onExpire();
  }
}
