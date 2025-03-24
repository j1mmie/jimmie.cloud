
const debugStyle = {
  'position':    'fixed',
  'top':         '0',
  'left':        '0',
  'background':  'rgba(0, 0, 0, 0.4)',
  'color':       'white',
  'font-size':   '14px',
  'z-index':     '1000',
  'padding':     '10px',
  'border':      '1px solid black',
  'white-space': 'pre-wrap',
  'max-height':  '200px',
  'overflow-y':  'auto',

}

class DebugLog {
  private _creationTime = new Date().getTime()
  private _div?:HTMLDivElement

  private _get() {
    this._div = document.getElementById('debug') as HTMLDivElement
    if (this._div) {
      return this._div
    }

    this._div = document.createElement('div')
    this._div.id = 'debug'

    for (const [key, val] of Object.entries(debugStyle)) {
      this._div.style.setProperty(key, val)
    }

    document.body.appendChild(this._div)

    return this._div
  }

  public info(message:string) {
    const timestamp = (new Date().getTime()) - this._creationTime
    const timestampStr = timestamp.toString()
    const timestampLen = timestampStr.length
    const paddingLen = 8 - timestampLen
    const padding = ' '.repeat(paddingLen)

    const formattedMessage = `${padding}${timestamp}: ${message}`
    const line = document.createElement('div')
    const content = document.createTextNode(formattedMessage)
    line.appendChild(content)

    const parent = this._get()
    const wasScrolledToBottom = this.isScrolledToBottom()

    const lineCount = parent.childNodes.length

    if (lineCount > 10) {
      parent.childNodes[0].remove()
    }

    parent.appendChild(line)

    if (wasScrolledToBottom) {
      this.scrollToBottom()
    }

    return line
  }

  public warn(message:string) {
    const line = this.info(message)
    line.style.color = 'yellow'
    return line
  }

  public error(message:string) {
    const line = this.info(message)
    line.style.color = 'red'
    return line
  }

  public isScrolledToBottom() {
    const div = this._get()
    return div.scrollHeight - div.clientHeight <= div.scrollTop + 1
  }

  public scrollToBottom() {
    const div = this._get()
    div.scrollTop = div.scrollHeight
  }

}


let _debugDiv:DebugLog

export function getDebugLogger() {
  if (!_debugDiv) {
    _debugDiv = new DebugLog()
  }

  return _debugDiv
}
