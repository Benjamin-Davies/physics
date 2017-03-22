/**
 * A Two-Dimensional Vector.
 */
class Vector {
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }
    /**
     * Add a Vector to the current Vector
     * @param {Vector} v - The Vector to add
     */
    add(v) {
        this.x += v.x;
        this.y += v.y;
    }
    /**
     * Multiplies the Vector by a number
     * @param sf Scaling factor
     */
    mult(sf) {
        this.x *= sf;
        this.y *= sf;
    }
    /**
     * Divides the Vector by a number
     * @param sf Scaling factor
     */
    div(sf) {
        this.x /= sf;
        this.y /= sf;
    }
    /**
     * Returns the magnitude of the Vector
     */
    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    /**
     * Returns the magnitude squared
     * Much faster than Vector.mag as it does not involve Math.sqrt
     */
    magSq() {
        return this.x * this.x + this.y * this.y;
    }
    /**
     * Adds two Vectors
     * @param v1 First Vector
     * @param v2 Second Vector
     */
    static add(v1, v2) {
        return new Vector(v1.x + v2.x, v1.y + v2.y);
    }
    /**
     * Multiplies a Vector by a number
     * @param v The Vector to multiply
     * @param sf Scaling factor
     */
    static mult(v, sf) {
        return new Vector(v.x * sf, v.y * sf);
    }
    /**
     * Divides a Vector by a number
     * @param v The Vector to divide
     * @param sf Scaling factor
     */
    static div(v, sf) {
        return new Vector(v.x / sf, v.y / sf);
    }
}
