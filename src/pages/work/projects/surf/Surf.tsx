import YouTubeIFrame from '../../../../../lib/components/youtube-iframe/YouTubeIFrame'
import ProjectHeader from '../../projects-core/project/header/ProjectHeader'
import Project from '../../projects-core/project/Project'
import ProjectSubheader from '../../projects-core/project/sub-header/ProjectSubheader'

export function Surf() {
  return (
    <Project>
      <ProjectHeader>Untitled Procedural "Surf" Demo</ProjectHeader>
      <p>Developed as part of the "Into The Void Game Jam" on itch.io</p>

      <div className="hero">
        <YouTubeIFrame videoId="LVtMrTmcJIk" title="Procedural Surf Maps Game" />
      </div>

      <ProjectSubheader>Role:</ProjectSubheader>
      <p>Solo developer</p>

      <ProjectSubheader>Technologies Used</ProjectSubheader>
      <p>Unity, C#</p>
    </Project>
  )
}
