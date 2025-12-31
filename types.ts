
export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: string;
  description: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  category: 'food' | 'interior' | 'vibes';
  title: string;
}
