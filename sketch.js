var ground, ground_image
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  ground_image = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  ground = createSprite(200,180,400,20)
  ground.addImage("ground", ground_image )
  ground.x = ground.width/2


  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  trex.x = 50;  
}

function draw(){
  background("white")
ground.velocityX = -  2
console.log(ground.x)
if(ground.x < 0){
  ground.x = ground.width/2  
}


if(keyDown("space")) {
trex.velocityY = -10 
}
trex.velocityY = trex.velocityY + 0.5
trex.collide(ground)

  drawSprites();

} 