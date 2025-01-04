import ProjectHeader from '../../projects-core/project/header/ProjectHeader'
import ProjectSubheader from '../../projects-core/project/sub-header/ProjectSubheader'
import { topoProjectDef } from './TopoProjectDef'

export function Topo() {
  return (
    <div>
      <ProjectHeader>{topoProjectDef.title}</ProjectHeader>
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
    </div>
  )
}
