import ProjectHeader from '../../projects-core/project/header/ProjectHeader'
import ProjectSubheader from '../../projects-core/project/sub-header/ProjectSubheader'
import YouTubeIFrame from '../../../../../lib/components/youtube-iframe/YouTubeIFrame'
import Project from '../../projects-core/project/Project'
import Screenshot from './images/dyndns.jpg'

export default function Dyn() {
  return (
    <Project>
      <ProjectHeader>Dyn Updater</ProjectHeader>
      <p>(Formerly known as DynDNS updater)</p>

      <div className="hero">
        <img src={Screenshot} />
      </div>

      <p>
        Windows desktop software that automatically updates host records as a
        network's IP changes.
      </p>

      <ProjectSubheader>Role:</ProjectSubheader>
      <p>Solo developer</p>
      <p>Created v1 in highschool. Hired full time after college</p>

      <ProjectSubheader>Technologies Used:</ProjectSubheader>
      <p>C, Win32 API</p>

      <ProjectSubheader>Highlights:</ProjectSubheader>
      <p>
         Praised or its ease of use, low resource usage, and small download
         size (~400kb). First DDNS client that was able to be run as a service.
      </p>

      <YouTubeIFrame videoId='Np0VeQJwlI0' startTime='4m55s' title='DynDNS Updater Demo' />
    </Project>
  )
}
