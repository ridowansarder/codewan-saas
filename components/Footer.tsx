import React from "react";
import { Braces, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 mt-8 bg-emerald-950">
      <div className="w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* first part */}
        <div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <Braces className="text-amber-400 h-6 w-6" />
            </div>
            <h1 className="text-emerald-50 text-xl sm:block hidden lg:text-2xl font-bold">
              Codewan
            </h1>
          </div>
          <p className="text-emerald-50 mt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
            ullam consequuntur voluptate eligendi, blanditiis ab quae maiores!
          </p>
          <div className="flex space-x-2 items-center mt-4">
            <Facebook className=" bg-blue-500 fill-white rounded-full text-white w-8 h-8 " />
            <Instagram className=" bg-pink-500 rounded-full text-white w-8 h-8 " />
            <Twitter className=" bg-blue-500 rounded-full text-white w-8 h-8 " />
            <Youtube className=" bg-red-500 rounded-full text-white w-8 h-8 " />
          </div>
        </div>
        {/* second part */}
        <div className="space-y-3">
          <h1 className="text-lg font-bold text-white">Company</h1>
          <p className="footer_link">About Us</p>
          <p className="footer_link">News & Press</p>
          <p className="footer_link">Our Customers</p>
          <p className="footer_link">Leadership</p>
          <p className="footer_link">Careers</p>
        </div>
        {/* third part */}
        <div className="space-y-3">
          <h1 className="text-lg font-bold text-white">Resources</h1>
          <p className="footer_link">Blog</p>
          <p className="footer_link">Webinar & Events</p>
          <p className="footer_link">Podcast</p>
          <p className="footer_link">E-book & Guides</p>
        </div>
        {/* fourth part */}
        <div className="space-y-6 text-white">
            <h1 className="text-lg font-bold ">Contact Us</h1>
            <div>
                <h2>Our Mobile Number</h2>
                <p className="text-amber-300 mt-2">+88017726759435398</p>
            </div>
            <div>
                <h2>Our Email Address</h2>
                <p className="text-amber-300">example@gmail.com</p>
            </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto my-8 bg-gray-700 h-[1px]"></div>
      <div className="text-center text-emerald-50">© {new Date().getFullYear()} Webdev. All rights reserved</div>
    </footer>
  );
};

export default Footer;
