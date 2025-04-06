<template>
    <div class="deepfake-wall projects-wall">
      <div
        v-for="(tile, i) in tiles"
        :key="i"
        class="project-tile-wrapper"
        :class="{ 'is-project': tile.isProject, flipped: tile.flipped }"
        @click="revealTile(i)"
        :style="`--delay: ${i * 60}ms`"
      >
        <!-- Front face: deepfake tile -->
        <div class="tile-face tile-front">
          <img :src="deepfakeImage" class="deepfake-tile" />
        </div>
  
        <!-- Back face: project info -->
        <div v-if="tile.isProject" class="tile-face tile-back">
          <h3>{{ tile.project.name }}</h3>
          <p>{{ tile.project.description }}</p>
          <a :href="tile.project.link" target="_blank">View →</a>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import { ref, onMounted } from 'vue'
  import { session } from '../session'
  
  const deepfakeImage = ref(null)
  const tiles = ref([])
  
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
    // Add more here
  ]
  
  onMounted(() => {
    deepfakeImage.value = session.get('deepfakeImage') || '/fallback.jpg'
  
    const totalTiles = 80
    const selectedIndices = new Set()
  
    while (selectedIndices.size < projects.length) {
      selectedIndices.add(Math.floor(Math.random() * totalTiles))
    }
  
    tiles.value = Array.from({ length: totalTiles }, (_, i) => {
      const isProject = selectedIndices.has(i)
      return {
        isProject,
        flipped: false,
        project: isProject ? projects[selectedIndices.size - [...selectedIndices].indexOf(i) - 1] : null
      }
    })
  })
  
  function revealTile(i) {
    if (tiles.value[i].isProject) {
      tiles.value[i].flipped = !tiles.value[i].flipped
    }
  }
  </script>
  <style scoped>
  .projects-wall {
  pointer-events: auto;
  z-index: 9999;
}

.project-tile-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s;
  animation: tile-fade-in 0.5s ease forwards;
  animation-delay: var(--delay);
}

.project-tile-wrapper.is-project {
  animation: glow 2s infinite alternate;
  cursor: pointer;
}

.project-tile-wrapper.flipped {
  transform: rotateY(180deg);
}

.tile-face {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.tile-front {
  z-index: 1;
}

.tile-back {
  background: #0d1117;
  color: #00ffaa;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg);
  font-family: monospace;
}

@keyframes glow {
  from {
    box-shadow: 0 0 0px #00ffaa00;
  }
  to {
    box-shadow: 0 0 20px #00ffaa80;
  }
}

</style>