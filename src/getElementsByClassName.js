// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	return getElementsByClassNameHelper(className, Array.prototype.slice.call(document.getElementsByTagName('*')).reverse(), []);
};

var getElementsByClassNameHelper = function (className, list, results) {
	if(list.length==0){
		return results;
	}
	var current = list.pop();
	if(current.className.indexOf(className)!= -1){
		results.push(current);
	}
	return getElementsByClassNameHelper(className, list, results);
};