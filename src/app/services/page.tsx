import type { Metadata } from "next";
import { Fleet } from "@/components/Fleet";
import { Services } from "@/components/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Domestic tours, airport transfers, corporate travel and luxury vehicle rentals from Safe Wheels Mysuru.",
};

export default function ServicesPage() {
  return (
    <div className="pt-[72px] md:pt-[80px]">
      <Services />
      <Fleet />
    </div>
  );
}
