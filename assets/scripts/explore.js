// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
   const voiceSelect = document.getElementById('voice-select');
  const textBox = document.querySelector('textarea');
  const talkButton = document.querySelector('button');
  const faceImage = document.querySelector('img');

  function loadVoices() {
    const voices = speechSynthesis.getVoices();

    voiceSelect.innerHTML = '';

    voices.forEach(function (voice) {
      let option = document.createElement('option');
      option.textContent = voice.name;
      option.value = voice.name;
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();
  speechSynthesis.addEventListener('voiceschanged', loadVoices);

  talkButton.addEventListener('click', function () {
    let message = new SpeechSynthesisUtterance(textBox.value);
    let voices = speechSynthesis.getVoices();

    message.voice = voices.find(function (voice) {
      return voice.name === voiceSelect.value;
    });

    message.onstart = function () {
      faceImage.src = 'assets/images/smiling-open.png';
    };

    message.onend = function () {
      faceImage.src = 'assets/images/smiling.png';
    };

    speechSynthesis.speak(message);
  });
}