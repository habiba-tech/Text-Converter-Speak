let speech = new SpeechSynthesisUtterance();
let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0]; // Default to the first available voice

    // Clear the options in case they are already populated
    voiceSelect.innerHTML = '';

    // Populate the select options with available voices
    voices.forEach((voice, i) => {
        const option = new Option(voice.name, i); // Create a new option element
        voiceSelect.add(option); // Add the option to the select dropdown
    });
};

voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value]; // Update the speech.voice when the user selects a different voice
});

document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value; // Set the speech text
    window.speechSynthesis.speak(speech); // Speak the text
});
