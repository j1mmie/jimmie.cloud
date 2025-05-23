import ProjectHeader from '../../projects-core/project/header/ProjectHeader'
import ProjectSubheader from '../../projects-core/project/sub-header/ProjectSubheader'
import YouTubeIFrame from '../../../../../lib/components/youtube-iframe/YouTubeIFrame'
import Project from '../../projects-core/project/Project'

export default function Goat() {
  return (
    <Project>
      <ProjectHeader>Ready Set Goat!</ProjectHeader>
      <p><a href="https://www.readysetgoat.com" target="_blank">https://www.readysetgoat.com</a></p>
      <p>
        High-score chaser, one-button arcade game for Android and iOS.
        Developed as part of the One-Button Game Jam on itch.io
      </p>

      <div className="portfolio-grid">
        <YouTubeIFrame
          videoId="vdRIyd0HJZ4"
          title="Ready Set Goat Launch Trailer"
        />
        <YouTubeIFrame
          videoId="3v8B4Iok9Ww"
          title="Ready Set Goat Content Update Trailer"
        />
      </div>

      <ProjectSubheader>Role:</ProjectSubheader>
      <p>Solo developer, original art</p>

      <ProjectSubheader>Technologies Used:</ProjectSubheader>
      <p>
        <strong>Client:</strong> Unity, C#<br />
        <strong>Server:</strong> Azure Playfab, Javascript
      </p>
    </Project>
  )
}
