var cnv = document.querySelector('canvas');
var ctx = cnv.getContext('2d');
//GLOBAIS VARIAVEIS.
var sprites = new Array();

var GLOBAIS = {
    vida: 3,
    pontos: 0
}
sprites.push(new Sprite('images/batman.png', 'batman', 27, 246, 36, 65, 10, 10));

sprites[encontrar('batman')].img.onload = function(){
	console.log('start game');
    loop();
}
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
	for (let i = 0 ; i < sprites.length; i++){//exclui do array
		if (sprites[i].flag == 'excluir' || sprites[i].flag == 'delete') {
			sprites.splice(i, 1);
		}
	}
    ctx.font = "10px Arial";//  TEXTO...
    ctx.fillText("texto... ", cnv.width/4, cnv.height/2);

	requestAnimationFrame(loop, "canvas");
}
/*****************************************************************************************************/
function encontrar(flag, n){//descobre index do objeto que corresponda a flag com maior index do array
	let num = n;
	for (let i = sprites.length - 1; i >= 0; i--) {
		if (sprites[i].flag == flag) {
			if(!num){
				return i;
			}
			num--;
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
