import ProjectHeader from '../../projects-core/project/header/ProjectHeader'
import { unspokenProjectDef } from './UnspokenProjectDef'

export function Unspoken() {
  return (
    <div>
      <ProjectHeader>{unspokenProjectDef.title}</ProjectHeader>
    </div>
  )
}
