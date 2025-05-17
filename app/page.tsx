import About from "@/components/About";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Review from "@/components/Review";
import Services from "@/components/Services";
import Softwares from "@/components/Softwares";
import WhyChoose from "@/components/WhyChoose";


export default function Home() {
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
        <Footer />
      </div>
    </div>
  );
}
