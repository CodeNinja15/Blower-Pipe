function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  ball = new ball();
  blower = new blower();
  blowermouth = new blowermouth();
}

function draw() {
  background(255,255,255);  
  drawSprites();

  ball.display();
  blower.display();
  blowermouth.display();

  button = createButton("Click to Blow");
  button.position(width/ 2, height - 100);
  button.class("blowButton");
  button.mousePressed(blow);
}

function blow() {
  Matter.Body.applyForce(ball.body, {x: 0, y: 0}, {x: 0, y: 0.05});
}