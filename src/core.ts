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
  /**Particles in this PhysicsSystem */
  public particles: Particle[];
  /**Springs in this PhysicsSystem */
  public springs: Spring[];
  /**Options for this PhysicsSystem */
  public options: PhysicsSystemOptions;

  constructor(options?: PhysicsSystemOptions) {
    this.particles = [];
    this.springs = [];
    this.options = options || { gravityType: GravityType.None };
    this.options.gravityDirection = options ? options.gravityDirection || new Vector() : new Vector();
  }

  /**
   * Adds a Particle to the PhysicsSystem
   * @param p Particle to add
   */
  public addParticle(p: Particle) {
    this.particles.push(p);
  }

  /**
   * Adds a Spring to the PhysicsSystem
   * @param s Spring to add
   */
  public addSpring(s: Spring) {
    this.springs.push(s);
  }

  /**
   * Updates all of the Particles in the PhysicsSystem
   */
  public update() {
    // if there is a floor defined
    if (this.options.floorHeight)
      // then for each particle
      this.particles.forEach((p) => {
        // don't do anything if it has the noPhysics flag enabled
        if (p.noPhysics)
          return;
        // bounce off the floor
        if (p.position.y >= this.options.floorHeight)
          p.velocity.y *= -1;
        // otherwise react to gravity
        else
          p.applyForce(Vector.mult(this.options.gravityDirection, p.mass))
      });
    // otherwise just make each paticle react to gravity
    else if (this.options.gravityType % 2 == 1)
      this.particles.forEach((p) => p.noPhysics ? undefined :
        p.applyForce(Vector.mult(this.options.gravityDirection, p.mass)));

    // update all of the springs
    this.springs.forEach((s) => s.update());

    // update all of the particles
    this.particles.forEach((p) => p.update());
  }
}
