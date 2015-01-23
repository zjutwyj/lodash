/**
 * Lo-Dash 3.0.0 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern modularize exports="npm" -o ./`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.7.0 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
var createAggregator = require('lodash._createaggregator');

/**
 * Creates an array of elements split into two groups, the first of which
 * contains elements `predicate` returns truthy for, while the second of which
 * contains elements `predicate` returns falsey for. The predicate is bound
 * to `thisArg` and invoked with three arguments; (value, index|key, collection).
 *
 * If a property name is provided for `predicate` the created "_.property"
 * style callback returns the property value of the given element.
 *
 * If an object is provided for `predicate` the created "_.matches" style
 * callback returns `true` for elements that have the properties of the given
 * object, else `false`.
 *
 * @static
 * @memberOf _
 * @category Collection
 * @param {Array|Object|string} collection The collection to iterate over.
 * @param {Function|Object|string} [predicate=_.identity] The function invoked
 *  per iteration. If a property name or object is provided it is used to
 *  create a "_.property" or "_.matches" style callback respectively.
 * @param {*} [thisArg] The `this` binding of `predicate`.
 * @returns {Array} Returns the array of grouped elements.
 * @example
 *
 * _.partition([1, 2, 3], function(n) { return n % 2; });
 * // => [[1, 3], [2]]
 *
 * _.partition([1.2, 2.3, 3.4], function(n) { return this.floor(n) % 2; }, Math);
 * // => [[1, 3], [2]]
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': false },
 *   { 'user': 'fred',    'age': 40, 'active': true },
 *   { 'user': 'pebbles', 'age': 1,  'active': false }
 * ];
 *
 * // using the "_.matches" callback shorthand
 * _.map(_.partition(users, { 'age': 1 }), function(array) { return _.pluck(array, 'user'); });
 * // => [['pebbles'], ['barney', 'fred']]
 *
 * // using the "_.property" callback shorthand
 * _.map(_.partition(users, 'active'), function(array) { return _.pluck(array, 'user'); });
 * // => [['fred'], ['barney', 'pebbles']]
 */
var partition = createAggregator(function(result, value, key) {
  result[key ? 0 : 1].push(value);
}, function() { return [[], []]; });

module.exports = partition;
