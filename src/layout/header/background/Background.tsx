import backgroundText from './Background.txt?raw'
import './Background.scss'
import { ReactNode } from 'react'
import { Maths } from '../../../../lib/Maths'

const startOpacity      = 1
const endOpacity        = 0
const opacityRangeLines = 10

function getLineOpacity(start:number, end:number, lineIndex:number, range:number) {
  return Maths.clamp(
    Maths.lerp(
      start,
      end,
      lineIndex / range
    ),
    start,
    end
  )
}

export function Background() {
  const lineEls:ReactNode[] = []

  let charIndex = 0
  let lineIndex = 0

  while (charIndex < backgroundText.length) {
    const opacity = getLineOpacity(startOpacity, endOpacity, lineIndex, opacityRangeLines)
    const line = backgroundText.substring(charIndex, charIndex + 86)

    const lineEl = (
      <div key={charIndex} className="background-line" style={{ opacity }}>
        {line}
      </div>
    )

    lineEls.push(lineEl)
    charIndex += 80
    lineIndex++

    if (lineIndex > opacityRangeLines && endOpacity <= .0001) {
      charIndex = backgroundText.length
    }
  }

  return (
    <div className="background">
      <div className="background-lines">
        {lineEls}
      </div>
    </div>
  )
}