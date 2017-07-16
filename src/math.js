/**
 * A Two-Dimensional Vector.
 */
var Vector = (function () {
    function Vector(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }
    /**
     * Add a Vector to the current Vector
     * @param {Vector} v - The Vector to add
     */
    Vector.prototype.add = function (v) {
        this.x += v.x;
        this.y += v.y;
    };
    /**
     * Subtracts a Vector from the current Vector
     * @param {Vector} v - The Vector to subtract
     */
    Vector.prototype.subtract = function (v) {
        this.x -= v.x;
        this.y -= v.y;
    };
    /**
     * Multiplies the Vector by a number
     * @param sf Scaling factor
     */
    Vector.prototype.mult = function (sf) {
        this.x *= sf;
        this.y *= sf;
    };
    /**
     * Divides the Vector by a number
     * @param sf Scaling factor
     */
    Vector.prototype.div = function (sf) {
        this.x /= sf;
        this.y /= sf;
    };
    /**
     * Returns the magnitude of the Vector
     */
    Vector.prototype.mag = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    };
    /**
     * Returns the magnitude squared
     * Much faster than Vector.mag as it does not involve Math.sqrt
     */
    Vector.prototype.magSq = function () {
        return this.x * this.x + this.y * this.y;
    };
    /**
     * Returns a Vector with the same magnitude but facing in the opposite direction
     */
    Vector.prototype.negative = function () {
        return new Vector(-this.x, -this.y);
    };
    /**
     * Adds two Vectors
     * @param v1 First Vector
     * @param v2 Second Vector
     */
    Vector.add = function (v1, v2) {
        return new Vector(v1.x + v2.x, v1.y + v2.y);
    };
    /**
     * Subtracts one Vector from another
     * @param v1 First Vector
     * @param v2 Vector to subtract
     */
    Vector.subtract = function (v1, v2) {
        return new Vector(v1.x - v2.x, v1.y - v2.y);
    };
    /**
     * Multiplies a Vector by a number
     * @param v The Vector to multiply
     * @param sf Scaling factor
     */
    Vector.mult = function (v, sf) {
        return new Vector(v.x * sf, v.y * sf);
    };
    /**
     * Divides a Vector by a number
     * @param v The Vector to divide
     * @param sf Scaling factor
     */
    Vector.div = function (v, sf) {
        return new Vector(v.x / sf, v.y / sf);
    };
    return Vector;
}());
//# sourceMappingURL=math.js.map