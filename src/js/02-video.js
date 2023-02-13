import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iFrame = document.getElementById('vimeo-player');

const player = new Player(iFrame);

player.on(
  'timeupdate',
  throttle(function (sec) {
    if (localStorage !== '') {
      localStorage.setItem('videoplayer-current-time', sec.seconds);
    }
  }, 1000)
);
checkStorage();
function checkStorage() {
  const savedSec = localStorage.getItem('videoplayer-current-time');
  if (savedSec) {
    player.setCurrentTime(savedSec);
  }
}
