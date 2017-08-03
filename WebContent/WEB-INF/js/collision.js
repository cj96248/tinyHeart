function monFruitCollision(){
	if(!data.gameOver){
		for(var i = 0; i<fruit.num; i++){
			if(fruit.alive[i]){
			
			var l = calLength2(fruit.x[i], fruit.y[i], mon.x, mon.y);
			if(l<900){
				fruit.dead(i);
				data.fruitNum++;
				mon.monBodyCount++;
				if(mon.monBodyCount > 7){
					mon.monBodyCount =7;
					
				}
				if(fruit.fruitType[i] == 'blue'){
					data.double = 2;
				}
				wave.born(fruit.x[i], fruit.y[i], false);
			}
		}
		
	}
		
	}
	
	
	
}

//mon baby collision

function monBabyCollision(){
	if(data.fruitNum >  0 && !data.gameOver){
		var l = calLength2(mon.x, mon.y, baby.x, baby.y);
		if(l<900){
			baby.babyBodyCount = 0;
			mon.monBodyCount = 0;
			data.addScore();
			wave.born(mon.x, mon.y, true);
		}
	}
	
}
