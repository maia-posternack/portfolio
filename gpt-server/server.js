import express from 'express'
import cors from 'cors'
import { Configuration, OpenAIApi } from 'openai'
import 'dotenv/config'

const app = express()
app.use(cors())
app.use(express.json())

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
)

app.post('/gpt-intro', async (req, res) => {
  const { fullName } = req.body

  const prompt = `
You are a funny, slightly unhinged AI assistant for a satirical publication. A person named "${fullName}" has just entered your system. Write a short, funny, slightly creepy welcome message that pretends to know them intimately. Use made-up internet info, suspicious energy, and clever jabs.
Keep it under 100 words.
`

  try {
    const completion = await openai.createChatCompletion({
      model: 'gpt-4',
      messages: [{ role: 'user', content: prompt }],
    })

    const message = completion.data.choices[0].message.content
    res.json({ message })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'GPT failed.' })
  }
})

app.listen(3001, () => {
  console.log('GPT roast server listening on http://localhost:3001')
})
