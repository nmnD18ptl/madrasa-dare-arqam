export interface TarbiyatPolicy {
  id: string;
  title: string;
  titleUrdu: string;
  content: string[];
  contentUrdu?: string[];
}

export interface Language {
  code: 'en' | 'ur';
  name: string;
}

export interface PrayerTime {
  name: string;
  time: string;
}

export interface Testimonial {
  id: string;
  name: string;
  relation: string;
  text: string;
  textUrdu?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  isMapLink?: boolean;
}

