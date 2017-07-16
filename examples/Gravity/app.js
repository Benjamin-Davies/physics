/// <reference path="../../src/core.ts" />
/// <reference path="../../src/math.ts" />
/// <reference path="../../src/particle.ts" />
// initialize a PhysicsSystem
var physics = new PhysicsSystem({
    gravityType: GravityType.WholeWorld,
    gravityDirection: new Vector(0.01, 1)
});
function setup() {
    createCanvas(600, 500);
    physics.options.floorHeight = height;
}
function draw() {
    background(0, 200);
    stroke(0);
    fill(255);
    physics.update();
    physics.particles.forEach(function (p) { return ellipse(p.position.x, p.position.y, 20, 20); });
    text("Particles: " + physics.particles.length, 10, 10, width - 20, height - 20);
}
function mousePressed() {
    physics.addParticle(new Particle(new Vector(mouseX, mouseY)));
}
//# sourceMappingURL=app.js.map