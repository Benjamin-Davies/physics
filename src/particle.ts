/// <reference path="math.ts" />

/**
 * Particle
 */
class Particle {
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
   * Apply a force to the current Particle
   * @param f Force to apply as a Vector
   */
  public applyForce(f: Vector) : void {
    this.acceleration.add(Vector.div(f, this.mass));
  }

  /**
   * Updates the Particle
   */
  public update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }
}
