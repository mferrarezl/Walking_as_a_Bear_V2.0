//Variáveis das Imagens

let imgAtor;
let imgEstrada;
let imgCarro1;
let imgCarro2;
let imgCarro3;
let imgCarro4;
let imgCarro5;
let imgCarro6;

//Variaveis som

let trilha;
let pontos;
let oof;

//Funções das Imagens e Sons

function preload(){

imgAtor = loadImage("imagens/ator.png");
imgEstrada = loadImage("imagens/estrada.png");

imgCarro1 = loadImage("imagens/carro-1.png");
imgCarro2 = loadImage("imagens/carro-2.png");
imgCarro3 = loadImage("imagens/carro-3.png");
  imgCarrosD = [imgCarro1, imgCarro2, imgCarro3]

imgCarro4 = loadImage("imagens/carro-4.png");
imgCarro5 = loadImage("imagens/carro-5.png");
imgCarro6 = loadImage("imagens/carro-6.png");
  imgCarrosE = [imgCarro4, imgCarro5, imgCarro6]
  
  oof = loadSound("sons/Oof.mp3");
  pontos= loadSound("sons/pontos.mp3");
  trilha = loadSound("sons/trilha.mp3");
}