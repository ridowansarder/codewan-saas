"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1224 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1224, min: 764 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 764, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const reviewsList = [
  {
    id: 1,
    title: "Great Work!",
    image: "/c4.jpg",
    name: "Nafisa Jahan",
    role: "Economist",
  },
  {
    id: 2,
    title: "Nice Work!",
    image: "/c2.jpg",
    name: "Shakib Ahmed",
    role: "Graphic Designer",
  },
  {
    id: 3,
    title: "Amazing Work!",
    image: "/c1.jpg",
    name: "Mahi Iqbal",
    role: "UI/UX Designer",
  },
  {
    id: 4,
    title: "Awesome Work!",
    image: "/c3.jpg",
    name: "Jalal Uddin",
    role: "Software Developer",
  },
];

const Review = () => {
  return (
    <section id="services" className="py-8">
      <div className="w-[80%] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="uppercase font-bold">
            <h1 className="text-sm lg:text-xl text-emerald-700 dark:text-amber-400">
              TESTIMONIALS
            </h1>
            <h2 className="text-xl md:text-3xl">
              Trusted By Industry Leaders Clietns Testimonial
            </h2>
          </div>
          <div className="lg:ml-auto">
            <a
              href="#"
              className="p-4 text-lg dark:bg-amber-400 dark:hover:bg-amber-500 dark:text-black bg-emerald-800 hover:bg-emerald-700 text-emerald-50 rounded-full"
            >
              All Reviews
            </a>
          </div>
        </div>
        {/* slider */}
        <div className="mt-8">
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
          >
            {reviewsList.map((review) => (
              <div
                key={review.id}
                className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg mr-4 shadow-md"
              >
                <h1 className="text-xl lg:text-2xl font-bold mb-2">
                  {review.title}
                </h1>
                <div className="flex my-3">
                  <Star className="fill-yellow-400 text-yellow-400" />
                  <Star className="fill-yellow-400 text-yellow-400" />
                  <Star className="fill-yellow-400 text-yellow-400" />
                  <Star className="fill-yellow-400 text-yellow-400" />
                  <Star className="fill-yellow-400 text-yellow-400" />
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Consequatur officiis laudantium numquam aliquam eum veniam ad
                  sit. Excepturi, ex nisi.
                </p>
                <hr />
                <div className="flex justify-between items-center">
                  <div className="mt-4 flex space-x-3">
                    <Image
                      src={review.image}
                      alt={review.name}
                      height={50}
                      width={50}
                      className="rounded-full"
                    />
                    <div>
                      <h2 className="text-[1.2rem] font-semibold">
                        {review.name}
                      </h2>
                      <p className="text-lg">{review.role}</p>
                    </div>
                  </div>
                  <Image
                    src="/google.png"
                    alt="google"
                    height={100}
                    width={100}
                    className="hidden md:block"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Review;
