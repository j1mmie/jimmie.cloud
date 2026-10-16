type AnsiArtProps = {
  sizeClass:'sm' | 'md' | 'lg' | 'xl',
  html:string,
  lineHeightVar?:string,
  minLineCount?:number,
}

export function AnsiArt(props:AnsiArtProps) {
  let style:React.CSSProperties = {}

  if (props.minLineCount && props.lineHeightVar) {
    style = {
      minHeight: `calc(${props.minLineCount} * var(--${props.lineHeightVar}))`
    }
  }

  return (
    <div className="ansi-art">
      <div className={`ansi-art-${props.sizeClass}`} style={style} dangerouslySetInnerHTML={{__html: props.html}}>
      </div>
    </div>
  )
}