new Vue({
	el:'#vue-app',
	data: {
		name:'Candra',
		job:'Ninja',
		webstite:'https://github.com',
		webstiteTag:'<a href="https://github.com">Github</a>'
	},
	methods:{
		greet:function(time){
			return 'Good '+ time+' '+ this.name;
		}
	}
});