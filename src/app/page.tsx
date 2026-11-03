import { About } from "@/components/About";
import { Blog } from "@/components/Blog";
import { Clients } from "@/components/Clients";
import { Destinations } from "@/components/Destinations";
import { Fleet } from "@/components/Fleet";
import { Hero } from "@/components/Hero";
import { HomeContactStrip } from "@/components/HomeContactStrip";
import { HomeQuickActions } from "@/components/HomeQuickActions";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeQuickActions />
      <About />
      <Services />
      <Fleet />
      <Destinations />
      <Testimonials />
      <Clients />
      <Blog />
      <HomeContactStrip />
    </>
  );
}
