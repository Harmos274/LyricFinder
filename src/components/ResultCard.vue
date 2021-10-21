<template>
  <div class="my-2">
    <div
      class="h-auto py-20 px-10 sm:w-4/5 md:w-2/3 bg-purple-500 flex flex-col space-y-5 mx-auto sm:rounded-3xl shadow-xl"
    >
      <h1 class="font-medium text-white text-xl tracking-wide">{{ songName }}</h1>
      <h2 class="font-normal tracking-wide text-2xl text-white">{{ songLyrics }}</h2>
      <div class="flex flex-col">
        <p class="font-normal text-white text-sm tracking-wider">{{ songArtist }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  songName: String,
  songLyrics: String,
  songArtist: String,
})
</script>

<style scoped>
</style>