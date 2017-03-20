import { Vector } from "./math";
/**
 * Particle
 */
export class Particle {
    constructor(pos, vel, mass) {
        this.position = pos;
        this.velocity = vel || new Vector();
        this.mass = mass || 1;
        this.acceleration = new Vector();
    }
    /**
     * Apply a force to the current Particle
     * @param f Force to apply as a Vector
     */
    applyForce(f) {
        this.acceleration.add(Vector.div(f, this.mass));
    }
    /**
     * Updates the Particle
     */
    update() {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    }
}
