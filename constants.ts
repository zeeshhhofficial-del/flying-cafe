
import { MenuItem, Review, GalleryItem } from './types';

export const CAFE_DETAILS = {
  name: "CAFE FLYING GYPSY’S",
  location: "Shivajinagar, Pune",
  rating: 4.6,
  reviewCount: 1361,
  priceRange: "₹200–400",
  hours: "Open 24 Hours",
  services: ["Dine-in", "Drive-through"],
  description: "Pune's favorite 24x7 destination for coffee lovers and foodies. Experience a blend of rustic charm and modern comfort.",
  address: "Final Plot No 485, CTS No 1195, Bhamburda, Shivajinagar, Pune, Maharashtra 411005"
};

// Using high-quality unsplash images as fallback/primary visuals
// These use specific keywords related to the cafe's actual vibe.
export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Cheese Maggi',
    category: 'Quick Bites',
    price: '₹140',
    description: 'Loaded with melted cheese and classic spices.',
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Piri-Piri Fries',
    category: 'Quick Bites',
    price: '₹160',
    description: 'Crispy golden fries tossed in hot piri-piri seasoning.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Egg Kheema',
    category: 'Mains',
    price: '₹220',
    description: 'Spicy minced eggs cooked with traditional Indian masalas.',
    image: 'https://images.unsplash.com/photo-1548940740-204726a19db3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Gourmet Burger',
    category: 'Mains',
    price: '₹180',
    description: 'Juicy patty with fresh lettuce, onions, and secret sauce.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    name: 'Cold Coffee',
    category: 'Beverages',
    price: '₹150',
    description: 'Creamy, thick, and perfectly chilled.',
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    name: 'Blueberry Cheesecake',
    category: 'Desserts',
    price: '₹210',
    description: 'Smooth cheesecake topped with sweet blueberry compote.',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: "Rahul Sharma",
    rating: 5,
    comment: "The best place in Pune for late night coffee. Maggi and fries are exceptional!",
    date: "2 days ago"
  },
  {
    id: 'r2',
    author: "Priya K.",
    rating: 4,
    comment: "Atmosphere is so chill. Perfect for weekend night outs with friends. Egg Kheema is a must try.",
    date: "1 week ago"
  },
  {
    id: 'r3',
    author: "Amit Deshmukh",
    rating: 5,
    comment: "Open 24/7 is a blessing. Always fresh food and great service even at 3 AM.",
    date: "3 days ago"
  },
  {
    id: 'r4',
    author: "Sneha Patil",
    rating: 5,
    comment: "Flying Gypsy's is a vibe! Cold coffee is literally the best in Shivajinagar.",
    date: "5 days ago"
  }
];

export const GALLERY: GalleryItem[] = [
  { id: 'g1', url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800', category: 'interior', title: 'Modern Rustic Decor' },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800', category: 'vibes', title: 'Night Ambience' },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800', category: 'food', title: 'Signature Coffee' },
  { id: 'g4', url: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800', category: 'interior', title: 'Cozy Corners' },
  { id: 'g5', url: 'https://images.unsplash.com/photo-1466632346940-9944537aa270?auto=format&fit=crop&q=80&w=800', category: 'food', title: 'Loaded Maggi' },
  { id: 'g6', url: 'https://images.unsplash.com/photo-1497933322477-911ef44db1ab?auto=format&fit=crop&q=80&w=800', category: 'vibes', title: 'Weekend Vibes' }
];
