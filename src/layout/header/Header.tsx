import { Hr } from '../../components/atoms/hr/Hr'
import { AnsiArt } from './ansi-art/AnsiArt'
import { Background } from './background/Background'
import './Header.scss'

export function Header() {
  return (
    <div>
      <Background />
      <AnsiArt />
      <Hr width={80} />
      <br />
    </div>
  )
}
