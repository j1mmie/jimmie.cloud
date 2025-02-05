import ProjectHeader from '../../projects-core/project/header/ProjectHeader'
import Project from '../../projects-core/project/Project'
import ProjectSubheader from '../../projects-core/project/sub-header/ProjectSubheader'

export default function Dynect() {
  return (
    <Project>
      <ProjectHeader>Dynect</ProjectHeader>
      <p>Enterprise DNS management system</p>

      <ProjectSubheader>Role:</ProjectSubheader>
      <p>UI designer and developer</p>

      <ProjectSubheader>Technologies Used:</ProjectSubheader>
      <p>Perl, Mason, HTML + CSS</p>

    </Project>
  )
}