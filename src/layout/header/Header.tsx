import { Hr } from '../../components/atoms/hr/Hr'
import { AnsiArtRenderer } from './ansi-art-renderer/AnsiArtRenderer'
import './Header.scss'

import AnsiArtXl from './ansi-art/jimmie-xl.utf8ans?raw'
import AnsiArtLg from './ansi-art/jimmie-lg.utf8ans?raw'
import AnsiArtMd from './ansi-art/jimmie-md.utf8ans?raw'
import AnsiArtSm from './ansi-art/jimmie-sm.utf8ans?raw'

export function Header() {
  return (
    <div>
      <div className="ansi-art-xl">
        <AnsiArtRenderer rawAnsii={AnsiArtXl} />
      </div>

      <div className="ansi-art-lg">
        <AnsiArtRenderer rawAnsii={AnsiArtLg} lineMultiplier={2} />
      </div>

      <div className="ansi-art-md">
        <AnsiArtRenderer rawAnsii={AnsiArtMd} lineMultiplier={5} />
      </div>

      <div className="ansi-art-sm">
        <AnsiArtRenderer rawAnsii={AnsiArtSm} lineMultiplier={5} />
      </div>

      <Hr width={80} />
    </div>
  )
}
