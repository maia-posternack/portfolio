import admin from 'firebase-admin'
import path from 'path'
import { readFileSync } from 'fs'

let serviceAccount

// 🔒 Use environment variable in production (Vercel)
  console.log('🟢 Using service account from env')
  const rawKey = process.env.FIREBASE_PRIVATE_KEY
  
const keyWithRealLineBreaks = rawKey.replace(/\\n/g, '\n')
const fullPrivateKey = `-----BEGIN PRIVATE KEY-----\n${keyWithRealLineBreaks}\n-----END PRIVATE KEY-----\n`
serviceAccount = {
    "type": "service_account",
    "project_id": "lampoon-portfolio",
    "private_key_id": "00f3d7b4495727a925978de6ed84805e198e67c2",
    "private_key": fullPrivateKey,
    "client_email": "firebase-adminsdk-fbsvc@lampoon-portfolio.iam.gserviceaccount.com",
    "client_id": "116708488986235636353",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40lampoon-portfolio.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
  }
  
  console.log(serviceAccount.private_key)

  
  console.log("✅ parsed keys:", Object.keys(serviceAccount))

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "lampoon-portfolio.firebasestorage.app" 
  })
}

const bucket = admin.storage().bucket()
const firestore = admin.firestore()

export { admin, bucket, firestore }
