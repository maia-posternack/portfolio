<template>
  <div class="min-h-screen bg-black text-green-400 font-mono flex items-center justify-center">
    <div class="text-center p-8">
      <template v-if="!userName">
        <h1 ref="title" class="text-3xl sm:text-5xl tracking-wider mb-4 opacity-0">THE LAMPOON FILES</h1>
        <p ref="subtitle" class="text-lg sm:text-xl text-green-300 mb-8 opacity-0">
          Unauthorized access will be met with satire.
        </p>
        <button v-if="showButton" @click="signInWithGoogle"
          class="mt-4 bg-green-500 text-black px-6 py-3 rounded-lg hover:bg-green-400 transition">
          Sign in with Google
        </button>
      </template>

      <template v-else>
        <h1 class="text-4xl sm:text-5xl mb-6">WELCOME, {{ userName.toUpperCase() }}</h1>


        <p class="text-green-300 max-w-xl mx-auto text-lg whitespace-pre-line">
          {{ roastText }}
        </p>

        <img v-if="deepfakeImage" :src="deepfakeImage"
          class="w-64 rounded-xl border-4 border-pink-400 shadow-xl mt-6 mx-auto" />

        <p v-if="roastIdentity" class="text-pink-400 text-xl font-bold mt-4">
          You’ve been classified as: <span class="italic">{{ roastIdentity }}</span>
        </p>




      </template>


    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { auth, provider } from './firebase'
import { signInWithPopup } from 'firebase/auth'

const title = ref(null)
const subtitle = ref(null)
const showButton = ref(true)
const userName = ref(null)
const roastImages = ref([])
const roastIdentity = ref(null)
const deepfakeImage = ref(null)
const roastText = ref(null)


const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    userName.value = user.displayName;

    const roast_info = await fetch('/api/gpt-intro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName: user.displayName }),
    });

    const roast = await roast_info.json();
    roastText.value = roast.message;
    roastIdentity.value = roast.identity || null;
    console.log("identity", roastIdentity.value)

    const img_info = await fetch('/api/image-lookup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fullName: user.displayName, character: roast.identity }),
    });

    const img = await img_info.json();
    roastImages.value = [img.userImage, img.characterImage].filter(Boolean); 
    console.log(roastImages.value)

    const swap_info = await fetch('/api/face-swap', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ characterImage: img.characterImage, userImage: img.userImage }),
})

const swap = await swap_info.json()
console.log("🔥 API response:", swap)

deepfakeImage.value = swap.deepfakedImage || null



  } catch (error) {
    console.error('Error during sign-in:', error);
  }
};


</script>


<style scoped>
/* Optional: Subtle scanlines/flicker effect */
body {
  background-color: #000;
}

div::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: repeating-linear-gradient(rgba(255, 255, 255, 0.01),
      rgba(255, 255, 255, 0.01) 1px,
      transparent 1px,
      transparent 2px);
  pointer-events: none;
  z-index: 999;
}
</style>
