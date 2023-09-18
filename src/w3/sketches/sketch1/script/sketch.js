let posX;
let posY;

function setup() {
  setCanvasContainer('canvas', 3, 2, true);
  background(255);
  posX = width / 2;
  posY = height / 2;
}

function draw() {
  background(255);
  ellipes(posX, posY, 50);
  posX++;
  // posX = posX + 1;
  // posX += 1;
}
