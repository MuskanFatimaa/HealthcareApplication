import axios from 'axios';


const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export const translateText = async (text, targetLanguage) => {
    const prompt = `Translate this medical text into ${targetLanguage}: ${text}`;
    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: 'gpt-4',
                messages: [{ role: 'user', content: prompt }]
            },
            {
                headers: {
                    Authorization: `Bearer ${OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        return response.data.choices[0].message.content.trim();
    } catch (error) {
        console.error('Error translating text:', error);
        throw new Error('Translation failed.');
    }
};
