import { notFound } from "next/navigation";
import { getHotelById } from "@/data/hotels";
import HotelDetailPage from "@/components/mine/hotel-detail-page";

export default async function HotelPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const hotelId = Number((await params).id);
  // const hotelId = Number.parseInt(params.id);
  const hotel = getHotelById(hotelId);

  if (!hotel) {
    notFound();
  }

  return <HotelDetailPage hotelId={hotelId} />;
}
