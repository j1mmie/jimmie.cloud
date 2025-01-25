import React from 'react'

export type ArticleDef = {
  to:string
  title:string
  desc:string

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  lazyComp:React.LazyExoticComponent<React.ComponentType<any>>
}
