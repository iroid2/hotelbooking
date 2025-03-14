"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, CreditCard, Building, Check } from "lucide-react";

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  const hotel = {
    name: "The Grand Palace Hotel",
    location: "Paris, France",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    roomType: "Deluxe Room",
    checkIn: "March 15, 2025",
    checkOut: "March 20, 2025",
    guests: 2,
    nights: 5,
    pricePerNight: 450,
    totalPrice: 2250,
    taxes: 270,
    grandTotal: 2520,
  };

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <Link
        href="/hotel/1"
        className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6"
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        Back to Hotel
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-8">Complete Your Booking</h1>

          <div className="mb-8">
            <div className="flex items-center mb-6">
              <div
                className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  step >= 1
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                1
              </div>
              <div
                className={`h-1 w-16 mx-2 ${
                  step >= 2 ? "bg-primary" : "bg-muted"
                }`}
              ></div>
              <div
                className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  step >= 2
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                2
              </div>
              <div
                className={`h-1 w-16 mx-2 ${
                  step >= 3 ? "bg-primary" : "bg-muted"
                }`}
              ></div>
              <div
                className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  step >= 3
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                3
              </div>
            </div>
          </div>

          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Guest Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input
                      id="first-name"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="special-requests">
                    Special Requests (Optional)
                  </Label>
                  <textarea
                    id="special-requests"
                    className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="Any special requests or preferences?"
                  ></textarea>
                </div>
                <Button className="w-full" onClick={() => setStep(2)}>
                  Continue to Payment
                </Button>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Payment Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                >
                  <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-muted">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label
                      htmlFor="credit-card"
                      className="flex items-center cursor-pointer"
                    >
                      <CreditCard className="mr-2 h-5 w-5" />
                      Credit or Debit Card
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-muted">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal" className="cursor-pointer">
                      PayPal
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 border rounded-md p-4 cursor-pointer hover:bg-muted">
                    <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                    <Label
                      htmlFor="bank-transfer"
                      className="flex items-center cursor-pointer"
                    >
                      <Building className="mr-2 h-5 w-5" />
                      Bank Transfer
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === "credit-card" && (
                  <div className="space-y-6 mt-6">
                    <div className="space-y-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input
                        id="card-number"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name-on-card">Name on Card</Label>
                      <Input
                        id="name-on-card"
                        placeholder="Enter the name on your card"
                      />
                    </div>
                  </div>
                )}

                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button className="flex-1" onClick={() => setStep(3)}>
                    Complete Booking
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Booking Confirmed</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-center">
                <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <Check className="h-10 w-10 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">
                  Thank You for Your Booking!
                </h2>
                <p className="text-muted-foreground">
                  Your reservation at {hotel.name} has been confirmed. A
                  confirmation email has been sent to your email address.
                </p>
                <div className="bg-muted p-4 rounded-md text-left">
                  <p className="font-medium">
                    Booking Reference:{" "}
                    <span className="font-bold">LUX-25789</span>
                  </p>
                </div>
                <div className="flex gap-4 justify-center">
                  <Button variant="outline">View Booking Details</Button>
                  <Button>
                    <Link href="/">Return to Home</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Booking Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-4">
                <img
                  src={hotel.image || "/placeholder.svg"}
                  alt={hotel.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <h3 className="font-bold">{hotel.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {hotel.location}
                  </p>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Room Type</span>
                  <span>{hotel.roomType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Check-in</span>
                  <span>{hotel.checkIn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Check-out</span>
                  <span>{hotel.checkOut}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Guests</span>
                  <span>{hotel.guests}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Nights</span>
                  <span>{hotel.nights}</span>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    ${hotel.pricePerNight} × {hotel.nights} nights
                  </span>
                  <span>${hotel.totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Taxes & fees</span>
                  <span>${hotel.taxes}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2">
                  <span>Total</span>
                  <span>${hotel.grandTotal}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
