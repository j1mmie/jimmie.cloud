import { ProjectDef } from '../project/ProjectDef'

export type ProjectCategoryDef = {
  id:string,
  title:string,
  projectDefs:ProjectDef[]
}
