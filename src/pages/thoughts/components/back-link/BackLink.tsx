import { NavLink } from 'react-router-dom'
import './BackLink.scss'

export function BackLink() {
  return (
    <p><NavLink to="/thoughts" className="back-link">Back to Thoughts</NavLink></p>
  )
}
