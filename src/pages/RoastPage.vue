  <template>
    <div class="app-container">
      <div class="roast-wrapper">
        <pre class="roast-text">{{ typedRoast }}</pre>

        <p v-if="showIdentityLine" class="identity-glitch">
          Anyone ever tell you that you remind them of <span class="identity-name">{{ formattedIdentity }}</span>?
        </p>
      </div>

      <div v-if="deepfakeImage && showTileWall" class="deepfake-wall">
        <img
  v-for="n in tileCount"
  :key="n"
  :src="deepfakeImage"
  class="deepfake-tile"
  :style="`width: ${tileSize}px; height: ${tileSize}px; --delay: ${n * 80}ms`"
/>

</div>

    </div>
  </template>




<script setup>
import { ref, onMounted, computed } from 'vue'
import { session } from '../session'

const roast = session.get('roastText')
const identity = session.get('roastIdentity')
const deepfakeImage = ref(null)
const typedRoast = ref('')
const showIdentityLine = ref(false)
const showTileWall = ref(false)
const textFinished = ref(false)
const imageReady = ref(false)
const formattedIdentity = computed(() => identity.replace(/_/g, ' '))
const tileCount = ref(0)
const tileSize = ref(0)

function calculateTileGrid() {
  const minTileSize = window.innerWidth < 768 ? 80 : 250 // 👈 adjust size for mobile vs desktop
  const columns = Math.floor(window.innerWidth / minTileSize)
  const rows = Math.ceil(window.innerHeight / minTileSize)
  tileSize.value = Math.floor(window.innerWidth / columns)
  tileCount.value = columns * rows
}

function typeRoast(text) {
  let i = 0
  const interval = setInterval(() => {
    if (i < text.length) {
      typedRoast.value += text[i]
      i++
    } else {
      clearInterval(interval)
      textFinished.value = true
      tryRevealTileWall()
    }
  }, 35)
}
onMounted(async () => {
  calculateTileGrid()
  window.addEventListener('resize', calculateTileGrid)

  typeRoast(roast)


  const userImage = session.get('userImage')
  const characterImage = session.get('characterImage')
  const swap_info = await fetch('/api/face-swap', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ characterImage, userImage }),
  })

    const swap = await swap_info.json()
    console.log("SWAP!!!", swap)

    deepfakeImage.value = swap.deepfakedImage || userImage
    session.set('deepfakeImage', deepfakeImage.value)
    imageReady.value = true
    tryRevealTileWall()

})

function tryRevealTileWall() {
  if (textFinished.value && imageReady.value) {
    showIdentityLine.value = true
    setTimeout(() => {
      showTileWall.value = true
     

    }, 2000)
  }
}




</script>

<style>
/* === Base Layout === */
.roast-wrapper {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  background: #0d1117;
  overflow-y: auto;
  color: #00ff00;
  font-family: monospace;
}


/* === Typewriter Text === */
.roast-text {
  white-space: pre-wrap;
  font-size: 2rem;
  line-height: 1.7;
  max-width: 1400px;
  /* ✅ wider than before */
  width: 100%;
  /* ✅ full width on large screens */
  margin: 6rem auto 2rem auto;
  /* ✅ vertically centered-ish */
  padding-left: 3rem;
  padding-right: 2rem;
  margin-top: 15rem;
  text-align: left;
  border-left: 3px solid #00ff00;
  animation: cursor-blink 1s step-start infinite;
  /* ❌ Removed text-shadow for non-glowy look */
}


@keyframes cursor-blink {

  0%,
  49% {
    border-color: #00ff00;
  }

  50%,
  100% {
    border-color: transparent;
  }
}


/* === Identity Glitch Line === */
.identity-glitch {
  text-align: center;
  margin-top: 2rem;
  font-size: 2rem;
  color: #00ffaa;
  animation: glitch-flicker 4s infinite;
}

.identity-name {
  font-weight: bold;
  text-decoration: underline;
}

@keyframes glitch-flicker {

  0%,
  19%,
  21%,
  23%,
  25%,
  54%,
  56%,
  100% {
    opacity: 1;
  }

  20%,
  22%,
  24%,
  55% {
    opacity: 0.6;
    transform: translateX(1px);
  }
}

@media (max-width: 768px) {
  .roast-text {
    font-size: .8rem;
    padding: 1rem;
    margin: 2rem 2rem;
    padding-right: 2rem; /* Add more padding to the right */
    text-align: left;
    transform: none;
    max-width: calc(100% - 6rem); /* Ensure it doesn't exceed the screen width */

    border-left: 2px solid #00ff00;
  }
  .deepfake-tile {
    flex: 1 0 20vw;
    height: 20vw;
  }

  .identity-glitch {
    margin-top: .5rem;
    font-size: 1.1rem;
  }
}




/* === Deepfake Tile Takeover === */

.deepfake-wall {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  z-index: 100;
  pointer-events: none;
  background: transparent;
}



.deepfake-tile {
  width: 100%;
  height: 100%; /* ✅ ensure square shape within grid */
  object-fit: cover;
  opacity: 0;
  z-index: 200;
  animation: tile-fade-in 0.6s ease forwards;
  background: #0d1117;
  animation-delay: var(--delay);
}


@keyframes tile-fade-in {
  0% {
    opacity: 0;
    transform: scale(1.1) rotate(-2deg);
  }

  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}



</style>
