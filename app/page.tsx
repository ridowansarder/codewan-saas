import About from "@/components/About";
import Hero from "@/components/Hero";
import Services from "@/components/Services";


export default function Home() {
  return (
    <div>
      <div className="overflow-hidden">
        <Hero />
        <About />
        <Services />
      </div>
    </div>
  );
}
