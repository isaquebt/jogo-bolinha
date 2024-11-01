let cor;
let posicaoVertical = 200;
let posicaoHorizontal = 200;
function setup() {
  createCanvas(400, 400);
  background("white");
  cor = color(random(0, 255), random(0, 255), random(0, 255));
}

function draw() {
  circle(posicaoHorizontal, posicaoVertical, 50);
  fill(cor);
  if (mouseX > posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal + 1;
  }
  if(mouseX < posicaoHorizontal){
    posicaoHorizontal = posicaoHorizontal -1;
  }
  if (mouseY> posicaoVertical){
    posicaoVertical = posicaoVertical +1;
  }
  if(mouseY < posicaoVertical){
    posicaoVertical = posicaoVertical -1;
  }
  if(mouseIsPressed){
    octr = color(random(0, 255), random(0, 255), random(0,100));
}
}