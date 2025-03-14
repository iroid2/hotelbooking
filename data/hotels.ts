import type { Hotel, HotelCategory } from "@/types/hotel";

export const hotelCategories: HotelCategory[] = [
  { id: "all", name: "All", icon: "home" },
  { id: "luxury", name: "Luxury", icon: "diamond" },
  { id: "beach", name: "Beach", icon: "palm-tree" },
  { id: "mountain", name: "Mountain", icon: "mountain-snow" },
  { id: "city", name: "City", icon: "building-2" },
  { id: "countryside", name: "Countryside", icon: "tree" },
  { id: "historic", name: "Historic", icon: "landmark" },
  { id: "boutique", name: "Boutique", icon: "gem" },
];

export const featuredHotels: Hotel[] = [
  {
    id: 1,
    name: "The Grand Palace",
    location: "Paris, France",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    price: 450,
    rating: 4.9,
    discount: true,
    description: "Luxury hotel in the heart of Paris with Eiffel Tower views",
    reviewCount: 487,
    categories: ["luxury", "city", "historic"],
    amenities: ["spa", "pool", "restaurant", "gym", "wifi"],
  },
  {
    id: 2,
    name: "Azure Beach Resort",
    location: "Maldives",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
    price: 680,
    rating: 4.8,
    discount: false,
    description:
      "Overwater bungalows with direct access to crystal clear waters",
    reviewCount: 352,
    categories: ["luxury", "beach"],
    amenities: ["spa", "pool", "restaurant", "bar", "wifi"],
  },
  {
    id: 3,
    name: "Mountain View Lodge",
    location: "Swiss Alps",
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop",
    price: 320,
    rating: 4.7,
    discount: true,
    description: "Cozy mountain retreat with stunning Alpine panoramas",
    reviewCount: 215,
    categories: ["mountain", "countryside"],
    amenities: ["fireplace", "restaurant", "ski-in/ski-out", "wifi"],
  },
  {
    id: 4,
    name: "Sakura Ryokan",
    location: "Kyoto, Japan",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
    price: 390,
    rating: 4.9,
    discount: false,
    description: "Traditional Japanese inn with authentic cultural experiences",
    reviewCount: 178,
    categories: ["historic", "city", "boutique"],
    amenities: ["onsen", "traditional dining", "garden", "tea ceremony"],
  },
  {
    id: 5,
    name: "Coastal Breeze Villa",
    location: "Amalfi Coast, Italy",
    image:
      "https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=2070&auto=format&fit=crop",
    price: 520,
    rating: 4.8,
    discount: true,
    description: "Cliffside villa with panoramic Mediterranean Sea views",
    reviewCount: 203,
    categories: ["luxury", "beach"],
    amenities: ["private pool", "terrace", "kitchen", "wifi", "parking"],
  },
  {
    id: 6,
    name: "Urban Loft Hotel",
    location: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
    price: 280,
    rating: 4.6,
    discount: false,
    description: "Modern loft-style rooms in the heart of Manhattan",
    reviewCount: 312,
    categories: ["city", "boutique"],
    amenities: ["bar", "restaurant", "gym", "business center", "wifi"],
  },
  {
    id: 7,
    name: "Vineyard Estate",
    location: "Tuscany, Italy",
    image:
      "https://images.unsplash.com/photo-1568084680786-a84f91d1153c?q=80&w=2074&auto=format&fit=crop",
    price: 410,
    rating: 4.9,
    discount: true,
    description: "Elegant estate surrounded by vineyards and olive groves",
    reviewCount: 167,
    categories: ["countryside", "luxury"],
    amenities: ["wine tasting", "pool", "restaurant", "spa", "wifi"],
  },
  {
    id: 8,
    name: "Northern Lights Lodge",
    location: "Tromsø, Norway",
    image:
      "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd?q=80&w=2070&auto=format&fit=crop",
    price: 350,
    rating: 4.7,
    discount: false,
    description: "Arctic retreat with glass ceilings for aurora viewing",
    reviewCount: 142,
    categories: ["mountain", "countryside"],
    amenities: ["sauna", "fireplace", "guided tours", "restaurant", "wifi"],
  },
];

// Generate additional images for each hotel
export function getHotelImages(
  hotelId: number
): { image: string; alt: string }[] {
  const hotel = featuredHotels.find((h) => h.id === hotelId);
  if (!hotel) return [];

  // Use the main image and generate variations with different query parameters
  return [
    { image: hotel.image, alt: `${hotel.name} - Main View` },
    { image: `${hotel.image}&sat=-20`, alt: `${hotel.name} - Interior` },
    { image: `${hotel.image}&blur=100`, alt: `${hotel.name} - Amenities` },
    { image: `${hotel.image}&flip=h`, alt: `${hotel.name} - Room` },
    { image: `${hotel.image}&sat=50`, alt: `${hotel.name} - Exterior` },
  ];
}

export function getHotelById(id: number): Hotel | undefined {
  return featuredHotels.find((hotel) => hotel.id === id);
}

export function getHotelsByCategory(categoryId: string): Hotel[] {
  if (categoryId === "all") return featuredHotels;
  return featuredHotels.filter((hotel) =>
    hotel.categories.includes(categoryId)
  );
}
