import { MouseEvent, useState } from 'react'
import './ProjectNavigator.scss'
import { ProjectCategoryDef } from '../projects-core/category/ProjectCategoryDef'

type ProjectNavigatorProps = {
  categoryDef?:ProjectCategoryDef
}

function ProjectNavigator(props:ProjectNavigatorProps) {
  const [currentSelection, setCurrentSelection] = useState('')

  if (!props.categoryDef) {
    return undefined
  }

  const projectDefs = props.categoryDef.projectDefs

  const projectMenuItems = projectDefs.map((projectDef, index) => {
    const selected = projectDef.id === currentSelection

    const onSelectionToggle = (evt:MouseEvent) => {
      setCurrentSelection(projectDef.id)
      evt.preventDefault()
    }

    const treeChar = index === projectDefs.length - 1 ? '└' : '├'
    const treeLineChar = index < projectDefs.length - 1 ? '│' : ''

    return (
      <li key={projectDef.id}>
        {treeChar}&nbsp;
        <a
          href="#"
          onClick={onSelectionToggle}
          className={selected ? 'selected' : ''}
        >
          {projectDef.title}
        </a>
        &nbsp;- {projectDef.shortDesc}<br />
        {treeLineChar}
      </li>
    )
  })

  const selectedProject = projectDefs.find(projectDef => projectDef.id === currentSelection)
  const projectContent = selectedProject ? (
    <selectedProject.comp key={selectedProject.id} />
  ) : undefined

  return (
    <div>
      <div className="project-navigator">
        <ul className="project-navigator-menu">
          {projectMenuItems}
        </ul>
      </div>
      <div className="project-navigator-content">
        {projectContent}
      </div>
    </div>
  )
}

export default ProjectNavigator
