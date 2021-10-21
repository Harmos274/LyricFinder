<template>
  <search-bar @search-emit="getLyrics" />
  <div class="min-h-screen bg-gray-100 flex flex-col mx-auto sm:py-6">
    <result-card
      v-for="result, key in searchResults"
      :key="key"
      :song-name="result.title"
      :song-lyrics="result.highlights"
      :song-artist="result.artist"
    />
  </div>
</template>

<script setup lang="ts">
import ResultCard from "./ResultCard.vue"
import SearchBar from "./SearchBar.vue";
import Results from "./Results.vue";
import { Ref, ref } from "vue";
import { GeniusSearchLyricsResults } from "../services/lyricFinder.service";
import { SearchResult } from "../services/searchResultModel";


let searchResults: Ref<Array<SearchResult>> = ref([])

async function getLyrics(query: string) {
  try {
    const apiResponse: GeniusSearchLyricsResults = await fetch(`https://genius.com/api/search/lyrics?q=${query}`, {
      method: "GET"
    }).then(r => r.text().then(JSON.parse))

    const result = apiResponse.response.sections.map(r => r.hits).flat().map(hits => {
      return {
        highlights: hits.highlights[0].value,
        title: hits.result.title,
        artist: hits.result.primary_artist.name,
        artist_pic: hits.result.primary_artist.image_url,
        song_pic: hits.result.song_art_image_url
      }
    })
    searchResults.value = result
  }
  catch (e) {
    console.error("Can't reach genius API with those arguments.")
    console.error(e)
  }
}
</script>

<script lang="ts">

</script>

<style scoped>
</style>