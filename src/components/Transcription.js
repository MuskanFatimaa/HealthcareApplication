import React, { useState } from 'react';

const Transcription = ({ onTranscribe }) => {
    const [isListening, setIsListening] = useState(false);
    const [transcription, setTranscription] = useState('');

    const startListening = () => {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = 'en-US';
        recognition.interimResults = false;

        recognition.onstart = () => setIsListening(true);
        recognition.onresult = (event) => {
            const text = event.results[0][0].transcript;
            setTranscription(text);
            onTranscribe(text); // Send transcript to parent component
        };
        recognition.onend = () => setIsListening(false);
        recognition.onerror = (error) => {
            console.error('Speech recognition error:', error);
            setIsListening(false);
        };

        recognition.start();
    };

    return (
        <div>
            <button onClick={startListening} disabled={isListening}>
                {isListening ? 'Listening...' : 'Start Speaking'}
            </button>
            <p>Transcription: {transcription}</p>
        </div>
    );
};

export default Transcription;
