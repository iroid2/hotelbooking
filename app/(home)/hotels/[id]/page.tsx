import { notFound } from "next/navigation";

import type { Hotel } from "@/types";
import HotelDetailPage from "@/components/mine/hotel-detail-page";

// This would typically come from a database or API
const featuredHotels: Hotel[] = [
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
  },
];

export default function HotelPage({ params }: { params: { id: string } }) {
  const hotelId = Number.parseInt(params.id);

  // Check if the hotel exists in our data
  const hotelExists = featuredHotels.some((hotel) => hotel.id === hotelId);

  // If hotel doesn't exist, return 404
  if (!hotelExists) {
    notFound();
  }

  return <HotelDetailPage />;
}
