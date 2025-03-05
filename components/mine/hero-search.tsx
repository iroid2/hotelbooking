"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Search, Users } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const HeroSearch = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(2);

  return (
    <div className="glass-card rounded-xl p-6 max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="space-y-2">
          <Label htmlFor="destination" className="text-white">
            Destination
          </Label>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/60" />
            <Input
              id="destination"
              placeholder="Where are you going?"
              className="pl-9 bg-white/10 border-white/20 text-white placeholder:text-white/60"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="check-in" className="text-white">
            Check In
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="check-in"
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal bg-white/10 border-white/20 text-white",
                  !checkIn && "text-white/60"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkIn ? format(checkIn, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkIn}
                onSelect={setCheckIn}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="check-out" className="text-white">
            Check Out
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="check-out"
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal bg-white/10 border-white/20 text-white",
                  !checkOut && "text-white/60"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkOut ? format(checkOut, "PPP") : "Select date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="guests" className="text-white">
            Guests
          </Label>
          <div className="relative">
            <Users className="absolute left-3 top-2.5 h-4 w-4 text-white/60" />
            <select
              id="guests"
              value={guests}
              onChange={(e) => setGuests(Number.parseInt(e.target.value))}
              className="w-full h-10 pl-9 pr-4 rounded-md bg-white/10 border-white/20 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <Button size="lg" className="px-8">
          Search Hotels
        </Button>
      </div>
    </div>
  );
};

export default HeroSearch;
