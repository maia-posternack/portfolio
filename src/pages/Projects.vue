<template>
  <div class="packet-page">
    <!-- LEFT: Deepfake Image Panel -->
    <div class="deepfake-panel">
      <img :src="deepfakeImage" class="deepfake-image" />
    </div>

    <!-- RIGHT: Projects -->
    <div class="project-panel">
      <h1 class="packet-header">MY PROJECTS...FINALLY</h1>
      <p class="subtitle">(all mobile compatible obvi!)</p>
      <div class="carousel-container">
  <!-- Arrows on the outside of the card -->
  <button class="carousel-btn left" @click="scrollLeft">‹</button>

  <div class="carousel-track" ref="carouselRef">
    <a
  class="project-card"
  v-for="project in projects"
  :key="project.name"
  :href="project.link"
  target="_blank"
>
  <h3>{{ project.name }}</h3>
  <p>{{ project.description }}</p>
  <span class="view-link">View →</span>
</a>

  </div>

  <button class="carousel-btn right" @click="scrollRight">›</button>
</div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { session } from "../session";

const deepfakeImage = ref(null);
const carouselRef = ref(null);

const projects = [
  {
    name: "HarvyMarket.com",
    link: "https://harvymarket.com",
    description: "Polymarket spoof; To enable your betting addiction",
  },
  {
    name: "Crimson Ads Takeover",
    link: "#",
    description: "Plastered TheCrimson.com with Lampoon ads",
  },
  {
    name: "FinalClubTies.com",
    link: "https://finalclubties.com",
    description: "Got cut from the Spee? I have an easy fix ",
  },
  {
    name: "LampoonWhenItWasFunny.com",
    link: "https://lampoonwhenitwasfunny.com",
    description: "Self explanatory",
  },
  {
    name: "Lampoon site optimizations",
    link: "#",
    description: "Made your site better. You're welcome ",
  },
];

onMounted(() => {
  deepfakeImage.value = session.get("deepfakeImage") || "/fallback.jpg";
});

function scrollLeft() {
  carouselRef.value.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
}

function scrollRight() {
  carouselRef.value.scrollBy({ left: window.innerWidth, behavior: "smooth" });
}
</script>

<style scoped>
.packet-page {
  display: flex;
  width: 100vw;
  height: 100vh;
  background: #0d1117;
  overflow: hidden;
}

.deepfake-panel {
  width: 50vw;
  height: 100vh;
  overflow: hidden;
}

.deepfake-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* ✅ crop the image sides */
  object-position: center;
}

.project-panel {
  flex: 1;
  padding: 4rem 2rem;
  overflow-y: auto;
  background: #111;
  color: #00ffaa;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.packet-header {
  font-size: 2rem;
  text-align: center;
  color: #00ffcc;
  letter-spacing: 1px;
  margin: 0;
}

.subtitle {
  margin: 0;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #00ffcc;
  letter-spacing: 1px;
}

.project-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: rgba(0, 0, 0, 0.75);
  border: 2px solid #00ffaa;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 15px #00ffaa55;
  transition: transform 0.3s ease;
  margin-bottom: 1.5rem;
  color: inherit;
  text-decoration: none;
}


.project-card:hover {
  transform: scale(1.02);
  box-shadow: 0 0 30px #00ffaa88;
}

.project-card h3 {
  margin: 0;
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.project-card p {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.project-card a {
  font-size: 1.2rem;
  color: #00ffaa;
  text-decoration: underline;
}

.carousel-nav {
  display: none;
}

.carousel-btn {
  display: none;
}
@media (max-width: 768px) {
  .packet-page {
    flex-direction: column;
  }

  .deepfake-panel {
    width: 100vw;
    height: 45vh;
  }

  .carousel-nav {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
    z-index: 10;
    pointer-events: none; /* allow card clicks to pass through */
  }

  .carousel-nav button {
    pointer-events: auto;
    background: #00ffaa;
    border: none;
    color: #000;
    font-weight: bold;
    font-size: 1.5rem;
    padding: 0.3rem 0.8rem;
    border-radius: 4px;
    cursor: pointer;
    opacity: 0.9;
    transition: opacity 0.2s;
  }

  .carousel-nav button:hover {
    opacity: 1;
  }

  .project-card h3 {
    font-size: 1.2rem;
  }

  .project-card p {
    font-size: 0.9rem;
  }

  .project-card a {
    font-size: 0.8rem;
  }

  .packet-header {
    margin: 0;
    margin-top: 1rem;
    font-size: 1.5rem;
    line-height: 1;
  }
  .subtitle {
    margin: 0;
    font-size: 1rem;
    transform: translateY(-20px);
    margin-bottom: 0;
    padding-bottom: 0;
  }
  .project-card:hover {
    transform: scale(1.005);
    box-shadow: 0 0 30px #00ffaa88;
  }
  .project-panel {
    height: 40vh;
    overflow: hidden;
    position: relative;
    padding: 1rem;
  }

  .carousel-container {
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  .carousel-track {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  gap: 1rem;
  width: 100%;
  height: 100%;
  padding: 0 1rem;
}

  .project-card {
    min-width: 85%;
    max-width: 85%;
    height: 80%;
    flex-shrink: 0;
    scroll-snap-align: center;
    padding: 1rem;
    font-size: 0.9rem;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.view-link {
  font-size: 1.2rem;
  color: #00ffaa;
  text-decoration: underline !important;
  margin-top: 1rem;
}


  .carousel-btn {
    background: rgba(255, 255, 255, 0.08);
    color: #cccccc;
    border: none;
    font-size: 1.5rem;
    padding: 0.3rem 0.6rem;
    cursor: pointer;
    z-index: 5;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 6px;
    transition: opacity 0.2s;
  }

  .carousel-btn.left {
    left: 0.3rem;
  }

  .carousel-btn.right {
    right: 0.3rem;
  }

  .carousel-btn:hover {
    opacity: 0.9;
  }
}
.view-link {
  font-size: 1.2rem;
  color: #00ffaa;
  text-decoration: underline !important;
}


</style>
