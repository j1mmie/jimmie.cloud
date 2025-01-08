import { JSXElementConstructor } from 'react'

export type ArticleDef = {
  to:string
  title:string
  desc:string
  comp:JSXElementConstructor<unknown>
}
