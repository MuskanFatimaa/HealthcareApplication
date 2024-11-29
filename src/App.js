import React, { useState } from 'react';
import Transcription from './components/Transcription';
import Translation from './components/Translation';
import AudioPlayback from './components/AudioPlayback';
import './App.css';

const App = () => {
    const [transcript, setTranscript] = useState('');
    const [translation, setTranslation] = useState('');

    return (
        <div className="App">
            <h1>Healthcare Translation App</h1>
            <Transcription onTranscribe={setTranscript} />
            <Translation transcript={transcript} onTranslate={setTranslation} />
            <AudioPlayback text={translation} />
        </div>
    );
};

export default App;
