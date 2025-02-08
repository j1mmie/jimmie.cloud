import { GenericAction } from './shared/GenericAction'

export interface IGenericAttemptable {
  attempt(...args:unknown[]):unknown
}

export interface IAttemptable<TAction extends GenericAction> extends IGenericAttemptable {
  attempt(...args:Parameters<TAction>):unknown
}
