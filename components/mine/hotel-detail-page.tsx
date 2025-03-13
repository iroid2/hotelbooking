"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Star,
  MapPin,
  Wifi,
  Coffee,
  Utensils,
  Car,
  PocketIcon as Pool,
  Dumbbell,
  Snowflake,
  Heart,
  Share2,
  ChevronLeft,
  CalendarIcon,
  Users,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";

// Sample data for the hotel
const hotelData = {
  id: 1,
  name: "The Grand Palace",
  location: "Paris, France",
  description:
    "Experience luxury in the heart of Paris with breathtaking views of the Eiffel Tower. The Grand Palace offers an unforgettable stay with world-class amenities, exceptional dining, and impeccable service. Our rooms are elegantly designed with comfort and style in mind, featuring premium bedding, spacious bathrooms, and state-of-the-art technology.",
  longDescription:
    "Nestled in the vibrant heart of Paris, The Grand Palace stands as a testament to timeless elegance and luxury. This five-star establishment offers guests an unparalleled experience, combining classic Parisian charm with modern amenities. Each of our 245 rooms and suites is meticulously designed to provide the utmost comfort, featuring handcrafted furniture, premium linens, and panoramic views of the city's iconic landmarks.\n\nOur culinary offerings are led by renowned Chef Pierre Laurent, whose Michelin-starred restaurant 'Le Ciel' showcases the finest French cuisine using locally sourced ingredients. For a more casual dining experience, our brasserie 'Café Lumière' offers all-day dining with a terrace overlooking the bustling streets of Paris.\n\nThe Grand Palace Spa spans over 1,000 square meters, featuring a heated indoor pool, hammam, sauna, and treatment rooms where guests can indulge in exclusive therapies and massages. Our fitness center is equipped with the latest Technogym equipment and offers personal training sessions upon request.",
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
    },
    {
      id: 3,
      name: "Mountain View Lodge",
      location: "Swiss Alps",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop",
      price: 320,
      rating: 4.7,
    },
    {
      id: 4,
      name: "Sakura Ryokan",
      location: "Kyoto, Japan",
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
      price: 390,
      rating: 4.9,
    },
  ],
};

export default function HotelDetailPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [guests, setGuests] = useState(2);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back button */}
      <div className="mb-6">
        <Button variant="ghost" className="flex items-center gap-1 pl-0">
          <ChevronLeft className="h-4 w-4" />
          Back to search results
        </Button>
      </div>

      {/* Hotel Image Gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        <div className="lg:col-span-2 relative rounded-lg overflow-hidden h-[400px] lg:h-[500px]">
          <Image
            src={hotelData.images[0] || "/placeholder.svg"}
            alt={hotelData.name}
            fill
            className="object-cover"
          />
          {hotelData.discount && (
            <Badge className="absolute top-4 left-4 bg-primary">
              Special Offer
            </Badge>
          )}
        </div>
        <div className="hidden lg:grid grid-cols-1 gap-4">
          {hotelData.images.slice(1, 4).map((image, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden h-[156px]"
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${hotelData.name} - Image ${index + 2}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Image Carousel (visible only on mobile) */}
      <div className="lg:hidden mb-8">
        <Carousel className="w-full">
          <CarouselContent>
            {hotelData.images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${hotelData.name} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>

      {/* Hotel Info and Booking Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Hotel Details */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{hotelData.name}</h1>
              <div className="flex items-center text-muted-foreground mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{hotelData.location}</span>
              </div>
              <div className="flex items-center">
                <div className="flex mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(hotelData.rating)
                          ? "fill-primary text-primary"
                          : "fill-muted text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="font-medium">{hotelData.rating}</span>
                <span className="text-muted-foreground ml-1">
                  ({hotelData.reviewCount} reviews)
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsFavorite(!isFavorite)}
                className="h-10 w-10"
              >
                <Heart
                  className={`h-5 w-5 ${
                    isFavorite ? "fill-red-500 text-red-500" : ""
                  }`}
                />
                <span className="sr-only">Add to favorites</span>
              </Button>
              <Button variant="outline" size="icon" className="h-10 w-10">
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Share</span>
              </Button>
            </div>
          </div>

          <p className="text-lg mb-8">{hotelData.description}</p>

          <Tabs defaultValue="details" className="mb-10">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
              <TabsTrigger value="rooms">Rooms</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="mt-6">
              <div className="space-y-4">
                <p className="whitespace-pre-line">
                  {hotelData.longDescription}
                </p>
              </div>
            </TabsContent>

            <TabsContent value="amenities" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {hotelData.amenities.map((amenity, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 border rounded-lg"
                  >
                    <amenity.icon className="h-5 w-5 mr-3 text-primary" />
                    <span>{amenity.name}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="rooms" className="mt-6">
              <div className="space-y-6">
                {hotelData.rooms.map((room) => (
                  <Card key={room.id} className="overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="relative h-[200px] md:h-full">
                        <Image
                          src={room.image || "/placeholder.svg"}
                          alt={room.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4 md:col-span-2">
                        <CardHeader className="p-0 pb-4">
                          <CardTitle>{room.name}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <p className="text-sm text-muted-foreground">
                                Room Size
                              </p>
                              <p className="font-medium">{room.size}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">
                                Bed Type
                              </p>
                              <p className="font-medium">{room.beds}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">
                                Occupancy
                              </p>
                              <p className="font-medium">{room.occupancy}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">
                                Price per night
                              </p>
                              <p className="font-bold text-lg">${room.price}</p>
                            </div>
                          </div>
                          <Button className="w-full md:w-auto">
                            Select Room
                          </Button>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                {hotelData.reviews.map((review) => (
                  <div key={review.id} className="border-b pb-6 last:border-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center">
                        <Avatar className="h-10 w-10 mr-3">
                          <AvatarImage src={review.avatar} alt={review.user} />
                          <AvatarFallback>
                            {review.user.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{review.user}</p>
                          <p className="text-sm text-muted-foreground">
                            {review.date}
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating
                                ? "fill-primary text-primary"
                                : "fill-muted text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p>{review.comment}</p>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  Load More Reviews
                </Button>
              </div>
            </TabsContent>
          </Tabs>

          {/* Similar Hotels */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">
              Similar Hotels You Might Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {hotelData.similarHotels.map((hotel) => (
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
                  </div>
                  <CardHeader className="p-4 pb-0">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-bold">{hotel.name}</h3>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-primary text-primary mr-1" />
                        <span className="text-sm font-medium">
                          {hotel.rating}
                        </span>
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
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Card */}
        <div className="lg:col-span-1">
          <Card className="sticky top-8">
            <CardHeader>
              <CardTitle>Book Your Stay</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">
                    Price per night
                  </p>
                  <div className="flex items-center">
                    {hotelData.discount ? (
                      <>
                        <p className="text-2xl font-bold">
                          ${hotelData.discountPrice}
                        </p>
                        <p className="text-sm text-muted-foreground line-through ml-2">
                          ${hotelData.price}
                        </p>
                      </>
                    ) : (
                      <p className="text-2xl font-bold">${hotelData.price}</p>
                    )}
                  </div>
                </div>
                {hotelData.discount && (
                  <Badge className="bg-primary">
                    {Math.round(
                      (1 - hotelData.discountPrice / hotelData.price) * 100
                    )}
                    % OFF
                  </Badge>
                )}
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="check-in">Check-in Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="check-out">Check-out Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        <span>Pick a date</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="guests">Guests</Label>
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setGuests(Math.max(1, guests - 1))}
                    >
                      -
                    </Button>
                    <div className="flex items-center mx-4">
                      <Users className="h-4 w-4 mr-2" />
                      <span>
                        {guests} {guests === 1 ? "Guest" : "Guests"}
                      </span>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setGuests(Math.min(10, guests + 1))}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="promo">Promo Code</Label>
                  <Input id="promo" placeholder="Enter promo code" />
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>3 nights</span>
                  <span>${hotelData.discountPrice * 3}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes & fees</span>
                  <span>${Math.round(hotelData.discountPrice * 3 * 0.15)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>
                    $
                    {hotelData.discountPrice * 3 +
                      Math.round(hotelData.discountPrice * 3 * 0.15)}
                  </span>
                </div>
              </div>

              <Button className="w-full" size="lg">
                Book Now
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                You won't be charged yet. Payment will be collected at the
                property.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
