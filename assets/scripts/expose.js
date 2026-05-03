// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
   const hornSelect = document.getElementById('horn-select');
  const hornImage = document.querySelector('img');
  const hornAudio = document.querySelector('audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const playButton = document.querySelector('button');

  hornSelect.addEventListener('change', function () {
    if (hornSelect.value === 'party-horn') {
      hornImage.src = 'assets/images/party-horn.svg';
      hornAudio.src = 'assets/audio/party-horn.mp3';
    } else if (hornSelect.value === 'air-horn') {
      hornImage.src = 'assets/images/air-horn.svg';
      hornAudio.src = 'assets/audio/air-horn.mp3';
    } else if (hornSelect.value === 'car-horn') {
      hornImage.src = 'assets/images/car-horn.svg';
      hornAudio.src = 'assets/audio/car-horn.mp3';
    }
  });

  volumeSlider.addEventListener('input', function () {
    let volume = volumeSlider.value;

    hornAudio.volume = volume / 100;

    if (volume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  playButton.addEventListener('click', function () {
    hornAudio.play();

    if (hornSelect.value === 'party-horn') {
      let confetti = new JSConfetti();
      confetti.addConfetti();
    }
  });
}