/**
 * Präziser, pausierbarer Countdown‑Timer (Millisekunden‑genau).
 *
 *  ✔ On‑Expire‑Callback
 *  ✔ Tick‑Callback (Standard = 500 ms) für UI‑Updates
 *  ✔ start / pause / resume / stop / reset
 */
export class ManaTimer {
  private readonly durationMs: number;
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
    this.durationMs = durationSeconds * 1_000;
    this.remainingMs = this.durationMs;
    this.onExpire = onExpire;
    this.onTick = opts.onTick;
    this.tickInterval = opts.tickEveryMs ?? 500;
  }

  /* --------------- public API --------------- */
  start() {
    if (this.timerId) return; // bereits laufend
    this.startTs = Date.now();
    this.timerId = setTimeout(() => this.handleExpire(), this.remainingMs);
    if (this.onTick) {
      this.tickId = setInterval(() => this.onTick!(this.getRemainingMs()), this.tickInterval);
    }
  }

  pause() {
    if (!this.timerId || this.startTs === null) return;
    clearTimeout(this.timerId);
    if (this.tickId) clearInterval(this.tickId);
    this.timerId = null;
    this.tickId = null;
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
    this.timerId = null;
    this.tickId = null;
    this.remainingMs = this.durationMs;
    this.startTs = null;
  }

  reset(durationSeconds?: number) {
    this.stop();
    if (durationSeconds) this.remainingMs = this.durationMs = durationSeconds * 1_000;
  }

  /** Millisekunden verbleibend (float). */
  getRemainingMs(): number {
    if (this.startTs) {
      return Math.max(0, this.remainingMs - (Date.now() - this.startTs));
    }
    return this.remainingMs;
  }

  /** Ganze Sekunden (abgerundet) verbleibend. */
  getRemainingSeconds(): number {
    return Math.floor(this.getRemainingMs() / 1_000);
  }

  /* --------------- internal --------------- */
  private handleExpire() {
    this.stop();
    this.onExpire();
  }
}
