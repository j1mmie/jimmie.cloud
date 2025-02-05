import ProjectHeader from '../../projects-core/project/header/ProjectHeader'
import Project from '../../projects-core/project/Project'
import ProjectSubheader from '../../projects-core/project/sub-header/ProjectSubheader'

import dv1 from './images/dv1.jpg'
import dv2 from './images/dv2.jpg'
import dv3 from './images/dv3.jpg'

export default function DynViz() {
  return (
    <Project>
      <ProjectHeader>DynViz</ProjectHeader>

      <p>
        Real-time data visualization of Dyn's network traffic. Used for
        marketing purposes, live display installed at office entrance.
      </p>

      <div className="hero">
        <a href={dv1} className="content-link" target="_blank"><img src={dv1} /></a>
      </div>

      <div className="portfolio-grid">
        <a href={dv2} className="content-link" target="_blank"><img src={dv2} /></a>
        <a href={dv3} className="content-link" target="_blank"><img src={dv3} /></a>
      </div>

      <ProjectSubheader>Role:</ProjectSubheader>
      <p>Developer, designer</p>

      <ProjectSubheader>Technologies Used:</ProjectSubheader>
      <p>Java, OpenGL, Processing</p>
    </Project>
  )
}
