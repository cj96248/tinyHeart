var fruitObj = function(){
	this.alive = [];
	this.x =[];
	this.y =[];
	this.l = [];
	this.spd = [];
	this.orange = new Image();
	this.blue = new Image();
	this.fruitType = [];
	
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){
	for(var i =0; i<this.num; i++){
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i]= 0;
		this.spd[i] = Math.random()*0.01+0.005;
		this.fruitType[i] = '';
	}
	this.orange.src = "./src/fruit.png";
	this.blue.src = "./src/blue.png";
}

fruitObj.prototype.draw = function(){
	for(var i = 0; i<this.num; i++){
		if(this.alive[i]){
			if(this.l[i] <= 14){
				this.l[i] += this.spd[i]* detalTime;
			}else{
				this.y[i] -= this.spd[i]* 7 *detalTime;
			}
			var pic = '';
			if(this.fruitType[i] == 'blue'){
				
				pic = this.blue;
				
			}else{
				pic = this.orange;
			}
			ctx2.drawImage(pic, this.x[i]-this.l[i]*0.5, this.y[i]-this.l[i]*0.5, this.l[i], this.l[i]);
			if(this.y[i]<10){
				this.alive[i] = false;
				
			}
		}
	}
	
}
fruitObj.prototype.born = function(i){
	var aneId = Math.floor(Math.random()*ane.num);
	this.x[i] = ane.x[aneId];
	this.y[i] = canHeight - ane.len[aneId];
	this.l[i] = 0;
	this.alive[i]= true;
	if(Math.random()<0.2){
		this.fruitType[i] = 'blue';
	}else{
		this.fruitType[i] = 'orange';
		
	}
	
}
fruitObj.prototype.dead = function(i){
	this.alive[i] = false;
}

function fruitMonitor(){
	var count = 0;
	for(var i = 0; i< fruit.num; i++){
		if(fruit.alive[i]) count++
		
	}
	if(count<15){
		sendFruit();
		return
	}
}

function sendFruit(){
	for(var i =0; i< fruit.num; i++){
		if(!fruit.alive[i]){
			
			fruit.born(i);
			return;
		}
	}
	
}