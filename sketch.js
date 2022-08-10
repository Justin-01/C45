var canvas;
var sub;
var edges;
var subImage;
var backgorundImage;
var stoneImage;
var obstacleGroup;

function preload(){ 
  subImage = loadImage('sub.png')
  backgroundImage = loadImage('background.jpg')
  stoneImage = loadImage('stone.png')
} 

function setup() { 
 canvas = createCanvas(1000,1000); 
 sub = createSprite(200,200,50,50)
 sub.addImage(subImage);
 edges = createEdgeSprites()
 sub.scale = 0.4

 obstacleGroup = new Group()


 for(var i = 0;i<50;i++){
  x = random(100,900);
  y = random(100,900)
  var obstacle = createSprite(x,y,50,50); 
  obstacle.addImage(stoneImage);
  obstacle.scale = 0.2;
  obstacleGroup.add(obstacle)
 }
} 

function draw() { 
  background(backgroundImage); 
  if(keyDown("right")){
    sub.x = sub.x + 2;
  }
  if(keyDown("left")){
    sub.x = sub.x - 2;
  }
  if(keyDown("down")){
    sub.y = sub.y + 2;
  }
  if(keyDown("up")){
    sub.y = sub.y - 2;
  }
  

  sub.bounceOff(edges)
  drawSprites(); 
}

