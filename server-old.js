// const express = require('express')
// const axios = require('axios')
// const dotenv = require('dotenv')
// const app = express()

// dotenv.config()
// app.use(express.json())
// app.use(express.static('public'))  // Serve your static HTML files

// const OPENAI_API_KEY = process.env.OPENAI_API_KEY

// app.post('/chat', async (req, res) => {
//     const { prompt, character } = req.body

//     try {
//         const response = await axios.post('https://api.openai.com/v1/chat/completions', {
//             model: 'gpt-4o-mini-2024-07-18',
//             messages: [
//                 { role: 'system', content: `You are ${character} from Pride and Prejudice. Respond to the user as this character. Place heavy emphasis on speaking using the vocabulary and style of dialog used in the text. Make sure all your responses conforms to a max of 150 tokens.` },
//                 { role: 'user', content: prompt }
//             ],
//             max_tokens: 150,
//             temperature: 0.7,
//             top_p: 1.0,
//             frequency_penalty: 0.0,
//             presence_penalty: 0.0,
//         }, {
//             headers: {
//                 'Authorization': `Bearer ${OPENAI_API_KEY}`,
//                 'Content-Type': 'application/json',
//             }
//         })

//         res.json({ response: response.data.choices[0].message.content.trim() })
//     } catch (error) {
//         console.error('Error calling OpenAI API:', error.response ? error.response.data : error.message)
//         res.status(500).json({ error: 'Error calling OpenAI API', details: error.response ? error.response.data : error.message })
//     }
// })

// const PORT = process.env.PORT || 3000
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`)
// })