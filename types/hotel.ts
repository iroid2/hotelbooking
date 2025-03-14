export interface Hotel {
  id: number;
  name: string;
  location: string;
  image: string;
  price: number;
  rating: number;
  discount: boolean;
  description: string;
  reviewCount: number;
  categories: string[];
  amenities: string[];
}

export interface HotelCategory {
  id: string;
  name: string;
  icon: string;
}
