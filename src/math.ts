/**
 * Vector
 */
export class Vector {

  public x: number;
  public y: number;

  constructor(x?: number, y?: number) {
    this.x = x || 0;
    this.y = y || 0;
  }

  public add(v: Vector): void {
    this.x += v.x;
    this.y += v.y;
  }

  static add(v1: Vector, v2: Vector): Vector {
    return new Vector(v1.x + v2.x, v1.y + v2.y);
  }

  static scale(v: Vector, sf: number) {
    return new Vector(v.x * sf, v.y * sf);
  }
}
