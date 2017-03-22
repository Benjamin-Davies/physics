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
class PhysicsSystem {
    constructor(options) {
        this.particles = [];
        this.options = options || { gravityType: GravityType.None };
        this.options.gravityDirection = options.gravityDirection || new Vector();
    }
    /**
     * Adds a Particle to the PhysicsSystem
     * @param p Particle to add
     */
    addParticle(p) {
        this.particles.push(p);
    }
    /**
     * Updates all of the Particles in the PhysicsSystem
     */
    update() {
        if (this.options.gravityType % 2 == 1)
            this.particles.forEach((p) => p.applyForce(Vector.mult(this.options.gravityDirection, p.mass)));
        this.particles.forEach((p) => p.update());
    }
}
