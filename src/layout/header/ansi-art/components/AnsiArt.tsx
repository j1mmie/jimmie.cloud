import { useEffect, useState } from 'react'

type AnsiArtProps = {
  sizeClass:'sm' | 'md' | 'lg' | 'xl',
  path:string,
  minLineCount?:number,
}

export function AnsiArt(props:AnsiArtProps) {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch(props.path)
      .then(response => response.text())
      .then(text => setContent(text))
  }, [props.path])

  let style:React.CSSProperties = {}

  if (props.minLineCount) {
    style = {
      minHeight: `${props.minLineCount}em`
    }
  }

  return (
    <div className="ansi-art">
      <div className={`ansi-art-${props.sizeClass}`} style={style} dangerouslySetInnerHTML={{__html: content}}>
      </div>
    </div>
  )
}