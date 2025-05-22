import { Outlet } from 'react-router'
import { CategoryList } from './category-list/CategoryList'
import './Work.scss'

export const Work = () => {
  return (
    <div>
      <h2>My Work</h2>
      <CategoryList />
      <Outlet />
    </div>
  )
}

export default Work
