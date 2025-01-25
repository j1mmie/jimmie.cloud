import { Suspense } from 'react'

type PageLoaderProps = {
  children?:React.ReactNode | React.ReactNode[]
}

export function PageLoader(props:PageLoaderProps) {
  return (
    <Suspense fallback={<>Loading...</>}>
      {props.children}
    </Suspense>
  )
}

