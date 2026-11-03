import type { Metadata } from "next";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export const metadata: Metadata = {
  title: "Why Us",
  description:
    "Why travellers choose Safe Wheels — experience, safety, local expertise and reliable vehicles since 1999.",
};

export default function WhyUsPage() {
  return (
    <div className="pt-[72px] md:pt-[80px]">
      <WhyChooseUs />
    </div>
  );
}
