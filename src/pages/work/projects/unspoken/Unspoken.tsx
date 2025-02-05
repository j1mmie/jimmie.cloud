import { NavLink } from 'react-router-dom'
import ProjectHeader from '../../projects-core/project/header/ProjectHeader'
import Project from '../../projects-core/project/Project'

export default function Unspoken() {
  return (
    <Project>
      <ProjectHeader>Unspoken</ProjectHeader>
      <p>
        <a href="https://www.github.com/j1mmie/unspoken" target="_blank">Unspoken on GitHub</a>
      </p>

      <p>Network message serialization library for Typescript</p>

      <p>
      Unspoken allows you to define class schemas via decorators.
      You can then convert objects into keyless arrays for efficient network
      transmission. Decode them back into structured objects using the same
      schema. Ideal for compact, schema-based messaging, especially with
      MessagePack.
      </p>

      <p>
        Used for {''}

        <NavLink to="/work/games/slipstream"><em>Slipstream: Rogue Space</em></NavLink>

        's multiplayer netcode.
      </p>
    </Project>
  )
}
