document.addEventListener("DOMContentLoaded",function(){
	Vue.component('snake',{
		data:function(){
			return{
				coordX:3,
				coordY:0,
				intervalId:null,
				body:[{x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0}]
			}
		},
		ready:function(){
			var intervalId = setInterval(this.step,100);
		},
		methods:{
			step:function(){
				var self=this;
				if(!this.enable){return};
				this.coordX+=this.dirX;
				this.coordY+=this.dirY;	
				this.body=_.rest(this.body);
				if(_.some(this.body, function(item){
					self.coordX==item.x;
					self.coordY==item.y;
					return self.coordX==item.x&&self.coordY==item.y;
				})){
					alert('Game over');
					this.enable=false;
				};
				if (self.coordX==self.mapWidth
					||self.coordY==self.mapHeight
					||self.coordX<0
					||self.coordY<0
				) {
					alert('Game over');
					this.enable=false;
				};
				this.body.push({
					x:this.coordX,
					y:this.coordY
				});
			}
		},
		template:'<div class="snake" v-for="cell in body" :style="{width:cellSize.toString()+\'px\',height:cellSize.toString()+\'px\',left:(cell.x*20).toString()+\'px\', top:(cell.y*20).toString()+\'px\'}"></div>',
		props:['dirX','dirY','enable','cellSize','mapHeight','mapWidth']
	});

	Vue.component('food',{
		data:function(){
			return{
				spot:[],
				eated:false
			}
		},
		ready:function(){
			this.spot.push({
				foodX:Math.floor(Math.random()*39)+1,
				foodY:Math.floor(Math.random()*29)+1
			})
		},
		methods:{
			eaten:function(){
				if (this.eated){
					this.spot.push({
						foodX:Math.floor(Math.random()*39)+1,
						foodY:Math.floor(Math.random()*29)+1
					})
				}
			}
		},
		template:'<div class="food" v-for="cell in spot" :style="{width:cellSize.toString()+\'px\',height:cellSize.toString()+\'px\',left:(cell.foodX*20).toString()+\'px\', top:(cell.foodY*20).toString()+\'px\'}"></div>',
		props:['cellSize','mapHeight','mapWidth']
	});

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
				mapHeight:30
			}
		},
		ready:function(){
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
			}
		},
	});
})