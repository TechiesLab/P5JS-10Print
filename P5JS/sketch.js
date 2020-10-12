// Based on Daniel Shiffman's video:
// https://www.youtube.com/watch?v=bEyTZ5ZZxZs

let x = 0;
let y = 0;
let l = 40;

function setup() {
  createCanvas(1320, 640);
  background(50);
}

function draw() {
  stroke(random(10, 200), random(10, 200), random(10, 200));
  strokeWeight(random(2,10));
  if (random(1) > 0.5) {
    line(x, y, x+l, y+l);
  } else {
    line(x+l, y, x, y+l);
  }
  x+=l;
  if (x > width) {
    y+=l;
    x=0;
  }
}