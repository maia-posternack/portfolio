<template>
  <div class="scan-wrapper">
    <h1 class="scan-text-glitch">
      SCANNING FACE <br />
      <span class="username-text">FOR DOXING INFORMATION</span>
    </h1>

    <div class="scan-line"></div>

    <!-- Identity Found Popup -->
    <div v-if="showPopup" class="identity-popup">IDENTITY FOUND</div>

    <!-- Dramatic User Image Reveal -->
    <img
      v-if="showImage"
      :src="userImage"
      alt="User"
      class="user-image"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { session } from '../session'
import { useRouter } from 'vue-router'

const name = session.get('userName')
const router = useRouter()
const showPopup = ref(false)
const showImage = ref(false)
const userImage = ref(null)

onMounted(async () => {
  const start = Date.now()

  // Get roast info
  const roast_info = await fetch('/api/gpt-intro', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fullName: name }),
  })
  const roast = await roast_info.json()
  session.set('roastText', roast.message)
  session.set('roastIdentity', roast.identity)

  // Get image info
  const img_info = await fetch('/api/image-lookup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ fullName: name, character: roast.identity }),
  })
  const img = await img_info.json()
  session.set('userImage', img.userImage)
  session.set('characterImage', img.characterImage)
  userImage.value = img.userImage

  // Wait until at least 3 seconds have passed
  const elapsed = Date.now() - start
  if (elapsed < 1500) {
    await new Promise(resolve => setTimeout(resolve, 3000 - elapsed))
  }

  // Show popup + image
  showPopup.value = true
  setTimeout(() => { showImage.value = true }, 500)

  // Redirect to /roast after a short delay
  setTimeout(() => { router.push('/roast')}, 3000)
})
</script>

<style>
.scan-wrapper {
  position: relative;
  height: 100vh;
  width: 100vw;
  background-color: #0d1117;
  color: #00ff00;
  font-family: 'Courier New', Courier, monospace;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: subtle-pulse 6s ease-in-out infinite;
  overflow: hidden;
}

.scan-text-glitch {
  text-align: center;
  font-size: 2.5rem;
  line-height: 1.4;
  color: #00ff00;
  text-shadow:
    0 0 2px #00ff00,
    0 0 5px #00ff88,
    0 0 5px #00ff00;
  animation: glitch-flicker 1.7s infinite;
  z-index: 10;
}

.username-text {
  display: block;
  font-size: 3rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: #00ffaa;
  text-shadow:
    0 0 2px #00ffaa,
    0 0 5px #00ffaa,
    0 0 5px #00ffaa;
}

.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 4px;
  background: linear-gradient(to right, #00ff00, #00ff80, #00ff00);
  animation: scan-fullpage 2s ease-in-out infinite;
  box-shadow: 0 0 20px #00ff80;
  z-index: 1;
}

/* Glitch flicker */
@keyframes glitch-flicker {
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    opacity: 1;
    transform: translate(0, 0);
  }
  20%, 22%, 24%, 55% {
    opacity: 0.7;
    transform: translateX(1px);
  }
}

/* Subtle pulse */
@keyframes subtle-pulse {
  0% {
    background-color: #0d1117;
  }
  50% {
    background-color: #11141c;
  }
  100% {
    background-color: #0d1117;
  }
}

@keyframes scan-fullpage {
  0% {
    top: 0%;
  }
  50% {
    top: 90%;
  }
  100% {
    top: 0%;
  }
}

/* === IDENTITY FOUND POPUP === */
.identity-popup {
  position: absolute;
  top: 30%;
  background: #0d1117;
  color: #00ff00;
  font-size: 3rem;
  font-weight: 900;
  border: 4px solid #00ff00;
  padding: 1rem 2rem;
  text-shadow: 0 0 10px #00ff00, 0 0 20px #00ffaa;
  animation: popup-pulse 0.8s ease-in-out infinite;
  z-index: 999;
}

/* Dramatic pulse */
@keyframes popup-pulse {
  0% {
    transform: scale(1) rotate(-2deg);
    box-shadow: 0 0 10px #00ff00;
  }
  50% {
    transform: scale(1.05) rotate(2deg);
    box-shadow: 0 0 30px #00ffaa;
  }
  100% {
    transform: scale(1) rotate(-2deg);
    box-shadow: 0 0 10px #00ff00;
  }
}

/* Slanted user image */
.user-image {
  position: absolute;
  bottom: 10%;
  right: 10%;
  width: 300px;
  transform: rotate(-10deg);
  border: 4px solid #00ff00;
  box-shadow: 0 0 20px #00ff00;
  opacity: 0;
  animation: image-pop 0.6s ease-in-out forwards;
  z-index: 998;
}

@keyframes image-pop {
  0% {
    opacity: 0;
    transform: translateY(20px) rotate(-10deg);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotate(-10deg);
  }
}
@media (max-width: 768px) {
  .scan-text-glitch {
    font-size: 1.6rem;
    line-height: 1.3;
  }

  .username-text {
    font-size: 1.6rem;
    letter-spacing: 0.05em;
  }

  .identity-popup {
    font-size: 2rem;
    padding: 0.75rem 1.5rem;
    top: 25%;
  }

  .user-image {
    width: 200px;
    bottom: 5%;
    right: 5%;
    transform: rotate(-8deg);
  }
}

@media (max-width: 480px) {
  .scan-text-glitch {
    font-size: 1.3rem;
  }

  .username-text {
    font-size: 1.2rem;
  }

  .identity-popup {
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    top: 20%;
  }

  .user-image {
    width: 160px;
    bottom: 4%;
    right: 4%;
    transform: rotate(-6deg);
  }
}

</style>
