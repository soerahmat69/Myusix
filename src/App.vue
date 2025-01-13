<template>
  <div class="min-h-screen bg-black">
    <div class="flex flex-col md:flex-row">
      <!-- Sidebar -->
      <nav class="w-full md:w-64 bg-gray-900 p-4 md:p-6 md:fixed md:left-0 md:top-0 md:bottom-0">
        <div class="text-white space-y-4 md:space-y-6">
          <router-link to="/" class="text-xl md:text-2xl font-bold text-green-500 block">
           Myusix
          </router-link>
          <div class="flex md:block space-x-4 md:space-x-0 md:space-y-4 overflow-x-auto md:overflow-visible">
            <router-link
              v-for="item in menuItems"
              :key="item.path"
              :to="item.path"
              class="flex items-center space-x-2 text-gray-300 hover:text-white whitespace-nowrap"
            >
              <component :is="item.icon" class="w-5 h-5" />
              <span>{{ item.name }}</span>
            </router-link>
          </div>
        </div>
      </nav>

      <!-- Main Content -->
      <main class="flex-1 md:ml-64 pb-24">
        <router-view />
      </main>

      <!-- Music Player -->
      <MusicPlayer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { HomeIcon, MusicalNoteIcon, UserIcon } from '@heroicons/vue/24/outline';
import MusicPlayer from '@/components/MusicPlayer.vue';

const menuItems = [
  { name: 'Home', path: '/', icon: HomeIcon },
  { name: 'Your Library', path: '/library', icon: MusicalNoteIcon },
  { name: 'Artist Coupons', path: '/coupons', icon: UserIcon },
];
</script>