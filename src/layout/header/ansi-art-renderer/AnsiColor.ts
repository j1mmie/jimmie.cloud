export class AnsiColor {
  private _boldColorLookup?:Record<number, string> = {}
  private _standardColorLookup?:Record<number, string> = {}

  constructor(
    public fg:number    = 0,
    public bg:number    = 0,
    public bold:boolean = false,
  ) {

  }

  public processEscapeSequence(sequence:string):string {
    const colorCode = sequence.slice(2, -1)
    const colorParts = colorCode.split(';')

    for (let j = 0; j < colorParts.length; j++) {
      const colorPart = parseInt(colorParts[j])

      if (colorPart >= 30 && colorPart <= 37) {
        this.fg = colorPart
      } else if (colorPart >= 40 && colorPart <= 47) {
        this.bg = colorPart
      } else if (colorPart === 1) {
        this.bold = true
      } else if (colorPart === 0) {
        this.reset()
      }
    }

    return colorCode
  }

  public setColorClassLookup(lookup:Record<number, string>, bold:boolean) {
    if (bold) {
      this._boldColorLookup = lookup
    } else {
      this._standardColorLookup = lookup
    }
  }

  public getCurrentBestColorClassNames():string[] {
    const output:string[] = []

    const fgLookup = this.bold ? this._boldColorLookup : this._standardColorLookup
    const fgClass = fgLookup?.[this.fg]
    if (fgClass) {
      output.push(fgClass)
    }

    const bgClass = this._standardColorLookup?.[this.bg]
    if (bgClass) {
      output.push(bgClass)
    }

    return output
  }

  public reset() {
    this.fg = 0
    this.bg = 0
    this.bold = false
  }
}
