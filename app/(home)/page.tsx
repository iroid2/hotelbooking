import FeaturedHotels from "@/components/mine/featured-hotels";
import HeroSearch from "@/components/mine/hero-search";
import Testimonials from "@/components/mine/testimonials";
import TrendingDestinations from "@/components/mine/trending-destinations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Clock, CreditCard, Award, Phone, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 hero-gradient z-10"></div>
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Hotel"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container relative z-20 px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Experience Luxury Like Never Before
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Discover and book the finest hotels around the world with
              exclusive benefits and personalized service.
            </p>
            <HeroSearch />
          </div>
        </div>
      </section>

      {/* Featured Hotels */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Featured Hotels
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Handpicked luxury accommodations that offer exceptional
                experiences, stunning locations, and impeccable service.
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0">
              View All Hotels <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <FeaturedHotels />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Luxe Stays
            </h2>
            <p className="text-muted-foreground">
              We go above and beyond to ensure your stay is nothing short of
              extraordinary.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="feature-card bg-background rounded-xl p-6 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                Our dedicated team is available around the clock to assist with
                any requests or concerns.
              </p>
            </div>
            <div className="feature-card bg-background rounded-xl p-6 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <CreditCard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Best Price Guarantee</h3>
              <p className="text-muted-foreground">
                Find a lower price elsewhere? We'll match it and give you an
                additional 10% discount.
              </p>
            </div>
            <div className="feature-card bg-background rounded-xl p-6 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">VIP Experiences</h3>
              <p className="text-muted-foreground">
                Exclusive access to unique experiences and amenities at our
                partner hotels.
              </p>
            </div>
            <div className="feature-card bg-background rounded-xl p-6 shadow-sm">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Cancellation</h3>
              <p className="text-muted-foreground">
                Plans change? No problem. Most of our bookings offer flexible
                cancellation options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Guests Say
            </h2>
            <p className="text-muted-foreground">
              Hear from travelers who have experienced the Luxe Stays
              difference.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Trending Destinations */}
      <section className="py-16 md:py-24 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trending Destinations
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Explore the most sought-after locations for your next luxury
                getaway.
              </p>
            </div>
            <Button variant="outline" className="mt-4 md:mt-0">
              View All Destinations <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <TrendingDestinations />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-primary-foreground/90 mb-8">
              Subscribe to our newsletter for exclusive deals, travel
              inspiration, and luxury hotel recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
