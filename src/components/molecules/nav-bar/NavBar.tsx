import { CSSProperties, MouseEvent, useState } from 'react'
import './NavBar.scss'

type NavBarItem = {
  id:string
  title:string
}

type NavBarProps = {
  items:NavBarItem[]
  width?:number
  spacing?:number
  center?:boolean
  onSelectionChange?:(id:string) => void
  initialSelection?:string
}

export function NavBar(props:NavBarProps) {
  const [currentSelection, setCurrentSelection] = useState(props.initialSelection ?? '')

  const items = props.items

  const listEls = items.map(item => {
    const selected = item.id === currentSelection

    const onSelectionToggle = (evt:MouseEvent) => {
      setCurrentSelection(item.id)
      evt.preventDefault()

      if (props.onSelectionChange) {
        props.onSelectionChange(item.id)
      }
    }

    const style:CSSProperties = {
      marginRight: props.spacing ? `${props.spacing}ch` : undefined
    }

    return (
      <li key={item.id}>
        <a
          href="#"
          onClick={onSelectionToggle}
          className={selected ? 'selected' : ''}
          style={style}
        >
          {item.title}
        </a>
      </li>
    )
  })

  const style:CSSProperties = {}
  if (props.width && props.center) {
    const spacing = props.spacing ?? 1

    const totalTextWidth = items.reduce((acc, item) => {
      return acc + item.title.length
    }, 0) + (spacing * items.length - 1)

    const padding = Math.floor((props.width - totalTextWidth) / 2)
    style.paddingLeft = `${padding}ch`
  }

  return (
    <div className="nav-bar" style={style}>
      <ul className="nav-bar-list">
        {listEls}
      </ul>
    </div>
  )
}