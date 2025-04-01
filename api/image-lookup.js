import SerpApi from 'google-search-results-nodejs'
import { uploadImageByName } from '../lib/uploadToFirebase.js'
import { bucket } from '../lib/firebase-admin.js'

const serp = new SerpApi.GoogleSearch(process.env.SERPAPI_KEY)

export default async function handler(req, res) {
  const { fullName, character } = req.body
  if (!fullName || !character) {
    return res.status(400).json({ error: 'Missing fullName or character' })
  }

  const userFilename = `${fullName.replace(/\s+/g, '_')}.jpg`
  const userFile = bucket.file(`images/${userFilename}`)
  const [userExists] = await userFile.exists()

  let userImageUrl

  if (userExists) {
    userImageUrl = `https://storage.googleapis.com/${bucket.name}/images/${userFilename}`
  } else {
    const personImgRes = await new Promise(resolve => {
      serp.json({
        engine: 'google_images',
        q: `${fullName} harvard`,
        hl: 'en',
        gl: 'us',
        num: 1
      }, resolve)
    })

    const personImageUrl = personImgRes.images_results?.[0]?.original

    if (!personImageUrl) {
      return res.status(404).json({ error: 'Could not find person image' })
    }

    userImageUrl = await uploadImageByName(personImageUrl, fullName)
  }

  const characterFilename = `${character}.jpg`
  const characterImageUrl = `https://storage.googleapis.com/${bucket.name}/images/${characterFilename}`

  return res.status(200).json({
    userImage: userImageUrl,
    characterImage: characterImageUrl
  })
}
