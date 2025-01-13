export interface Song {
  id: string;
  title: string;
  artist: string;
  album: string;
  cover: string;
  audioUrl: string;
  duration: number;
}

export interface Artist {
  id: string;
  name: string;
  image: string;
  coupons: Coupon[];
}

export interface Coupon {
  id: string;
  code: string;
  discount: number;
  validUntil: Date;
}