import { RefObject, useLayoutEffect } from 'react'
import { useLocation } from 'react-router'

type ScrollToTopProps = {
  contentRef:RefObject<HTMLElement | null>
}

// Navigating keeps the scroll position, but VerticalExpander holds the page
// at its old height, so leaving a long page for a short one can strand the
// viewport below everything. When that happens, jump to the top instead.
// Lives in its own component so App doesn't re-render on navigation, which
// would hand Terminalize new props and replay the whole page
export function ScrollToTop(props:ScrollToTopProps) {
  const { pathname } = useLocation()

  // Layout effect: runs after the new page is in the DOM but before paint
  useLayoutEffect(() => {
    const content = props.contentRef.current
    if (!content) return

    const isContentOutOfView = content.getBoundingClientRect().bottom <= 0
    if (isContentOutOfView) {
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }, [pathname, props.contentRef])

  return null
}
