import { Goal, ChartNoAxesColumn, Cpu } from "lucide-react";
import { Button } from "./ui/button";

const Softwares = () => {
  return (
    <section className="py-16">
      <div data-aos="fade-up" data-aos-anchor-placement="top-center" className="text-center">
        <p className="text-sm md:text-2xl uppercase text-emerald-600 dark:text-emerald-50 font-semibold">
          Softwares
        </p>
        <h1 className="text-2xl lg:text-4xl mt-3 font-bold dark:text-amber-400">
          Driving Change with Innovative <br /> Successful Softwares
        </h1>
      </div>
      <div className="w-[80%] mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="100" className="flex flex-col items-start space-y-3 my-8 sm:space-y-0 gap-6 bg-emerald-100 dark:bg-gray-800 p-6 rounded-lg">
          <Goal className="w-12 h-12 dark:text-amber-400" />
          <div className="flex-1">
            <h1 className="text-xl lg:text-2xl font-bold">Free Intregation</h1>
            <p className="mt-2 w-[70%] text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae nobis natus esse! Earum, inventore porro
            </p>
            <Button className="bg-emerald-700 dark:bg-amber-400 text-emerald-50 dark:text-black hover:bg-emerald-800 dark:hover:bg-amber-600 my-3">
              Learn More
            </Button>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="200" className="flex flex-col items-start space-y-3 my-8 sm:space-y-0 gap-6 bg-emerald-100 dark:bg-gray-800 p-6 rounded-lg">
          <ChartNoAxesColumn className="w-12 h-12 dark:text-amber-400" />
          <div className="flex-1">
            <h1 className="text-xl lg:text-2xl font-bold">
              Product Sales Software
            </h1>
            <p className="mt-2 w-[70%] text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae nobis natus esse! Earum, inventore porro
            </p>
            <Button className="bg-emerald-700 dark:bg-amber-400 text-emerald-50 dark:text-black hover:bg-emerald-800 dark:hover:bg-amber-600 my-3">
              Learn More
            </Button>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay="300" className="flex flex-col items-start space-y-3 my-8 sm:space-y-0 gap-6 bg-emerald-100 dark:bg-gray-800 p-6 rounded-lg">
          <Cpu className="w-12 h-12 dark:text-amber-400" />
          <div className="flex-1">
            <h1 className="text-xl lg:text-2xl font-bold">Best Marketing Software</h1>
            <p className="mt-2 w-[70%] text-lg">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repudiandae nobis natus esse! Earum, inventore porro
            </p>
            <Button className="bg-emerald-700 dark:bg-amber-400 text-emerald-50 dark:text-black hover:bg-emerald-800 dark:hover:bg-amber-600 my-3">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Softwares;
