import './AnsiArtRenderer.scss'
import { AnsiColor } from './AnsiColor'

const boldColorsToClasses:Record<number, string> = {
  35: 'lite_fg',
}

const standardColorsToClasses:Record<number, string> = {
  35: 'dark_fg',
  45: 'dark_bg',
}

// Disable warning on control code usage, because we are actually
// searching for control codes here.
// eslint-disable-next-line no-control-regex
const colorRegex = /\u001b\[\d+(;\d+)*m/g

function generateHtmlForAnsiArt(artBlock:string, lineMultiplier:number = 1) {
  const htmlLines:string[] = []
  const artLines = artBlock.split('\n')

  let tagOpen = false
  const currentColor = new AnsiColor()
  currentColor.setColorClassLookup(standardColorsToClasses, false)
  currentColor.setColorClassLookup(boldColorsToClasses, true)

  for (let lineIndex = 0; lineIndex < artLines.length; lineIndex++) {
    const line = artLines[lineIndex]

    let htmlLine = line.replace(colorRegex, (match) => {
      currentColor.processEscapeSequence(match)

      let replacement = ''

      if (tagOpen) {
        replacement += '</span>'
      }

      tagOpen = true

      const classes = currentColor.getCurrentBestColorClassNames()

      if (classes.length > 0) {
        replacement += `<span class="${classes.join(' ')}">`
      } else {
        replacement += `<span>`
      }

      return replacement
    })

    htmlLine = htmlLine.replace(/\n/g, '&')

    const closingTag = tagOpen ? '</span>' : ''

    const lineClass = `line-${lineIndex * lineMultiplier}`


    htmlLines.push(`<div class="ansi-line ${lineClass}">${htmlLine}${closingTag}</div>`)
  }

  const htmlBlock = htmlLines.join('\n')

  return htmlBlock
}

interface AnsiArtRendererProps {
  rawAnsii:string,
  lineMultiplier?:number
}

export function AnsiArtRenderer(props:AnsiArtRendererProps) {
  const art = generateHtmlForAnsiArt(props.rawAnsii, props.lineMultiplier || 1)

  return (
    <div className="ansi-art-canvas">
      <div className="ansi-art-centerer">
        <div className="ansi-art-sizer">
          <div className="ansi-art" dangerouslySetInnerHTML={{__html: art}}>
          </div>
        </div>
      </div>
    </div>
  )
}
