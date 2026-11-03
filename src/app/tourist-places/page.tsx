import type { Metadata } from "next";
import { Destinations } from "@/components/Destinations";

export const metadata: Metadata = {
  title: "Tourist Places",
  description:
    "Explore destinations and tour ideas with Safe Wheels — Mysuru sightseeing, domestic escapes and more.",
};

export default function TouristPlacesPage() {
  return (
    <div className="pt-[72px] md:pt-[80px]">
      <Destinations />
    </div>
  );
}
