import React from "react";
import {
  ExternalLink,
  Code,
  MonitorSmartphone,
  Smartphone,
  Palette,
  Server,
  Cpu,
} from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="py-8">
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
              className="p-4 text-lg dark:bg-amber-400 dark:hover:bg-amber-500 dark:text-black bg-emerald-800 hover:bg-emerald-700 text-emerald-50 rounded-full"
            >
              All Services
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center mt-16">
          <div className="p-6 dark:bg-gray-700 transition-all duration-500 shadow rounded-xl bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-100 text-black cursor-pointer hover:scale-[1.02]">
            <Code className="w-8 h-8 text-emerald-700 dark:text-amber-500  " />
            <h1 className="text-xl font-semibold my-3 text-emerald-700 dark:text-amber-500">
              Custom Softwares Development
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore iusto animi maxime numquam nostrum laboriosam officiis
              unde rerum, ea saepe?
            </p>
            <div className="flex mt-6 text-xl font-medium transition-all duration-500">
              <span className="underline underline-offset-6 text-emerald-700 dark:text-amber-500">Learn More</span>
              <ExternalLink className="w-6 h-6 ml-3 text-emerald-700 dark:text-amber-500 " />
            </div>
          </div>
          <div className="p-6 dark:bg-gray-700 transition-all duration-500 shadow rounded-xl bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-100 text-black cursor-pointer hover:scale-[1.02]">
            <MonitorSmartphone className="w-8 h-8 text-emerald-700 dark:text-amber-500 " />
            <h1 className="text-xl font-semibold my-3 text-emerald-700 dark:text-amber-500">
              Website Design and Development
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore iusto animi maxime numquam nostrum laboriosam officiis
              unde rerum, ea saepe?
            </p>
            <div className="flex mt-6 text-xl font-medium transition-all duration-500">
              <span className="underline underline-offset-6 text-emerald-700 dark:text-amber-500">Learn More</span>
              <ExternalLink className="w-6 h-6 ml-3 text-emerald-700 dark:text-amber-500 " />
            </div>
          </div>
          <div className="p-6 dark:bg-gray-700 transition-all duration-500 shadow rounded-xl bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-100 text-black cursor-pointer hover:scale-[1.02]">
            <Smartphone className="w-8 h-8 text-emerald-700 dark:text-amber-500 " />
            <h1 className="text-xl font-semibold my-3 text-emerald-700 dark:text-amber-500">
              Android & iOS App Development
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore iusto animi maxime numquam nostrum laboriosam officiis
              unde rerum, ea saepe?
            </p>
            <div className="flex mt-6 text-xl font-medium transition-all duration-500">
              <span className="underline underline-offset-6 text-emerald-700 dark:text-amber-500">Learn More</span>
              <ExternalLink className="w-6 h-6 ml-3 text-emerald-700 dark:text-amber-500 " />
            </div>
          </div>
          <div className="p-6 dark:bg-gray-700 transition-all duration-500 shadow rounded-xl bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-100 text-black cursor-pointer hover:scale-[1.02]">
            <Cpu className="w-8 h-8 text-emerald-700 dark:text-amber-500 " />
            <h1 className="text-xl font-semibold my-3 text-emerald-700 dark:text-amber-500">
              AI & Machine Learning Integration
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore iusto animi maxime numquam nostrum laboriosam officiis
              unde rerum, ea saepe?
            </p>
            <div className="flex mt-6 text-xl font-medium transition-all duration-500">
              <span className="underline underline-offset-6 text-emerald-700 dark:text-amber-500">Learn More</span>
              <ExternalLink className="w-6 h-6 ml-3 text-emerald-700 dark:text-amber-500 " />
            </div>
          </div>
          <div className="p-6 dark:bg-gray-700 transition-all duration-500 shadow rounded-xl bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-100 text-black cursor-pointer hover:scale-[1.02]">
            <Server className="w-8 h-8 text-emerald-700 dark:text-amber-500 " />
            <h1 className="text-xl font-semibold my-3 text-emerald-700 dark:text-amber-500">
              Cloud Computing and Hosting Service
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore iusto animi maxime numquam nostrum laboriosam officiis
              unde rerum, ea saepe?
            </p>
            <div className="flex mt-6 text-xl font-medium transition-all duration-500">
              <span className="underline underline-offset-6 text-emerald-700 dark:text-amber-500">Learn More</span>
              <ExternalLink className="w-6 h-6 ml-3 text-emerald-700 dark:text-amber-500 " />
            </div>
          </div>
          <div className="p-6 dark:bg-gray-700 transition-all duration-500 shadow rounded-xl bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 dark:text-gray-100 text-black cursor-pointer hover:scale-[1.02]">
            <Palette className="w-8 h-8 text-emerald-700 dark:text-amber-500 " />
            <h1 className="text-xl font-semibold my-3 text-emerald-700 dark:text-amber-500">UI/UX Design</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore iusto animi maxime numquam nostrum laboriosam officiis
              unde rerum, ea saepe?
            </p>
            <div className="flex mt-6 text-xl font-medium transition-all duration-500">
              <span className="underline underline-offset-6 text-emerald-700 dark:text-amber-500">Learn More</span>
              <ExternalLink className="w-6 h-6 ml-3 text-emerald-700 dark:text-amber-500 " />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
