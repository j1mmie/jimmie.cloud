import { CSSProperties } from 'react'
import './NavBar.scss'
import { NavLink } from 'react-router'

export type NavBarItem = {
  title:string
  to:string
  comp?:React.FC | React.LazyExoticComponent<React.FC>
}

type NavBarProps = {
  items:NavBarItem[]
  width?:number
  spacing?:number
  center?:boolean
}

function getTotalTextWidth(items:NavBarItem[], spacing:number) {
  return items.reduce((acc, item) => {
    return acc + item.title.length
  }, 0) + (spacing * items.length - 1)
}

function getStyleIfCentering(props:NavBarProps) {
  if (!props.width || !props.center) return {}

  const spacing = props.spacing ?? 1
  const totalTextWidth = getTotalTextWidth(props.items, spacing)
  const padding = Math.floor((props.width - totalTextWidth) / 2)

  return { paddingLeft: `${padding}ch` }
}

export function NavBar(props:NavBarProps) {
  const items = props.items

  const listEls = items.map(item => {
    const style:CSSProperties = {
      marginRight: props.spacing ? `${props.spacing}ch` : undefined
    }

    return (
      <li key={item.to}>
        <NavLink
          to={item.to}
          className={({ isActive }) => (isActive ? "selected" : "")}
          style={style}
        >
          {item.title}
        </NavLink>
      </li>
    )
  })

  const style = getStyleIfCentering(props)

  return (
    <div className="nav-bar" style={style}>
      <ul className="nav-bar-list">
        {listEls}
      </ul>
    </div>
  )
}