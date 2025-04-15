import { bucket } from './firebase-admin.js'
import fetch from 'node-fetch'
import { v4 as uuid } from 'uuid'

export const uploadImageByName = async (url, name) => {
  const filename = `${name.replace(/\s+/g, '_')}.jpg`
  const file = bucket.file(`images/${filename}`)

  const [exists] = await file.exists()
  if (exists) {
    return `https://storage.googleapis.com/${bucket.name}/images/${filename}`
  }

  const res = await fetch(url)
  const buffer = await res.buffer()

  await file.save(buffer, {
    metadata: { contentType: 'image/jpeg' },
    public: true
  })

  return `https://storage.googleapis.com/${bucket.name}/images/${filename}`
}
