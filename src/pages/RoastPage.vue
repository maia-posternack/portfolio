<template>
  <div class="roast-wrapper">
    <!-- Roast typing -->
    <pre class="roast-text">{{ typedRoast }}</pre>

    <!-- Identity line -->
    <p v-if="showIdentityLine" class="identity-glitch">
      Anyone ever tell you that you remind them of <span class="identity-name">{{ formattedIdentity }}</span>?
    </p>

    <!-- Deepfake tile takeover -->
    <div
  v-if="deepfakeImage && showTileWall"
  class="deepfake-wall"
>
  <img
    v-for="n in 60"
    :key="n"
    :src="deepfakeImage"
    class="deepfake-tile"
    :style="`--delay: ${n * 120}ms`"
  />
</div>

    <!-- Project Portals -->
    <div class="project-section">
      <h2 class="portal-header">YOUR PORTALS</h2>
      <div class="portals">
        <div v-for="project in projects" :key="project.name" class="portal-card">
          <a :href="project.link" target="_blank">
            <h3>{{ project.name }}</h3>
            <p>{{ project.description }}</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { session } from '../session'

const roast =  session.get('roastText')
const identity = session.get('roastIdentity')
const deepfakeImage = ref(null)
const typedRoast = ref('')
const showIdentityLine = ref(false)
const showTileWall = ref(false)
const textFinished = ref(false)
const imageReady = ref(false)
const formattedIdentity = computed(() => identity.replace(/_/g, ' '))



const projects = [
  {
    name: 'Harvymarket',
    link: 'https://harvymarket.com',
    description: 'A satirical prediction market for Harvard gossip.',
  },
  {
    name: 'JesterNet',
    link: '#',
    description: 'The worst social network on Earth. Proud of it.',
  },
  {
    name: 'AdminAI',
    link: '#',
    description: 'AI that writes angry emails to administrators for you.',
  },
]

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
  imageReady.value = true
  tryRevealTileWall()

})

function tryRevealTileWall() {
  if (textFinished.value && imageReady.value) {
    showIdentityLine.value = true
    setTimeout(() => {
      showTileWall.value = true
      tryRevealTileWall()

    }, 2000)
  }
}




</script>

<style>
/* === Base Layout === */
.roast-wrapper {
  background: #0d1117;
  color: #00ff00;
  font-family: monospace;
  min-height: 100vh;
  padding: 2rem;
  overflow-x: hidden;
  z-index: 10; /* BELOW tile wall */

}

/* === Typewriter Text === */
.roast-text {
  white-space: pre-wrap;
  font-size: 2rem;
  line-height: 1.7;
  max-width: 1400px;      /* ✅ wider than before */
  width: 100%;            /* ✅ full width on large screens */
  margin: 6rem auto 2rem auto; /* ✅ vertically centered-ish */
  padding-left: 3rem;
  padding-right: 2rem;
  text-align: left;
  border-left: 3px solid #00ff00;
  animation: cursor-blink 1s step-start infinite;
  /* ❌ Removed text-shadow for non-glowy look */
}


@keyframes cursor-blink {
  0%, 49% {
    border-color: #00ff00;
  }
  50%, 100% {
    border-color: transparent;
  }
}


/* === Identity Glitch Line === */
.identity-glitch {
  text-align: center;
  margin-top: 2rem;
  font-size: 2rem;
  color: #00ffaa;
  animation: glitch-flicker 2s infinite;
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
    font-size: 1.6rem;
    padding: 1rem;
    margin: 2rem 1rem;
    border-left: 2px solid #00ff00;
    border-right: 2px solid #00ff00;
  }
}

@media (max-width: 480px) {
  .roast-text {
    font-size: 1.2rem;
    padding: 0.5rem;
    margin: 1.5rem 0.5rem;
    border-left: 2px solid #00ff00;
    border-right: 2px solid #00ff00;
  }
}


/* === Deepfake Tile Takeover === */
.deepfake-wall {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  pointer-events: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10vw, 1fr));
  grid-auto-rows: auto;
  gap: 0;
  overflow: hidden;
  background: #0d1117;
}


.deepfake-tile {
  width: 100%;
  height: 100%;
  object-fit: contain; /* ✅ Keep original aspect ratio */
  margin: 0;
  padding: 0;
  border: none;
  opacity: 0;
  animation: tile-fade-in 0.6s ease forwards;
  animation-delay: var(--delay);
}

@keyframes tile-fade-in {
  0% {
    opacity: 0;
    transform: scale(1.1) rotate(-2deg);
  }
  100% {
    opacity: 0.85;
    transform: scale(1) rotate(0deg);
  }
}

/* === Project Portals === */
.project-section {
  margin-top: 80vh;
  padding-top: 2rem;
}

.portal-header {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
  text-shadow: 0 0 10px #00ff00;
}

.portals {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.portal-card {
  background: rgba(0, 255, 0, 0.05);
  border: 1px solid #00ff00;
  padding: 1rem;
  border-radius: 8px;
  width: 260px;
  transition: transform 0.3s, box-shadow 0.3s;
  text-align: left;
  color: #00ff00;
}

.portal-card:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 0 20px #00ff00;
}

.portal-card a {
  text-decoration: none;
  color: inherit;
}
@media (max-width: 750px) {
  .deepfake-wall {
    grid-template-columns: repeat(auto-fill, minmax(20vw, 1fr)); /* Bigger tiles */
    /* ✅ Remove grid-auto-rows to let height follow aspect ratio */
  }

  .deepfake-tile {
    object-fit: contain; /* ✅ Keep original aspect ratio */
    width: 100%;
    height: auto;
  }
}


</style>
