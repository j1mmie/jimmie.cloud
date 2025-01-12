export type TopMostChangeNodeResult = {
  node:Node
  y:number
}

export class Helpers {
  public static isNodeHtmlElement(node:Node):node is HTMLElement {
    return node.nodeType === Node.ELEMENT_NODE
  }

  public static isMaxHeightGreaterThanCurrentHeight(element:HTMLElement) {
    if (!element) return true

    const maxHeight = element.style.maxHeight
    if (maxHeight === 'none') return false


    return parseFloat(maxHeight) > element.offsetHeight
  }

  public static isHeightGreaterThanViewport(element:HTMLElement) {
    if (!element) return true

    const elementRect = element.getBoundingClientRect()
    const viewportHeight = window.innerHeight
    const elementHeight = elementRect.height

    return elementHeight > viewportHeight
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

  public static getWidthInCh(selector:string) {
    const els = document.querySelectorAll(selector)
    if (!els || !els.length) return null

    const visibleEls = [...els].filter(_ => _.checkVisibility({
      contentVisibilityAuto: true,
      visibilityProperty: true,
    }))
    if (!visibleEls || !visibleEls.length) return null

    const element = visibleEls[0]

    const span = document.createElement('span')
    span.textContent = '0'
    span.style.visibility = 'hidden'
    span.style.position = 'absolute'

    document.body.appendChild(span)

    const chWidth = span.getBoundingClientRect().width
    document.body.removeChild(span)

    const elementWidthPx = element.getBoundingClientRect().width
    const elementWidthCh = elementWidthPx / chWidth

    // Round to 2 decimal places
    return Math.round(elementWidthCh * 100) / 100
  }

}