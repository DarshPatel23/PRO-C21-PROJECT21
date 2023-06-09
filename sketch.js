const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var groundObj;
var leftSide;
var rightSide;
var radius = 20

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);
	engine = Engine.create();
    world = engine.world;

var ball_options={
	isStatic:false,
	restituition:0.3,
	friction:0,
	density:1.2
}

    groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);
	rightSide = new Ground(800,600,20,120)


	//Create the Bodies Here.
	ball = Bodies.circle(50,100,20,ball_options);
	World.add(world,ball);

	fill("white")

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,radius,radius);
  groundObj.display();
  leftSide.display()
  rightSide.display()
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
}

