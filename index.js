
/**
 * Turns any function into an array filter.
 * @param {Function} fn
 * @return {Function}
 * @api public
 */

module.exports = function(fn) {
	return function(arr) {
		var cp = [];
		for(var i = 0, l = arr.length; i < l; i++) {
			if(fn(arr[i])) cp.push(arr[i]);
		}
		return cp;
	};
};