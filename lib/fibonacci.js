var _ = require('underscore');


module.exports.fibo = function(num){
	return fibonacci2(num);
};

function fibonacci(num) {
	var answer = 0;
	if( num <= 1 ) {
		return num;
	}
	else if( num > 1 ) {
		answer = fibonacci(num-1) + fibonacci(num-2);
	}
	return answer;
}

var fibonacci2 = _.memoize(function(num) {
	var answer = 0;
	if( num <= 1 ) {
		return num;
	}
	else if( num > 1 ) {
		answer = fibonacci2(num-1) + fibonacci2(num-2);
	}
	return answer;
});