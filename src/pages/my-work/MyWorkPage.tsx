import { Outlet } from 'react-router-dom'
import { CategoryList } from './category-list/CategoryList'

export function MyWorkPage() {
  return (
    <div id="my-work">
      <h2>My Work</h2>
      <CategoryList />
      <Outlet />
    </div>
  )
}
