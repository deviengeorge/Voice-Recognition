const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

const greetings = ['Im fine and what about you?'];
const weather = ['the weather is very very very very good']


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log('Voice is activated, you can speak to microphone.')
};
recognition.onresult = function (event) {

    console.log(event);

    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;

    content.textContent = transcript;

    readOutLoad(transcript);
};

// Add evnent listner
btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoad(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = 'I dont know what you said';

    if (message.includes('how are you')) {

        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;

    }else if (message.includes('weather')) {

        const finalText = weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalText;

    }else if (message.includes('my father')){

        const finalText = 'name of your father is George'
        speech.text = finalText;

    }else if (message.includes('my mother')){

        const finalText = 'name of your mother is Mary'
        speech.text = finalText;

    }
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);
}