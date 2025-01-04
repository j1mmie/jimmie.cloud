import * as projectDefs from '.'
import { ProjectCategoryDef } from '../projects-core/category/ProjectCategoryDef'

export const projectCategoryDefs:ProjectCategoryDef[] = [
  {
    id: 'games',
    title: 'Games',
    projectDefs: [
      projectDefs.slipstreamProjectDef,
      projectDefs.starWarsProjectDef,
      projectDefs.piratesProjectDef,
    ]
  },
  {
    id: 'apps',
    title: 'Web Apps and Desktop Software',
    projectDefs: [
      projectDefs.reflektiveProjectDef,
      projectDefs.topoProjectDef,
      projectDefs.dynProjectDef,
      projectDefs.dynVizProjectDef,
      projectDefs.dynectProjectDef,
    ]
  },
  {
    id: 'jams',
    title: 'Game Jams and Hackathons',
    projectDefs: [
      projectDefs.surfProjectDef,
      projectDefs.nfinityProjectDef,
      projectDefs.goatProjectDef,
    ]
  },
  {
    id: 'open-source',
    title: 'Open-Source',
    projectDefs: [
      projectDefs.unspokenProjectDef
    ]
  },
]
