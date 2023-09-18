function setup() {
  setCanvasContainer('p5-canvas', 3, 2, true);
  background('white');
}

function draw() {
  background(255);

  rectMode(CORNER);
  fill(255);
  colorMode(RGB);

  rectMode(CENTER);
  fill(200, 150, 100);
  rect(500, 595, 1000, 300); //바닥
  fill(250, 250, 200);
  rect(500, 200, 1000, 450); //벽지
  fill(250, 150, 150);
  quad(100, 550, 800, 550, 700, 470, 170, 470); //카펫

  fill(100, 50, 50); //창문
  rect(200, 140, 300, 200, 5);
  fill(50, 210, 280);
  rect(200, 140, 280, 180);
  fill(250, 200, 0);
  ellipse(250, 100, 50, 50);

  rectMode(CORNER);

  fill(100, 100, 100);
  rect(615, 400, 15, 110); //의자
  rect(710, 400, 15, 110);
  rect(710, 300, 15, 110);
  fill(190, 180, 150);
  rect(700, 260, 35, 70, 5);
  rect(605, 398, 130, 30, 5);

  fill(100, 100, 100); //테이블
  rect(250, 330, 380, 30, 5);
  rect(590, 340, 20, 170);
  rect(270, 340, 20, 170);
  fill(190, 180, 150); //테이블
  rect(250, 330, 380, 20, 5);

  fill(50, 50, 50);
  rect(450, -50, 7, 200); //조명
  fill(250, 150, 100);
  rect(404, 150, 95, 25); //조명

  arc(350, 300, 80, 80, 0, PI + QUARTER_PI, CHORD);
}
