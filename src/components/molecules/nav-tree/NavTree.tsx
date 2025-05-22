import { NavLink } from 'react-router'
import './NavTree.scss'

export type NavTreeItem = {
  to?:string
  title:string
  desc:string
}

export type NavTreeProps = {
  items:NavTreeItem[]
}

export function NavTree(props:NavTreeProps) {
  const itemEls = props.items.map((item) => {
    if (item.to) {
      return (
        <li key={item.to}>
          <NavLink
            to={item.to}
            className={({ isActive }) => (isActive ? 'selected' : '')}
          >
            {item.title}
          </NavLink>
          &nbsp;- {item.desc}<br />
        </li>
      )
    } else {
      return (
        <li key={item.title}>
          {item.desc}
        </li>
      )
    }
  })

  return (
    <div className="nav-tree">
      <ul className="nav-tree-list">
        {itemEls}
      </ul>
    </div>
  )
}
