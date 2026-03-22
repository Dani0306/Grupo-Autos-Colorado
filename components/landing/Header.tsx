"use client";

import { Menu, X } from "lucide-react";
import Button from "../shared/Button";
import Logo from "../shared/Logo";
import { useEffect, useState } from "react";
import { useInviewCustom } from "@/hooks/shared/useInViewCustom";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const { ref, inView } = useInviewCustom();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        ref={ref}
        className={`${isScrolled && "bg-[#080808]"} transition-colors duration-500 fixed top-0 left-0 w-full z-50 flex items-center py-6 justify-between px-4 lg:px-8 opacity-0 ${inView && "fade-in"}`}
      >
        <Logo />

        <div className="hidden md:inline">
          <ul className="flex space-x-6  text-foreground text-xs font-semibold">
            <li className="cursor-pointer hover:scale-105 transition-all duration-200">
              INICIO
            </li>
            <li className="cursor-pointer hover:scale-105 transition-all duration-200">
              VEHICULOS
            </li>
            <li className="cursor-pointer hover:scale-105 transition-all duration-200">
              VENDER MI CARRO
            </li>
            <li className="cursor-pointer hover:scale-105 transition-all duration-200">
              NOSOTROS
            </li>
            <li className="cursor-pointer hover:scale-105 transition-all duration-200">
              CONTACTO
            </li>
          </ul>
        </div>
        <div className="cursor-pointer hidden md:block">
          <Button text="Contactar" fill />
        </div>

        <span className="text-2xl font-bold text-gold md:hidden">
          G<span className="text-foreground">A</span>C
        </span>
        <button
          onClick={() => setIsOpen(true)}
          className="cursor-pointer md:hidden p-2"
        >
          <Menu className="text-gold" size={24} />
        </button>
      </nav>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 ${isOpen ? " translate-x-0" : "translate-x-full"}`}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-72 bg-[#1c1c1c] shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Logo />
          <button
            className="cursor-pointer text-gold"
            onClick={() => setIsOpen(false)}
          >
            <X size={22} />
          </button>
        </div>

        <ul className="flex flex-col text-foreground text-xs font-semibold space-y-6 p-6">
          <li className="cursor-pointer hover:scale-105 transition-all duration-200">
            INICIO
          </li>
          <li className="cursor-pointer hover:scale-105 transition-all duration-200">
            VEHICULOS
          </li>
          <li className="cursor-pointer hover:scale-105 transition-all duration-200">
            VENDER MI CARRO
          </li>
          <li className="cursor-pointer hover:scale-105 transition-all duration-200">
            NOSOTROS
          </li>
          <li className="cursor-pointer hover:scale-105 transition-all duration-200">
            CONTACTO
          </li>
        </ul>
        <Button className="mx-auto w-[85%]" text="Contactar" fill />
      </div>
    </header>
  );
};

export default Header;
