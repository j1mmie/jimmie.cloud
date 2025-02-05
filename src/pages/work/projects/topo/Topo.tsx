import YouTubeIFrame from '../../../../../lib/components/youtube-iframe/YouTubeIFrame'
import ProjectHeader from '../../projects-core/project/header/ProjectHeader'
import Project from '../../projects-core/project/Project'
import ProjectSubheader from '../../projects-core/project/sub-header/ProjectSubheader'

export default function Topo() {
  return (
    <Project>
      <ProjectHeader>Topography Health Patient Search</ProjectHeader>

      <YouTubeIFrame videoId="cBt67V60CSA" title="Topo Patient Search Demo" />

      <p>ETL and UI for patient medical data.</p>

      <ProjectSubheader>Role:</ProjectSubheader>
      <p>Solo developer. Developed prototype which was used in preparation for
        <a href="https://www.prnewswire.com/news-releases/topography-health-launches-with-27-5m-funding-to-empower-community-physicians-to-run-clinical-drug-trials-301464142.html" target="_blank">
        Series A fundraise
      </a>.</p>

      <ProjectSubheader>Technologies Used:</ProjectSubheader>
      <p>Rails, Typescript, Mongo, Docker</p>
    </Project>
  )
}
