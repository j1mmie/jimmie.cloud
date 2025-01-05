import CategoryNavigator from './project-browser/CategoryNavigator'
import { projectCategoryDefs } from './projects/ProjectCategoryDefs'

export function PortfolioPage() {
  return (
    <div>
      <CategoryNavigator projectCategoryDefs={projectCategoryDefs} />
    </div>
  )
}