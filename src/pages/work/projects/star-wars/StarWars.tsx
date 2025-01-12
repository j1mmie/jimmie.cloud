import YouTubeIFrame from '../../../../../lib/components/youtube-iframe/YouTubeIFrame'
import ProjectHeader from '../../projects-core/project/header/ProjectHeader'
import Project from '../../projects-core/project/Project'
import ProjectSubheader from '../../projects-core/project/sub-header/ProjectSubheader'

export function StarWars() {
  return (
    <Project>
      <ProjectHeader>Star Wars: Commander</ProjectHeader>
      <p>3d isometric Clash of Clans type game in the Star Wars universe</p>

      <div className="video-grid">
        <YouTubeIFrame videoId="ajkbIuLa9PE" title="Star Wars: Commander Trailer" />
        <YouTubeIFrame videoId="pUD2JkBxIJo" title="Star Wars: Commander Expansion Trailer" />
      </div>

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
