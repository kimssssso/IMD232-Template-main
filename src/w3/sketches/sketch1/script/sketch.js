let posX;
let posY;
let posXdd = 3;
let posYAdd = -2;

function setup() {
  setCanvasContainer('mySketchGoesHere', 3, 2, true);
  background(255);
  posX = width / 2;
  posY = height / 2;
  ellipse(posX, posY, 50);
}

function draw() {
  background(255);
  posX += 5;
  // posX = posX + 1;
  // posX += 1;
  posY += 3;
  ellipse(posX, posY, 50);
}
