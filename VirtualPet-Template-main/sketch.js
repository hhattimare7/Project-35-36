var dog,sadDog,happyDog;
var milk,milkImg;
var mCount=0;
var mx = 50;
var my = 100;
var b1, b2;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  milkImg=loadImage("Images/Milk.png");
}

function setup() {
  createCanvas(1000,400);

  b1 = createButton("FEED DOG");
  b1.position(700,100);
  b1.mousePressed(feedDog);

  b2 = createButton("ADD MILK");
  b2.position(800,100);
  b2.mousePressed(addMilk);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  //dog.addImage(happyDog);
  dog.scale=0.15;

  //milk=createSprite(100,100,150,150);
 // milk.addImage(milkImg);
 // milk.scale=0.1;

}

function draw() {
  background(46,139,87);
  drawSprites();
}

//function to read food Stock
function currentStock() {
}

//function to update food stock and last fed time
function addMilk() {
dog.addImage(sadDog);
mCount++;
mx=mx+50;
  for(i=0; i<=mCount; i++){
   if(mx<=350){
  milk=createSprite(mx,my,150,150);
  milk.addImage(milkImg);
  milk.scale=0.1; 
    }else{
      mx = 100;
      my = my + 100;
      milk=createSprite(mx,my,150,150);
      milk.addImage(milkImg);
      milk.scale=0.1; 
    }
  }
}

//function to add food in stock
function feedDog() {
  dog.addImage(happyDog);
  milk.destroy();
}
