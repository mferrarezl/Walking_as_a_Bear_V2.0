function setup() {
  createCanvas(1920, 961);
  trilha.loop();
}

function draw() {
  background(imgEstrada);
  mostraAtor();
  mostraCarrosD();
  mostraCarrosE();
  movCarrosD();
  movCarrosE();
  resetCarrosD();
  resetCarrosE();
  movAtor();
  verColisao();
  mostraPontos();
  marcaPonto();
  mostraDerrotas();
  diffCarros();
}