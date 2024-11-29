import React from 'react';

const AudioPlayback = ({ text }) => {
    const playAudio = () => {
        const utterance = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div>
            <button onClick={playAudio}>Speak</button>
        </div>
    );
};

export default AudioPlayback;
