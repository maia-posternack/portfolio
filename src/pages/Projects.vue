<template>
    <div class="packet-page">
        <!-- LEFT: Deepfake Image Panel -->
        <div class="deepfake-panel">
            <img :src="deepfakeImage" class="deepfake-image" />
        </div>

        <!-- RIGHT: Projects -->
        <div class="project-panel">
            <h1 class="packet-header">MY PROJECTS...FINALLY </h1>
            <p class="subtitle">(all mobile compatible obvi!) </p>

            <div class="carousel-container">
                <div class="carousel-track" ref="carouselRef">
                    <div class="project-card" v-for="project in projects" :key="project.name">
                        <h3>{{ project.name }}</h3>
                        <p>{{ project.description }}</p>
                        <a :href="project.link" target="_blank">View →</a>
                    </div>
                </div>

                <!-- Navigation Buttons (mobile only) -->
                <div class="carousel-nav">
                    <button @click="scrollLeft">←</button>
                    <button @click="scrollRight">→</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import { session } from '../session'

const deepfakeImage = ref(null)
const carouselRef = ref(null)

const projects = [
    {
        name: 'HarvyMarket.com',
        link: 'https://harvymarket.com',
        description: 'Polymarket spoof; To enable your betting addiction',
    },
    {
        name: 'Crimson Ads Takeover',
        link: '#',
        description: 'Plastered TheCrimson.com with Lampoon ads',
    },
    {
        name: 'FinalClubTies.com',
        link: 'https://finalclubties.com',
        description: 'Got cut from the Spee? I have an easy fix ',
    },
    {
        name: 'LampoonWhenItWasFunny.com',
        link: 'https://lampoonwhenitwasfunny.com',
        description: 'Self explanatory',
    },
    {
        name: 'Lampoon site optimizations',
        link: '#',
        description: "Made your site better. You're welcome ",
    },
]

onMounted(() => {
    deepfakeImage.value = session.get('deepfakeImage') || '/fallback.jpg'
})

function scrollLeft() {
    carouselRef.value.scrollBy({ left: -window.innerWidth, behavior: 'smooth' })
}

function scrollRight() {
    carouselRef.value.scrollBy({ left: window.innerWidth, behavior: 'smooth' })
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
    background: rgba(0, 0, 0, 0.75);
    border: 2px solid #00ffaa;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 0 15px #00ffaa55;
    transition: transform 0.3s ease;
    margin-bottom: 1.5rem;
    /* Add space between cards */

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

@media (max-width: 768px) {
    .packet-page {
        flex-direction: column;
    }

    .deepfake-panel {
        width: 100vw;
        height: 45vh;
    }

    .project-panel {
        height: 45vh;
        padding: 2rem 1.5rem;
    }

    .project-panel {
        height: 55vh;
        overflow: hidden;
        padding: 1rem;
        position: relative;
    }

    .carousel-container {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .carousel-track {
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        gap: 1rem;
        height: 100%;
    }

    .project-card {
        min-width: 100%;
        flex-shrink: 0;
        scroll-snap-align: start;
        height: 100%;
    }

    .carousel-nav {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        display: flex;
        gap: 1rem;
        z-index: 10;
    }

    .carousel-nav button {
        background: #00ffaa;
        border: none;
        color: #000;
        font-weight: bold;
        font-size: 1rem;
        padding: 0.5rem 0.8rem;
        border-radius: 4px;
        cursor: pointer;
    }

    .carousel-nav {
        display: flex;
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        justify-content: space-between;
        padding: 0 1rem;
        transform: translateY(-50%);
        z-index: 10;
        pointer-events: none;
        /* Let clicks pass through */
    }

    .carousel-nav button {
        pointer-events: auto;
        background: #00ffaa;
        border: none;
        color: #000;
        font-weight: bold;
        font-size: 1rem;
        padding: 0.5rem 0.8rem;
        border-radius: 4px;
        cursor: pointer;
    }

    .project-card {
        min-width: 90%;
        max-width: 90%;
        font-size: 0.9rem;
        padding: 1rem;
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
        margin-bottom: 0rem;


    }

}
</style>