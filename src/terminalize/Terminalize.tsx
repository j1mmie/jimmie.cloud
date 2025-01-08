import { useEffect } from 'react'
import './Terminalize.scss'
import { IntervalManager } from './IntervalManager'
import { TerminalizeHelpers as Helpers } from './TerminalizeHelpers'


const lineHeight = 24
const startingLinesToRevealPerIteration = 1
const iterationsBetweenLineRevealCountChanges = 10
const linesToRevealCountChangeAmount = 2

const mutationConfig:MutationObserverInit = {
  childList: true,
  subtree: true
}

type TerminalizeProps = {
  speedInLinesPerSecond?:number
  acceleration?:number
  children:React.ReactNode | React.ReactNode[] | undefined
}

export function Terminalize(props:TerminalizeProps) {
  useEffect(() => {
    const root = document.getElementById('terminalize')
    if (!root) return

    const speedInLinesPerSecond = props.speedInLinesPerSecond ?? 100 // Default to 100 lines per second
    const speedAsIntervalMs = 1000 / speedInLinesPerSecond

    const intervalManager = new IntervalManager(speedAsIntervalMs)

    const callback:MutationCallback = mutationList => {
      const topMostChanged = Helpers.getTopMostChangedNode(mutationList)
      if (topMostChanged) {
        Helpers.animateOpeningFrom(
          root,
          intervalManager,
          topMostChanged.y,
          lineHeight,
          startingLinesToRevealPerIteration,
          iterationsBetweenLineRevealCountChanges,
          linesToRevealCountChangeAmount,
        )
      } else {
        root.style.removeProperty('max-height')
      }
    }

    const observer = new MutationObserver(callback)
    observer.observe(root, mutationConfig)

    return () => {
      observer.disconnect()
      intervalManager.stop()
    }
  })

  return (
    <div id="terminalize" className="terminalize">
      {/* <div id="terminalize-inner" className="terminalize-inner"> */}
        {props.children}
      {/* </div> */}
    </div>
  )
}