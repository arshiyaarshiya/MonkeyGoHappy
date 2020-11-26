var monkey , monkey_running, ground;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score = 0;

function preload(){
  
  
  monkey_running = loadAnimation ("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
   bananaImage = loadImage("banana.png");
   obstacleImage = loadImage("obstacle.png");
  
  foodGroup = new Group();
  obstacleGroup = new Group ();
}



function setup() {
  
  createCanvas(400,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;

  ground = createSprite (400, 350, 900, 10);
  ground.velocityX=-10;
  
  
}


function draw() {
  background ("lightgray");
  
  monkey.collide(ground);
  
  if(keyDown("space") && monkey.y > 300){
    monkey.velocityY = -10;
  }
  
  if (ground.x > 0){
    ground.x = ground.width/2
  }
  
  monkey.velocityY = monkey.velocityY + 0.3;
  
  
  stroke( "white");
  textSize(20);
  fill("black");
  
  score = Math.round(frameCount/30);
  text("Survival Time : " + score,100,50);
  
  food ();
  obstacles ();
  
  drawSprites();
}

function food (){
  if (frameCount % 80 === 0){
    banana = createSprite (400,200,20,20);
    banana.velocityX = -5;
    banana.addImage (bananaImage);
    banana.scale = 0.09;
    banana.lifetime = 100;
    banana.y = Math.round(random(120,200));
    foodGroup.add(banana);
  }
}

function obstacles (){
  if (frameCount % 300 === 0){
    obstacle = createSprite (400,340,20,20);
    obstacle.velocityX = -5;
    obstacle.addImage (obstacleImage);
    obstacle.scale = 0.09;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  }
}