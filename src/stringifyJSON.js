// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	if(obj instanceof Object){
		return stringifyJSONHelper(obj, []);
	} else if(typeof obj == "string"){
		return '"' + obj + '"';
	} else {
		return "" + obj;
	}
};

var stringifyJSONHelper = function(obj, results) {
	if(obj instanceof Array){
		for(var i = 0; i < obj.length; i++){
			if(typeof obj[i] == 'string'){
				results.push('"' + obj[i] + '"');
			}
			else if(obj[i] instanceof Object){
				results.push(stringifyJSONHelper(obj[i], []));
			}
			else {
				results.push(obj[i]);
			}
		}
		return "[" + results + "]";
	} else {
		for(var key in obj){
			if(typeof obj[key] != 'function' && obj[key] !== undefined){
				if(obj[key] instanceof Object){
					results.push('"' + key + '":' + stringifyJSONHelper(obj[key],[]));
				} else {
					results.push('"' + key + '":' + (typeof obj[key] == 'string' ? '"'+obj[key]+'"' : ""+obj[key]));
				}
			}
		}
		return "{" + results + "}";
	}
}