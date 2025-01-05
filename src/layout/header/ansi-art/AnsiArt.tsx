import './AnsiArt.scss'
import { AnsiColor } from './AnsiColor'
import ansii from './jimmie.utf8ans?raw'

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

function generateHtmlForAnsiArt(artBlock:string) {
  const htmlLines:string[] = []
  const artLines = artBlock.split('\n')

  let tagOpen = false
  const currentColor = new AnsiColor()
  currentColor.setColorClassLookup(standardColorsToClasses, false)
  currentColor.setColorClassLookup(boldColorsToClasses, true)

  for (let lineIndex = 0; lineIndex < artLines.length; lineIndex++) {
    const line = artLines[lineIndex]

    let htmlLine = line.replace(colorRegex, (match) => {
      const parsedCode = currentColor.processEscapeSequence(match)

      let replacement = ''

      if (tagOpen) {
        replacement += '</span>'
      }

      tagOpen = true

      const classes = currentColor.getCurrentBestColorClassNames()

      const data = `data-code="${parsedCode}"`

      if (classes.length > 0) {
        replacement += `<span class="${classes.join(' ')}" ${data}>`
      } else {
        replacement += `<span ${data}>`
      }

      return replacement
    })

    htmlLine = htmlLine.replace(/\n/g, '&')

    const closingTag = tagOpen ? '</span>' : ''


    htmlLines.push(`<div class="ansi line-${lineIndex}">${htmlLine}${closingTag}</div>`)
  }

  const htmlBlock = htmlLines.join('\n')

  return htmlBlock
}

export function AnsiArt() {
  const art = generateHtmlForAnsiArt(ansii)

  return (
    <div className='ansi-art' dangerouslySetInnerHTML={{__html: art}}>
    </div>
  )
}
