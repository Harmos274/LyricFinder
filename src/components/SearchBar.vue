<template>
  <form @submit.prevent="search">
    <div class="bg-indigo-500 items-center">
      <div class="container mx-auto p-6">
        <h1 class="text-center font-bold text-white text-4xl">Lyric Finder</h1>
        <p class="mx-auto font-normal text-sm my-6 max-w-lg"></p>
        <div
          class="flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between"
        >
          <input
            v-model="searchQuery"
            class="text-base text-gray-400 flex-grow outline-none px-2"
            type="text"
            placeholder="Search song lyrics"
          />
          <div class="items-center px-2 rounded-lg space-x-4 mx-auto">
            <button
              class="bg-indigo-500 active:bg-indigo-600 text-white text-base rounded-lg px-4 py-2"
              @click="search"
            >Search</button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
const searchEmit = defineEmits(['searchEmit'])
const searchQuery = ref("")

function search() {
  searchEmit('searchEmit', searchQuery.value)
}
</script>

<style scoped>
</style>