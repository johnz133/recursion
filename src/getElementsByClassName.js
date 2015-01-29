// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	return getElementsByClassNameHelper(className, document.body, []);
};

var getElementsByClassNameHelper = function (className, node, results) {
	if(node.classList != undefined && node.classList.contains(className)){
		results.push(node);
	}
	var children = node.childNodes;
	if(children.length > 0){
		for(var i = 0; i < children.length; i++){
			results = getElementsByClassNameHelper(className, children[i], results);
		}
	}
	return results;
};