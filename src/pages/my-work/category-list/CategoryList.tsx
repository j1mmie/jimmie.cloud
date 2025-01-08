import { NavBar } from '../../../components/molecules/nav-bar/NavBar'
import { projectCategoryDefs } from '../ProjectCategoryDefs'

export function CategoryList() {
  return (
    <div>
      <p>Select a category</p>
      <NavBar spacing={2} items={projectCategoryDefs} />
    </div>
  )
}
