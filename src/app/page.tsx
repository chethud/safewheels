import { Blog } from "@/components/Blog";
import { Fleet } from "@/components/Fleet";
import { Hero } from "@/components/Hero";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Fleet />
      <Testimonials />
      <Blog />
    </>
  );
}
