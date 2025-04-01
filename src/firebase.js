import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDWAP8xGaT4_acYQ2Yt-gl3sZV4ag_RzP4",
  authDomain: "lampoon-portfolio.firebaseapp.com",
  projectId: "lampoon-portfolio",
  storageBucket: "lampoon-portfolio.firebasestorage.app",
  messagingSenderId: "1017074343552",
  appId: "1:1017074343552:web:30c840e1621e97175e5065",
  measurementId: "G-KGE1DFEX2J"
};


const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const storage = getStorage(app)

// ✅ upload function
const uploadUserImage = async (file, fileName) => {
  const storageRef = ref(storage, `uploads/${fileName}`)
  const snapshot = await uploadBytes(storageRef, file)
  const downloadURL = await getDownloadURL(snapshot.ref)
  return downloadURL
}

export { auth, provider, uploadUserImage }