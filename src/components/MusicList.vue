<template>
  <div class="bg-gray-900 text-white p-4 md:p-6 rounded-lg">
    <h2 class="text-xl md:text-2xl font-bold mb-4">Your Library</h2>
    <div class="space-y-2">
      <div
        v-for="song in playlist"
        :key="song.id"
        @click="playSong(song)"
        class="flex items-center space-x-3 md:space-x-4 p-2 md:p-3 hover:bg-gray-800 rounded cursor-pointer"
        :class="{ 'bg-gray-800': currentSong?.id === song.id }"
      >
        <img :src="song.cover" :alt="song.title" class="w-10 h-10 md:w-12 md:h-12 rounded">
        <div class="flex-1 min-w-0">
          <h3 class="font-medium truncate">{{ song.title }}</h3>
          <p class="text-gray-400 text-sm truncate">{{ song.artist }}</p>
        </div>
        <div class="text-gray-400 text-sm">
          {{ formatDuration(song.duration) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useMusicStore } from '@/stores/musicStore';
import { storeToRefs } from 'pinia';
import type { Song } from '@/types/music';
import { songs } from '@/data/songs';
import { formatDuration } from '@/utils/time';

const musicStore = useMusicStore();
const { currentSong, playlist } = storeToRefs(musicStore);

onMounted(() => {
  musicStore.playlist = songs;
});

function playSong(song: Song) {
  musicStore.currentSong = song;
  musicStore.play();
}
</script>