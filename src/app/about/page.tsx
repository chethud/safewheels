import type { Metadata } from "next";
import { About } from "@/components/About";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Safe Wheels Tours & Travels — Mysuru’s trusted travel partner since 1999. Vision, journey, services and local expertise.",
};

export default function AboutPage() {
  return (
    <div className="pt-[72px] md:pt-[80px]">
      <About full />
    </div>
  );
}
