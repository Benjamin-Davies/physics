/**
 * Spring
 * A spring that pulls two Particles together
 */
class Spring {
  public particle1: Particle;
  public particle2: Particle;
  public stiffness: number;

  constructor(p1: Particle, p2: Particle, stiffness: number = 0.001) {
    this.particle1 = p1;
    this.particle2 = p2;
    this.stiffness = stiffness;
  }

  /**
   * Updates the Spring
   */
  public update() {
    var force = Vector.subtract(this.particle1.position, this.particle2.position);
    force.mult(this.stiffness);

    this.particle1.applyForce(force.negative());
    this.particle2.applyForce(force);
  }
}
