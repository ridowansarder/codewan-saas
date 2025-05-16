"use client";
import { Braces, Menu, X } from "lucide-react";
import { useState } from "react";
import { Navlinks } from "@/constant/constant";
import clsx from "clsx";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={'transition-all duration-200 h-16 bg-emerald-950 text-emerald-50 w-full z-50 fixed my-3'}
    >
      {/* desktop nav */}
      <div className="flex items-center justify-between h-full mx-auto w-[90%] xl:w-[80%]">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <Braces className="text-amber-400 h-6 w-6" />
          </div>
          <h1 className="text-xl sm:block lg:text-2xl font-bold">Codewan</h1>
        </div>
        <div className="hidden lg:flex items-center space-x-8">
          {Navlinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className="text-sm lg:text-base font-semibold hover:text-emerald-300 transition-all duration-200 hover:underline hover:underline-offset-6"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          <Button className="bg-amber-400 hover:bg-amber-600 text-[#002b23] font-semibold">
            Create account
          </Button>
        </div>

        {/* mobile nav */}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="lg:hidden p-2 text-emerald-50 z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        <div
          className={clsx(
            "fixed inset-0 bg-emerald-900 z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 lg:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {Navlinks.map((link) => (
              <a
                key={link.id}
                href={link.url}
                className="text-emerald-50 font-semibold transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
