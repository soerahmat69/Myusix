import type { Song } from '@/types/music';
import music1 from './music1.mp3'
export const songs: Song[] = [
  {
    id: '1',
    title: 'Summer Vibes',
    artist: 'Chill Master',
    album: 'Beach Sessions',
    cover: 'https://picsum.photos/seed/song1/300/300',
    audioUrl: 'https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3',
    duration: 180
  },
  {
    id: '2',
    title: 'Urban Night',
    artist: 'City Lights',
    album: 'Midnight Tales',
    cover: 'https://picsum.photos/seed/song2/300/300',
    audioUrl: music1,
    duration: 210
  },
  {
    id: '3',
    title: 'Mountain Echo',
    artist: 'Nature Sounds',
    album: 'Wilderness',
    cover: 'https://picsum.photos/seed/song3/300/300',
    audioUrl: 'https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3',
    duration: 195
  }
];