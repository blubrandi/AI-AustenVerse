// functions/chat.js

const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: 'Method Not Allowed',
    };
  }

  const { prompt, character } = JSON.parse(event.body);

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-4o-mini-2024-07-18',
      messages: [
        { role: 'system', content: `You are ${character} from Pride and Prejudice. Respond to the user as this character. Place heavy emphasis on speaking using the vocabulary and style of dialog used in the text. Make sure all your responses conforms to a max of 150 tokens.` },
        { role: 'user', content: prompt }
      ],
      max_tokens: 150,
      temperature: 0.7,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    }, {
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      }
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ response: response.data.choices[0].message.content.trim() }),
    };
  } catch (error) {
    console.error('Error calling OpenAI API:', error.response ? error.response.data : error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error calling OpenAI API', details: error.response ? error.response.data : error.message }),
    };
  }
};
