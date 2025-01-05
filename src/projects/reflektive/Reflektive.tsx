import ProjectHeader from '../../projects-core/project/header/ProjectHeader'
import Project from '../../projects-core/project/Project'
import ProjectSubheader from '../../projects-core/project/sub-header/ProjectSubheader'

export function Reflektive() {
  return (
    <Project>
      <ProjectHeader>Reflektive</ProjectHeader>
      <p>SaaS performance management software</p>

      <ProjectHeader>Role:</ProjectHeader>
      <p>Founder, Head of Engineering, Chief Information Security Officer</p>
      <p>
        Built initial web product, Gmail plugin, and desktop Outlook plugins (Mac and Windows).
        Launched product. Handled live site ops, releases, and deploys.
        Helped CEO raise funds ($100 million total by Series C).
        Helped with all early hires (C-staff, sales, marketing, product, engineering).
        Built out engineering teams across several product verticals, reaching 60 engineers.
        Helped grow company to 250 employees and ~$25 million ARR.
        Built out and led Solutions Consulting team. My role was mostly around security.
        Built out Security and Compliance department. Led company through SOC2 Type II certification.
        Received 1 patent.
        Acquired by Learning Technologies Group.
      </p>

      <ProjectSubheader>Technologies Used:</ProjectSubheader>
      <p><strong>SaaS Web Client:</strong> Javascript, React</p>
      <p><strong>SaaS Web Server:</strong> Rails, Postgres, Typescript</p>
      <p><strong>Gmail Client:</strong> Javascript, React</p>
      <p><strong>Outlook Mac:</strong> Objective-C</p>
      <p><strong>Outlook Windows:</strong> C#, .NET</p>
    </Project>
  )
}
