import ProjectHeader from '../../projects-core/project/header/ProjectHeader'
import ProjectSubheader from '../../projects-core/project/sub-header/ProjectSubheader'
import { piratesProjectDef } from './PiratesProjectDef'

export function Pirates() {
  return (
    <div>
      <ProjectHeader>{piratesProjectDef.title}</ProjectHeader>
      <p>Mobile game developed for the Disney IP.</p>

      <ProjectSubheader>Role:</ProjectSubheader>
      <p>
        Technical Lead, Client.
        Designed core physics.
        Developed multiplayer architecture. Implemented Lockstep for cost effectiveness
        Implemented various high-level features.
      </p>

      <ProjectSubheader>Technologies Used:</ProjectSubheader>
      <p>Flash, AIR, Actionscript 3</p>
    </div>
  )
}
