<template>
  <div class="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-3 md:p-4">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
      <!-- Song Info -->
      <div class="flex items-center space-x-3 md:space-x-4">
        <img
          :src="currentSong?.cover"
          :alt="currentSong?.title"
          class="w-12 h-12 md:w-16 md:h-16 rounded"
          v-if="currentSong"
        >
        <div class="min-w-0">
          <h3 class="font-medium truncate">{{ currentSong?.title || 'No song selected' }}</h3>
          <p class="text-gray-400 text-sm truncate">{{ currentSong?.artist }}</p>
        </div>
      </div>

      <!-- Controls -->
      <div class="flex items-center justify-center space-x-4 md:space-x-6">
        <button @click="prev" class="hover:text-green-500">
          <BackwardIcon class="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button
          @click="isPlaying ? pause() : play()"
          class="p-1.5 md:p-2 rounded-full bg-white text-black hover:scale-105 transition"
        >
          <PlayIcon v-if="!isPlaying" class="w-6 h-6 md:w-8 md:h-8" />
          <PauseIcon v-else class="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button @click="next" class="hover:text-green-500">
          <ForwardIcon class="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      <!-- Volume & Settings -->
      <div class="flex items-center justify-end space-x-3 md:space-x-4">
        <button
          @click="toggleRepeat"
          :class="{ 'text-green-500': repeat }"
          class="hover:text-green-500"
        >
          <ArrowPathIcon class="w-4 h-4 md:w-5 md:h-5" />
        </button>
        <div class="flex items-center space-x-2">
          <SpeakerWaveIcon class="w-4 h-4 md:w-5 md:h-5" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            v-model="volume"
            @input="setVolume(Number($event.target.value))"
            class="w-20 md:w-24"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  PlayIcon,
  PauseIcon,
  BackwardIcon,
  ForwardIcon,
  ArrowPathIcon,
  SpeakerWaveIcon
} from '@heroicons/vue/24/solid';
import { useMusicStore } from '@/stores/musicStore';
import { storeToRefs } from 'pinia';

const musicStore = useMusicStore();
const { currentSong, isPlaying, volume, repeat } = storeToRefs(musicStore);
const { play, pause, next, prev, setVolume, toggleRepeat } = musicStore;
</script>