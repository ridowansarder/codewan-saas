import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-8">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <Image
            src="/hero.jpg"
            alt="about"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
        <div className="lg:ml-auto">
          <p className="text-sm md:text-2xl uppercase text-emerald-600 dark:text-emerald-50 font-semibold">
            About Us
          </p>
          <h1 className="text-2xl lg:text-4xl mt-3 font-bold dark:text-amber-400">
            We build fast, scalable, and beautiful apps that help startups and
            enterprises move forward—faster.
          </h1>
          <p className="text-lg leading-relaxed my-3">
            We are a passionate team of developers, designers, and strategists
            dedicated to building exceptional digital experiences. With a focus
            on innovation, performance, and user-centric design, we help
            businesses transform their ideas into powerful and scalable
            solutions.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 my-3">
            Whether you are a startup launching your first product or an
            enterprise optimizing your operations, we bring the right mix of
            creativity, technical expertise, and reliability to your projects.
          </p>
          <Button className="dark:bg-amber-400 dark:text-black bg-emerald-700 text-emerald-50 my-3 text-lg dark:hover:bg-amber-600 hover:bg-emerald-800">Get in Touch <ArrowRight /></Button>
        </div>
      </div>
    </section>
  );
};

export default About;
