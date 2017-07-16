/**
 * Particle
 * A single zero volume object with mass
 */
var Particle = (function () {
    function Particle(pos, vel, mass, noPhysics) {
        this.position = pos;
        this.velocity = vel || new Vector();
        this.mass = mass || 1;
        this.noPhysics = noPhysics;
    }
    /**
     * Apply a force to the current Particle
     * @param f Force to apply as a Vector
     */
    Particle.prototype.applyForce = function (f) {
        this.velocity.add(Vector.div(f, this.mass));
    };
    /**
     * Updates the Particle
     */
    Particle.prototype.update = function () {
        this.position.add(this.velocity);
    };
    return Particle;
}());
//# sourceMappingURL=particle.js.map