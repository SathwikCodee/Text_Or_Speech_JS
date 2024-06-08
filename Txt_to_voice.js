const textarea = document.getElementById("textarea");
const listenBtn =  document.getElementById("listen");
const voiceSelection = document.getElementById("voicesSelection");

let differentVoices =[];

//Represents a speech request, which contains the content and other configurable settings.
//This object represents a speech request and will be used to configure and control text-to-speech synthesis.
let speechRequest = new SpeechSynthesisUtterance();

window.speechSynthesis.onvoiceschanged = ()  => {

    differentVoices = window.speechSynthesis.getVoices();

    speechRequest.voice = voiceSelection[0];

    differentVoices.forEach((voice,i) => ( voiceSelection.options[i] = new Option(voice.name,i)));


}

voiceSelection.addEventListener("change", () => {
    speechRequest.voice = differentVoices[voiceSelection.value]
});

listenBtn.addEventListener("click", () =>{
    speechRequest.text = textarea.value;
    window.speechSynthesis.speak(speechRequest);
});



//The SpeechSynthesis interface of the Web Speech API is the controller interface for the speech service; 
//this can be used to retrieve information about the synthesis voices available on the device, start and pause speech, and other commands besides.
//https://chat.openai.com/share/c6dac0c0-f594-4006-b298-ed282205873b
