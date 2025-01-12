import './ProjectList.scss'
import { ProjectCategoryDef } from '../projects-core/ProjectCategoryDef'
import { Outlet } from 'react-router-dom'
import { NavTree } from '../../../components/molecules/nav-tree/NavTree'

type ProjectListProps = {
  categoryDef?:ProjectCategoryDef
}

function ProjectList(props:ProjectListProps) {
  if (!props.categoryDef) {
    return undefined
  }

  return (
    <div>
      <NavTree items={props.categoryDef.projectDefs} />

      <Outlet />
    </div>
  )
}

export default ProjectList
