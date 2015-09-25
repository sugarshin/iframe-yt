/*!
 * @license youtube-thin-wrapper
 * (c) sugarshin
 * License: MIT
 */

'use strict';

import assign from 'object-assign';

export default class YouTube {

  static promiseForLoadYouTubeAPI = null;

  static autoLoadYouTubeAPI() {
    YouTube.promiseForLoadYouTubeAPI = new Promise(resolve => {
      window.onYouTubeIframeAPIReady = () => { resolve(); };

      const script = document.createElement('script');
      script.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(script, firstScriptTag);
    });
  }

  constructor(el, opts) {
    this.opts = assign({}, {
      width: 640,
      height: 390,
      videoId: '',
      playerVars: null
    }, opts);

    this.id = el.id;
  }

  create() {
    return new Promise((resolve, reject) => {
      YouTube.promiseForLoadYouTubeAPI.then(() => {
        const player = new YT.Player(this.id, assign({}, this.opts, {
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
