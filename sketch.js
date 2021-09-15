var cupboardImg, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8;
var jerry1Img, jerry2Img, jerry3Img, bg, bgImg, jerry_running;
var butch1Img, butch2Img, butch3Img;
var cheese1Img, cheese2Img, tom2, butch2;
var coinsImg, seathighlightImg;
var tom1Img, tom2Img, cheese1, cheese2, cheese3, cheese4, cheese5;
var gamestate="play";


function preload(){
  
  cupboardImg = loadImage("assets2/cupboard.PNG");
  jerry1Img= loadImage("assets2/jerry_Mouse.png");
  jerry2Img= loadImage("assets2/WHEN JERRY REACHED CHEESE.png");
  jerry3Img= loadImage("assets2/Mice-in-a-cage2.jpg");
  jerry_running= loadImage("assets2/jerry.png");
  butch1Img= loadImage("assets2/BUTCH LOOKING FOR JERRY.png");
  butch3Img= loadImage("assets2/happy butch.png");
  cheese1Img=loadImage("assets2/cheese.jpg");
  cheese2Img=loadImage("assets2/cheese 2.jpg");
  coinsImg=loadImage("assets2/coins.jpg");
  seathighlightImg= loadImage("assets2/seat highlight.jpg");
  tom1Img=loadImage("assets2/TOM LOOKING FOR JERRY.PNG");
  tom2Img = loadImage("assets2/tom happy.png");
  bgImg = loadImage("assets2/background.jpg")
}

function setup() {

  
  createCanvas(displayWidth-100,500);

  //adding the background image
  //bg = createSprite(displayWidth-100,500)
  //bg.addImage(bgImg)
  //bg.scale = 5.0
  


tom1= createSprite(100,200)
tom1.addImage(tom1Img)
tom1.scale=0.05

tom2= createSprite(550,300)
tom2.addImage(tom1Img)
tom2.scale=0.05

jerry1= createSprite(1198,470)
jerry1.addImage(jerry1Img)
jerry1.scale=0.10

butch1= createSprite(300,100)
butch1.addImage(butch1Img)
butch1.scale=0.30

butch2= createSprite(1199,100)
butch2.addImage(butch1Img)
butch2.scale=0.30

cheese1= createSprite(309,291)
cheese1.addImage(cheese1Img)
cheese1.scale=0.2

cheese2= createSprite(719,326)
cheese2.addImage(cheese2Img)
cheese2.scale=0.2

cheese3= createSprite(909,130)
cheese3.addImage(cheese1Img)
cheese3.scale=0.2

cheese4= createSprite(354,57)
cheese4.addImage(cheese2Img)
cheese4.scale=0.2

cheese5= createSprite(110,71)
cheese5.addImage(cheese1Img)
cheese5.scale=0.2

cupboard = createSprite()


}

function draw() {
  background('Blue'); 


  text(mouseX+":"+ mouseY,mouseX,mouseY)
  

wall1= createSprite(30,14,150,90);
wall1.shapeColor="red"
wall2=createSprite(229,273,5,400);
wall2.shapeColor="black"
wall3=createSprite(500,4,5,300);
wall3.shapeColor="black"
wall4=createSprite(500,411,5,300);
wall4.shapeColor="black"
wall5=createSprite(800,200,5,200);
wall5.shapeColor="black"
wall6=createSprite(1000,411,5,200);
wall6.shapeColor="black"
wall7=createSprite(1178,306,200,5);
wall7.shapeColor="black"
wall8=createSprite(1196,490,150,90);
wall8.shapeColor="red"

  var edges=createEdgeSprites()
  
jerry1.bounceOff(edges);
jerry1.bounceOff(wall1);
jerry1.bounceOff(wall2);
jerry1.bounceOff(wall3);
jerry1.bounceOff(wall4);
jerry1.bounceOff(wall5);
jerry1.bounceOff(wall6);
jerry1.bounceOff(wall7);
jerry1.bounceOff(wall8);

if(gamestate==="play"){

jerry1.velocityX=0
jerry1.velocityY=0

  if(keyIsDown(UP_ARROW)){
    jerry1.addImage(jerry_running)
    jerry1.velocityY=-6
    jerry1.velocityX=0
  }
  
  if(keyIsDown(LEFT_ARROW)){
    jerry1.addImage(jerry_running)
    jerry1.velocityX=-5
    jerry1.velocityY=0
  }

  if(keyIsDown(DOWN_ARROW)){
    jerry1.addImage(jerry_running)
    jerry1.velocityY=6
    jerry1.velocityX=0
  }

  if(keyIsDown(RIGHT_ARROW)){
    jerry1.addImage(jerry_running)
    jerry1.velocityX=5
    jerry1.velocityY=0
  }

  if(jerry1.collide(tom1)){
    tom1.addImage(tom2Img)
    tom1.scale=0.14
    gamestate="end"
  }

  if(jerry1.collide(tom2)){
    tom2.addImage(tom2Img)
    tom2.scale=0.14
    gamestate="end"
  }

  if(jerry1.collide(butch1)){
    butch1.addImage(butch3Img)
    butch1.scale=0.15
    gamestate="end"
  }

  if(jerry1.collide(butch2)){
    butch2.addImage(butch3Img)
    butch2.scale=0.15
    gamestate="end"
  }

  if(jerry1.collide(cheese1)){
    cheese1.destroy()
  }

  if(jerry1.collide(cheese2)){
    cheese2.destroy()
  }

  if(jerry1.collide(cheese3)){
    cheese3.destroy()
  }

  if(jerry1.collide(cheese4)){
    cheese4.destroy()
  }

  if(jerry1.collide(cheese5)){
    cheese5.destroy()
  }
}
else if(gamestate==="end"){
  jerry1.velocityX=0
  jerry1.velocityY=0
  jerry1.addImage(jerry3Img)
    jerry1.scale=0.15
}


drawSprites();

}
