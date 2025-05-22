import React, { useState, useEffect } from 'react'
import './AsciiSpinner.scss'

type AsciiSpinnerProps = {
  width?:    number
  bar?:      string
  interval?: number
}

function getBarCharacters(width:number, bar:string, offset:number) {
  const start = offset
  const display = Array(width).fill(' ')

  for (let i = 0; i < bar.length; i++) {
    let pos = start + i
    if (pos >= width) {
      pos -= width
    }
    display[pos] = bar[i]
  }

  return display.join('')
}

const AsciiSpinnerChars:React.FC<Required<AsciiSpinnerProps>> = ({
  width,
  bar,
  interval,
}) => {
  const [offset, setOffset] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setOffset((prev:number) => (prev + 1) % width)
    }, interval)

    return () => clearInterval(timer)
  }, [ width, interval ])

  const barChars = getBarCharacters(width, bar, offset)
  return <React.Fragment>{barChars}</React.Fragment>
}

export const AsciiSpinner:React.FC<AsciiSpinnerProps> = ({
  width    = 10,
  bar      = '░▒▓██▓▒░',
  interval = 50,
}) => {
  return (
    <div className="ascii-spinner">
      <AsciiSpinnerChars width={width} bar={bar} interval={interval}  />
      {" "}
      Loading...
    </div>
  )
}
