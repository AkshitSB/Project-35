var balloon;
var database, readPosition;
var balloonAnimation

function preload() {
  backgroundImage = loadImage("Hot Air Ballon-01.png");
  balloonAnimation = loadAnimation ("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png");
  balloonImage = loadImage("Hot Air Ballon-02.png");
}

function setup() {
  createCanvas(500,500);
  balloon = createSprite(400, 200, 50, 50);
  balloon.addAnimation("moving",balloonAnimation);
  database = firebase.database();
  //balloonPosition =database.ref('balloon');
 // balloonPosition.on("value",readPosition,showError);

}

function draw() {
  background(backgroundImage);
 // Text("**Use arrow key to move Hot Air Balloon!");
  balloon.display();
  if(keyDown(LEFT_ARROW)){
    balloon.x= balloon.x-10;
  }
  else if(keyDown(RIGHT_ARROW)){
   balloon.x= balloon.x+10;
  }
  else if(keyDown(UP_ARROW)){
    //updateHeight(0,-10);
   // balloon.addAnimation("hotAirBalloon",balloonImage);
   // balloon.scale = balloon.scale - 0.01;
    balloon.y= balloon.y-10;
  } 
  else if(keyDown(DOWN_ARROW)){
   balloon.y= balloon.y+10;
  }  
  drawSprites();
}

function updateHeight(x,y){
  database.ref('balloon/height').set({
   'x': height.x + x,
   'y': height.y + y
  })
}

function readHeight(data){
  height = data.val();
  balloon.x = height.x;
  balloon.y = height.y;
 }

function showError(){
  console.log("Error in writing the database");
}