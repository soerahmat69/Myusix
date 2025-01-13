<template>
  <div class="bg-gray-900 text-white p-4 md:p-6 rounded-lg">
    <h2 class="text-xl md:text-2xl font-bold mb-4">Artist Coupons</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
      <div
        v-for="artist in artistsList"
        :key="artist.id"
        class="bg-gray-800 p-3 md:p-4 rounded-lg"
      >
        <div class="flex items-center space-x-3 md:space-x-4 mb-3 md:mb-4">
          <img :src="artist.image" :alt="artist.name" class="w-12 h-12 md:w-16 md:h-16 rounded-full">
          <h3 class="text-lg md:text-xl font-bold">{{ artist.name }}</h3>
        </div>
        <div class="space-y-2">
          <div
            v-for="coupon in artist.coupons"
            :key="coupon.id"
            class="bg-gray-700 p-2 md:p-3 rounded"
          >
            <div class="flex justify-between items-center">
              <span class="font-mono text-sm md:text-base text-green-400">{{ coupon.code }}</span>
              <span class="text-sm md:text-base text-green-400">{{ coupon.discount }}% OFF</span>
            </div>
            <p class="text-xs md:text-sm text-gray-400">
              Valid until {{ new Date(coupon.validUntil).toLocaleDateString() }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Artist } from '@/types/music';
import { artists } from '@/data/artists';

const artistsList = ref<Artist[]>([]);

onMounted(() => {
  artistsList.value = artists;
});
</script>