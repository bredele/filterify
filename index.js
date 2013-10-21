
/**
 * Turns any function into an array filter.
 * @param {Function} fn
 * @return {Function}
 * @api public
 */

module.exports = function(fn) {
	return function(arr) {
		return arr.filter(fn);
	};
};