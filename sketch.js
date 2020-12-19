

var fireball,fireballImg;


function preload(){
  fireballImg = loadImage("fireball1.png");
}

function setup() {
  createCanvas(400, 400);
  fireball = createSprite(200,200,10,10)
}

function draw() {
  background(220);
  drawSprites();
}