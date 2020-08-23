
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,tree,stone,mango1,mango2,mango3,mango4;
var boy,boyImage;

function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(1000,500);


	engine = Engine.create();
	world = engine.world;

	

ground = new Ground(500,450,1000,20);
tree = new Tree(800,250,350,480);
stone = new Stone(400,400,2,2);
mango1 = new Mango(800,350,100);
mango2 = new Mango(760,320,100);
mango3 = new Mango(810,330,100);
mango4 = new Mango(800,3450,100);
slingShot = new SlingShot(stone.body,{x:100,y:400});
	Engine.run(engine);
}



function draw() {
  rectMode(CENTER);
  background("yellow");
  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  boy = createSprite(100,400,50,100);
  boy.addImage(boyImage);
  boy.scale = 0.1;
  slingShot.display(); 
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}