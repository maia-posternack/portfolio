<template>
  <div class="min-h-screen bg-black text-green-400 font-mono flex items-center justify-center">
    <div class="text-center p-8">
      <template v-if="!userName">
        <h1 ref="title" class="text-3xl sm:text-5xl tracking-wider mb-4 opacity-0">THE LAMPOON FILES</h1>
        <p ref="subtitle" class="text-lg sm:text-xl text-green-300 mb-8 opacity-0">
          Unauthorized access will be met with satire.
        </p>
        <button
          v-if="showButton"
          @click="signInWithGoogle"
          class="mt-4 bg-green-500 text-black px-6 py-3 rounded-lg hover:bg-green-400 transition"
        >
          Sign in with Google
        </button>
      </template>

      <template v-else>
  <h1 class="text-4xl sm:text-5xl mb-6">WELCOME, {{ userName.toUpperCase() }}</h1>
  <p class="text-green-300 max-w-xl mx-auto text-lg whitespace-pre-line">
    {{ roastText }}
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
const showButton = ref(false)
const userName = ref(null)

onMounted(() => {
  const tl = gsap.timeline()
  tl.to(title.value, { opacity: 1, duration: 1.5, ease: 'power2.out' })
    .to(subtitle.value, { opacity: 1, duration: 1.2 }, '+=0.5')
    .call(() => {
      showButton.value = true
    })
})

const roastText = ref(null)

const signInWithGoogle = async () => {
  const result = await signInWithPopup(auth, provider)
  const user = result.user
  userName.value = user.displayName

  // 🔥 Send to GPT backend
  const res = await fetch('/api/gpt-intro', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ fullName: user.displayName }),
})

  const data = await res.json()
  roastText.value = data.message
}

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
  background-image: repeating-linear-gradient(
    rgba(255, 255, 255, 0.01),
    rgba(255, 255, 255, 0.01) 1px,
    transparent 1px,
    transparent 2px
  );
  pointer-events: none;
  z-index: 999;
}
</style>
