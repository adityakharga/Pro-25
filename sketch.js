
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  dustbin = loadImage("sprites/PRO-25_3.PNG")	
}

function setup()
 {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Rect1 = new Dustbin(790,610,20,75);
	Rect2 = new Dustbin(848,633,105,20)
	Rect3 = new Dustbin(890,570,20,125)
	Rect4 = new Dustbin(858,490,105,20)
  Ball = new Paper(20,640,40);
  G = new Ground(500,650,1000,15);
	Engine.run(engine);
  
}


function draw() 
{
  background(255); 
  Engine.update(engine);

  image(dustbin,760,530);

  keyPressed();
  Ball.display();
  Rect1.display();
  Rect2.display();
  Rect3.display();
  Rect4.display();
  G.display();

}

function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
  Matter.Body.applyForce(Ball.body,Ball.body.position,{x:10,y:-18.5});
  }
}


