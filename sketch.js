const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var hButton, vButton;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

hButton= createImg("right.png")
hButton.position(220,30)
hButton.size(50,50)
hButton.mouseClicked(horizontalForce)

vButton= createImg("up.png")
vButton.position(20,30)
vButton.size(50,50)
vButton.mouseClicked(verticalForce)

  var boptions={
    restitution: 0.5
  }
  ball = Bodies.circle(200,200,20,boptions);

  World.add(world,ball);
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
 ellipse(ball.position.x,ball.position.y,20)

  Engine.update(engine);
}

function horizontalForce(){

  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function verticalForce(){

  Matter.Body.applyForce(ball,{ x:0,y:0},{x:0,y:-0.05})
}
