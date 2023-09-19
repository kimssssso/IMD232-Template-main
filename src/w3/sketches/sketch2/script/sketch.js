let pos;
let vel;
let radius = 50;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  pos = createVector(width / 2, height / 2);
  vel = createVector(3, 5);
  console.log(pos);
  console.log(vel);
  ellipes(pos.x, pos.y, 50);
}

function draw() {
  background(255);
  pos.add(vel);
  // if (pos.x < 0) {
  //   vel.x *= -1;
  // } else if (pos.x > width) {
  //   vel.x *= -1;
  // }
  if (pos.x < 0 || pos.x + radius > width) {
    vel.x *= -1;
  }
  if (pos.y < 0 || pos.y + radius > height) {
    vel.y *= -1;
  }
  ellipes(pos.x, pos.y, 2 * radius);
}

let pos;
let vel;
let acc;
let radius = 50;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  pos = createVector(width / 2, height / 2);
  vel = createVector(0, 0);
  acc = createVector();
  console.log(pos);
  console.log(vel);
  ellipes(pos.x, pos.y, 50);
}

function draw() {
  background(255);
  pos.add(vel);
  // if (pos.x < 0) {
  //   vel.x *= -1;
  // } else if (pos.x > width) {
  //   vel.x *= -1;
  // }
  if (pos.x < 0 || pos.x + radius > width) {
    vel.x *= -1;
  }
  if (pos.y < 0 || pos.y + radius > height) {
    vel.y *= -1;
  }
  ellipes(pos.x, pos.y, 2 * radius);
}
