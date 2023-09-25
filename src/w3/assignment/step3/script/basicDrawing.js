let pos;
let vel;
let acc;

function setup() {
  createCanvas(400, 400);
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
}

function draw() {
  background(220);
  let mouseVector = createVector(mouseX, mouseY);
  let centerToMouse = p5.Vector.sub(mouseVector, pos);
  centerToMouse.normalize();
  centerToMouse.mult(0.1);

  acc = centerToMouse;

  vel.add(acc);
  pos.add(vel);

  fill('black');
  ellipse(pos.x, pos.y, 50, 50);

  line(
    pos.x,
    pos.y,
    pos.x + centerToMouse.x * 100,
    pos.y + centerToMouse.y * 100
  );

  let accVector = acc.copy();
  accVector.mult(100);
  stroke(0, 0, 0);
  line(pos.x, pos.y, pos.x + accVector.x, pos.y + accVector.y);

  let velVector = vel.copy();
  velVector.mult(10);
  stroke(0, 0, 0);
  line(pos.x, pos.y, pos.x + velVector.x, pos.y + velVector.y);
}
