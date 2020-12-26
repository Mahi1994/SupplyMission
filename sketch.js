var helicopterIMG, helicopterSprite, packageSprite,packageIMG,box1,box2,box3;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	// groundSprite is not a Physics Engine body. So it will not have options
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {
		restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	

	ground = Bodies.rectangle(width/2, height-50, width, 10 , {isStatic:true} );
	
	World.add(world, ground);
	
	boxX = width/2-100;
	boxY = height-90;

 	box1=createSprite(boxX, boxY, 20,100);
 	box1.shapeColor=color("red");

 	box1Body = Bodies.rectangle(boxX+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, box1Body);

 	box2=createSprite(boxX+100, boxY+40, 200,20);
 	box2.shapeColor=color("red");

 	box2Body = Bodies.rectangle(boxX+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, box2Body);

 	box3 = createSprite(boxX+200 , boxY, 20,100);
 	box3.shapeColor=color("red");

 	box3Body = Bodies.rectangle(boxX+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, box3Body);

	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody,false);
		
	}

	// Add for Supply Mission 2 Project 
	
	else if (keyCode === RIGHT_ARROW) {
	  helicopterSprite.x=helicopterSprite.x+5;
	  translation={x:5,y:0}
	  Matter.Body.translate(packageBody, translation)
	}
	else if (keyCode === LEFT_ARROW) {
  
		helicopterSprite.x=helicopterSprite.x-5;    
		translation={x:-5,y:0}
		Matter.Body.translate(packageBody, translation)
	
	
	} 
}



