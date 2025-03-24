import YouTubeIFrame from '../../../../../lib/components/youtube-iframe/YouTubeIFrame'
import ProjectHeader from '../../projects-core/project/header/ProjectHeader'
import Project from '../../projects-core/project/Project'
import ProjectSubheader from '../../projects-core/project/sub-header/ProjectSubheader'

export default function Surf() {
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
      <p>Unity, C#, HLSL</p>

      <ProjectSubheader>Attributions</ProjectSubheader>
      <p>
        Skybox: Originally written by <a href="https://www.shadertoy.com/user/nimitz" target="_blank">nimitz</a>, I ported it to Unity HLSL<br />
        Music: <a href="https://www.youtube.com/watch?v=aQCwCp3ST4E" target="_blank">Featherweight by Baldocaster</a>
      </p>
    </Project>
  )
}
