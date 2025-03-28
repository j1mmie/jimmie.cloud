import React from 'react'

export type ProjectDef = {
  to?:string
  title:string
  desc:string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  lazyComp?:React.LazyExoticComponent<React.ComponentType<any>>
}
