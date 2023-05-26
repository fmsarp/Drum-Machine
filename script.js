const drumPads = document.querySelectorAll('.drum-pad');
const display = document.getElementById('display');

drumPads.forEach((pad) => {
    pad.addEventListener('click', () => {
      const audio = pad.querySelector('audio');
      audio.currentTime = 0;
      audio.play();
      display.innerText = pad.id;
    });
    
    document.addEventListener('keydown', (event) => {
      if (event.key.toUpperCase() === pad.innerText) {
        const audio = pad.querySelector('audio');
        audio.currentTime = 0;
        audio.play();
        display.innerText = pad.id;
      }
    });
  });
  