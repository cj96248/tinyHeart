var babyObj = function(){
	this.x;
	this.y;
	this.angle;
	this.babyEye = new Image();
	this.babyBody = new Image();
	this.babyTail = new Image();
	
	this.babyTailTimer = 0;
	this.babyTailCount = 0;
	
	this.babyEyeTimer = 0;
	this.babyEyeCount = 0;
	this.babyEyeInterval = 1000;
	
	this.babyBodyTimer = 0;
	this.babyBodyCount = 0;
}

babyObj.prototype.init = function(){
	this.x = canWidth * 0.5-50;
	this.y = canHeight * 0.5+50;
	this.angle = 0;
	this.babyBody.src = "./src/babyFade0.png";
	
	
}

babyObj.prototype.draw = function(){
	
	this.x = lerpDistance(mon.x, this.x, 0.98);
	this.y= lerpDistance(mon.y, this.y, 0.98);
	
	var detalX = mon.x - this.x;
	var detalY = mon.y - this.y;
	var beta = Math.atan2(detalY,detalX) + Math.PI;
	
	this.angle = lerpAngle(beta, this.angle, 0.6);
	
	
	this.babyTailTimer += detalTime;
	if(this.babyTailTimer >50){
		this.babyTailCount = (this.babyTailCount +1)%8;
		this.babyTailTimer %= 50;
	}
	
	this.babyEyeTimer += detalTime;
	if(this.babyEyeTimer > this.babyEyeInterval){
		this.babyEyeCount = (this.babyEyeCount +1)%2;
		this.babyEyeTimer %= this.babyEyeInterval;
		
		if(this.babyEyeCount == 0){
			this.babyEyeInterval = Math.random()*1500 +2000;
		}else{
			this.babyEyeInterval = 200;
			
		}
	}
	
	this.babyBodyTimer += detalTime;
	if(this.babyBodyTimer >300){
		
		this.babyBodyCount = this.babyBodyCount +1;
		this.babyBodyTimer %= 300;
		if(this.babyBodyCount >=20){
			
			this.babyBodyCount =19;
			//game over
			data.gameOver = true;
		}
	}
	
	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);
	
	var babyTailCount = this.babyTailCount;
	var babyEyeCount = this.babyEyeCount;
	var babyBodyCount = this.babyBodyCount;
	ctx1.drawImage(babyTail[babyTailCount], -babyTail[babyTailCount].width*0.5 +25, -babyTail[babyTailCount].height*0.5);
	ctx1.drawImage(babyBody[babyBodyCount], -babyBody[babyBodyCount].width*0.5, -babyBody[babyBodyCount].height*0.5);
	ctx1.drawImage(babyEye[babyEyeCount], -babyEye[babyEyeCount].width*0.5, -babyEye[babyEyeCount].height*0.5);
	
	
	ctx1.restore();
	
}