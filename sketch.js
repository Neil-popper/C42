var canvas, backgroundImage;

var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img;
var goldimg, silverimg, bronzeimg, f1img;
var w, h;
var obstacleGroup
var carSound, slidingSound;

function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  f1img = loadImage("images/f1.png");
  goldimg = loadImage("images/gold.png");
  silverimg = loadImage("images/silver.png");
  bronzeimg = loadImage("images/bronze.png");
  carSound = loadSound("sound/car.mp3")
  slidingSound = loadSound("sound/sliding.mp3")
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
 // finishedPlayers = 0;
  yVel = 0;
  xVel = 0;
  obstacleGroup = createGroup()
  xSet = false;
  game = new Game();
  game.getState();
  game.start();
  for (var i = 0; i<5; i++) {
  w = random(200,950)
  h = random(-height*4, height-300)
  f1 = createSprite(w,h);
  f1.addImage(f1img);
  obstacleGroup.add(f1)
  }
}


function draw(){
   //start the game
   background(200, 200, 255);

   //start the game
   if (playerCount === 4 ) {
     game.update(1);
   }
 
   //start the game for real
   if (gameState === 1) {
     game.play();
   }
   if (gameState === 2) {
     console.log("End");
   }}
 
  
