/*!
 * @license youtube-thin-wrapper
 * (c) sugarshin
 * License: MIT
 */

'use strict';

import deepExtend from 'deep-extend';

export let _youtubeIframeAPIReady = null;

export default class YouTube {

  static autoLoadYouTubeAPI() {
    _youtubeIframeAPIReady = new Promise(resolve => {
      window.onYouTubeIframeAPIReady = () => { resolve(); };

      const script = window.document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = window.document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
    });
  }

  constructor(id, opts) {
    this.id = id;
    this.opts = deepExtend({
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
    return new Promise(resolve => {
      _youtubeIframeAPIReady.then(() => {
        const player = this.player = new window.YT.Player(this.id, deepExtend({}, this.opts, {
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
