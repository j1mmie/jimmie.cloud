import { Hr } from '../../components/atoms/hr/Hr'
import './Header.scss'
import './ansi-art/style/AnsiArt.scss'
import { AnsiArt } from './ansi-art/components/AnsiArt'
import { AnsiArtCanvas } from './ansi-art/AnsiArtCanvas'

export function Header() {
  return (
    <div>
      <AnsiArtCanvas>
        <AnsiArt sizeClass="xl" path="/ansi-html/jimmie-xl.html" minLineCount={16} />
        <AnsiArt sizeClass="lg" path="/ansi-html/jimmie-lg.html" minLineCount={13} />
        <AnsiArt sizeClass="md" path="/ansi-html/jimmie-md.html" minLineCount={6} />
        <AnsiArt sizeClass="sm" path="/ansi-html/jimmie-sm.html" minLineCount={6} />
      </AnsiArtCanvas>

      <Hr width={80} />
    </div>
  )
}
