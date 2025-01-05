import { useState } from 'react'
import './CategoryNavigator.scss'
import { ProjectCategoryDef } from '../projects-core/category/ProjectCategoryDef'
import ProjectNavigator from './ProjectNavigator'
import { NavBar } from '../../../components/molecules/nav-bar/NavBar'

type CategoryNavigatorProps = {
  projectCategoryDefs:ProjectCategoryDef[]
}

function CategoryNavigator(props:CategoryNavigatorProps) {
  const [currentSelection, setCurrentSelection] = useState('')

  const categoryDefs = props.projectCategoryDefs

  const onSelectionChange = (categoryId:string) => {
    setCurrentSelection(categoryId)
  }

  const selectedCategory = categoryDefs.find(categoryDef => categoryDef.id === currentSelection)

  return (
    <div>
      <NavBar spacing={2} items={categoryDefs} onSelectionChange={onSelectionChange} />

      <div className="category-navigator-content">
        <ProjectNavigator categoryDef={selectedCategory} />
      </div>
    </div>
  )
}

export default CategoryNavigator
