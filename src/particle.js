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
     * applyForce
     */
    Particle.prototype.applyForce = function (f) {
        this.acceleration.add(math_1.Vector.scale(f, 1 / this.mass));
    };
    return Particle;
}());
exports.Particle = Particle;
