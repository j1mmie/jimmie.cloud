import { MouseEvent, useState } from 'react'
import './CategoryNavigator.css'
import { ProjectCategoryDef } from '../projects-core/category/ProjectCategoryDef'
import ProjectNavigator from './ProjectNavigator'

type CategoryNavigatorProps = {
  projectCategoryDefs:ProjectCategoryDef[]
}

function CategoryNavigator(props:CategoryNavigatorProps) {
  const [currentSelection, setCurrentSelection] = useState('')

  const categoryDefs = props.projectCategoryDefs

  const categoryMenuItems = categoryDefs.map(categoryDef => {
    const selected = categoryDef.id === currentSelection

    const onSelectionToggle = (evt:MouseEvent) => {
      setCurrentSelection(categoryDef.id)
      evt.preventDefault()
    }

    return (
      <li key={categoryDef.id}>
        <a
          href="#"
          onClick={onSelectionToggle}
          className={selected ? 'selected' : ''}
        >
          {categoryDef.title}
        </a>
      </li>
    )
  })

  const selectedCategory = categoryDefs.find(categoryDef => categoryDef.id === currentSelection)

  return (
    <div>
      <div className="category-navigator">
        <ul className="category-navigator-menu">
          {categoryMenuItems}
        </ul>
      </div>
      <div className="category-navigator-content">
        <ProjectNavigator categoryDef={selectedCategory} />
      </div>
    </div>
  )
}

export default CategoryNavigator
