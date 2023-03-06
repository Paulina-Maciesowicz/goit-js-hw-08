import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe, { id: 19231868, width: 640 });
const savedStorageTime = localStorage.getItem(LOCALSTORAGE_KEY);

player.on('play', () => {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

const savePlayerTime = ({ duration, percent, seconds }) => {
  console.log(seconds);
  localStorage.setItem(LOCALSTORAGE_KEY, seconds);
};

player.on('timeupdate', throttle(savePlayerTime, 1000));

player
  .setCurrentTime(savedStorageTime)
  .then(function (seconds = savedStorageTime) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
