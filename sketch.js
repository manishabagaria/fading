//Declaring the CONSTANTS
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

//Declaring the VARIABLES
var engine, world;
var ground1, ground2;
var poly;
var slingShot;
var play;
var back;

//FIRST PYRAMID
//Declaring FIRST ROW
var box1, box2, box3, box4, box5;
//Declaring SECOND ROW
var box6, box7, box8, box9;
//Declaring THIRD ROW
var box10, box11, box12;
//Declaring FOURTH ROW
var box13, box14;
//Declaring TOP ROW
var box15;

//SECOND PYRAMID
//Declaring FIRST ROW
var block1,block2,block3,block4;
//Declaring SECOND ROW
var block5,block6,block7;
//Declaring THIRD ROW
var block8,block9;
//Declaring FOURTH ROW
var block10;

function preload() {
  getTime(); 
}

function setup() {
  var canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  //Creating the GROUNDS, the POLYGON and the SLINGSHOT
  ground1=new Ground(545,400,250,20);
  ground2=new Ground(990,250,200,20);
  poly=new Polygon(200,400,20,20);
  slingShot=new Slingshot(poly.body,{x:200,y:300})
  //FIRST PYRAMID
  //Creating FIRST ROW
  box1=new Box2(515,370,40,40);
  box2=new Box(510,370,40,40);
  box3=new Box(540,370,40,40);
  box4=new Box2(570,370,40,40);
  box5=new Box(600,370,40,40);
  //Creating SECOND ROW
  box6=new Box2(480,290,40,40);
  box7=new Box(523,290,40,40);
  box8=new Box2(566,290,40,40);
  box9=new Box(609,290,40,40);
  //Creating THIRD ROW
  box10=new Box(500,266,40,40);
  box11=new Box2(545,266,40,40);
  box12=new Box(585,266,40,40);
  //Creating SECOND ROW
  box13=new Box2(520,230,40,40);
  box14=new Box(560,230,40,40);
  //Creating TOP ROW
  box15=new Box(540,190,40,40);

  //SECOND PYRAMID
  //Creating FIRST ROW
  block1=new Box3(930,200,40,40);
  block2=new Box(970,200,40,40);
  block3=new Box3(1010,200,40,40);
  block4=new Box(1050,200,40,40);
  //Creating SECOND ROW
  block5=new Box(950,150,40,40);
  block6=new Box3(990,150,40,40);
  block7=new Box(1030,150,40,40);
  //Creating THIRD ROW 
  block8=new Box3(970,100,40,40);
  block9=new Box(1010,100,40,40);
  //Creating TOP ROW
  block10=new Box(990,50,40,40);
}

function draw() {
  if (back)
  background(back);
  Engine.update(engine);
  //Displaying the OBJECTS
  ground1.display(); 
  ground2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  poly.display();
  slingShot.display();
  drawSprites();
}

//Function for STRETCHING the slingShot
function mouseDragged(){
  Matter.Body.setPosition(poly.body, {x: mouseX , y: mouseY});
}

//Function for RELEASING the slingShot
function mouseReleased(){
  slingShot.fly();
}

//Function for making the polygon come back to place by pressing the SPACE KEY
function keyPressed(){
  if (keyCode===32){
  slingShot.attach(poly.body);
  }
}

async function getTime(){
  var response=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responsejson=await response.json();
  var dateTime=responsejson.datetime;
  var hour=dateTime.slice(11,13);
  console.log(hour);
  if(hour>6&&hour<18){
      bg=("bg.png");
      

  }
  else{
      bg=("bg2.jpg");
  }
  back=loadImage(bg);
}


