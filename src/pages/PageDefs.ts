import { HomePage } from './home/HomePage'
import { PortfolioPage } from './portfolio/PortfolioPage'

export const pageDefs = [
  { id: 'home',      title: 'About Me', comp: HomePage },
  { id: 'portfolio', title: 'Projects', comp: PortfolioPage },
]
