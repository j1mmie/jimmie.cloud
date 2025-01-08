import { NavLink } from 'react-router-dom'
import './NavTree.scss'

export type NavTreeItem = {
  title:string
  desc:string
  to:string
}

export type NavTreeProps = {
  items:NavTreeItem[]
}

export function NavTree(props:NavTreeProps) {
  const lastItemIndex = props.items.length - 1
  const itemEls = props.items.map((item, index) => {
    const treeChar = index === lastItemIndex ? '└' : '├'
    const treeLineChar = index < lastItemIndex ? '│' : ''

    return (
      <li key={item.to}>
        {treeChar}&nbsp;
        <NavLink
          to={item.to}
          className={({ isActive }) => (isActive ? 'selected' : '')}
        >
          {item.title}
        </NavLink>
        &nbsp;- {item.desc}<br />
        {treeLineChar}
      </li>
    )
  })

  return (
    <div className="nav-tree">
      <ul className="nav-tree-list">
        {itemEls}
      </ul>
    </div>
  )
}
