import { useEffect, useRef } from 'react'
import './Terminalize.scss'
import { IntervalManager } from './IntervalManager'
import { Helpers as Helpers } from './Helpers'
import { TerminalizeProps } from './TerminalizeProps'
import { Animations } from './Animations'
import { Debounce } from '../../lib/rate-limiting/Debounce'

const startingLinesToRevealPerIteration = 1
const iterationsBetweenLineRevealCountChanges = 24
const linesToRevealCountChangeAmount = 2

const mutationConfig:MutationObserverInit = {
  childList: true,
  subtree: true
}

class EraseAction {
  private _value:number = Number.POSITIVE_INFINITY

  public canEraseTo(value:number):boolean {
    return value < this._value
  }

  public eraseTo(value:number) {
    this._value = value
  }

  public reset() {
    this._value = Number.POSITIVE_INFINITY
  }
}

export function Terminalize(props:TerminalizeProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const charRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)

  const enabled = props.enabled ?? true
  const initialMaxHeight = enabled ? '0' : 'none'

  useEffect(() => {
    if (!enabled) return () => { }

    const root = rootRef.current
    if (!root) throw new Error('Terminalize root element is null')

    const char = charRef.current
    if (!char) throw new Error('Terminalize char element is null')

    const cursor = cursorRef.current
    if (!cursor) throw new Error('Terminalize cursor element is null')

    const speedInLinesPerSecond = props.linesPerSecond ?? 100 // Default to 100 lines per second
    const speedAsIntervalMs = 1000 / speedInLinesPerSecond

    const intervalManager = new IntervalManager(speedAsIntervalMs)

    const eraseAction = new EraseAction()
    const teletypeErase = (requestedEraseHeight:number) => {
      if (!eraseAction.canEraseTo(requestedEraseHeight)) {
        return
      }

      eraseAction.eraseTo(requestedEraseHeight)
      Animations.teletypeErase(root, requestedEraseHeight)
    }

    const teletypeDraw = new Debounce(() => {
      eraseAction.reset()
      Animations.teletypeDraw(
        root,
        char,
        cursor,
        intervalManager,
        props,
        startingLinesToRevealPerIteration,
        iterationsBetweenLineRevealCountChanges,
        linesToRevealCountChangeAmount,
      )
    }, 200)

    const showEverything = () => {
      root.style.removeProperty('max-height')
      intervalManager.stop()
    }

    const callback:MutationCallback = mutationList => {
      const topMostChanged = Helpers.getTopMostChangedNode(mutationList)
      if (topMostChanged) {
        teletypeErase(topMostChanged.y)
        teletypeDraw.attempt()
      } else {
        showEverything()
      }
    }

    const observer = new MutationObserver(callback)
    observer.observe(root, mutationConfig)

    // Only played on full page load/reload
    teletypeErase(0)
    teletypeDraw.attempt()

    return () => {
      observer.disconnect()
      intervalManager.stop()
    }
  }, [
    props, enabled
  ])

  return (
    <div ref={rootRef} className="terminalize" style={{maxHeight: initialMaxHeight}}>
      <div ref={cursorRef} className="cursor hidden">
        <span ref={charRef} className="char" />
        <span className="blocker" />
        <span className="blocker-below" />
      </div>

      {props.children}
    </div>
  )
}
