import { ReactNode } from 'react'
import './VisualOnlyContent.scss'

export type VisualContentProps = {
  className?:string
  style?:React.CSSProperties
  children?:ReactNode | ReactNode[]
}

export function VisualOnlyContent(props:VisualContentProps) {
  return (
    <div
      aria-hidden="true"
      role="presentation"
      hidden
      className={`visual-only no-read-aloud ${props.className}`}
      style={props.style}
    >
      {props.children}
    </div>
  )
}
