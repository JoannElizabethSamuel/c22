const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var fairy,fairyImg;
var star,starImg;
var back,backImg;

function preload()
{
   fairyImg = loadImage("images/fairy.png");
   starImg = loadImage("images/star.png");
   backImg = loadImage("images/starnight.png")
}

function setup() {
  createCanvas(800, 750);
  
  star = createSprite(400,200,20,20);
  star.addImage(starImg);
  star.scale = 0.2;

  fairy = createSprite(400,200,20,20);
  fairy.addImage(fairyImg);
  fairy.scale = 0.1;

  engine = Engine.create();
	world = engine.world;

  starBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
  World.add(world, starBody);

}


function draw() {
  background(backImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  drawSprites();
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    star.x = star.x+5;
    fairy.x = fairy.x+5;
  }

  if(keyCode === LEFT_ARROW){
    star.x = star.x-5;
    fairy.x = fairy.x-5;
  }

  if(keyCode === DOWN_ARROW){
    Matter.Body.setStatic(starBody,false);
  }
}

