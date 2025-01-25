import YouTubeIFrame from '../../../../../lib/components/youtube-iframe/YouTubeIFrame'
import ProjectHeader from '../../projects-core/project/header/ProjectHeader'
import Project from '../../projects-core/project/Project'
import ProjectSubheader from '../../projects-core/project/sub-header/ProjectSubheader'
import screenshot from './images/reflektive.png'
import '../../Work.scss'

export default function Reflektive() {
  return (
    <Project>
      <ProjectHeader>Reflektive</ProjectHeader>
      <p>Enterprise real-time feedback and performance management platform</p>

      <a href={screenshot} className="hero" target="_blank">
        <img src={screenshot} />
      </a>

      <div className="video-grid">
        <YouTubeIFrame videoId="te0NhYU_qTo" title="Reflektive Product Overview" />
        <YouTubeIFrame videoId="UdvX7Ovi-r8" title="Reflektive x DigitalOcean" />
      </div>

      <ProjectHeader>Role:</ProjectHeader>
      <p>Founder, Head of Engineering, Chief Information Security Officer</p>
      <p>
        Built initial web product, Gmail plugin, and desktop Outlook plugins (Mac and Windows).
        Launched product. Participated in live site ops, releases, and deploys.
        Participated in fund raising efforts ($100 million total by Series C).
        Helped with early (first ~100) hires (C-staff, support, sales, marketing, product, engineering).
        Built out engineering teams across several product verticals, reaching 60 engineers.
        Helped grow company to 250 employees and ~$25 million ARR.
        Built out and led Solutions Consulting team.
        Built out Security and Compliance team.
        Led company through SOC2 Type II certification.
        Received 1 patent.
        Acquired by Learning Technologies Group.
      </p>

      <ProjectSubheader>Technologies Used:</ProjectSubheader>
      <p><strong>Server:</strong> Rails, Postgres, Typescript</p>
      <p><strong>Web Client:</strong> Javascript, React</p>
      <p><strong>Gmail Client:</strong> Javascript, React</p>
      <p><strong>Outlook Mac:</strong> Objective-C</p>
      <p><strong>Outlook Windows:</strong> C#, .NET</p>
    </Project>
  )
}
