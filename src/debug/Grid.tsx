import { useEffect, useState } from 'react'

type GridProps = {
  className?:string
  children:React.ReactNode
}

export function Grid(props:GridProps) {
  const [gridEnabled, setGridEnabled] = useState(false)


  const toggleGrid = (event:KeyboardEvent) => {
    if (event.key === 'g') {
      setGridEnabled(!gridEnabled)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', toggleGrid)

    return () => {
      document.removeEventListener('keydown', toggleGrid)
    }
  })


  const finalClassName = gridEnabled ? `${props.className} debug-grid` : props.className

  return (
    <div className={finalClassName}>
      {props.children}
    </div>
  )
}
