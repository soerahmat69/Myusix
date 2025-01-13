import type { Song, Artist } from '@/types/music';

export const sampleSongs: Song[] = [
  {
    id: '1',
    title: 'Summer Vibes',
    artist: 'Chill Master',
    album: 'Beach Sessions',
    cover: 'https://picsum.photos/seed/song1/300/300',
    audioUrl: 'https://example.com/audio/summer-vibes.mp3',
    duration: 180
  },
  {
    id: '2',
    title: 'Urban Night',
    artist: 'City Lights',
    album: 'Midnight Tales',
    cover: 'https://picsum.photos/seed/song2/300/300',
    audioUrl: 'https://example.com/audio/urban-night.mp3',
    duration: 210
  },
  {
    id: '3',
    title: 'Mountain Echo',
    artist: 'Nature Sounds',
    album: 'Wilderness',
    cover: 'https://picsum.photos/seed/song3/300/300',
    audioUrl: 'https://example.com/audio/mountain-echo.mp3',
    duration: 195
  }
];

export const sampleArtists: Artist[] = [
  {
    id: '1',
    name: 'Chill Master',
    image: 'https://picsum.photos/seed/artist1/300/300',
    coupons: [
      {
        id: '1',
        code: 'SUMMER2023',
        discount: 20,
        validUntil: new Date('2023-12-31')
      }
    ]
  },
  {
    id: '2',
    name: 'City Lights',
    image: 'https://picsum.photos/seed/artist2/300/300',
    coupons: [
      {
        id: '2',
        code: 'URBAN50',
        discount: 50,
        validUntil: new Date('2023-12-31')
      }
    ]
  },
  {
    id: '3',
    name: 'Nature Sounds',
    image: 'https://picsum.photos/seed/artist3/300/300',
    coupons: [
      {
        id: '3',
        code: 'NATURE25',
        discount: 25,
        validUntil: new Date('2023-12-31')
      }
    ]
  }
];