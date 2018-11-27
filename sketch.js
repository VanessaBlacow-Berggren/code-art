var img1;
var img2;
var img3;

var x=1;
var y=1;
var easing = 0.05;

var song;

function preload() {
  img1= loadImage("yarn50.png");
  img2= loadImage("cat50.png");
  img3= loadImage("indoors.jpg");
  song= loadSound("meow.mp3");
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(150);
  image(img3,0,0);

  image(img1, mouseX, mouseY);


  var targetX = mouseX-40;
  var dx = targetX - x;
  x += dx * easing;

  var targetY = mouseY-40;
  var dy = targetY - y;
  y += dy * easing;

  image(img2,x,y);
}

function mousePressed() {
  if ( song.isPlaying() ) { // .isPlaying() returns a boolean
    song.stop();
  } else {
    song.play();
  }
}
