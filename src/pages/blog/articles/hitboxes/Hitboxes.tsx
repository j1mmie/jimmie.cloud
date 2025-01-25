import RawXml from './Hitboxes.xml?raw'
import { BackLink } from '../../components/back-link/BackLink'

export default function Hitboxes() {
  return (
    <article>
      <BackLink />
      <div dangerouslySetInnerHTML={{__html: RawXml}} />
      <BackLink />
    </article>
  )
}
