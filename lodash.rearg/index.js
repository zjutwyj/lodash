/**
 * Lo-Dash 3.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var baseFlatten = require('lodash._baseflatten'),
    createWrapper = require('lodash._createwrapper');

/** Used to compose bitmasks for wrapper metadata. */
var REARG_FLAG = 128;

/**
 * Creates a function that invokes `func` with arguments arranged according
 * to the specified indexes where the argument value at the first index is
 * provided as the first argument, the argument value at the second index is
 * provided as the second argument, and so on.
 *
 * @static
 * @memberOf _
 * @category Function
 * @param {Function} func The function to rearrange arguments for.
 * @param {...(number|number[])} indexes The arranged argument indexes,
 *  specified as individual indexes or arrays of indexes.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var rearged = _.rearg(function(a, b, c) {
 *   return [a, b, c];
 * }, 2, 0, 1);
 *
 * rearged('b', 'c', 'a')
 * // => ['a', 'b', 'c']
 *
 * var map = _.rearg(_.map, [1, 0]);
 * map(function(n) { return n * 3; }, [1, 2, 3]);
 * // => [3, 6, 9]
 */
function rearg(func) {
  var indexes = baseFlatten(arguments, false, false, 1);
  return createWrapper(func, REARG_FLAG, null, null, null, indexes);
}

module.exports = rearg;
