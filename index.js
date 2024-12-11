const voiceBtn = document.getElementById('listenBtn');
const textContent = document.getElementById('textContent');
const synth = window.speechSynthesis;

let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector('#select_voice');


//=================  Show voice   ==================
synth.onvoiceschanged = () => {
  voices = synth.getVoices();
  console.log(voices);

  speech.voice = voices[0];

  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
}

//=================  Change voice   ==================
voiceSelect.addEventListener('change',() => {
  speech.voice = voices[voiceSelect.value];
})

//=================  Listen voice   ==================
voiceBtn.addEventListener('click', ()=>{
  speech.text = textContent.value;
  window.speechSynthesis.speak(speech);
})