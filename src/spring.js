/**
 * Spring
 * A spring that pulls two Particles together
 */
var Spring = (function () {
    function Spring(p1, p2, stiffness) {
        if (stiffness === void 0) { stiffness = 0.001; }
        this.particle1 = p1;
        this.particle2 = p2;
        this.stiffness = stiffness;
    }
    /**
     * Updates the Spring
     */
    Spring.prototype.update = function () {
        var force = Vector.subtract(this.particle1.position, this.particle2.position);
        force.mult(this.stiffness);
        this.particle1.applyForce(force.negative());
        this.particle2.applyForce(force);
    };
    return Spring;
}());
//# sourceMappingURL=spring.js.map