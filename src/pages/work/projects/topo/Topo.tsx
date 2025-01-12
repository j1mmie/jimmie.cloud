import YouTubeIFrame from '../../../../../lib/components/youtube-iframe/YouTubeIFrame'
import ProjectHeader from '../../projects-core/project/header/ProjectHeader'
import Project from '../../projects-core/project/Project'
import ProjectSubheader from '../../projects-core/project/sub-header/ProjectSubheader'

export function Topo() {
  return (
    <Project>
      <ProjectHeader>Topography Health Patient Search</ProjectHeader>

      <YouTubeIFrame videoId="cBt67V60CSA" title="Topo Patient Search Demo" />

      <p>ETL and UI for patient medical data.</p>

      <ProjectSubheader>Role:</ProjectSubheader>
      <p>Solo developer. Technical advisor.</p>

      <p>
        Develop functional prototype, managed user acceptance test with real
        Doctors and data. Resulted in securing $15 million in funding for
        Topo's seed round.
      </p>

      <ProjectSubheader>Technologies Used:</ProjectSubheader>
      <p>Rails, Typescript, Mongo, Docker</p>
    </Project>
  )
}
