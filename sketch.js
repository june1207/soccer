var i=0;
var d=5;
var on=false;
var isIn=false
;
function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER)
}

function draw() {
  background(220);
  i+=d;
  if(i>255 || i<1) d=d;
  if(mouseX>=width/2-50 && mouseX<=width/2+50 && mouseY>=height/2-50 && mouseY<=height/2+50) {
    fill(0,0,255,i);
  } else {
    fill(255,0,0,i);
  }
  ellipse(width/2,height/2,100,30);
  ellipse(width/2,height/2,30,100);
  rect(width/2,height/2,100,100)
  print(windowWidth,windowHeight,displayWidth,displayHeight)
}

function windowResized() {
  resizeCanvas(windowWidth,windowHeight)
}

