import { Hr } from '../../components/atoms/hr/Hr'
import './Header.scss'
import './ansi-art/style/AnsiArt.scss'
import { AnsiArt } from './ansi-art/components/AnsiArt'
import { AnsiArtCanvas } from './ansi-art/AnsiArtCanvas'

// Bundled rather than fetched: each one arriving after the first render would
// make Terminalize erase and restart its typing animation
import jimmieXl from './ansi-art/art/jimmie-xl.html?raw'
import jimmieLg from './ansi-art/art/jimmie-lg.html?raw'
import jimmieMd from './ansi-art/art/jimmie-md.html?raw'
import jimmieSm from './ansi-art/art/jimmie-sm.html?raw'

export function Header() {
  return (
    <div>
      <AnsiArtCanvas>
        <AnsiArt sizeClass="xl" html={jimmieXl} lineHeightVar="lineHeight" minLineCount={16} />
        <AnsiArt sizeClass="lg" html={jimmieLg} lineHeightVar="lineHeight" minLineCount={13} />
        <AnsiArt sizeClass="md" html={jimmieMd} lineHeightVar="lineHeight" minLineCount={6} />
        <AnsiArt sizeClass="sm" html={jimmieSm} lineHeightVar="lineHeight" minLineCount={6} />
      </AnsiArtCanvas>

      <Hr width={80} />
    </div>
  )
}
