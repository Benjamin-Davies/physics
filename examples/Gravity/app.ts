/// <reference path="../../src/core.ts" />
/// <reference path="../../src/math.ts" />
/// <reference path="../../src/particle.ts" />

// initialize a PhysicsSystem
var physics = new PhysicsSystem({
  gravityType: GravityType.WholeWorld,
  gravityDirection: new Vector(0, 1)
});

function setup() {
  createCanvas(600, 500);
}

function draw() {
  background(0);
  physics.update();
  physics.particles.forEach((p) => {
    ellipse(p.position.x, p.position.y, 0, 0);
  });
}
