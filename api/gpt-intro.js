import { Configuration, OpenAIApi } from 'openai'

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

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
    res.status(200).json({ message })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Failed to generate roast.' })
  }
}
