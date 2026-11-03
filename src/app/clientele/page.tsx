import type { Metadata } from "next";
import { Clients } from "@/components/Clients";

export const metadata: Metadata = {
  title: "Clientele",
  description:
    "Organisations that trust Safe Wheels for reliable transportation and travel services in Mysuru.",
};

export default function ClientelePage() {
  return (
    <div className="pt-[72px] md:pt-[80px]">
      <Clients />
    </div>
  );
}
