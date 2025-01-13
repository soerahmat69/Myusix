<template>
  <div class="bg-gradient-to-b from-green-900 to-gray-900 text-white min-h-[50vh] p-4 md:p-8">
    <div class="max-w-7xl mx-auto">
      <!-- Welcome Section -->
      <div class="mb-6 md:mb-8">
        <h1 class="text-3xl md:text-4xl font-bold mb-2">Good {{ greeting }}</h1>
        <p class="text-lg md:text-xl text-gray-300">Welcome back to your music</p>
      </div>

      <!-- Recently Played -->
      <div class="mb-6 md:mb-8">
        <h2 class="text-xl md:text-2xl font-bold mb-4">Recently Played</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          
          <div
            v-for="song in recentlyPlayed"
            :key="song.id"
            @click="playSong(song)"
            class="bg-gray-800 p-3 md:p-4 rounded-lg hover:bg-gray-700  cursor-pointer transition"
          >
            <img :src="song.cover" :alt="song.title" class="w-full aspect-square rounded-md mb-3 md:mb-4">
            <h3 class="font-medium truncate">{{ song.title }}</h3>
            <p class="text-gray-400 text-sm truncate">{{ song.artist }}</p>
          </div>
        </div>
      </div>

      <!-- Featured Artists -->
      <div>
        <h2 class="text-xl md:text-2xl font-bold mb-4">Featured Artists</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
          <div
            v-for="artist in featuredArtists"
            :key="artist.id"
            class="text-center"
          >
            <img
              :src="artist.image"
              :alt="artist.name"
              class="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-2"
            >
            <p class="font-medium text-sm md:text-base">{{ artist.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useMusicStore } from '@/stores/musicStore';
import type { Song, Artist } from '@/types/music';
import { songs } from '@/data/songs';
import { artists } from '@/data/artists';
import { getTimeOfDay } from '@/utils/time';

const musicStore = useMusicStore();
const greeting = computed(() => getTimeOfDay());
const recentlyPlayed = ref<Song[]>([]);
const featuredArtists = ref<Artist[]>([]);

onMounted(() => {
  recentlyPlayed.value = songs;
  featuredArtists.value = artists;
});

function playSong(song: Song) {
  musicStore.currentSong = song;
  musicStore.play()
}
</script>