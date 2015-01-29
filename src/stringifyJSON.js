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
	if(obj instanceof Object){
		return stringifyJSONHelper(obj, []);
	}
};

var stringifyJSONHelper = function(obj, results) {
	if(obj instanceof Array){
		for(var i = 0; i < obj.length; i++){
			if(typeof obj[i] == 'string'){
				results.push('"'+obj[i]+'"');
			}
			else if(obj[i] instanceof Object){
				results.push(stringifyJSONHelper(obj[i], []));
			}
			else {
				results.push(obj[i]);
			}
		}
		return "["+results +"]";
	} else {
		for(var key in obj){
			if(obj[key] instanceof Object){
				results.push('"' + key + '":' + stringifyJSONHelper(obj[key],[]));
			} else {
				results.push('"' + key + '":' + (typeof obj[key] == 'string' ? '"'+obj[key]+'"' : ""+obj[key]));
			}
		}
		return "{" + results + "}";
	}
}