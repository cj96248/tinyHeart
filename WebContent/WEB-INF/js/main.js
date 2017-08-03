var can1;
var can2;

var canWidth;
var canHeight;
var ctx1;
var ctx2;

var lastTime;
var detalTime;

var bgPic = new Image();

var ane;
var fruit;
var mon;
var baby;

var mx;
var my;

var data;
var babyTail = [];
var babyEye = [];
var babyBody = [];

var bigTail = [];
var bigEye = [];

var bigBodyOra = [];
var bigBodyBlue = [];

var wave;

var dust;
var dustPic = [];
document.body.onload = game;
function game (){
	init();
	lastTime = Date.now();
	deltaTime =0;
	gameloop();
}

function init(){
	can1 = document.getElementById('canvas1');// fishes, dust, ui, circle
	ctx1 = can1.getContext('2d');
	can2 = document.getElementById('canvas2');// background, ane, fruits
	ctx2 = can2.getContext('2d');
	
	can1.addEventListener('mousemove', onMouseMove, false);
	
	bgPic.src = "./src/background.jpg";
	canWidth = can1.width;
	canHeight = can1.height;
	
	ane = new aneObj();
	ane.init();
	
	fruit = new fruitObj();
	fruit.init();
	
	mon = new monObj();
	mon.init();
	
	mx = canWidth*0.5;
	my = canHeight*0.5;
	 
	baby = new babyObj();
	baby.init();
	
	data = new dataObj();
	
	for(var i = 0; i<8;i++){
		 babyTail[i] = new Image();
		 babyTail[i].src = './src/babyTail' + i +'.png'
	}
	for(var i = 0; i<2;i++){
		 babyEye[i] = new Image();
		 babyEye[i].src = './src/babyEye' + i +'.png'
	}
	for(var i = 0; i<20;i++){
		 babyBody[i] = new Image();
		 babyBody[i].src = './src/babyFade' + i +'.png'
	}
	for(var i = 0; i<8;i++){
		 bigTail[i] = new Image();
		 bigTail[i].src = './src/bigTail' + i +'.png'
	}
	for(var i = 0; i<2;i++){
		 bigEye[i] = new Image();
		 bigEye[i].src = './src/bigEye' + i +'.png'
	}
	for(var i = 0; i<8;i++){
		 bigBodyOra[i] = new Image();
		 bigBodyOra[i].src = './src/bigSwim' + i +'.png'
		 bigBodyBlue[i] = new Image();
		 bigBodyBlue[i].src = './src/bigSwimBlue' + i +'.png'
	}
	
	ctx1.font =  '30px Verdana';
	ctx1.textAlign = 'center';
	
	wave = new waveObj();
	wave.init();
	
	dust = new dustObj();
	dust.init();
	for(var i = 0; i< 7; i++){
		 dustPic[i] = new Image();
		 dustPic[i].src = './src/dust' + i +'.png'
		
	}
}

function gameloop(){
	
	window.requestAnimFrame(gameloop);//setInterval, setTimeout
	var now = Date.now();
	detalTime = now-lastTime;
	if(detalTime > 40) detalTime = 40;
	lastTime = now; 
	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();
	ctx1.clearRect(0,0,canWidth, canHeight);
	mon.draw();
	baby.draw();
	monFruitCollision();
	monBabyCollision();
	data.draw();
	wave.draw();
	dust.draw();
}

function onMouseMove(e){
	if(!data.gameOver){
		if(e.offSetX || e.layerX){
			mx = e.offSetX == undefined?e.layerX:e.offSetX;
			my = e.offSetY == undefined?e.layerY:e.offSetY;
		}
	}
	
	
	
}