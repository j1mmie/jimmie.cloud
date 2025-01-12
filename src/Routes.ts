import { BlogRoutes } from './pages/blog/BlogRoutes'
import { Other } from './pages/other/Other'
import { HomePage } from './pages/home/HomePage'
import { WorkRoutes } from './pages/work/WorkRoutes'

export const routes = [
  { id: 'home', title: 'About Me',    to: '/',      path: '/',       comp: HomePage     },
  { id: 'blog', title: 'Blog',        to: '/blog',  path: '/blog/*', comp: BlogRoutes   },
  { id: 'work', title: 'My Work',     to: '/work',  path: '/work/*', comp: WorkRoutes },
  { id: 'fun',  title: 'Other Stuff', to: '/other', path: '/other',  comp: Other    },
]
