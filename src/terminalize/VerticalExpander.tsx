import { useEffect, useRef } from 'react'
import { debounce } from 'ts-debounce'
import './VerticalExpander.scss'

type VerticalExpanderProps = {
  children:React.ReactNode | React.ReactNode[] | undefined
}

export function VerticalExpander(props:VerticalExpanderProps) {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const outer = outerRef.current
    if (!outer) {
      console.error('VerticalExpander outer element is null')
      return
    }

    const inner = innerRef.current
    if (!inner) {
      console.error('VerticalExpander inner element is null')
      return
    }

    const getMeasurements = () => {
      const currentMinHeightPx = outer.style.minHeight === '' ? 0 : parseFloat(outer.style.minHeight)
      const innerHeight = inner.getBoundingClientRect().height
      const viewBottom = window.scrollY + window.innerHeight
      const furthestBottom = Math.max(viewBottom, innerHeight)

      return { currentMinHeightPx, furthestBottom }
    }

    const onInnerResize = () => {
      const measurements = getMeasurements()
      if (measurements.furthestBottom > measurements.currentMinHeightPx) {
        outer.style.setProperty('min-height', `${measurements.furthestBottom}px`)
      }
    }

    // Wait 100ms after the last scroll event before updating the min-height
    // But if scrolling lasts longer than 500ms, update te min-height anyway
    const scrollDebouncer = debounce(() => {
      const measurements = getMeasurements()
      if (measurements.furthestBottom < measurements.currentMinHeightPx) {
        outer.style.setProperty('min-height', `${Math.ceil(measurements.furthestBottom)}px`)
      }
    }, 100, { maxWait: 500 })


    const onScroll = () => {
      scrollDebouncer()
    }


    const resizeObserver = new ResizeObserver(onInnerResize)
    resizeObserver.observe(inner)

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      resizeObserver.disconnect()
      scrollDebouncer.cancel();

    }
  })

  return (
    <div ref={outerRef} className="vertical-expander">
      <div ref={innerRef} className="vertical-expander-inner">
        {props.children}
      </div>
    </div>
  )
}
