<template>
    <div class="crimson-page">
      <video
        class="crimson-video"
        :src="videoSrc"
        autoplay
        muted
        playsinline
        loop
      ></video>
    </div>
  </template>
  
  <script setup>
  const videoSrc = '/videos/crimson.mov' 
  </script>
  
  <style scoped>
.crimson-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.crimson-video {
  width: 100vw;
  height: auto; /* ✅ let height scale naturally */
  object-fit: contain; /* ✅ preserve full video without cropping */
}

  </style>
  