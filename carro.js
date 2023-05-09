//Variáveis dos Carros

let xCarrosD = [1820, 1820, 1820];
let yCarrosD = [105, 240, 365];
let velCarrosD = [5.3, 10, 15];

let xCarrosE = [100, 100, 100];
let yCarrosE = [515, 640, 770];
let velCarrosE = [15, 7, 20];

let larCarros = 140;
let altCarros = 80;

//Funções dos Carros

function mostraCarrosD(){
    for(let cD = 0; cD < imgCarrosD.length; cD++){
    image(imgCarrosD[cD], xCarrosD[cD], yCarrosD[cD], larCarros, altCarros)
    }
}
 function mostraCarrosE(){
    for(let cE = 0; cE < imgCarrosE.length; cE++){
    image(imgCarrosE[cE], xCarrosE[cE], yCarrosE[cE], larCarros, altCarros)
    }
 }
 function movCarrosD(){
    for(let vCD = 0; vCD < imgCarrosD.length; vCD++){
    xCarrosD[vCD] -= velCarrosD[vCD];
    }
 }
 function movCarrosE(){
    for(let vCE = 0; vCE < imgCarrosE.length; vCE++){
    xCarrosE[vCE] += velCarrosE[vCE];
    }
 }
 function resetCarrosD(){
    for(let rCD = 0; rCD < imgCarrosD.length; rCD++)
    if(saiuDaTelaD(xCarrosD[rCD])){
        xCarrosD[rCD] = 2000; 
    }
 }
 function saiuDaTelaD(xCarro){
    return xCarro < -140;
 }
 function resetCarrosE(){
    for(let rCE = 0; rCE < imgCarrosE.length; rCE++)
    if(saiuDaTelaE(xCarrosE[rCE])){
        xCarrosE[rCE] = -140; 
    }
 }
 function saiuDaTelaE(xCarro){
    return xCarro > 2000;
 }