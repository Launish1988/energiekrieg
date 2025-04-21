// lib/manaTimer.ts

export class ManaTimer {
  private duration: number;
  private onExpire: () => void;
  private timerId: NodeJS.Timeout | null = null;
  private remainingTime: number;
  private startTimestamp: number | null = null;

  constructor(durationSeconds: number, onExpire: () => void) {
    this.duration = durationSeconds * 1000;
    this.remainingTime = this.duration;
    this.onExpire = onExpire;
  }

  start() {
    this.startTimestamp = Date.now();
    this.timerId = setTimeout(() => {
      this.onExpire();
      this.stop();
    }, this.remainingTime);
  }

  pause() {
    if (this.timerId && this.startTimestamp !== null) {
      clearTimeout(this.timerId);
      this.remainingTime -= Date.now() - this.startTimestamp;
      this.timerId = null;
      this.startTimestamp = null;
    }
  }

  resume() {
    if (!this.timerId && this.remainingTime > 0) {
      this.start();
    }
  }

  stop() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    this.remainingTime = this.duration;
    this.startTimestamp = null;
  }

  getRemainingTime() {
    if (this.startTimestamp) {
      return this.remainingTime - (Date.now() - this.startTimestamp);
    }
    return this.remainingTime;
  }
}
