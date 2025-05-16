import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section id="services" className="py-16">
      <div className="w-[80%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="uppercase font-bold">
            <h1 className="text-sm lg:text-xl text-emerald-700 dark:text-amber-400">
              What we provide
            </h1>
            <h2 className="text-xl md:text-3xl">
              We provide high quality software services for any industry
            </h2>
          </div>
          <div className="lg:ml-auto">
            <a
              href="#"
              className="p-4 dark:bg-amber-400 dark:hover:bg-amber-500 dark:text-black bg-emerald-800 hover:bg-emerald-700 text-emerald-50 rounded-full"
            >
              All Services
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center mt-16">
          <ServiceCard
            title="Custom Software Development"
            description="We build tailored software solutions to meet your unique business needs — from internal tools to full-scale enterprise applications."
          />
          <ServiceCard
            title="Web Application Development"
            description="Our team creates fast, secure, and responsive web apps using modern frameworks like React, Next.js, and Node.js for an exceptional user experience."
          />
          <ServiceCard
            title="Mobile App Development"
            description="Launch high-performance mobile apps for iOS and Android using cross-platform technologies like Flutter and React Native to reach users everywhere."
          />
          <ServiceCard
            title="UI/UX Design"
            description="We design intuitive and visually stunning user interfaces that drive engagement and improve customer satisfaction across all devices."
          />
          <ServiceCard
            title="DevOps & Cloud Solutions"
            description="Optimize your infrastructure with our DevOps services — from CI/CD pipelines to scalable cloud deployments using AWS, Azure, and DigitalOcean."
          />
          <ServiceCard
            title="Maintenance & Support"
            description="Get reliable post-launch support, regular updates, and technical assistance to keep your software secure, stable, and up-to-date."
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
