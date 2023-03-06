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
// -----------------------------------

// const iframe = document.querySelector('iframe#vimeo-player');
// const player = new Vimeo.Player(iframe);

// player.on('play', () => {
//   console.log('played the video!');
// });

// player.getVideoTitle().then(title => {
//   console.log('title:', title);
// });

// const savePlayerTime = ({ duration, percent, seconds }) => {
//   console.log(seconds);
//   localStorage.setItem('videoplayer-current-time', seconds);
// };

// player.on('timeupdate', _.throttle(savePlayerTime, 1000));

// const getLocalLastPlayedTime = () => {
//   const defaultTime = 0;
//   try {
//     const locallySavedTime = localStorage.getItem('videoplayer-current-time');
//     if (!locallySavedTime) return defaultTime;

//     const parsedTime = JSON.parse(locallySavedTime);
//     return Number(parsedTime);
//   } catch (error) {
//     console.log({ error });
//     return defaultTime;
//   }
// };

// const resumePlayerOnLastPlayed = () => {
//   const lastPlayedTime = getLocalLastPlayedTime();
//   player.setCurrentTime(lastPlayedTime);
//   // player.play();
// };

// resumePlayerOnLastPlayed();
