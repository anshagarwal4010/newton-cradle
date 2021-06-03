const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof();
	 ball1 = new Ball(300,300);
   ball2 = new Ball(350,300);
   ball3 = new Ball(400,300);
   ball4 = new Ball(450,300);
   ball5 = new Ball(500,300);
	// //Create till ball5

	// //console.log(ball1.ball)

  // //Create rope objects
   rope1 = new Rope(ball1.bodies,{x:300,y:100})
   rope2 = new Rope(ball2.bodies,{x:350,y:100})
   rope3 = new Rope(ball3.bodies,{x:400,y:100})
   rope4 = new Rope(ball4.bodies,{x:450,y:100})
   rope5 = new Rope(ball5.bodies,{x:500,y:100})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");

  roof.display();

 
   ball1.display();
   ball2.display();
  ball3.display();
   ball4.display();
  ball5.display();


   rope1.display()
   rope2.display()
   rope3.display()
   rope4.display()
   rope5.display()
  
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === 32){
		console.log("spaceANSH")
    Matter.Body.applyForce(ball1.bodies,ball1.bodies.position,{x:-30,y:-30})
	}
}