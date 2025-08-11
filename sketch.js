var d;

function setup() {
createCanvas(windowWidth, windowHeight).position(0,0).style('z-index','-1');
  background(255,192,203);
  colorMode(HSB);
}

function draw() {
  d = random (10,60)
  fill(random(0,336),57,96)
  ellipse(mouseX,mouseY,d,d)
  
}
function keyPressed() {
  if (key === 'p') {
    save('dibujo.jpg');
  }

}
