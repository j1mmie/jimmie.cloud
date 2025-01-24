import { useEffect, useState } from 'react'
import './Hr.scss'
import { VisualOnlyContent } from '../visual-only-content/VisualOnlyContent'

const alphabet = '-_'

function getRandomChars(length:number) {
  let result = ''
  for (let i = 0; i < length; i++) {
    result += alphabet.charAt(Math.floor(Math.random() * alphabet.length))
  }
  return result
}

type HrProps = {
  width:number,
  animationSpeed?:number
}

type LineOfText = {
  key:string,
  text:string
}

export function Hr(props:HrProps) {
  const initialLines:LineOfText[] = []
  const [ lines, setLines ] = useState(initialLines)

  if (lines.length === 0) {
    const tempLines:LineOfText[] = []
    for (let i = 0; i < 4; i++) {
      tempLines.push({
        key: i.toString(),
        text: getRandomChars(props.width)
      })
    }
    setLines(tempLines)
  }

  const lineEls = lines.map(line => {
    return (
      <div key={line.key} className="xyz">
        {line.text}
      </div>
    )
  })

  useEffect(() => {
    if (!props.animationSpeed || props.animationSpeed <= 0) return

    const interval = setInterval(() => {
      const tempLines = []
      for (let i = 0; i < 4; i++) {
        tempLines.push({
          key: lines[i].key,
          text: lines[i].text.substring(1) + getRandomChars(1)
        })
      }
      setLines(tempLines)
    }, props.animationSpeed);

    return () => clearInterval(interval)
  }, [lines, props.animationSpeed])


  return (
    <VisualOnlyContent className="hr">
      {lineEls}
    </VisualOnlyContent>
  )
}