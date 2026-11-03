import type { Metadata } from "next";
import { About } from "@/components/About";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Safe Wheels Tours & Travels — Mysuru’s trusted travel partner since 1999.",
};

export default function AboutPage() {
  return (
    <div className="pt-[72px] md:pt-[80px]">
      <About />
    </div>
  );
}
