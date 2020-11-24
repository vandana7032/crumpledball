
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1;
var paperObject;
var world;
var dustbin_img;
function preload()
{
dustbin_img=loadImage("dustbin.png");	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(600,400,1200,20);

	paperObject=new Paper(230,255,70);

	dustbin1=new Dustbin(900,385,130,10);
	dustbin2=new Dustbin(830,305,10,150);
	dustbin3=new Dustbin(960,305,10,150);
	console.log(dustbin1);  

	Engine.run(engine);

  
}


function draw() {
	background("pink");
  rectMode(CENTER);
  ground.display();
  paperObject.display();
  dustbin1.display(); 
  dustbin2.display(); 
  dustbin3.display(); 

  image(dustbin_img,810,210,180,180);
  
  text("Press up arrow to throw the paper into the dusbin",200,200);
  text("Press ctrl+r to play again",200,250);
}

function keyPressed(){
	if(keyCode===UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:830,y:-830});
	}
}
