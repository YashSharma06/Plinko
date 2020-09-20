const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var divisionHeight=300;
var divisions = [];
var plinkos = [];
var particles = [];

function setup() {
  canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  for(var k = 0;k<=width;k = k +80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight));
  }
  for(var j = 40;j<=width;j = j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j = 15;j<=width-10;j = j+50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j = 40;j<=width;j = j+50){
    plinkos.push(new Plinko(j,275));
  }
  for(var j = 15;j<=width-10;j = j+50){
    plinkos.push(new Plinko(j,375));
  }
  ground = new Ground(240, 790, 480, 20);
}

function draw() {
  background("black");  
  Engine.update(engine);

  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-20,width/2+20),10,10));
  }
  
  for(var k = 0;k< divisions.length;k++){
    divisions[k].display();
  }
  for(var k = 0;k< plinkos.length;k++){
    plinkos[k].display();
  }
  for(var k = 0;k< particles.length;k++){
    particles[k].display();
  }
  ground.display();
}