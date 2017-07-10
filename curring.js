var curring = function(fn){
	var args =[];

	return function(){
		if(arguments.length === 0){
			return fn.apply(this,args);
		}else{
			[].push.apply(args,arguments);
			return arguments.callee;
		}
	}
}

var cost = (function(){
	var money = 0;

	return function(){
		for(var i=0, l=arguments.length; i<l ;i++){
			money += arguments[i];
		}
		return money;
	} 
})


var cost = curring(cost);

cost(1);
cost(2);
cost(3);
cost()
