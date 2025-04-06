<template>
    <div class="packet-page">
      <!-- Left: Deepfake image -->
      <div class="deepfake-panel">
        <img :src="deepfakeImage" class="deepfake-avatar" />
      </div>
  
      <!-- Right: Project cards -->
      <div class="project-panel">
        <h1 class="packet-header">ACCESS GRANTED: PROJECT DOSSIER</h1>
        <div class="project-card" v-for="project in projects" :key="project.name">
          <h3>{{ project.name }}</h3>
          <p>{{ project.description }}</p>
          <a :href="project.link" target="_blank">View →</a>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import { ref, onMounted } from 'vue'
  import { session } from '../session'
  
  const deepfakeImage = ref(null)
  
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
  
  onMounted(() => {
    deepfakeImage.value = session.get('deepfakeImage') || '/fallback.jpg'
  })
  </script>
  <style scoped>
.packet-page {
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #0d1117;
  color: #00ffaa;
  font-family: monospace;
  overflow: hidden;
}

/* LEFT: Deepfake image full-panel */
.deepfake-bg {
  flex: 1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: brightness(0.6) blur(2px);
  animation: fade-in-bg 1.5s ease-out forwards;
  opacity: 0;
}

@keyframes fade-in-bg {
  to {
    opacity: 1;
  }
}

/* RIGHT: Project Panel */
.project-panel {
  flex: 1;
  padding: 4rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background: rgba(0, 0, 0, 0.85);
  overflow-y: auto;
}

.packet-header {
  font-size: 1.6rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #00ffcc;
  letter-spacing: 1px;
}

.project-card {
  background: rgba(0, 0, 0, 0.75);
  border: 2px solid #00ffaa;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 0 15px #00ffaa55;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: scale(1.02);
  box-shadow: 0 0 30px #00ffaa88;
}

.project-card h3 {
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}

.project-card p {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.project-card a {
  font-size: 0.9rem;
  color: #00ffaa;
  text-decoration: underline;
}
@media (max-width: 768px) {
  .packet-page {
    flex-direction: column;
  }

  .deepfake-bg {
    height: 40vh;
    width: 100%;
  }

  .project-panel {
    padding: 2rem 1.5rem;
  }
}


  </style>
  