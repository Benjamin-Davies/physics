import { Particle } from "./particle";
import * as math from "./math";

export { Particle, math };

/**The different kinds of gravity a PhysicsSystem can have */
export enum GravityType {
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
export interface PhysicsSystemOptions {
  gravityType: GravityType;
  gravityDirection?: math.Vector;
}

/**A system of Particles and other physics objects */
export class PhysicsSystem {
  /**Options for this PhysicsSystem */
  public particles: Particle[];
  /**Particles in this PhysicsSystem */
  public options: PhysicsSystemOptions;

  constructor(options?: PhysicsSystemOptions) {
    this.options = options || { gravityType: GravityType.None };
    this.options.gravityDirection = options.gravityDirection || new math.Vector();
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
    if (this.options.gravityType % 2 == 1)
      this.particles.forEach((p: Particle) =>
<<<<<<< HEAD
        p.applyForce(math.Vector.mult(this.options.gravityDirection, p.mass)));
=======
        p.applyForce(math.Vector.mult(this.options.gravityDirection, p.mass));
>>>>>>> e36546539f3d37f83b3c1aa9fdb6a54625545e2f
    this.particles.forEach((p: Particle) => p.update());
  }
}
