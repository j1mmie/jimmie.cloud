import YouTubeIFrame from '../../../../../lib/components/youtube-iframe/YouTubeIFrame'
import ProjectHeader from '../../projects-core/project/header/ProjectHeader'
import Project from '../../projects-core/project/Project'
import ProjectSubheader from '../../projects-core/project/sub-header/ProjectSubheader'

export default function DynViz() {
  return (
    <Project>
      <ProjectHeader>DynViz</ProjectHeader>

      <p>
        Real-time data visualization of Dyn's network traffic. Used for
        marketing purposes, live display installed at office entrance.
        Regularly monitor over 200,000 network events per second.
      </p>

      <div className="hero">
        <YouTubeIFrame videoId='aHH8cTbCoUE' autoPlay loop title='DynViz Demo' />
      </div>

      <ProjectSubheader>Role:</ProjectSubheader>
      <p>Developer, designer</p>

      <ProjectSubheader>Technologies Used:</ProjectSubheader>
      <p>Java, OpenGL, Processing</p>
    </Project>
  )
}
