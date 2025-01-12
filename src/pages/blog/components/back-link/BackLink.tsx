import { NavLink } from 'react-router-dom'
import './BackLink.scss'

export function BackLink() {
  return (
    <p><NavLink to="/blog" className="back-link">Back to all articles</NavLink></p>
  )
}