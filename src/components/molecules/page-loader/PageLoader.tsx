import { JSX, Suspense } from 'react'
import { AsciiSpinner } from '../../atoms/ascii-spinner/AsciiSpinner'
import { Centerer } from '../centerer/Centerer'

type PageLoaderProps = {
  key:string
  children:JSX.Element
}

export function PageLoader(props:PageLoaderProps) {
  const fallback = <Centerer><AsciiSpinner /></Centerer>

  return (
    <Suspense key={props.key} fallback={fallback}>
      {props.children}
    </Suspense>
  )
}
