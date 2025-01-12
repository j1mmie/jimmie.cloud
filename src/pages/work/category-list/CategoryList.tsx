import { NavBar } from '../../../components/molecules/nav-bar/NavBar'
import { projectCategoryDefs } from '../ProjectCategoryDefs'

export function CategoryList() {
  return (
    <div className="group">
      <p>Select a category &#x2193;</p>
      <NavBar spacing={2} items={projectCategoryDefs} />
    </div>
  )
}
