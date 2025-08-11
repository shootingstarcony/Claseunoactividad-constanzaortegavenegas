var d;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,192,203);
}

function draw() {
  d = random (10,60)
  fill(255,100)
  ellipse(mouseX,mouseY,d,d)
}
function keyPressed() {
  if (key === 'p') {
    save('dibujo.jpg');
  }
  function keyPressed() {
  if (key === 'p') {
    save('dibujo.jpg');
  }

