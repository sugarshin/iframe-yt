/*!
 * @license youtube-thin-wrapper
 * (c) sugarshin
 * License: MIT
 */

'use strict';

import deepExtend from 'deep-extend';

export let youtubeIframeAPIReady = null;

export default class YouTube {

  static autoLoadYouTubeAPI() {
    if (window.YT) {
      youtubeIframeAPIReady = Promise.resolve();
      return;
    }
    youtubeIframeAPIReady = new Promise(resolve => {
      window.onYouTubeIframeAPIReady = () => { resolve(); };

      const script = window.document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = window.document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
    });
  }

  constructor(id, opts) {
    this.id = id;
    this.opts = deepExtend({}, {
      width: 640,
      height: 390,
      videoId: '',
      playerVars: null,
      events: {
        onStateChange() {}
      }
    }, opts);
  }

  create() {
    if (!youtubeIframeAPIReady) {
      throw Error('YouTube iframe API is not loaded.')
    }

    return new Promise(resolve => {
      youtubeIframeAPIReady.then(() => {
        const player = new window.YT.Player(this.id, deepExtend({}, this.opts, {
          events: {
            onReady() {
              resolve(player);
            }
          }
        }));
      });
    });
  }

}
