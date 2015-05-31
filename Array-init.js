Array.__proto__.init = function () {
	var temp = new Array(arguments.length);

	for (var i = 0; i <arguments.length; i++) 
		temp[i] =new Array(arguments[i]);

	for (var i = temp.length - 1; i > 0; i--) 
		for(var j = 0; j < temp[i-1].length; j++)
			temp[i-1][j] = temp[i];

	return temp[0];
};