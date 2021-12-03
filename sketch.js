var database;
var form,
  game,
  player,
  playerCount = 0;
 
var gameState = 0;


function preload() {
  bgimg = loadImage("images/background1.png");
}

function setup() {
 
  canvas = createCanvas(windowWidth, windowHeight);

  game = new Game();
  game.start();
}

function draw() {
  if (gameState === 0) {
    background(bgimg);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
