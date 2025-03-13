import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";

import Link from "next/link";
import Image from "next/image";
import { Hotel } from "@/types";

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

interface FeaturedHotelsProps {
  hotels?: Hotel[];
}

const FeaturedHotels = ({ hotels = featuredHotels }: FeaturedHotelsProps) => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-10 text-center">
          <h2 className="text-3xl font-bold mb-3">Featured Hotels</h2>
          <p className="text-muted-foreground max-w-2xl">
            Discover our handpicked selection of exceptional accommodations
            around the world, offering unforgettable experiences and
            unparalleled comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotels.map((hotel) => (
            <Card
              key={hotel.id}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={hotel.image || "/placeholder.svg"}
                  alt={hotel.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                {hotel.discount && (
                  <Badge className="absolute top-2 right-2 bg-primary">
                    Special Offer
                  </Badge>
                )}
              </div>
              <CardHeader className="p-4 pb-0">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold">{hotel.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                    <span className="text-sm font-medium">{hotel.rating}</span>
                  </div>
                </div>
                <div className="flex items-center text-muted-foreground text-sm mt-1">
                  <MapPin className="h-3 w-3 mr-1" />
                  {hotel.location}
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                {hotel.description && (
                  <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                    {hotel.description}
                  </p>
                )}
                <p className="text-xl font-bold">
                  ${hotel.price}{" "}
                  <span className="text-sm font-normal text-muted-foreground">
                    / night
                  </span>
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href={`/hotels/${hotel.id}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHotels;
