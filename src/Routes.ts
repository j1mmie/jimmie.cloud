import { lazy } from 'react'

const ThoughtsRoutes = lazy(() => import('./pages/thoughts/ThoughtsRoutes.tsx'))
const Other          = lazy(() => import('./pages/other/Other.tsx'))
const HomePage       = lazy(() => import('./pages/home/HomePage.tsx'))
const WorkRoutes     = lazy(() => import('./pages/work/WorkRoutes.tsx'))

export const routes = [
  { id: 'home',     title: 'About Me',    to: '/',         path: '/',           lazyComp: HomePage     },
  { id: 'thoughts', title: 'Thoughts',    to: '/thoughts', path: '/thoughts/*', lazyComp: ThoughtsRoutes   },
  { id: 'work',     title: 'My Work',     to: '/work',     path: '/work/*',     lazyComp: WorkRoutes },
  { id: 'fun',      title: 'Other Stuff', to: '/other',    path: '/other',      lazyComp: Other    },
]
