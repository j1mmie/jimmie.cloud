import { JSXElementConstructor } from 'react'

export type ProjectDef = {
  to?:string
  title:string
  desc:string
  comp?:JSXElementConstructor<unknown>
}
