import { IAttemptable } from './IAttemptable'
import { GenericAction } from './shared/GenericAction'

export class Throttle<TAction extends GenericAction>  implements IAttemptable<TAction> {
  private _timerId:ReturnType<typeof setTimeout> = undefined
  private _pendingCallArgs:Parameters<TAction> = undefined
  private _pendingCall = false

  public get isLocked() { return this._timerId !== undefined }

  constructor(
    public readonly action:TAction,
    public readonly maxTimeBetweenExecutionsMs:number
  ) {

  }

  private _executeAndScheduleUnlock(...args:Parameters<TAction>):void {
    this.action.apply(null, args)
    this._timerId = setTimeout(this._unlock.bind(this), this.maxTimeBetweenExecutionsMs)
  }

  private _unlock():void {
    clearTimeout(this._timerId)
    this._timerId = undefined

    if (!this._pendingCall) return

    this._pendingCall = false
    this._executeAndScheduleUnlock(...this._pendingCallArgs)
  }

  public attempt(...args:Parameters<TAction>):void {
    if (this.isLocked) {
      this._pendingCall = true
      this._pendingCallArgs = args
    } else {
      this._executeAndScheduleUnlock(...args)
    }
  }
}
