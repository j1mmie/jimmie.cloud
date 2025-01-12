export class IntervalManager {
  private _timerId:number | undefined = undefined

  constructor(
    protected interval:number
  ) {

  }

  public stop() {
    if (this._timerId === undefined) return

    window.clearInterval(this._timerId)
    this._timerId = undefined
  }

  public start(callback:TimerHandler) {
    if (this._timerId !== undefined) {
      this.stop()
    }

    this._timerId = setInterval(callback, this.interval)
  }
}
