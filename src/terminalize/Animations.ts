import { IntervalManager } from './IntervalManager'
import { Helpers } from './Helpers'
import { TerminalizeProps } from './TerminalizeProps'

export class Animations {
  public static teletypeErase(
    element:HTMLElement,
    topY:number
  ) {
    const closedHeight = topY - element.getBoundingClientRect().y - window.scrollY
    element.style.setProperty('max-height', `${closedHeight}px`)
  }

  public static teletypeDraw(
    element:HTMLElement,
    char:HTMLElement,
    cursor:HTMLElement,
    intervalManager:IntervalManager,
    props:TerminalizeProps,
    startingLinesToRevealPerIteration:number,
    iterationsBetweenLineRevealCountChanges:number,
    linesToRevealCountChangeAmount:number,
  ) {
    const charWidthPx = char.offsetWidth || 12

    // Content width only, so the cursor never lands in the element's padding
    const elementStyle = getComputedStyle(element)
    const terminalWidthPx = element.clientWidth
      - parseFloat(elementStyle.paddingLeft)
      - parseFloat(elementStyle.paddingRight)
    const terminalWidthCh = terminalWidthPx / charWidthPx

    const lineHeight = props.lineHeightPixels
    const minCursorPos = 0
    const maxCursorPos = terminalWidthCh

    let currentLineRevealCount = startingLinesToRevealPerIteration
    let nextLineRevealCountChange = iterationsBetweenLineRevealCountChanges
    let iteration = 0

    function randomCursorX() {
      return Math.floor(
        Math.random() * (maxCursorPos - minCursorPos)
      ) + minCursorPos
    }

    function setCursorPositionX(xChars:number) {
      cursor.style.setProperty('left', `${xChars}ch`)
    }

    setCursorPositionX(0)
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

      setCursorPositionX(randomCursorX())

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