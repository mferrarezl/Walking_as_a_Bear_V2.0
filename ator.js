//Variáveis do Ator

let xAtor = 960;
let yAtor = 885;
let colisao = false;

let meusPontos = 0;
let minhasDerrotas = 0;

function mostraAtor(){
    image(imgAtor, xAtor, yAtor, 65, 65);
  }
  
  function movAtor(){
    if(keyIsDown(UP_ARROW)){
      yAtor -= 7;
    }
    if(keyIsDown(DOWN_ARROW)){
      if(podeMoverB()){
      yAtor += 7;
      }
    }
    if(keyIsDown(LEFT_ARROW)){
      if(podeMoverE()){
      xAtor -= 7;
      }
    }
    if(keyIsDown(RIGHT_ARROW)){
      if(podeMoverD()){
      xAtor += 7;
      }
    }
  }

  function podeMoverB(){
    return yAtor < 885;
  }
  function podeMoverE(){
    return xAtor > 5;
  }
  function podeMoverD(){
    return xAtor < 1850;
  }

  function verColisao(){
    for (let D = 0; D < imgCarrosD.length; D++){
    colisao = collideRectCircle(xCarrosD[D], yCarrosD[D], larCarros, altCarros, xAtor, yAtor, 33)
      if (colisao){
        resPosicao();
        minhasDerrotas += 1;
        oof.play();
      }
    }
    for (let E = 0; E < imgCarrosE.length; E++){
    colisao = collideRectCircle(xCarrosE[E], yCarrosE[E], larCarros, altCarros, xAtor, yAtor, 33)
      if (colisao){
        resPosicao();
        minhasDerrotas += 1;
        oof.play();
      }
    }
  }

  function resPosicao(){
    yAtor = 885;
  }

  function mostraPontos(){
    textAlign(CENTER);
    textSize(50);
    fill(color(94, 252, 3));
    text(meusPontos, 850, 60);
}
function marcaPonto(){
    if(yAtor < 15){
        meusPontos += 1;
        resPosicao();
        pontos.play();
    }
}

function mostraDerrotas(){
    textAlign(CENTER);
    textSize(50);
    fill(color(235, 52, 52));
    text(minhasDerrotas, 1050, 60);
}

function diffCarros(){
  for(let vD = 0; vD < imgCarrosD.length; vD++){
    if (yAtor < 20){
    velCarrosD[vD] += 0.2;
    }
    
    if (colisao){
    velCarrosD[vD] -= 0.5;
  }
  for(let vE = 0; vE < imgCarrosD.length; vE++){
    
    if (yAtor < 20){
    velCarrosE[vE] += 0.2;
    }
    
    if (colisao){
    velCarrosE[vE] -= 0.5;
      }
    }
  }
}