import React, { JSX } from 'react'

export type ArticleDef = {
  to:string
  title:string
  desc:string
  lazyComp:React.LazyExoticComponent<() => JSX.Element>
}
