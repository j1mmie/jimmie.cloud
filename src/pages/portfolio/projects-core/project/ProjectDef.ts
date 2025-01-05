import { JSXElementConstructor } from 'react'

export type ProjectDef = {
  id:string,
  title:string,
  shortDesc:string,
  comp:JSXElementConstructor<unknown>
}
