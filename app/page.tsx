"use client";

import About from "@/components/About";
import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Review from "@/components/Review";
import Services from "@/components/Services";
import Softwares from "@/components/Softwares";
import WhyChoose from "@/components/WhyChoose";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  }, []);
  return (
    <div>
      <div className="overflow-hidden">
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Softwares />
        <Projects />
        <Review />
        <Blog />
      </div>
    </div>
  );
}
