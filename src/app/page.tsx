import { About } from "@/components/About";
import { Blog } from "@/components/Blog";
import { Clients } from "@/components/Clients";
import { Destinations } from "@/components/Destinations";
import { Fleet } from "@/components/Fleet";
import { Hero } from "@/components/Hero";
import { HomeContactStrip } from "@/components/HomeContactStrip";
import { HomeServices } from "@/components/HomeServices";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Fleet />
      <HomeServices />
      <div id="about-preview">
        <About />
      </div>
      <Destinations />
      <Testimonials />
      <Clients />
      <Blog />
      <HomeContactStrip />
    </>
  );
}
