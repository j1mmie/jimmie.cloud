import React from 'react'

const HomePage = React.lazy(() => import('./pages/home/HomePage'))
const Thoughts = React.lazy(() => import('./pages/thoughts/ThoughtsRoutes'))
const Work     = React.lazy(() => import('./pages/work/WorkRoutes'))
const Other    = React.lazy(() => import('./pages/other/Other'))


export const routes = [
  { id: 'home',     title: 'About Me',    to: '/',         path: '/',           comp: HomePage },
  { id: 'thoughts', title: 'Thoughts',    to: '/thoughts', path: '/thoughts/*', comp: Thoughts },
  { id: 'work',     title: 'My Work',     to: '/work',     path: '/work/*',     comp: Work     },
  { id: 'fun',      title: 'Other Stuff', to: '/other',    path: '/other',      comp: Other    },
]
