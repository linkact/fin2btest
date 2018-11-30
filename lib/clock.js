
/*
 * Current date/time module
 *
 * long type (milliseconds) 으로 반환.
 * 
 */

module.exports.now = function(){
	var n = new Date().getTime();
	return n;
};
