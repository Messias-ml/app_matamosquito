var altura = 0
var largura = 0
var vidas = 1

var nivel = window.location.search
nivel = nivel.replace('?', '')

var tempoNivel = 3000
if (nivel === 'facil') {tempoNivel = 3000}
	else if (nivel === 'normal') {tempoNivel = 2000}
		else if (nivel === 'dificil') {tempoNivel = 1000}



 function palcoJogo() {
 	 altura = window.innerHeight
largura = window.innerWidth

 }
 palcoJogo()
 // console.log (altura, largura)
function posRondom()/*crio uma função pois preciso chamar no body da pag, OBS o script está antes do body  então ele não funcionara acessando o body*/
{
	if (document.getElementById('mosquito'))/* Aqui eu digo se o elemento mosquito existir, ele so aparece la embaixo..*/ {
	 document.getElementById('mosquito').remove()
if (vidas > 3) {
				window.location.href = 'fim_de_jogo.html'
				}
	else {
	 document.getElementById('v' + vidas).src = 'coracao_vazio.png'
	 vidas++ }
}
var posicaoX = Math.floor(Math.random() * largura) - 115 // esses 115 serve porque a imagem tem o tamanho de 50px, então pode ultrapassar a tela se chegar no limite da mesma.
var posicaoY = Math.floor(Math.random() * altura) - 115
posicaoY = posicaoY < 0 ? 0 : posicaoY
posicaoX = posicaoX < 0 ? 0 : posicaoX
var mosquito = document.createElement('img') // aqui eu estou criando um elemento no html, chamado imagem, crio pelo js, para ser dinamico tal elemento.
mosquito.src = 'mosca.png' //depois de mandar ele para a variavel mosquito, eu acesso o src da minha imagem e digo onde ela se localiza. 
mosquito.className = tamanho() +  ' ' + lado()// agora eu acrescento a class para por na minha imagem que é mosquito.
mosquito.style.left = posicaoX + 'px' // isso é muito interessante, eu acrescento um style para mover para a esquerda, posicaoX (numero randomico) px ou seja, será pixel
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute' // para ele se mover ele tem que ser na posição absolute. 
mosquito.id = 'mosquito' // adicionar um id chamado mosquito para a imagem, com isso possamos acessar esse id depois.
mosquito.onclick = function() {
	this.remove()
}
document.body.appendChild(mosquito) // aqui eu crio um filho para o body, como se fosse uma div, e adiciono mosquito, ou seja, tudo isso que criamos para o mosquito aparecer randomicamente.
 }
function tamanho() {
var tam = Math.floor(Math.random() * 3)
switch (tam){
	case 0: return 'mosquito1'
	case 1: return 'mosquito2'
	case 2: return 'mosquito3'
}
}
function lado() {
var lad = Math.floor(Math.random() * 2)
switch (lad){
	case 0: return 'ladoA'
	case 1: return 'ladoB'
}
}

 var i = 61
 setInterval(function(){
 	
 i-- 
 document.getElementById('cronometro').innerHTML = i
 if (i === -1) { window.location.href = 'venceu.html'}
 },1000)
