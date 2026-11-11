import type { Metadata } from "next";
import { Services } from "@/components/Services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Domestic tours, airport transfers, luxury vehicle rentals and tourist places — premium travel services from Safe Wheels Mysuru.",
};

export default function ServicesPage() {
  return (
    <div className="pt-[72px] md:pt-[80px]">
      <Services />
    </div>
  );
}
