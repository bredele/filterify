# filterify

  Turns any function into an array mapping

## Installation

  Install with [component(1)](http://component.io):

    $ component install bredele/filterify

## Usage

```js
var filterify = require('filterify');
var pair = filterify(function(n){return !(n % 2);});

pair([1,2,3]);
// [2]

```

## License

  MIT
