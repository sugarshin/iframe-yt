import { jsdom } from 'jsdom';
import assert from 'power-assert';

import YouTube, { youtubeIframeAPIReady } from '../';

const document = jsdom('<html><head><script></script></head><body></body></html>');
global.window = document.defaultView;

describe('YouTube', () => {

  describe('static autoLoadYouTubeAPI', () => {
    it('case 1', () => {
      YouTube.autoLoadYouTubeAPI();
      return youtubeIframeAPIReady.then(() => {
        assert(true);
      });
    });
  });

  describe('constructor', () => {

    it('instanceof', () => {
      const yt = new YouTube('id');
      assert(yt instanceof YouTube);
    });

    it('opts other than events', () => {
      const expected = {
        width: 640,
        height: 360,
        videoId: 'id',
        playerVars: { wmode: 'transparent' }
      };

      const actual = new YouTube('id', {
        height: 360,
        videoId: 'id',
        playerVars: { wmode: 'transparent' }
      }).opts;

      delete actual.events

      assert.deepEqual(actual, expected, 'opts');
    });

    it('opts events.onStateChange', () => {
      let actual = false;

      const yt = new YouTube('id', {
        events: {
          onStateChange() {
            actual = true;
          }
        }
      });

      yt.opts.events.onStateChange();

      assert(actual);
    });

  });

  describe('.create()', () => {

    it('case 1 (is impossible)', () => {
      assert(true);
    });

  });

});
