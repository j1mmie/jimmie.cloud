import { JSXElementConstructor } from 'react'

export type ProjectDef = {
  id:string,
  title:string,
  comp:JSXElementConstructor<unknown>
}
