import Prism from 'prismjs'
import RawXml from './Hitboxes.xhtml?raw'
import { BackLink } from '../../components/back-link/BackLink'

// The article is raw markup, so Vite can't see the media it references.
// Swap each `src="media/..."` for the bundled asset's URL.
const mediaUrls = import.meta.glob<string>('./media/*', { eager: true, query: '?url', import: 'default' })
const withMedia = RawXml.replace(/src="(media\/[^"]+)"/g, (_, path:string) => `src="${mediaUrls[`./${path}`] ?? path}"`)

// Highlight the markup before it renders: Terminalize redraws on any DOM
// mutation, so letting Prism rewrite the blocks after mount would erase and
// retype the page from the first code block down. That includes Prism's own
// highlightAll, which it schedules for the next frame unless told it's manual
Prism.manual = true
const decodeEntities = (text:string) => text
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"')
  .replace(/&amp;/g, '&')
const html = withMedia.replace(/<code class="language-(\w+)">([\s\S]*?)<\/code>/g, (block, lang:string, code:string) => {
  const grammar = Prism.languages[lang]
  if (!grammar) return block
  return `<code class="language-${lang}">${Prism.highlight(decodeEntities(code), grammar, lang)}</code>`
})

export default function Hitboxes() {
  return (
    <article>
      <BackLink />
      <div dangerouslySetInnerHTML={{__html: html}} />
      <BackLink />
    </article>
  )
}
