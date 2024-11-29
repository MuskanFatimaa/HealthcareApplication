import React, { useState } from 'react';
import { translateText } from '../api/openai';

const Translation = ({ transcript }) => {
    const [translatedText, setTranslatedText] = useState('');
    const [targetLanguage, setTargetLanguage] = useState('Spanish');

    const handleTranslate = async () => {
        try {
            const translation = await translateText(transcript, targetLanguage);
            setTranslatedText(translation);
        } catch (error) {
            console.error('Translation failed:', error);
        }
    };

    return (
        <div>
            <label>
                Target Language:
                <select value={targetLanguage} onChange={(e) => setTargetLanguage(e.target.value)}>
                    <option value="Spanish">Spanish</option>
                    <option value="French">French</option>
                    <option value="German">German</option>
                </select>
            </label>
            <button onClick={handleTranslate}>Translate</button>
            <p>Translation: {translatedText}</p>
        </div>
    );
};

export default Translation;
