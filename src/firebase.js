// src/firebase.js
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

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

export { auth, provider }
