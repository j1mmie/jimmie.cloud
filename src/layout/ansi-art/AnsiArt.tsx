import './AnsiArt.scss'
import ansii from './jimmie.utf8ans?raw'

const colorsToClasses:Record<number, string> = {
  35: 'fg',
  45: 'bg',
}

// We actually need to parse the ANSI escape codes and convert them to HTML
// eslint-disable-next-line no-control-regex
const colorRegex = /\u001b\[\d+(;\d+)*m/g

function generateHtmlForAnsiArt(artBlock:string) {
  const htmlLines:string[] = []
  const artLines = artBlock.split('\n')

  let tagOpen = false
  let currentFg = 0
  let currentBg = 0
  let bold = false

  for (let lineIndex = 0; lineIndex < artLines.length; lineIndex++) {
    const line = artLines[lineIndex]

    let htmlLine = line.replace(colorRegex, (match) => {
      const colorCode = match.slice(2, -1)
      const colorParts = colorCode.split(';')

      for (let j = 0; j < colorParts.length; j++) {
        const colorPart = parseInt(colorParts[j])

        if (colorPart >= 30 && colorPart <= 37) {
          currentFg = colorPart
        } else if (colorPart >= 40 && colorPart <= 47) {
          currentBg = colorPart
        } else if (colorPart === 1) {
          bold = true
        } else if (colorPart === 0) {
          bold = false
          currentFg = 0
          currentBg = 0
        }
      }

      let replacement = ''

      if (tagOpen) {
        replacement += '</span>'
      }

      tagOpen = true

      const classes:string[] = []

      const fgClass = colorsToClasses[currentFg]
      if (fgClass && bold) {
        classes.push(`${fgClass}b`)
      } else if (fgClass) {
        classes.push(fgClass)
      }

      const bgClass = colorsToClasses[currentBg]
      if (bgClass) {
        classes.push(bgClass)
      }


      replacement += `<span class="${classes.join(' ')}">`

      return replacement
    })

    htmlLine = htmlLine.replace(/\n/g, '&')


    htmlLines.push(`<div class="ansi line-${lineIndex}">${htmlLine}</div>`)
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
