import YouTubeIFrame from '../../../../../lib/components/youtube-iframe/YouTubeIFrame'
import ProjectHeader from '../../projects-core/project/header/ProjectHeader'
import Project from '../../projects-core/project/Project'
import ProjectSubheader from '../../projects-core/project/sub-header/ProjectSubheader'

export function Pirates() {
  return (
    <Project>
      <ProjectHeader>Pirates of the Caribbean: Isles of War</ProjectHeader>
      <p>Mobile game for the film franchise.</p>

      <div className="video-grid">
        <YouTubeIFrame videoId="cmPJIQFxU0M" title="Pirates of the Caribbean: Isles of War " />
      </div>


      <ProjectSubheader>Role:</ProjectSubheader>
      <p>
        Technical Lead, Client.
        Designed core physics.
        Developed multiplayer architecture. Implemented Lockstep for cost effectiveness
        Implemented various high-level features.
      </p>

      <ProjectSubheader>Technologies Used:</ProjectSubheader>
      <p>Flash, AIR, Actionscript 3</p>
    </Project>
  )
}
