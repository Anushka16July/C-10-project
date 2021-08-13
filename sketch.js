var ship,edges,seaImage,shipImage;

function preload(){
  seaImage = loadImage("sea.png")
  shipImage = loadImage("ship-1.png")

}

function setup(){
  createCanvas(400,400);
  
  
  //creating sea 
   sea=createSprite(200,130);
  sea.addImage("sea",seaImage)
  sea.x = sea.width /2;
  sea.velocityX = -4;
  
  //creating ship
  ship = createSprite(95,250);
  ship.addAnimation("ship", shipImage);
  edges = createEdgeSprites();
  ship.scale = 0.1;

}

function draw() {
  background("0");


//code to reset background
if(sea.x < 0 ){
  sea.x = sea.width/2;
}

 drawSprites();

}