import { IntervalManager } from './IntervalManager'

export type TopMostChangeNodeResult = {
  node:Node
  y:number
}

export class TerminalizeHelpers {
  public static isNodeHtmlElement(node:Node):node is HTMLElement {
    return node.nodeType === Node.ELEMENT_NODE
  }

  public static isMaxHeightGreaterThanCurrentHeight(element:HTMLElement) {
    if (!element) return true

    const maxHeight = element.style.maxHeight
    if (maxHeight === 'none') return false


    return parseFloat(maxHeight) > element.offsetHeight
  }


  public static getTopMostChangedNode(mutationList:MutationRecord[]):TopMostChangeNodeResult | undefined {
    let currentHighestY = Number.MAX_VALUE
    let currentHighest:Node | undefined = undefined

    for (const mutation of mutationList) {
      if (mutation.type === 'childList') {
        for (const addedNode of mutation.addedNodes) {
          if (!this.isNodeHtmlElement(addedNode)) continue

          const y = addedNode.getBoundingClientRect().y + window.scrollY
          if (y < currentHighestY) {
            currentHighestY = y
            currentHighest = mutation.target
          }
        }
      }
    }

    if (currentHighest) {
      return {
        node: currentHighest,
        y:    currentHighestY
      }
    } else {
      return undefined
    }
  }


  public static animateOpeningFrom(
    element:HTMLElement,
    intervalManager:IntervalManager,
    targetY:number,
    lineHeight:number,
    startingLinesToRevealPerIteration:number,
    iterationsBetweenLineRevealCountChanges:number,
    linesToRevealCountChangeAmount:number,
  ) {
    const closedHeight = targetY - element.getBoundingClientRect().y - window.scrollY
    element.style.setProperty('max-height', `${closedHeight}px`)

    let currentLineRevealCount = startingLinesToRevealPerIteration
    let nextLineRevealCountChange = iterationsBetweenLineRevealCountChanges
    let iteration = 0

    intervalManager.start(() => {
      if (iteration >= nextLineRevealCountChange) {
        currentLineRevealCount += linesToRevealCountChangeAmount
        nextLineRevealCountChange += iterationsBetweenLineRevealCountChanges
      }

      const currentHeight = element.offsetHeight
      const nextHeight = currentHeight + currentLineRevealCount * lineHeight

      element.style.setProperty('max-height', `${nextHeight}px`)
      iteration++

      if (this.isMaxHeightGreaterThanCurrentHeight(element)) {
        element.style.removeProperty('max-height')
        intervalManager.stop()
      }
    })
  }
}