"use strict";
/**
 * Vector
 */
var Vector = (function () {
    function Vector(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }
    Vector.prototype.add = function (v) {
        this.x += v.x;
        this.y += v.y;
    };
    Vector.add = function (v1, v2) {
        return new Vector(v1.x + v2.x, v1.y + v2.y);
    };
    Vector.scale = function (v, sf) {
        return new Vector(v.x * sf, v.y * sf);
    };
    return Vector;
}());
exports.Vector = Vector;
