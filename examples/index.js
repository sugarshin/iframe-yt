import 'babelify/polyfill';
import YouTube from 'youtube-thin-wrapper';

const div = document.createElement('div');
div.id = 'yt';
document.body.appendChild(div);

YouTube.autoLoadYouTubeAPI();

const youtube = new YouTube('yt', {
  videoId: 'j6LY4BDfGGM'
});

(async function() {
  const player = await youtube.create();
  player.playVideo();
})();
