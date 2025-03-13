import type { DetailedHotel } from "@/types";
import {
  Wifi,
  Coffee,
  Utensils,
  Car,
  PocketIcon as Pool,
  Dumbbell,
  Snowflake,
} from "lucide-react";

export const getHotelById = (id: number): DetailedHotel | null => {
  const hotel = hotelData.find((hotel) => hotel.id === id);
  return hotel || null;
};

export const hotelData: DetailedHotel[] = [
  {
    id: 1,
    name: "The Grand Palace",
    location: "Paris, France",
    description:
      "Experience luxury in the heart of Paris with breathtaking views of the Eiffel Tower.",
    longDescription:
      "Nestled in the vibrant heart of Paris, The Grand Palace stands as a testament to timeless elegance and luxury. This five-star establishment offers guests an unparalleled experience, combining classic Parisian charm with modern amenities. Each of our 245 rooms and suites is meticulously designed to provide the utmost comfort, featuring handcrafted furniture, premium linens, and panoramic views of the city's iconic landmarks.\n\nOur culinary offerings are led by renowned Chef Pierre Laurent, whose Michelin-starred restaurant 'Le Ciel' showcases the finest French cuisine using locally sourced ingredients. For a more casual dining experience, our brasserie 'Café Lumière' offers all-day dining with a terrace overlooking the bustling streets of Paris.\n\nThe Grand Palace Spa spans over 1,000 square meters, featuring a heated indoor pool, hammam, sauna, and treatment rooms where guests can indulge in exclusive therapies and massages. Our fitness center is equipped with the latest Technogym equipment and offers personal training sessions upon request.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    price: 450,
    discountPrice: 380,
    rating: 4.9,
    reviewCount: 487,
    discount: true,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
    ],
    amenities: [
      { name: "Free WiFi", icon: Wifi },
      { name: "Breakfast Included", icon: Coffee },
      { name: "Restaurant", icon: Utensils },
      { name: "Parking", icon: Car },
      { name: "Swimming Pool", icon: Pool },
      { name: "Fitness Center", icon: Dumbbell },
      { name: "Air Conditioning", icon: Snowflake },
    ],
    rooms: [
      {
        id: 1,
        name: "Deluxe Room",
        price: 380,
        size: "35m²",
        beds: "1 King Bed",
        occupancy: "2 Adults",
        image:
          "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop",
      },
      {
        id: 2,
        name: "Premium Suite",
        price: 580,
        size: "55m²",
        beds: "1 King Bed",
        occupancy: "2 Adults, 2 Children",
        image:
          "https://images.unsplash.com/photo-1591088398332-8a7791972843?q=80&w=2067&auto=format&fit=crop",
      },
      {
        id: 3,
        name: "Family Room",
        price: 450,
        size: "45m²",
        beds: "2 Queen Beds",
        occupancy: "4 Adults",
        image:
          "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1974&auto=format&fit=crop",
      },
    ],
    reviews: [
      {
        id: 1,
        user: "Sophie Martin",
        avatar: "/placeholder.svg",
        rating: 5,
        date: "October 15, 2023",
        comment:
          "Absolutely stunning hotel with impeccable service. The views from our room were breathtaking, and the staff went above and beyond to make our stay special. The breakfast was exceptional with a wide variety of options. Will definitely return!",
      },
      {
        id: 2,
        user: "James Wilson",
        avatar: "/placeholder.svg",
        rating: 4,
        date: "September 3, 2023",
        comment:
          "Great location and beautiful property. The room was spacious and well-appointed. Only giving 4 stars because the check-in process was a bit slow, but otherwise a wonderful experience.",
      },
      {
        id: 3,
        user: "Emma Thompson",
        avatar: "/placeholder.svg",
        rating: 5,
        date: "August 22, 2023",
        comment:
          "This hotel exceeded all my expectations. The spa facilities are world-class, and the restaurant serves some of the best food I've had in Paris. The concierge was incredibly helpful in arranging tours and restaurant reservations.",
      },
    ],
    similarHotels: [
      {
        id: 2,
        name: "Azure Beach Resort",
        location: "Maldives",
        image:
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
        price: 680,
        rating: 4.8,
        discount: false,
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
        reviewCount: 178,
      },
    ],
  },
  // Add more detailed hotel data as needed
];
