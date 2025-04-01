// lib/firebase-admin.js
import admin from 'firebase-admin'
import path from 'path'
import { readFileSync } from 'fs'

const serviceAccount = JSON.parse(
  readFileSync(path.resolve('firebase-adminsdk.json'), 'utf-8')
)

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "lampoon-portfolio.firebasestorage.app" 
  })
}

const bucket = admin.storage().bucket()
const firestore = admin.firestore()

export { admin, bucket, firestore }
