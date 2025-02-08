import { IAttemptable } from './IAttemptable'
import { GenericAction } from './shared/GenericAction'

export class Debounce<TAction extends GenericAction> implements IAttemptable<TAction> {
  private _timerId:ReturnType<typeof setTimeout> | null = null

  constructor(
    public readonly action:TAction,
    public readonly delayMs:number
  ) {

  }

  public attempt(...args:Parameters<TAction>):void {
    if (this._timerId) {
      clearTimeout(this._timerId)
    }

    this._timerId = setTimeout(() => {
      this.action.apply(null, args)
    }, this.delayMs)
  }
}