import RawXml from './Hitboxes.xhtml?raw'
import { BackLink } from '../../components/back-link/BackLink'

// The article is raw markup, so Vite can't see the media it references.
// Swap each `src="media/..."` for the bundled asset's URL.
const mediaUrls = import.meta.glob<string>('./media/*', { eager: true, query: '?url', import: 'default' })
const html = RawXml.replace(/src="(media\/[^"]+)"/g, (_, path:string) => `src="${mediaUrls[`./${path}`] ?? path}"`)

export default function Hitboxes() {
  return (
    <article>
      <BackLink />
      <div dangerouslySetInnerHTML={{__html: html}} />
      <BackLink />
    </article>
  )
}
