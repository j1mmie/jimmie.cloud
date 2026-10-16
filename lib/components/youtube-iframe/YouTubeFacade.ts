// YouTube's player pulls in several hundred KB of scripts per embed. Until it's
// clicked, an embed's iframe shows this srcdoc instead: the video's thumbnail
// and a play button.
//
// Clicking replaces the iframe with a fresh one holding the real player.
// Navigating the existing iframe would be simpler, but the player then ignores
// autoplay and needs a second click. Terminalize knows to ignore an iframe
// being swapped for another, so the page doesn't retype.

export function escapeAttribute(text:string) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
}

// hqdefault is the one thumbnail every video has, but it's 4:3 with the 16:9
// frame letterboxed inside. Sizing it so that inner frame covers the iframe
// keeps the black bars out of view.
const style = `
  html, body { margin: 0; height: 100%; overflow: hidden; background: #112; }
  a { display: block; position: relative; height: 100%; color: #f1f2eb; text-decoration: none; font: 20px/24px monospace; }
  img { position: absolute; left: 50%; top: 50%; width: max(100vw, 177.78vh); transform: translate(-50%, -50%); }
  span { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); padding: 4px 1ch; background: #252339; }
  a:hover span, a:focus span { background: #68d9d7; color: #252339; }
`

const script = `
  document.querySelector('a').addEventListener('click', event => {
    event.preventDefault()
    const player = parent.document.createElement('iframe')
    for (const { name, value } of frameElement.attributes) {
      if (name !== 'srcdoc') player.setAttribute(name, value)
    }
    player.src = event.currentTarget.href
    frameElement.replaceWith(player)
  })
`

export function youTubeFacadeDoc(videoId:string, embedUrl:string) {
  const playUrl = new URL(embedUrl)
  playUrl.searchParams.set('autoplay', '1')

  return `<style>${style}</style>`
    + `<a href="${escapeAttribute(playUrl.toString())}">`
    + `<img src="https://i.ytimg.com/vi/${videoId}/hqdefault.jpg" alt="">`
    + '<span>&#9654; Play</span>'
    + '</a>'
    + `<script>${script}</script>`
}
