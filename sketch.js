const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var walkingImage, man;
var thunderImage1, thunderImage2, thunderImage3, thunderImage4;

function preload()
{
    
walkingImage = loadImage("walking_1.png","walkingImage2","walking_3.png","walking_4.png","walking_5.png","walking_6.png","walking_7.png","walking_8.png");

thunderImage1 = loadImage("1.png");
thunderImage2 = loadImage("2.png");
thunderImage3 = loadImage("3.png");
thunderImage4 = loadImage("4.png");

}

function setup(){
createCanvas(400,400);    
man = createSprite(200,200,50,100);
man.addImage(walkingImage) ;  
    
}

function draw(){
  
 man.display();   

}   

