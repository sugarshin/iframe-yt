# iframe-yt

[![Build Status](https://travis-ci.org/sugarshin/iframe-yt.svg?branch=master)](https://travis-ci.org/sugarshin/iframe-yt) [![Coverage Status](https://coveralls.io/repos/sugarshin/iframe-yt/badge.svg)](https://coveralls.io/r/sugarshin/iframe-yt) [![GitHub version](https://badge.fury.io/gh/sugarshin%2Fiframe-yt.svg)](http://badge.fury.io/gh/sugarshin%2Fiframe-yt) [![License](http://img.shields.io/:license-mit-blue.svg)](http://sugarshin.mit-license.org/)

IframeYT

```shell
npm i sugarshin/iframe-yt
```

## Usage

```coffeescript
IframeYT = require 'iframe-yt'

new IframeYT element, opts
```

or

```html
<script src="eventemitter2.js"></script>
<script src="bluebird.js"></script>
<script src="iframe-yt.js"></script>
<script>
  new IframeYT(element, opts);
</script>
```

### Config

options

```coffeescript
_defaults:
  width: '640'
  height: '390'
  videoId: ''
  playerVars: null
  onReady: () ->
  onStateChange: () ->
```

## Contributing

[CoffeeScript](//coffeescript.org/)

[mocha-phantomjs](//github.com/metaskills/mocha-phantomjs)

[power-assert](//github.com/twada/power-assert)

```shell
npm test
```

## License

[MIT](http://sugarshin.mit-license.org/)

© sugarshin
