const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground,ground2;

var score=0;
var turn=0;

var particle;

var gameState = "play";



var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
    world = engine.world;

    ground=new Ground(100,800,1000,20);
    
    ground2 = new Ground(100,450,1000,10);
    
 
}

function draw() {
  background(0);  
  Engine.update(engine);
  text("Score "+score, width-300,50)

  
  ground.display();
  ground2.display();

  text("500",30,510);
  text("500",120,510);
  text("500",200,510);
  text("500",290,510);
  text("100",350,510);
  text("200",450,510);

 


  for (var k = 0; k <=innerWidth; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));

    
  }

  for (var j = 40; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 15; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 30; j <=width-20; j=j+50) {
    plinkos.push(new Plinko(j,275));
  }

  for (var j = 10; j <=width-30; j=j+50) {
    plinkos.push(new Plinko(j,375));
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10));

  }

  for (var j = 0; j < particles.length; j++) {

    particles[j].display();
  }
  for (var k = 0; k < divisions.length; k++) {
    
    divisions[k].display();
  }

  for (var m = 0; m < plinkos.length; m++) {
    plinkos[m].display();
  }

  

  drawSprites();
}



function mousePressed() {
  if(gameState!=="end"){
    count++;
    particle=new Particle(mouseX, 10,10,10);
  }
}