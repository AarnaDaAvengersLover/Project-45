var p1,p2,p3,p4;
var bluePositions;
var turn="blue";
var gameState=1;

function preload(){
  backgroundImage=loadImage("images/ludo1.png")
  dice1=loadImage("images/dice1.jpg");
  dice2=loadImage("images/dice2.jpg");
  dice3=loadImage("images/dice3.jpg");
  dice4=loadImage("images/dice4.jpg");
  dice5=loadImage("images/dice5.jpg");
  dice6=loadImage("images/dice6.jpg");


}

function setup(){
  createCanvas(windowWidth,windowHeight);

  bg=createSprite(windowWidth/2,windowHeight/2);
  bg.addImage(backgroundImage);
  bg.scale=2.5

  p1=new Player(480,530);
  p2=new Player(555,535);
  p3=new Player(480,455);
  p4=new Player(555,460);

  dice=createSprite(windowWidth-200,windowHeight/2,50,50);
  dice.addImage(dice1);

  game=new Game();

  

 
  
 
  createSprite(windowWidth/2-40-(-40*0.1), windowHeight-105-(37*(-1)),10,10);

  
}

function draw(){
  background(255);
  drawSprites();

  if(mousePressedOver(dice)){
    game.rollDice();
  }

  if(gameState===1){
    game.play();
  }

  

}


