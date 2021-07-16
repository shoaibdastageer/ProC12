
var trackImage;
var runnerImage;

function preload(){
  //pre-load images
  trackImage = loadImage("path.png");
  runnerImage = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(362,500);
  
  //create sprites here
  track=createSprite(180,200,20,20);
  track.addImage(trackImage);
 
  surfer=createSprite(190,400,20,20)
  surfer.addAnimation("runner",runnerImage)

  track.velocityY=5;
  track.scale=1.2;
 
 surfer.scale=0.08
  
}

function draw() {
  background("blue");
  
  if (keyWentDown("right")){
    surfer.VelocityX=2;
  }

  if (keyDown("left")){
    surfer.VelocityX=-2;
  }





  if (track.y>400){
    track.y = height/2;
  }



  drawSprites()
}
