document.addEventListener("DOMContentLoaded", function(){
	new Vue({
		el:'#game',
		data: function(){
			return{	
				dirX:1,
				dirY:0,
				cellSize:20,
				field:[],
				intervalId:null,
				enable:false,
				mapWidth:40,
				mapHeight:30,
				coordX:3,
				coordY:0,
				snakeBody:[{ x:0, y:0 }, { x:1, y:0 }, { x:2, y:0 }, { x:3, y:0 }],
				foodX:Math.floor(Math.random() * 39) + 1,
				foodY:Math.floor(Math.random() * 29) + 1,
				score:0,
				endGame:false
			}
		},
		ready (){

			/*создание анимации*/

			this.intervalId = setInterval(this.gameStart, 110);
			
			/*генерация поля*/

			for (let y = 1; y <= this.mapHeight; y ++) {
				for (let x = 1; x <= this.mapWidth; x ++) {
					this.field.push({
						x:(x - 1),
						y:(y - 1)
					})
				};
			};
		},
		methods:{
			down () {
				if(this.dirX == 0 && this.dirY == -1){return}
				this.dirX = 0;
				this.dirY = 1;
			},
			up () {
				if(this.dirX == 0 && this.dirY == 1){return}
				this.dirX = 0;
				this.dirY = -1;
			},
			left () {
				if(this.dirX == 1 && this.dirY == 0){return}
				this.dirX = -1;
				this.dirY = 0;
			},
			right () {
				if(this.dirX == -1 && this.dirY == 0){return}
				this.dirX = 1;
				this.dirY = 0;
			},
			start () {
				if(this.endGame == false){
					this.intervalId = null;
					this.enable = true;					
				}
			},
			reset () {
				this.enable = false;				
				this.dirX = 1;
				this.dirY = 0;
				this.score = 0;
				this.coordX = 3;
				this.coordY = 0;
				this.snakeBody = [];
				this.snakeBody = [{ x:0, y:0 }, { x:1, y:0 }, { x:2, y:0 }, { x:3, y:0 }];
				this.foodX = Math.floor(Math.random() * 39) + 1;
				this.foodY = Math.floor(Math.random() * 29) + 1;
				this.endGame = false;
			},
			gameStart () {
				const self = this;
				if(!this.enable){return};
				this.coordX += this.dirX;
				this.coordY += this.dirY;	
				this.snakeBody = _.rest(this.snakeBody);
				if(_.some(this.snakeBody, function(item){
					return self.coordX == item.x && self.coordY == item.y;
				})){
					this.enable = false;					
					alert('Game over');
					clearInterval(self.intervalId);
					this.endGame = true;
					return;
				};
				if(this.coordX == this.mapWidth
					|| this.coordY == this.mapHeight
					|| this.coordX < 0
					|| this.coordY < 0
				) {
					this.enable = false;
					alert('Game over');
					clearInterval(self.intervalId);
					this.endGame = true;
					return;
				};
				if(this.coordX == this.foodX && this.coordY == this.foodY){
					this.score += 1;
					this.foodX = Math.floor(Math.random() * 39) + 1;
					this.foodY = Math.floor(Math.random() * 29) + 1;
					
					/*добавление длины змеи*/

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