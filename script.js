document.addEventListener("DOMContentLoaded",function(){
	new Vue({
		el:'#game',
		data: function(){
			return{
				cellSize:20,
				field:[],
			}
		},
		ready:function(){
			for (var x = 1; x <= 40; x++) {
				for (var y = 1; y <= 30; y++) {
					this.field.push({
						id:"cell "+x+" "+y,
						x:(x-1),
						y:(y-1)
					})
				};
			};
		},
		methods:{
			
		}
	});
})