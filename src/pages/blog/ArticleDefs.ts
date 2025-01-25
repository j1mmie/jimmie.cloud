import { lazy } from 'react'
import { ArticleDef } from './core/ArticleDef'

export const articleDefs:ArticleDef[] = [
  {
    to:       'hitboxes',
    title:    'Hitboxes that Feel Good',
    desc:     'Reinventing the Goomba Stomp',
    lazyComp: lazy(() => import('./articles/hitboxes/Hitboxes'))
  }
]
