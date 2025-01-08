import ProjectHeader from '../../projects-core/project/header/ProjectHeader'
import Project from '../../projects-core/project/Project'
import ProjectSubheader from '../../projects-core/project/sub-header/ProjectSubheader'

export function StarWars() {
  return (
    <Project>
      <ProjectHeader>Star Wars: Commander</ProjectHeader>
      <p>A 3d isometric Clash of Clans type game in the Star Wars universe</p>

      <ProjectSubheader>Role:</ProjectSubheader>
      <p>Technical Lead</p>
      <p>
        Responsible for collision, pathfinding, and Lockstep multiplayer
        systems.
        Implemented various high-level features.
      </p>

      <ProjectSubheader>Technologies Used:</ProjectSubheader>
      <p>Unity, C#</p>
    </Project>
  )
}
