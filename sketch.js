
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground ;
var box1,box2,box3,box4,box5,box6,box7;
var box8,box9,box10,box11,box12,box13;
var box14,box15,box17,box18;
var ball;

function preload()
{
       



}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground=new Ground(300,600,600,20);
  box1=new Box(400,500,50,50)
  box2=new Box(400,500,50,50)
  box3=new Box(400,500,50,50)
  box4=new Box(400,500,50,50)
  box5=new Box(400,500,50,50)
  box6=new Box(400,500,50,50)
  box7=new Box(400,500,50,50)
  box8=new Box(450,500,50,50)
  box9=new Box(450,500,50,50)
  box10=new Box(450,500,50,50)
  box11=new Box(450,500,50,50)
  box12=new Box(450,500,50,50)
  box13=new Box(450,500,50,50)
  ball=new Ball(200,200,80,80)
  rope=new Rope(ball.body,{x:500,y:50})
  Engine.run(engine);
}



function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 box13.display();
 ball.display();
  
}


function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
