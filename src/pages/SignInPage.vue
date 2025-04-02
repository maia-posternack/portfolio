<template>
    <div id="app" class="wrapper">
      <!-- Matrix background (hidden while scanning) -->
      <canvas
        v-if="!isScanning"
        ref="matrixCanvas"
        class="matrix-canvas"
      ></canvas>
  
      <!-- Sign-In Button -->
      <div class="button-container">
        <button @click="signInWithGoogle" class="hacker-button">
          Sign in with Google
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { useRouter } from 'vue-router'

  import { signInWithPopup } from 'firebase/auth'
  import { auth, provider } from '../firebase'
  import { session } from '../session'


  
  const matrixCanvas = ref(null)
  const isScanning = ref(false)
  const router = useRouter()

  
  let drawInterval = null
  

  const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    console.log("NAME:", user.displayName)
    session.set('userName', user.displayName)
    router.push('/scan')
  } catch (err) {
    console.error('Sign-in error:', err)
  }
}
  
  onMounted(() => {
    const canvas = matrixCanvas.value
    const ctx = canvas.getContext('2d')
  
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
  
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
  
    const letters = 'アァイィウエオカキクケコサシスABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('')
    const fontSize = 16
    let columns = Math.floor(window.innerWidth / fontSize)
    let drops = Array(columns).fill(1)
  
    const draw = () => {
      ctx.fillStyle = 'rgba(13, 17, 23, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
  
      ctx.fillStyle = '#00FF00'
      ctx.font = `${fontSize}px monospace`
  
      drops.forEach((y, x) => {
        const text = letters[Math.floor(Math.random() * letters.length)]
        ctx.fillText(text, x * fontSize, y * fontSize)
  
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[x] = 0
        }
        drops[x]++
      })
    }
  
    drawInterval = setInterval(draw, 33)
  })
  </script>
  
  <style>
  /* === GLOBAL RESET === */
  html,
  body,
  #app {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    background-color: #0d1117;
  }
  
  /* === MATRIX CANVAS === */
  .matrix-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw !important;
    height: 100vh !important;
    z-index: 0;
    pointer-events: none;
    display: block;
  }
  
  /* === SIGN-IN BUTTON === */
  .button-container {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .hacker-button {
    font-family: monospace;
    font-size: 2rem;
    padding: 1rem 2.5rem;
    color: black;
    background-color: #00ff00;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 0 20px #00ff00;
  }
  .hacker-button:hover {
    background-color: #00ff80;
    box-shadow: 0 0 40px #00ff80;
  }
  

  /* === MOBILE RESPONSIVE === */
  @media (max-width: 640px) {
    .hacker-button {
      font-size: 1.25rem;
      padding: 0.75rem 1.5rem;
    }
  }
  </style>
  