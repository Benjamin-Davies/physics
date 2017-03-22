/// <reference path="./math.ts" />
/// <reference path="./particle.ts" />

/**The different kinds of gravity a PhysicsSystem can have */
enum GravityType {
  /**No gravity */
  None,
  /**The whole world is pulled in one direction (eg. down) */
  WholeWorld,
  /**All objects attract each other */
  ObjectAttraction,
  /**Both types of gravity */
  Both
}

/**The options for a PhysicsSystem */
interface PhysicsSystemOptions {
  gravityType: GravityType;
  gravityDirection?: Vector;
  floorHeight?: number;
}

/**A system of Particles and other physics objects */
class PhysicsSystem {
  /**Options for this PhysicsSystem */
  public particles: Particle[];
  /**Particles in this PhysicsSystem */
  public options: PhysicsSystemOptions;

  constructor(options?: PhysicsSystemOptions) {
    this.particles = [];
    this.options = options || { gravityType: GravityType.None };
    this.options.gravityDirection = options.gravityDirection || new Vector();
  }

  /**
   * Adds a Particle to the PhysicsSystem
   * @param p Particle to add
   */
  public addParticle(p: Particle) {
    this.particles.push(p);
  }

  /**
   * Updates all of the Particles in the PhysicsSystem
   */
  public update() {
    if (this.options.floorHeight)
      this.particles.forEach((p) => {
        if (p.position.y >= this.options.floorHeight)
          p.velocity.y *= -1;
        else
          p.applyForce(Vector.mult(this.options.gravityDirection, p.mass))
      });
    else if (this.options.gravityType % 2 == 1)
      this.particles.forEach((p) =>
        p.applyForce(Vector.mult(this.options.gravityDirection, p.mass)));
    this.particles.forEach((p) => p.update());
  }
}
