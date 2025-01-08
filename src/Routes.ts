import { BlogRoutes } from './pages/blog/BlogRoutes'
import { FunPage } from './pages/fun/FunPage'
import { HomePage } from './pages/home/HomePage'
import { MyWorkRoutes } from './pages/my-work/MyWorkRoutes'

export const routes = [
  { id: 'home', title: 'About Me',  to: '/',     path: '/',       comp: HomePage     },
  { id: 'blog', title: 'Blog',      to: '/blog', path: '/blog/*', comp: BlogRoutes   },
  { id: 'work', title: 'My Work',   to: '/work', path: '/work/*', comp: MyWorkRoutes },
  { id: 'fun',  title: 'Fun Stuff', to: '/fun',  path: '/fun',    comp: FunPage      },
]
