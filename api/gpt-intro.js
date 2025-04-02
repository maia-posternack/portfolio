import { Configuration, OpenAIApi } from 'openai'
import SerpApi from 'google-search-results-nodejs'

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY
}))

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { fullName } = req.body
  if (!fullName) return res.status(400).json({ error: 'Missing fullName' })

  const search = new SerpApi.GoogleSearch(process.env.SERPAPI_KEY)

  const snippetData = await new Promise((resolve, reject) => {
    search.json({
      engine: "google",
      q: `${fullName} harvard`,
      hl: "en",
      gl: "us",
      num: 6,
    }, (data) => {
      resolve(data)
    })
  })

  const snippets = (snippetData.organic_results || [])
    .map(r => `- ${r.title}\n  ${r.snippet || ''}`)
    .slice(0, 6)
    .join('\n\n')

  const roastPrompt = `
You are a deranged roasts for members of a the secret Lampoon club at Harvard, pretending to "dox them".
Use the following real search results about a person named "${fullName}" to generate a under 100 words. You may exaggerate or lie. Focus more on assumptions about their personality. Tease their mental health, talents, friendships. List max 3 facts.  Be as mean and funny as possible. Meaner still.  :

${snippets}

Now, write the roast in a creepy, smart, and hilarious tone. Don't sound like an AI bot, instead try to sound like a Harvard Lampoon writer. Meaner. Start with "Fancy seeing ${fullName} here"
`

  const roastCompletion = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: roastPrompt }],
  })

  const message = roastCompletion.data.choices[0].message.content.trim()

  const characters = [
    'nicki_minaj', 'kim_kardashian', 'conan_obrien', 'michael_scott', 
    'sheldon_cooper', 'elle_woods', 'barbie', 'fiona', 'iron_man', 
    'buddy_the_elf', 'ru_paul', 'zendaya', 'gordon_ramsay', 'borat', 'trump'
  ]
  
  const identity = characters[Math.floor(Math.random() * characters.length)]
  

  // ✅ Return everything
  res.status(200).json({
    message,
    identity
  })
}
