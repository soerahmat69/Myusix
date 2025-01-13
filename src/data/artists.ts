import type { Artist } from '@/types/music';

export const artists: Artist[] = [
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