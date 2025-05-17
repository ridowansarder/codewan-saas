import {
  SquareDashedBottomCode,
  SquareChartGantt,
  Headset,
} from "lucide-react";
import Image from "next/image";

const WhyChoose = () => {
  return (
    <section className="py-16">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="">
          <p className="text-sm md:text-2xl uppercase text-emerald-600 dark:text-emerald-50 font-semibold">
            Why Choose Us?
          </p>
          <h1 className="text-2xl lg:text-4xl mt-3 font-bold dark:text-amber-400">
            We build fast, scalable, and beautiful apps that help startups and
            enterprises move forward—faster.
          </h1>
          <div className="my-8 bg-gray-200 dark:bg-gray-700 w-full h-[1px]"></div>
          <div className="sm:flex space-y-3 my-8 sm:space-y-0 gap-6 items-center">
            <SquareDashedBottomCode className="w-16 h-16 outline-2 outline-gray-200 dark:outline-gray-700 p-3 rounded-full text-emerald-800 dark:text-amber-500" />
            <div className="flex-1">
              <h1 className="text-xl font-bold text-emerald-800 dark:text-amber-500">
                Free Intregation
              </h1>
              <p className="mt-2 w-[70%]">
                Easily connect with your existing tools and services at no extra
                cost
              </p>
            </div>
          </div>
          <div className="sm:flex space-y-3 my-8 sm:space-y-0 gap-6 items-center">
            <SquareChartGantt className="w-16 h-16 outline-2 outline-gray-200 dark:outline-gray-700 p-3 rounded-full text-emerald-800 dark:text-amber-500" />
            <div className="flex-1">
              <h1 className="text-xl font-bold text-emerald-800 dark:text-amber-500">
                Premium Resources
              </h1>
              <p className="mt-2 w-[70%]">
                Get access to top-tier design systems, code libraries, and
                expert support
              </p>
            </div>
          </div>
          <div className="sm:flex space-y-3 my-8 sm:space-y-0 gap-6 items-center">
            <Headset className="w-16 h-16 outline-2 outline-gray-200 dark:outline-gray-700 p-3 rounded-full text-emerald-800 dark:text-amber-500" />
            <div className="flex-1">
              <h1 className="text-xl font-bold text-emerald-800 dark:text-amber-500">
                Unlimited Supports
              </h1>
              <p className="mt-2 w-[70%]">
                Enjoy 24/7 support with no hidden fees or limitations
              </p>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-anchor-placement="top-center" className="lg:ml-auto">
          <Image
            src="/hero.jpg"
            alt="Why Choose"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
