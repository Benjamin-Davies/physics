/**
 * Particle
 * A single zero volume object with mass
 */
class Particle {
  public position: Vector;
  public velocity: Vector;
  public mass: number;
  public noPhysics: boolean;

  constructor(pos: Vector, vel?: Vector, mass?: number, noPhysics?: boolean) {
    this.position = pos;
    this.velocity = vel || new Vector();
    this.mass = mass || 1;
    this.noPhysics = noPhysics;
  }

  /**
   * Apply a force to the current Particle
   * @param f Force to apply as a Vector
   */
  public applyForce(f: Vector) : void {
    this.velocity.add(Vector.div(f, this.mass));
  }

  /**
   * Updates the Particle
   */
  public update() {
    this.position.add(this.velocity);
  }
}
