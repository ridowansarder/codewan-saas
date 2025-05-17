import { Calendar, ExternalLink, User } from "lucide-react";
import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <section className="py-16">
      <div className="text-center">
        <p className="text-sm md:text-2xl uppercase text-emerald-600 dark:text-emerald-50 font-semibold">
          Latest Blogs
        </p>
        <h1 className="text-2xl lg:text-4xl mt-3 font-bold dark:text-amber-400">
          Read Our Latest Insights from <br />
          Our Blog Posts
        </h1>
      </div>
      <div className="w-[80%] mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        <div>
          <Image
            src="/b1.jpg"
            alt="Blog"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <div className="w-[90%] mx-auto bg-emerald-700 text-white dark:text-gray-100 dark:bg-gray-700 rounded-lg relative z-10 mt-[-3rem] p-6">
            <div className="flex items-center space-x-3">
              <User />
              <h3 className="text-lg font-semibold">By Admin</h3>
            </div>
            <h1 className="font-bold text-xl my-3">
              Expert Advice for Growing Your Digital Presence
            </h1>
            <hr />
            <div className="flex justify-between items-center mt-3">
              <div className="flex space-x-2">
                <Calendar className="w-6 h-6" />
                <p>17/05/2025</p>
              </div>
              <ExternalLink className="w-6 h-6 cursor-pointer text-gray-200" />
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/b2.jpg"
            alt="Blog"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <div className="w-[90%] mx-auto bg-emerald-700 text-white dark:text-gray-100 dark:bg-gray-700 rounded-lg relative z-10 mt-[-3rem] p-6">
            <div className="flex items-center space-x-3">
              <User />
              <h3 className="text-lg font-semibold">By Admin</h3>
            </div>
            <h1 className="font-bold text-xl my-3">
              Data-Driven Strategies and Case Studies Success
            </h1>
            <hr />
            <div className="flex justify-between items-center mt-3">
              <div className="flex space-x-2">
                <Calendar className="w-6 h-6" />
                <p>17/05/2025</p>
              </div>
              <ExternalLink className="w-6 h-6 cursor-pointer text-gray-200" />
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/b3.jpg"
            alt="Blog"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <div className="w-[90%] mx-auto bg-emerald-700 text-white dark:text-gray-100 dark:bg-gray-700 rounded-lg relative z-10 mt-[-3rem] p-6">
            <div className="flex items-center space-x-3">
              <User />
              <h3 className="text-lg font-semibold">By Admin</h3>
            </div>
            <h1 className="font-bold text-xl my-3">
              The Complete SEO Blog for Digital Success
            </h1>
            <hr />
            <div className="flex justify-between items-center mt-3">
              <div className="flex space-x-2">
                <Calendar className="w-6 h-6" />
                <p>17/05/2025</p>
              </div>
              <ExternalLink className="w-6 h-6 cursor-pointer text-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
