var monObj = function(){
	this.x ;
	this.y;
	this.angle;
	this.bigEye = new Image();
	this.bigBody = new Image();
	this.bigTail = new Image();
	
	this.monTailTimer = 0;
	this.monTailCount = 0;
	
	this.monEyeTimer =0;
	this.monEyeCount = 0;
	this.monEyeDetalTime = 1000;
	
	this.monBodyCount = 0;
}

monObj.prototype.init = function(){
	
	this.x = canWidth * 0.5;
	this.y = canHeight * 0.5;
	this.angle = 0;
	
}

monObj.prototype.draw = function(){
	
	this.x = lerpDistance(mx, this.x, 0.98);
	this.y = lerpDistance(my, this.y, 0.98);
	
	var detalX = mx - this.x;
	var detalY = my - this.y;
	var beta = Math.atan2(detalY,detalX) + Math.PI;
	
	this.angle = lerpAngle(beta, this.angle, 0.6);
	
	this.monTailTimer += detalTime;
	if(this.monTailTimer >50){
		this.monTailCount = (this.monTailCount+1) % 8;
		this.monTailTimer %=50;
	}
	
	this.monEyeTimer += detalTime;
	if(this.monEyeTimer >this.monEyeDetalTime){
		this.monEyeCount = (this.monEyeCount+1) % 2;
		this.monEyeTimer %=this.monEyeDetalTime;
		if(this.monEyeCount == 0){
			
			this.monEyeDetalTime = Math.random()*1500+2000;
		}else{
			
			this.monEyeDetalTime = 200;
		}
	}
	
	
	ctx1.save();
	ctx1.translate(this.x, this.y);
	ctx1.rotate(this.angle);
	
	var monTailCount = this.monTailCount;
	var monEyeCount = this.monEyeCount;
	var monBodyCount = this.monBodyCount;
	
	if(data.double == 1){
		ctx1.drawImage(bigBodyOra[monBodyCount], -bigBodyOra[monBodyCount].width*0.5, -bigBodyOra[monBodyCount].height*0.5);
		
		
	}else{
		ctx1.drawImage(bigBodyBlue[monBodyCount], -bigBodyBlue[monBodyCount].width*0.5, -bigBodyBlue[monBodyCount].height*0.5);
		
	}
	ctx1.drawImage(bigTail[monTailCount], -bigTail[monTailCount].width*0.5+30, -bigTail[monTailCount].height*0.5);
	
	ctx1.drawImage(bigEye[monEyeCount], -bigEye[monEyeCount].width*0.5, -bigEye[monEyeCount].height*0.5);
	ctx1.restore();
	
}