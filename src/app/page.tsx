import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Destinations } from "@/components/Destinations";
import { Experiences } from "@/components/Experiences";
import { Featured } from "@/components/Featured";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { TourForm } from "@/components/TourForm";

export default function Home() {
  return (
    <>
      <Hero />
      <Experiences />
      <Destinations />
      <Featured />
      <About />
      <Testimonials />
      <Services />
      <TourForm />
      <Contact />
    </>
  );
}
