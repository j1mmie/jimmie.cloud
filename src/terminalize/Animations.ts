import { IntervalManager } from './IntervalManager'
import { Helpers } from './Helpers'
import { TerminalizeProps } from './TerminalizeProps'

export class Animations {
  public static teletypeRender(
    element:HTMLElement,
    char:HTMLElement,
    cursor:HTMLElement,
    intervalManager:IntervalManager,
    props:TerminalizeProps,
    startY:number,
    startingLinesToRevealPerIteration:number,
    iterationsBetweenLineRevealCountChanges:number,
    linesToRevealCountChangeAmount:number,
  ) {
    const charWidthPx = char.offsetWidth || 12

    const terminalWidthPx = element.offsetWidth
    const terminalWidthCh = terminalWidthPx / charWidthPx

    const lineHeight = props.lineHeightPixels
    const minCursorPos = 0
    const maxCursorPos = terminalWidthCh

    const closedHeight = startY - element.getBoundingClientRect().y - window.scrollY
    element.style.setProperty('max-height', `${closedHeight}px`)

    let currentLineRevealCount = startingLinesToRevealPerIteration
    let nextLineRevealCountChange = iterationsBetweenLineRevealCountChanges
    let iteration = 0

    function randomCursorX() {
      return Math.floor(
        Math.random() * (maxCursorPos - minCursorPos)
      ) + minCursorPos
    }

    function setCursorPosition(xChars:number) {
      cursor.style.setProperty('left', `${xChars}ch`)
    }

    setCursorPosition(0)
    cursor.classList.remove('hidden')
    cursor.classList.add('no-block')

    intervalManager.start(() => {
      cursor.classList.remove('no-block')

      if (iteration >= nextLineRevealCountChange) {
        currentLineRevealCount += linesToRevealCountChangeAmount
        nextLineRevealCountChange += iterationsBetweenLineRevealCountChanges
      }

      const currentHeight = element.offsetHeight
      const heightToAdd = currentLineRevealCount * lineHeight

      const nextHeight = currentHeight + heightToAdd

      element.style.setProperty('max-height', `${nextHeight}px`)
      iteration++

      setCursorPosition(randomCursorX())

      const shouldStop =
        Helpers.isMaxHeightGreaterThanCurrentHeight(element) ||
        Helpers.isHeightGreaterThanViewport(element)

      if (shouldStop) {
        element.style.removeProperty('max-height')
        cursor?.classList.add('hidden')
        intervalManager.stop()
      }
    })
  }
}