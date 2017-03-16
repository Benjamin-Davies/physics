import { Vector } from "./math";

/**
 * Particle
 */
export class Particle {
  public position: Vector;
  public velocity: Vector;
  public mass: number;
  private acceleration: Vector;

  constructor(pos: Vector, vel?: Vector, mass?: number) {
    this.position = pos;
    this.velocity = vel || new Vector();
    this.mass = mass || 1;
    this.acceleration = new Vector();
  }

  /**
   * applyForce
   */
  public applyForce(f: Vector) : void {
    this.acceleration.add(Vector.scale(f, 1 / this.mass));
  }
}
