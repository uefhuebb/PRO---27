
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var dustbinObj,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	roofObject=new roof(width/2,height/4,width/7,20);
	d=40;
	x=width/2
	y=height/4+500;
	
	
	ball1=new Ball(x-2*d,y,d)
	ball2=new Ball(x-d,y,d)
	ball3=new Ball(x,y,d)
	ball4=new Ball(x+d,y,d);
	ball5=new Ball(x+2*d,y,d)
	
	rope1=new Rope(ball1.body,roofObject.body,-2*d,0);
	rope2=new Rope(ball2.body,roofObject.body,-d,0);
	rope3=new Rope(ball3.body,roofObject.body,0,0);
	rope4=new Rope(ball4.body,roofObject.body,d,0);
	rope5=new Rope(ball5.body,roofObject.body,2*d,0);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  roofObject.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();



}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-55,y:-55});
	}
}

