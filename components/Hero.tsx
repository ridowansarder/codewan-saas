import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-emerald-950  text-emerald-50 ">
      <div className="container mx-auto text-center lg:grid lg:grid-cols-2 w-[90%] lg:w-[80%]">
        <div className="max-w-5xl mx-auto text-left px-4">
          <p className="text-sm lg:text-lg text-gray-400 mb-4">
            A Top Software Development Company in Bangladesh
          </p>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-extrabold leading-tight mb-6">
            Transform your ideas into
            <span className="bg-amber-500 bg-clip-text text-transparent">
              {" "}powerful digital products
            </span>
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            We help startups and enterprises design, build, and scale custom
            software that drives real business results.
          </p>

          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-amber-400 text-[#002b23] font-semibold rounded-lg hover:bg-amber-600 transition-all duration-200 ease-in-out
"
          >
            Contact Us
          </a>
        </div>
        <div className="lg:block hidden mx-auto">
          <Image src='/hero.jpg' alt="hero" width={400} height={400} className="rounded-xl"/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
