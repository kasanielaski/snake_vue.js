document.addEventListener("DOMContentLoaded",function(){
	new Vue({
		el:'#game',
		data: function(){
			return{	
				dirX:1,
				dirY:0,
				cellSize:20,
				field:[],
				intervalId:null,
				step:20,
				enable:false,
				mapWidth:40,
				mapHeight:30,
				coordX:3,
				coordY:0,
				snakeBody:[{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0}],
				foodX:Math.floor(Math.random()*39)+1,
				foodY:Math.floor(Math.random()*29)+1,
				score:0
			}
		},
		ready:function(){
			//создание анимации
			var intervalId = setInterval(this.gameStart,110);
			//генерация поля
			for (var y = 1; y <= this.mapHeight; y++) {
				for (var x = 1; x <= this.mapWidth; x++) {
					this.field.push({
						id:"cell "+x+" "+y,
						x:(x-1),
						y:(y-1)
					})
				};
			};
		},
		methods:{
			down:function(){
				this.dirX=0;
				this.dirY=1;
			},
			up:function(){
				this.dirX=0;
				this.dirY=-1;
			},
			left:function(){
				this.dirX=-1;
				this.dirY=0;
			},
			right:function(){
				this.dirX=1;
				this.dirY=0;
			},
			start:function(){
				this.enable=true;
			},
			gameStart:function(){
				var self=this;
				if(!this.enable){return};
				this.coordX+=this.dirX;
				this.coordY+=this.dirY;	
				this.snakeBody=_.rest(this.snakeBody);
				if(_.some(this.snakeBody, function(item){
					self.coordX==item.x;
					self.coordY==item.y;
					return self.coordX==item.x&&self.coordY==item.y;
				})){
					alert('Game over');
					this.enable=false;
				};
				if(this.coordX==this.mapWidth
					||this.coordY==this.mapHeight
					||this.coordX<0
					||this.coordY<0
				) {
					alert('Game over');
					this.enable=false;
				};
				if(this.coordX==this.foodX&&this.coordY==this.foodY){
					this.score+=1;
					this.foodX=Math.floor(Math.random()*39)+1;
					this.foodY=Math.floor(Math.random()*29)+1;
					//добавление длины змеи
					this.snakeBody.push({
						x:this.coordX,
						y:this.coordY
					});
				};
				this.snakeBody.push({
					x:this.coordX,
					y:this.coordY
				});
			}
		},
	})
})