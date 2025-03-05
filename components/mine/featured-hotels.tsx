import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin } from "lucide-react";

const featuredHotels = [
  {
    id: 1,
    name: "The Grand Palace",
    location: "Paris, France",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    price: 450,
    rating: 4.9,
    discount: true,
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
  },
];

const FeaturedHotels = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {featuredHotels.map((hotel) => (
        <Card
          key={hotel.id}
          className="overflow-hidden transition-all duration-300 hover:shadow-lg"
        >
          <div className="relative h-48 overflow-hidden">
            <img
              src={hotel.image || "/placeholder.svg"}
              alt={hotel.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
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
            <p className="text-xl font-bold">
              ${hotel.price}{" "}
              <span className="text-sm font-normal text-muted-foreground">
                / night
              </span>
            </p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default FeaturedHotels;
