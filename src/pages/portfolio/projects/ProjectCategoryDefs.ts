import * as Projects from '.'
import { ProjectCategoryDef } from '../projects-core/category/ProjectCategoryDef'

export const projectCategoryDefs:ProjectCategoryDef[] = [
  {
    id: 'games',
    title: 'Games',
    projectDefs: [
      {
        id:    'slipstream',
        title: 'Slipstream: Rogue Space',
        comp:   Projects.Slipstream,
        shortDesc: '120 player co-op game for desktop & mobile (Unity)',
      },
      {
        id:    'starwars',
        title: 'Star Wars: Commander',
        comp:   Projects.StarWars,
        shortDesc: '3d isometric mobile RTS game (Unity)',
      },
      {
        id:    'pirates',
        title: 'Pirates of the Caribbean: Isles of War',
        comp:   Projects.Pirates,
        shortDesc: 'multiplayer strategy game (Flash)',
      },
    ]
  },
  {
    id: 'apps',
    title: 'Web Apps & Desktop Software',
    projectDefs: [
      {
        id:    'reflektive',
        title: 'Reflektive',
        comp:   Projects.Reflektive,
        shortDesc: 'employee performance management suite',
      },
      {
        id:    'topo',
        title: 'Topo Patient Search',
        comp:   Projects.Topo,
        shortDesc: 'medical record search and management',
      },
      {
        id:    'dyn',
        title: 'Dyn Updater',
        comp:   Projects.Dyn,
        shortDesc: 'dynamic DNS updater for Windows',
      },
      {
        id:    'dynViz',
        title: 'DynViz',
        comp:   Projects.DynViz,
        shortDesc: 'realtime 3d visualization of global DNS queries',
      },
      {
        id:   'dynect',
        title: 'Dynect',
        comp:  Projects.Dynect,
        shortDesc: 'enterprise DNS management platform',
      },
    ]
  },
  {
    id: 'jams',
    title: 'Game Jams & Hackathons',
    projectDefs: [
      {
        id:    'surf',
        title: 'Procedural Surf',
        comp:   Projects.Surf,
        shortDesc: 'procedural parkour FPS, à la Counter-Strike surf maps',
      },
      {
        id:    'nfinity',
        title: 'Nfinity',
        comp:   Projects.Nfinity,
        shortDesc: 'generate 3d explorable art galleries for NFTs',
      },
      {
        id:    'goat',
        title: 'Ready Set Goat',
        comp:   Projects.Goat,
        shortDesc: 'goat-themed mobile arcade game w/ global leaderboard',
      }
      ,
    ]
  },
  {
    id: 'open-source',
    title: 'Open-Source',
    projectDefs: [
      {
        id:    'unspoken',
        title: 'Unspoken',
        comp:   Projects.Unspoken,
        shortDesc: 'library for condensing network messagings in Typescript',
      }

    ]
  },
]
