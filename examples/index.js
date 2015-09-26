import YouTube from 'youtube-thin-wrapper';

const div = document.createElement('div');
div.id = 'yt';
document.body.appendChild(div);

YouTube.autoLoadYouTubeAPI();

const youtube = new YouTube('yt', {
  videoId: 'j6LY4BDfGGM'
});
youtube.create().then(player => {
  player.playVideo();
});
