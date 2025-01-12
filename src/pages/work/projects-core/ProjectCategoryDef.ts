import { ProjectDef } from './project/ProjectDef'

export type ProjectCategoryDef = {
  to:string
  path:string
  title:string
  projectDefs:ProjectDef[]
}
