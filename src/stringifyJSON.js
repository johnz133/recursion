// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
		console.log(JSON.stringify(obj));
	var type = typeof obj;
	if(obj == null || type == 'boolean' || type == 'number'){
		return ""+obj;
	}
	if(typeof obj == "string"){
		return '"'+obj+'"';
	}
};