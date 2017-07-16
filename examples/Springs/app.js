// initialize a PhysicsSystem
var physics = new PhysicsSystem();
function setup() {
    createCanvas(600, 500);
    var p1 = new Particle(new Vector(100, 250), new Vector(0, 5));
    var p2 = new Particle(new Vector(500, 250), new Vector(0, -5));
    var spring = new Spring(p1, p2);
    physics.addParticle(p1);
    physics.addParticle(p2);
    physics.addSpring(spring);
}
function draw() {
    background(0, 200);
    stroke(0);
    fill(255);
    physics.update();
    physics.particles.forEach(function (p) { return ellipse(p.position.x, p.position.y, 20, 20); });
}
//# sourceMappingURL=app.js.map