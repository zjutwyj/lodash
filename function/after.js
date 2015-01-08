define(['../lang/isFunction', '../internal/root'], function(isFunction, root) {

  /** Used as the `TypeError` message for "Functions" methods. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /* Native method references for those with the same name as other `lodash` methods. */
  var nativeIsFinite = root.isFinite;

  /**
   * The opposite of `_.before`; this method creates a function that invokes
   * `func` once it is called `n` or more times.
   *
   * @static
   * @memberOf _
   * @category Function
   * @param {number} n The number of calls before `func` is invoked.
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new restricted function.
   * @example
   *
   * var saves = ['profile', 'settings'];
   *
   * var done = _.after(saves.length, function() {
   *   console.log('done saving!');
   * });
   *
   * _.forEach(saves, function(type) {
   *   asyncSave({ 'type': type, 'complete': done });
   * });
   * // => logs 'done saving!' after the two async saves have completed
   */
  function after(n, func) {
    if (!isFunction(func)) {
      if (isFunction(n)) {
        var temp = n;
        n = func;
        func = temp;
      } else {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
    }
    n = nativeIsFinite(n = +n) ? n : 0;
    return function() {
      if (--n < 1) {
        return func.apply(this, arguments);
      }
    };
  }

  return after;
});
