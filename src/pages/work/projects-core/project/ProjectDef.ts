import React, { JSX } from 'react'

export type ProjectDef = {
  to?:string
  title:string
  desc:string
  comp?:React.LazyExoticComponent<() => JSX.Element>
}
