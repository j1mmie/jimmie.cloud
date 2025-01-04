import { ProjectDef } from '../project/ProjectDef'

export type ProjectCategoryProps = {
  id:string,
  key:string,
  title:string,
  selected:boolean,
  projectDefs:ProjectDef[]
}

function ProjectCategory(props:ProjectCategoryProps) {
  if (!props.selected) {
    return undefined
  }


  const projects = props.projectDefs.map(projectDef => {
    return (
      <projectDef.comp key={projectDef.id} />
    )
  })

  return (
    <div>
      <h3><a href="#">{props.title}</a></h3>
      <div>
        {projects}
      </div>
    </div>
  )
}

export default ProjectCategory
