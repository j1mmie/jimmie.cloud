export class Maths {
  public static clamp(value:number, min:number, max:number) {
    if (max < min) {
      const temp = min
      min = max
      max = temp
    }

    return Math.max(min, Math.min(max, value))
  }

  public static lerp(start:number, end:number, t:number) {
    return start + (end - start) * t
  }
}
