import ProjectHeader from '../../projects-core/project/header/ProjectHeader'
import Project from '../../projects-core/project/Project'
import ProjectSubheader from '../../projects-core/project/sub-header/ProjectSubheader'

export function Slipstream() {
  return (
    <Project>
      <ProjectHeader>Slipstream: Rogue Space</ProjectHeader>
      <p>
        A 120 player, co-operative strategy game. Designed for streamers to play with their audience.
        Available crossplay on Steam (Windows and Mac), iOS, and Android.
        9/10 on Steam with "Very Positive" review status.
        "A multiplayer action strategy masterpiece" - <a href="https://www.pocketgamer.com/slipstream-rogue-space/review/">PocketGamer</a>
      </p>

      <ProjectSubheader>Role:</ProjectSubheader>
      <p>Founder, Lead Developer. Early art.</p>

      <ul>
        <li>Developed original concept for game.</li>
        <li>Created initial style guide or artwork.</li>
        <li>Developed performant client that runs well even on older Android devices.</li>
        <li>Developed multiplayer server architecture from scratch to support 120 CCU efficiently.</li>
        <li>Developed APIs for persistence and player progression, including
        experience points, leveling, rewards, purchases, gifting, etc.</li>
      </ul>

      <ProjectSubheader>Technologies Used:</ProjectSubheader>
      <p><strong>Client: </strong>Unity, C#</p>
      <p><strong>Server: </strong>Typescript, Google Cloud Platform, Kubernetes, Agones, AWS GameLift</p>
    </Project>
  )
}
