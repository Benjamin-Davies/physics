/**
 * A Two-Dimensional Vector.
 */
class Vector {
  /**The X component of the Vector */
  public x: number;
  /**The Y component of the Vector */
  public y: number;

  constructor(x?: number, y?: number) {
    this.x = x || 0;
    this.y = y || 0;
  }

  /**
   * Add a Vector to the current Vector
   * @param {Vector} v - The Vector to add
   */
  public add(v: Vector): void {
    this.x += v.x;
    this.y += v.y;
  }

  /**
   * Multiplies the Vector by a number
   * @param sf Scaling factor
   */
  public mult(sf: number): void {
    this.x *= sf;
    this.y *= sf;
  }

  /**
   * Divides the Vector by a number
   * @param sf Scaling factor
   */
  public div(sf: number): void {
    this.x /= sf;
    this.y /= sf;
  }

  /**
   * Returns the magnitude of the Vector
   */
  public mag(): number {
    return Math.sqrt(this.x*this.x + this.y*this.y);
  }

  /**
   * Returns the magnitude squared
   * Much faster than Vector.mag as it does not involve Math.sqrt
   */
  public magSq(): number {
    return this.x*this.x + this.y*this.y;
  }

  /**
   * Adds two Vectors
   * @param v1 First Vector
   * @param v2 Second Vector
   */
  static add(v1: Vector, v2: Vector): Vector {
    return new Vector(v1.x + v2.x, v1.y + v2.y);
  }

  /**
   * Multiplies a Vector by a number
   * @param v The Vector to multiply
   * @param sf Scaling factor
   */
  static mult(v: Vector, sf: number): Vector {
    return new Vector(v.x * sf, v.y * sf);
  }

  /**
   * Divides a Vector by a number
   * @param v The Vector to divide
   * @param sf Scaling factor
   */
  static div(v: Vector, sf: number): Vector { 
    return new Vector(v.x / sf, v.y / sf);
  }
}
