function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background('white');
}

function draw() {}
let pos;
let vel;
let acc;

function setup() {
  createCanvas(400, 400);
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
}

let randomAcc = p5.Vector.random2D();
randomAcc.mult(2);
acc = randomAcc;
vel.add(acc);
pos.add(vel);
if (pos.x > width) {
  pos.x = 0;
} else if (pos.x < 0) {
  pos.x = width;
}
if (pos.y > height) {
  pos.y = 0;
} else if (pos.y < 0) {
  pos.y = height;
}

noFill();
stroke(0);
ellipse(pos.x, pos.y, 50, 50);

let mouseVector = createVector(mouseX, mouseY);
let centerToMouse = p5.Vector.sub(mouseVector, pos);
centerToMouse.mult(10);
line(pos.x, pos.y, pos.x + centerToMouse.x, pos.y + centerToMouse.y);

let accVector = acc.copy();
accVector.mult(100);
stroke(255, 0, 0);
line(pos.x, pos.y, pos.x + accVector.x, pos.y + accVector.y);

let velVector = vel.copy();
velVector.mult(10);
stroke(0, 0, 255);
line(pos.x, pos.y, pos.x + velVector.x, pos.y + velVector.y);
