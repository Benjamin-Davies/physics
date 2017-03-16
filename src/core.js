"use strict";
var particle_1 = require("./particle");
exports.Particle = particle_1.Particle;
var math = require("./math");
exports.math = math;
/**The different kinds of gravity a PhysicsSystem can have */
(function (GravityType) {
    /**No gravity */
    GravityType[GravityType["None"] = 0] = "None";
    /**The whole world is pulled in one direction (eg. down) */
    GravityType[GravityType["WholeWorld"] = 1] = "WholeWorld";
    /**All objects attract each other */
    GravityType[GravityType["ObjectAttraction"] = 2] = "ObjectAttraction";
    /**Both types of gravity */
    GravityType[GravityType["Both"] = 3] = "Both";
})(exports.GravityType || (exports.GravityType = {}));
var GravityType = exports.GravityType;
/**A system of Particles and other physics objects */
var PhysicsSystem = (function () {
    function PhysicsSystem(options) {
        this.options = options || { gravityType: GravityType.None };
        this.options.gravityDirection = options.gravityDirection || new math.Vector();
    }
    /**
     * Adds a Particle to the PhysicsSystem
     * @param p Particle to add
     */
    PhysicsSystem.prototype.addParticle = function (p) {
        this.particles.push(p);
    };
    /**
     * Updates all of the Particles in the PhysicsSystem
     */
    PhysicsSystem.prototype.update = function () {
        var _this = this;
        if (this.options.gravityType % 2 == 1)
            this.particles.forEach(function (p) {
                return p.applyForce(math.Vector.mult(_this.options.gravityDirection, p.mass));
            });
        this.particles.forEach(function (p) { return p.update(); });
    };
    return PhysicsSystem;
}());
exports.PhysicsSystem = PhysicsSystem;
