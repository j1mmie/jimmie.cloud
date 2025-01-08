import * as Projects from './projects'
import { ProjectCategoryDef } from './projects-core/ProjectCategoryDef'

export const projectCategoryDefs:ProjectCategoryDef[] = [
  {
    to:    'games',
    path:  'games/:projectId',
    title: 'Games',
    projectDefs: [
      {
        to:    'slipstream',
        title: 'Slipstream: Rogue Space',
        comp:   Projects.Slipstream,
        desc:  '120 player co-op game for desktop/mobile (Unity)',
      },
      {
        to:    'starwars',
        title: 'Star Wars: Commander',
        comp:   Projects.StarWars,
        desc:  '3d isometric mobile RTS game (Unity)',
      },
      {
        to:    'pirates',
        title: 'Pirates of the Caribbean: Isles of War',
        comp:   Projects.Pirates,
        desc:  'multiplayer strategy game (Flash)',
      },
    ]
  },
  {
    to:    'apps',
    title: 'Web Apps & Desktop Software',
    path:  'apps/:projectId',
    projectDefs: [
      {
        to:    'reflektive',
        title: 'Reflektive',
        comp:   Projects.Reflektive,
        desc:  'employee performance management suite',
      },
      {
        to:    'topo',
        title: 'Topo Patient Search',
        comp:   Projects.Topo,
        desc:  'medical record search and management',
      },
      {
        to:    'dyn',
        title: 'Dyn Updater',
        comp:   Projects.Dyn,
        desc:  'dynamic DNS updater for Windows',
      },
      {
        to:    'dynViz',
        title: 'DynViz',
        comp:   Projects.DynViz,
        desc:  'realtime 3d visualization of global DNS queries',
      },
      {
        to:   'dynect',
        title: 'Dynect',
        comp:  Projects.Dynect,
        desc:  'enterprise DNS management platform',
      },
    ]
  },
  {
    to:    'jams',
    title: 'Game Jams & Hackathons',
    path:  'jams/:projectId',
    projectDefs: [
      {
        to:    'surf',
        title: 'Procedural Surf',
        comp:   Projects.Surf,
        desc:  'procedural parkour FPS, à la Counter-Strike surf maps',
      },
      {
        to:    'nfinity',
        title: 'Nfinity',
        comp:   Projects.Nfinity,
        desc:  'generate 3d explorable art galleries for NFTs',
      },
      {
        to:    'goat',
        title: 'Ready Set Goat',
        comp:   Projects.Goat,
        desc:  'goat-themed mobile arcade game w/ global leaderboard',
      }
      ,
    ]
  },
  {
    to:    'open-source',
    title: 'Open-Source',
    path:  'open-source/:projectId',
    projectDefs: [
      {
        to:    'unspoken',
        title: 'Unspoken',
        comp:   Projects.Unspoken,
        desc:  'library for condensing network messagings in Typescript',
      }

    ]
  },
]
