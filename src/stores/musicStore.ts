import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Song } from '@/types/music';
import { Howl } from 'howler';

export const useMusicStore = defineStore('music', () => {
  const currentSong = ref<Song | null>(null);
  const playlist = ref<Song[]>([]);
  const isPlaying = ref(false);
  const volume = ref(1);
  const repeat = ref(false);
  const sound = ref<Howl | null>(null);

  const currentSongIndex = computed(() => {
    if (!currentSong.value) return -1;
    return playlist.value.findIndex(song => song.id === currentSong.value?.id);
  });

  function initializeSound(song: Song) {
    sound.value?.unload();
    sound.value = new Howl({
      src: [song.audioUrl],
      volume: volume.value,
      onend: () => {
        if (repeat.value) {
          play();
        } else {
          next();
        }
      }
    });
  }

  function play() {
    if (!currentSong.value) return;
    if (!sound.value) {
      initializeSound(currentSong.value);
    }
    sound.value?.pause();
    sound.value?.play();
    isPlaying.value = true;
 
  }

  function pause() {
    sound.value?.pause();
    isPlaying.value = false;
  }

  function next() {
    if (currentSongIndex.value < playlist.value.length - 1) {
      currentSong.value = playlist.value[currentSongIndex.value + 1];
      initializeSound(currentSong.value);
      play();
    }
  }

  function prev() {
    if (currentSongIndex.value > 0) {
      currentSong.value = playlist.value[currentSongIndex.value - 1];
      initializeSound(currentSong.value);
      play();
    }
  }

  function setVolume(value: number) {
    volume.value = value;
    sound.value?.volume(value);
  }

  function toggleRepeat() {
    repeat.value = !repeat.value;
  }

  return {
    currentSong,
    playlist,
    isPlaying,
    volume,
    repeat,
    play,
    pause,
    next,
    prev,
    setVolume,
    toggleRepeat
  };
});