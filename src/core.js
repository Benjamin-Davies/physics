/// <reference path="./math.ts" />
/// <reference path="./particle.ts" />
/**The different kinds of gravity a PhysicsSystem can have */
var GravityType;
(function (GravityType) {
    /**No gravity */
    GravityType[GravityType["None"] = 0] = "None";
    /**The whole world is pulled in one direction (eg. down) */
    GravityType[GravityType["WholeWorld"] = 1] = "WholeWorld";
    /**All objects attract each other */
    GravityType[GravityType["ObjectAttraction"] = 2] = "ObjectAttraction";
    /**Both types of gravity */
    GravityType[GravityType["Both"] = 3] = "Both";
})(GravityType || (GravityType = {}));
/**A system of Particles and other physics objects */
var PhysicsSystem = (function () {
    function PhysicsSystem(options) {
        this.particles = [];
        this.options = options || { gravityType: GravityType.None };
        this.options.gravityDirection = options.gravityDirection || new Vector();
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
        if (this.options.floorHeight)
            this.particles.forEach(function (p) {
                if (p.position.y >= _this.options.floorHeight)
                    p.velocity.y *= -1;
                else
                    p.applyForce(Vector.mult(_this.options.gravityDirection, p.mass));
            });
        else if (this.options.gravityType % 2 == 1)
            this.particles.forEach(function (p) {
                return p.applyForce(Vector.mult(_this.options.gravityDirection, p.mass));
            });
        this.particles.forEach(function (p) { return p.update(); });
    };
    return PhysicsSystem;
}());
