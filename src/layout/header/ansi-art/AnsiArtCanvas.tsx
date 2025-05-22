import './AnsiArtCanvas.scss'

type AnsiArtCanvasProps = {
  children?:React.ReactNode | React.ReactNode[]
}

// TODO: Convert to using Centerer?
export function AnsiArtCanvas(props:AnsiArtCanvasProps) {
  return (
    <div className="ansi-art-canvas">
      <div className="ansi-art-centerer">
        <div className="ansi-art-sizer">
          {props.children}
        </div>
      </div>
    </div>
  )
}
