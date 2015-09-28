# youtube-thin-wrapper

[![Build Status][travis-image]][travis-url]
[![GitHub version][github-ver-image]][github-ver-url]
[![License][license-image]][license-url]

a YouTube iframe API thinness wrapper

## Getting started

```
npm i youtube-thin-wrapper
```

## Usage

```js
import YouTube from 'youtube-thin-wrapper';

YouTube.autoLoadYouTubeAPI();

const youtube = new YouTube(id, opts);
youtube.create().then(player => {
  player.playVideo();
  // Can use other api methods and more...
});
```

**Promise is required**

## Contributing

1. Fork it!
2. Create your feature branch: git checkout -b my-new-feature
3. Commit your changes: git commit -am 'Add some feature'
4. Push to the branch: git push origin my-new-feature
5. Submit a pull request :D

## License

[MIT][license-url]

© sugarshin

[npm-image]: http://img.shields.io/npm/v/youtube-thin-wrapper.svg
[npm-url]: https://www.npmjs.org/package/youtube-thin-wrapper
[bower-image]: http://img.shields.io/bower/v/youtube-thin-wrapper.svg
[bower-url]: http://bower.io/search/?q=youtube-thin-wrapper
[travis-image]: http://img.shields.io/travis/sugarshin/youtube-thin-wrapper/master.svg?branch=master
[travis-url]: https://travis-ci.org/sugarshin/youtube-thin-wrapper
[gratipay-image]: http://img.shields.io/gratipay/sugarshin.svg
[gratipay-url]: https://gratipay.com/sugarshin/
[coveralls-image]: https://coveralls.io/repos/sugarshin/youtube-thin-wrapper/badge.svg
[coveralls-url]: https://coveralls.io/r/sugarshin/youtube-thin-wrapper
[github-ver-image]: https://badge.fury.io/gh/sugarshin%2Fyoutube-thin-wrapper.svg
[github-ver-url]: http://badge.fury.io/gh/sugarshin%2Fyoutube-thin-wrapper
[license-image]: http://img.shields.io/:license-mit-blue.svg
[license-url]: http://sugarshin.mit-license.org/
[downloads-image]: http://img.shields.io/npm/dm/youtube-thin-wrapper.svg
[dependencies-image]: http://img.shields.io/david/sugarshin/youtube-thin-wrapper.svg
