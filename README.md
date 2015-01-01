# lodash v3.0.0

The [modern build](https://github.com/lodash/lodash/wiki/Build-Differences) of [Lo-Dash](https://lodash.com/) exported as [Node.js](http://nodejs.org/)/[io.js](https://iojs.org/) modules.

Generated using [lodash-cli](https://www.npmjs.com/package/lodash-cli):
```bash
$ lodash modularize modern exports=node -o ./
$ lodash modern exports=node -d -o ./index.js
```

## Installation

Using npm:

```bash
$ {sudo -H} npm i -g npm
$ npm i --save lodash
```

In Node.js/io.js:

```js
// load the modern build
var _ = require('lodash');

// or a method category
var array = require('lodash/array');

// or a method
var chunk = require('lodash/array/chunk');
```

See the [package source](https://github.com/lodash/lodash/tree/3.0.0-npm) for more details.

**Note:**<br>
Don’t assign values to the [special variable](http://nodejs.org/api/repl.html#repl_repl_features) `_` when in the REPL.<br>
Install [n_](https://www.npmjs.com/package/n_) for a REPL that includes Lo-Dash by default.

## Features *not* in Underscore

 * ~100% [code coverage](https://coveralls.io/r/lodash)
 * Packages for [AMD](https://github.com/lodash/lodash/tree/3.0.0-amd), [ES](https://www.npmjs.com/package/lodash-es), & [individual methods](https://www.npmjs.com/browse/keyword/lodash-modularized)
 * Follows [semantic versioning](http://semver.org/) for releases
 * Deferred chaining & [lazy evaluation](http://filimanjaro.com/blog/2014/introducing-lazy-evaluation/)
 * [_(…)](https://lodash.com/docs#_) supports intuitive chaining
 * [_.ary](https://lodash.com/docs#ary) & [_.rearg](https://lodash.com/docs#rearg) to change function argument limits & order
 * [_.at](https://lodash.com/docs#at) for cherry-picking collection values
 * [_.attempt](https://lodash.com/docs#attempt) to execute functions which may error without a try-catch
 * [_.before](https://lodash.com/docs#before) to complement [_.after](https://lodash.com/docs#after)
 * [_.bindKey](https://lodash.com/docs#bindKey) for binding [*“lazy”*](http://michaux.ca/articles/lazy-function-definition-pattern) defined methods
 * [_.chunk](https://lodash.com/docs#chunk) for splitting an array into chunks of a given size
 * [_.clone](https://lodash.com/docs#clone) supports shallow cloning of `Date` & `RegExp` objects
 * [_.cloneDeep](https://lodash.com/docs#cloneDeep) for deep cloning arrays & objects
 * [_.create](https://lodash.com/docs#create) for easier object inheritance
 * [_.curry](https://lodash.com/docs#curry) & [_.curryRight](https://lodash.com/docs#curryRight) for creating [curried](http://hughfdjackson.com/javascript/why-curry-helps/) functions
 * [_.debounce](https://lodash.com/docs#debounce) & [_.throttle](https://lodash.com/docs#throttle) are cancelable & accept options for more control
 * [_.findIndex](https://lodash.com/docs#findIndex) & [_.findKey](https://lodash.com/docs#findKey) for finding indexes & keys
 * [_.flow](https://lodash.com/docs#flow) to complement [_.flowRight](https://lodash.com/docs#vlowRight) (a.k.a `_.compose`)
 * [_.forEach](https://lodash.com/docs#forEach) supports exiting early
 * [_.forIn](https://lodash.com/docs#forIn) for iterating all enumerable properties
 * [_.forOwn](https://lodash.com/docs#forOwn) for iterating own properties
 * [_.includes](https://lodash.com/docs#includes) accepts a `fromIndex`
 * [_.isError](https://lodash.com/docs#isError) to check for error objects
 * [_.isNative](https://lodash.com/docs#isNative) to check for native functions
 * [_.isPlainObject](https://lodash.com/docs#isPlainObject) & [_.toPlainObject](https://lodash.com/docs#toPlainObject) to check for & convert to `Object` objects
 * [_.isTypedArray](https://lodash.com/docs#isTypedArray) to check for typed arrays
 * [_.keysIn](https://lodash.com/docs#keysIn) & [_.valuesIn](https://lodash.com/docs#valuesIn) for getting keys & values of all enumerable properties
 * [_.mapValues](https://lodash.com/docs#mapValues) for [mapping](https://lodash.com/docs#map) values to an object
 * [_.merge](https://lodash.com/docs#merge) for a deep [_.extend](https://lodash.com/docs#extend)
 * [_.parseInt](https://lodash.com/docs#parseInt) for consistent cross-environment behavior
 * [_.pull](https://lodash.com/docs#pull), [_.pullAt](https://lodash.com/docs#pullAt), & [_.remove](https://lodash.com/docs#remove) for mutating arrays
 * [_.random](https://lodash.com/docs#random) supports returning floating-point numbers
 * [_.runInContext](https://lodash.com/docs#runInContext) for collisionless mixins & easier mocking
 * [_.slice](https://lodash.com/docs#slice) for creating subsets of array-like values
 * [_.sortByAll](https://lodash.com/docs#sortBy) for sorting by multiple properties
 * [_.support](https://lodash.com/docs#support) for flagging environment features
 * [_.template](https://lodash.com/docs#template) supports [*“imports”*](https://lodash.com/docs#templateSettings_imports) options & [ES template delimiters](http://people.mozilla.org/~jorendorff/es6-draft.html#sec-template-literal-lexical-components)
 * [_.transform](https://lodash.com/docs#transform) as a powerful alternative to [_.reduce](https://lodash.com/docs#reduce) for transforming objects
 * [_.thru](https://lodash.com/docs#thru) to pass values thru method chains
 * [_.where](https://lodash.com/docs#where) supports deep object comparisons
 * [_.xor](https://lodash.com/docs#xor) to complement [_.difference](https://lodash.com/docs#difference), [_.intersection](https://lodash.com/docs#intersection), & [_.union](https://lodash.com/docs#union)
 * [_.bind](https://lodash.com/docs#bind), [_.curry](https://lodash.com/docs#curry), [_.partial](https://lodash.com/docs#partial), &
   [more](https://lodash.com/docs  "_.bindKey, _.curryRight, _.partialRight") support customizable argument placeholders
 * [_.capitalize](https://lodash.com/docs#capitalize), [_.trim](https://lodash.com/docs#trim), &
   [more](https://lodash.com/docs "_.camelCase, _.deburr, _.endsWith, _.escapeRegExp, _.kebabCase, _.pad, _.padLeft, _.padRight, _.repeat, _.snakeCase, _.startsWith, _.trimLeft, _.trimRight, _.trunc, _.words") string methods
 * [_.clone](https://lodash.com/docs#clone), [_.isEqual](https://lodash.com/docs#isEqual), &
   [more](https://lodash.com/docs "_.assign, _.cloneDeep, _.merge") accept callbacks
 * [_.dropWhile](https://lodash.com/docs#dropWhile), [_.takeWhile](https://lodash.com/docs#takeWhile), &
   [more](https://lodash.com/docs "_.drop, _.dropRightWhile, _.take, _.takeRightWhile") to complement [_.first](https://lodash.com/docs#first), [_.initial](https://lodash.com/docs#initial), [_.last](https://lodash.com/docs#last), & [_.rest](https://lodash.com/docs#rest)
 * [_.findLast](https://lodash.com/docs#findLast), [_.findLastIndex](https://lodash.com/docs#findLastIndex), &
   [more](https://lodash.com/docs "_.findLastKey, _.flowRight, _.forEachRight, _.forInRight, _.forOwnRight, _.partialRight") right-associative methods
 * [_.includes](https://lodash.com/docs#includes), [_.toArray](https://lodash.com/docs#toArray), &
   [more](https://lodash.com/docs "_.at, _.countBy, _.every, _.filter, _.find, _.findLast, _.forEach, _.forEachRight, _.groupBy, _.indexBy, _.invoke, _.map, _.max, _.min, _.partition, _.pluck, _.reduce, _.reduceRight, _.reject, _.shuffle, _.size, _.some, _.sortBy") accept strings

## Support

Tested in Chrome 39-40, Firefox 34-35, IE 6-11, Opera 25-26, Safari 5-8, io.js 1.0.3, Node.js 0.8.28 & 0.10.35, PhantomJS 1.9.8, RingoJS 0.11, & Rhino 1.7RC5.

Automated browser test runs [are available](https://saucelabs.com/u/lodash) as well as [CI runs](https://travis-ci.org/lodash/lodash/).<br>
Special thanks to [Sauce Labs](https://saucelabs.com/) for providing automated browser testing.
