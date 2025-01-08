import { NavLink } from 'react-router-dom'

export function BackLink() {
  return (
    <p><NavLink to="/blog">&#x25C0; Back to all articles</NavLink></p>
  )
}