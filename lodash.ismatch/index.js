/**
 * Lo-Dash 3.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var baseIsMatch = require('lodash._baseismatch'),
    bindCallback = require('lodash._bindcallback'),
    keys = require('lodash.keys');

/** Used for native method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && (value === 0 ? ((1 / value) > 0) : !isObject(value));
}

/**
 * Checks if `value` is the language type of `Object`.
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * **Note:** See the [ES5 spec](http://es5.github.io/#x8) for more details.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(1);
 * // => false
 */
function isObject(value) {
  // Avoid a V8 JIT bug in Chrome 19-20.
  // See https://code.google.com/p/v8/issues/detail?id=2291.
  var type = typeof value;
  return type == 'function' || (value && type == 'object') || false;
}

/**
 * Performs a deep comparison between `object` and `source` to determine if
 * `object` contains equivalent property values. If `customizer` is provided
 * it is invoked to compare values. If `customizer` returns `undefined`
 * comparisons are handled by the method instead. The `customizer` is bound
 * to `thisArg` and invoked with three arguments; (value, other, index|key).
 *
 * **Note:** This method supports comparing properties of arrays, booleans,
 * `Date` objects, numbers, `Object` objects, regexes, and strings. Functions
 * and DOM nodes are **not** supported. Provide a customizer function to extend
 * support for comparing other values.
 *
 * @static
 * @memberOf _
 * @category Lang
 * @param {Object} source The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Function} [customizer] The function to customize comparing values.
 * @param {*} [thisArg] The `this` binding of `customizer`.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 * @example
 *
 * var object = { 'user': 'fred', 'age': 40 };
 *
 * _.isMatch(object, { 'age': 40 });
 * // => true
 *
 * _.isMatch(object, { 'age': 36 });
 * // => false
 *
 * // using a customizer callback
 * var object = { 'greeting': 'hello' };
 * var source = { 'greeting': 'hi' };
 *
 * _.isMatch(object, source, function(value, other) {
 *   return _.every([value, other], RegExp.prototype.test, /^h(?:i|ello)$/) || undefined;
 * });
 * // => true
 */
function isMatch(object, source, customizer, thisArg) {
  var props = keys(source),
      length = props.length;

  customizer = typeof customizer == 'function' && bindCallback(customizer, thisArg, 3);
  if (!customizer && length == 1) {
    var key = props[0],
        value = source[key];

    if (isStrictComparable(value)) {
      return object != null && value === object[key] && hasOwnProperty.call(object, key);
    }
  }
  var values = Array(length),
      strictCompareFlags = Array(length);

  while (length--) {
    value = values[length] = source[props[length]];
    strictCompareFlags[length] = isStrictComparable(value);
  }
  return baseIsMatch(object, props, values, strictCompareFlags, customizer);
}

module.exports = isMatch;
