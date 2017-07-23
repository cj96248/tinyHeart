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

var babyTail = [];
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
	
	for(var i = 0; i<8;i++){
		 babyTail[i] = new Image();
		 babyTail[i].src = './src/babyTail' + i +'.png'
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
}

function onMouseMove(e){
	if(e.offSetX || e.layerX){
		mx = e.offSetX == undefined?e.layerX:e.offSetX;
		my = e.offSetY == undefined?e.layerY:e.offSetY;
	}
	
}