/*
 * fibonacci calculation module
 *
 * 단순 재귀 function으로는 n의 증가에 따라 처리시간이 급격히 늘어나게 되어
 * Underscore의 memoize를 활용하여 function caching을 차용함.
 * 
 */

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