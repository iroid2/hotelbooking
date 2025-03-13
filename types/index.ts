import type { LucideIcon } from "lucide-react";

export interface Hotel {
  id: number;
  name: string;
  location: string;
  image: string;
  price: number;
  rating: number;
  discount: boolean;
  description?: string;
  reviewCount?: number;
}

export interface DetailedHotel extends Hotel {
  discountPrice?: number;
  longDescription: string;
  reviewCount: number;
  images: string[];
  amenities: Amenity[];
  rooms: Room[];
  reviews: Review[];
  similarHotels: Hotel[];
}

export interface Amenity {
  name: string;
  icon: LucideIcon;
}

export interface Room {
  id: number;
  name: string;
  price: number;
  size: string;
  beds: string;
  occupancy: string;
  image: string;
}

export interface Review {
  id: number;
  user: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
}
