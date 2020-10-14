//constants 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
// creating my variables
var ground, gameState,engine, world,dustbin,paper;
function setup() {
  // creating canvas 
  createCanvas(800, 400);
  rectMode(CENTER);
  //declarijng gamestate
  gameState = "start";
  //creating Matter.js engine
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  //creating the dustbin,paper, and ground
  dustbin = new DustBin(720, 390, 100, 10);
  paper = new Paper(100, 300, 10);
  ground = Bodies.rectangle(width / 2, 400, width, 10,
  {
    //making isStatic true
    isStatic: true
  });
  //adding ground to the world
  World.add(world, ground);
}

function draw() {
  //setting start screen
  if (gameState === "start") {
    background("black");
    textSize(20);
    fill("red");
    text("This is small game that will teach you the importance of throwing away your trash. \n                 Press Up Arrow to Start, and Up to throw away the trash.", 50, 200)
    //if up arrow is pressed change gamestate
    if (keyCode === UP_ARROW) {
      gameState = "play"
    }
  }
  //when the gamestate is play display dustbin and paper
  if (gameState === "play") {
    rectMode(CENTER);
    background(0);
    dustbin.display();
    paper.display();

  }
}

//when key is pressed make ball jump based on how longyou hold it
function keyPressed(){
  if (keyCode === UP_ARROW && gameState === "play") {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 12,
      y: -13
    });
  }
}
