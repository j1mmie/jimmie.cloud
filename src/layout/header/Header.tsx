import { Hr } from '../../components/atoms/hr/Hr'
import { AnsiArtExtraLarge } from './ansi-art/components/AnsiArtExtraLarge'
import './Header.scss'
import './ansi-art/style/AnsiArt.scss'
import { AnsiArtLarge } from './ansi-art/components/AnsiArtLarge'
import { AnsiArtMedium } from './ansi-art/components/AnsiArtMedium'
import { AnsiArtSmall } from './ansi-art/components/AnsiArtSmall'
import { AnsiArtCanvas } from './ansi-art/AnsiArtCanvas'

export function Header() {
  return (
    <div>
      <AnsiArtCanvas>
        <div className="ansi-art-xl">
          {AnsiArtExtraLarge()}
        </div>

        <div className="ansi-art-lg">
          {AnsiArtLarge()}
        </div>

        <div className="ansi-art-md">
          {AnsiArtMedium()}
        </div>

        <div className="ansi-art-sm">
          {AnsiArtSmall()}
        </div>
      </AnsiArtCanvas>

      <Hr width={80} />
    </div>
  )
}
