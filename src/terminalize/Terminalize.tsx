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

export function Terminalize(props:TerminalizeProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const charRef = useRef<HTMLDivElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) throw new Error('Terminalize root element is null')

    const char = charRef.current
    if (!char) throw new Error('Terminalize char element is null')

    const cursor = cursorRef.current
    if (!cursor) throw new Error('Terminalize cursor element is null')

    const speedInLinesPerSecond = props.linesPerSecond ?? 100 // Default to 100 lines per second
    const speedAsIntervalMs = 1000 / speedInLinesPerSecond

    const intervalManager = new IntervalManager(speedAsIntervalMs)

    const teletypeErase = (topY:number) => {
      Animations.teletypeErase(root, topY)
    }

    const teletypeDraw = new Debounce(() => {
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
    props
  ])

  return (
    <div ref={rootRef} className="terminalize" style={{maxHeight: '0'}}>
      <div ref={cursorRef} className="cursor hidden">
        <span ref={charRef} className="char" />
        <span className="blocker" />
        <span className="blocker-below" />
      </div>

      {props.children}
    </div>
  )
}
