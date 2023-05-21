var cnv = document.querySelector('canvas');
var ctx = cnv.getContext('2d');
//GLOBAIS VARIAVEIS.
var sprites = new Array();

var GLOBAIS = {
    vida: 3,
    pontos: 0
}
/*sprites.push(new Sprite('images/imagem.png', 'player', 26, 17, 14, 14, 143, 115));

sprites[encontrar('player')].img.onload = function(){
    loop();
}*/

//************************************************************************************************ */
function loop(){
    
    // limpar tela
	ctx.clearRect(0,0,cnv.width,cnv.height);
	for (let i = 0 ; i < sprites.length; i++) {//percorre array de sprites

		//if (!pause && !gameOver) {/////////////
			sprites[i].exe();/////////////////  movimento do jogo...            
		//}////////////////////////////////////
		sprites[i].render();/////////////// renderiza na tela...
	}    
    ctx.font = "10px Arial";//  TEXTO...
    ctx.fillText("texto... ", cnv.width/4, cnv.height/2);
	requestAnimationFrame(loop, "canvas");
}
function encontrar(flag){//descobre index do objeto que corresponda a flag com maior index do array
	for (let i = sprites.length - 1; i >= 0; i--) {
		if (sprites[i].flag == flag) {
			return i;
		}
	}
    return false;
}
function contar(obj){//descobre quantos objetos com a mesma flag tem em jogo
    let countObj = 0;
	for (let i = sprites.length - 1; i >= 0; i--) {
		if (sprites[i].flag == obj) {
			countObj++
		}
	}
    return countObj;
}
