class Emitter {
  constructor(){
    this.emittingPos;
    this.balls = [];
  }

  createBall(){
    this.balls.push(new Ball(this.emittingPos.x, this.emittingPos.y, random(1,5), random(360), 100, 50));
  }

  createBall(){
    this.balls.push(
      new Ball(
        this.emittingPos.x,
        this.emittingPos.y,
        random(1, 5),
        random(360),
        100,
        50
      )
    );
  }

  applyForce(force) {
    this.balls.forEach((each) => {
each.applyForce(force);
    });
  }
  update(){
    this.balls.forEach((each) => {
      each.update();
    });
  }


}



class Ball {
  constructor(posX, posY, mass, h, s, v) {
    this.pos = createVector(posX, posY);
    this.vel = createVector();
    this.acc = createVector();
    this.mas = mass;
    this.rad = mass**0.5*5;
    this.color = color(h, s, l);
  }

  applyForce(force) {
    const calceAcc = force.div(this.mass);
    this.acc.add(calcedAcc);
  }

  update() {
    this.vel.add(this.acc);
    //this.vel.limit(5);
    this.pos.add(this.vel);
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.pos.x, this.pos.y, 2 * this.rad);
  }
}

let emitter;
let balls = [];
let gravity;
let wind;

function setup() {
  setCanvasContainer('canvas', 2, 1, true);

colorMode(HSL, 360, 100, 100);
for(let n = 0; n < 10; n++) {
  balls.push(new ball(random(width), 0, random(1,20),random(360) 100, 50))
}

gravity = createVector(0,0.1);
wind = createVector(0.5, 0);

  background(255);
}

function draw() {
  background(255);
  balls.forEach((each) => {
const scaledG = p5.Vector.mult(gravity, each.mass);
each.applyForce(scaledG);
each.applyForce(wind);
each.update();
each.display();
  });
}

function mousePressed() {
  for(let n = 0; n < balls.length; n++) {
    balls[n] = new ball(random(width), 0, random(1,20),random(360), 100, 50);
  }
}