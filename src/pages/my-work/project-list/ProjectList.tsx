import './ProjectList.scss'
import { ProjectCategoryDef } from '../projects-core/ProjectCategoryDef'
import { Outlet, useParams } from 'react-router-dom'
import { NavTree } from '../../../components/molecules/nav-tree/NavTree'

type ProjectListProps = {
  categoryDef?:ProjectCategoryDef
}

function ProjectList(props:ProjectListProps) {
  const { category } = useParams()
  console.log(category)

  if (!props.categoryDef) {
    return undefined
  }

  // const projectDefs = props.categoryDef.projectDefs

  // const projectMenuItems = projectDefs.map((projectDef, index) => {
  //   const treeChar = index === projectDefs.length - 1 ? '└' : '├'
  //   const treeLineChar = index < projectDefs.length - 1 ? '│' : ''

  //   return (
  //     <li key={projectDef.to}>
  //       {treeChar}&nbsp;
  //       <NavLink
  //         to={projectDef.to}
  //         className={({ isActive }) => (isActive ? "selected" : "")}
  //       >
  //         {projectDef.title}
  //       </NavLink>
  //       &nbsp;- {projectDef.shortDesc}<br />
  //       {treeLineChar}
  //     </li>
  //   )
  // })

  return (
    <div>
      {/* <div className="project-navigator">
        <ul className="project-navigator-menu">
          {projectMenuItems}
        </ul>
      </div> */}

      <NavTree items={props.categoryDef.projectDefs} />

      <Outlet />
    </div>
  )
}

export default ProjectList
