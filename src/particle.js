"use strict";
var math_1 = require("./math");
/**
 * Particle
 */
var Particle = (function () {
    function Particle(pos, vel, mass) {
        this.position = pos;
        this.velocity = vel || new math_1.Vector();
        this.mass = mass || 1;
        this.acceleration = new math_1.Vector();
    }
    /**
     * Apply a force to the current Particle
     * @param f Force to apply as a Vector
     */
    Particle.prototype.applyForce = function (f) {
        this.acceleration.add(math_1.Vector.div(f, this.mass));
    };
    /**
     * Updates the Particle
     */
    Particle.prototype.update = function () {
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.mult(0);
    };
    return Particle;
}());
exports.Particle = Particle;
