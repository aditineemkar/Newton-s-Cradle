const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	bob1=new Bob(300,350,20);
	bob2=new Bob(350,350,20);

	bob3=new Bob(400,350,20);
	bob4=new Bob(450,350,20);

	bob5=new Bob(500,350,20);

	ground1 = new Ground(400,100,300,40);
	sling1= new Rope(bob1.body,ground1.body,-80,0);
	
	sling2= new Rope(bob2.body,ground1.body,-40,0);

	sling3= new Rope(bob3.body,ground1.body,0,0);

	sling4= new Rope(bob4.body,ground1.body,40,0);

	sling5= new Rope(bob5.body,ground1.body,80,0);

	
}


function draw() {
  background("Blue");
  Engine.update(engine);
  textSize(20);
  stroke("red")
  text("Press up arrow first and then immediately down arrow",160,50);
  rectMode(CENTER);
  bob1.display();
  bob2.display();
  bob3.display();
  bob3.display();
  bob4.display();
  bob5.display();
  ground1.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  drawSprites ();
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-70,y:-65});  
	}
	if (keyCode === DOWN_ARROW) {
	  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:70,y:65});  
	}

}
