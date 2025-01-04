import ProjectHeader from '../../projects-core/project/header/ProjectHeader'
import ProjectSubheader from '../../projects-core/project/sub-header/ProjectSubheader'
import { surfProjectDef } from './SurfProjectDef'

export function Surf() {
  return (
    <div>
      <ProjectHeader>{surfProjectDef.title}</ProjectHeader>
      <p>Developed as part of the Void Game Jam on itch.io</p>

      <ProjectSubheader>Role:</ProjectSubheader>
      <p>Solo developer</p>

      <ProjectSubheader>Technologies Used</ProjectSubheader>
      <p>Unity, C#</p>
    </div>
  )
}
