"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A0A0A] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-3xl font-extrabold text-[#F90A12] transition-transform hover:scale-105">
            MORBO
          </Link>
          <div className="hidden md:flex space-x-6 items-center">
            <NavLinks />
          </div>
          <button
            className="md:hidden text-white hover:text-[#F90A12] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[#0A0A0A] border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLinks mobile />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ mobile }) => {
  const links = [
    { name: "Eventos", path: "Eventos" },
    { name: "Galería", path: "Galeria" }, // Usamos "galeria" sin tilde para evitar problemas en la URL
    { name: "Nosotros", path: "Nosotros" },
    { name: "Ubicación", path: "Ubicacion" },
    { name: "Reservas", path: "Reservas" },
  ];

  return (
    <>
      {links.map(({ name, path }) => (
        <Link
          key={name}
          href={`/${path}`}
          className={`block text-base font-medium text-white hover:text-[#F90A12] transition-all duration-300 ${
            mobile ? "py-2" : "hover:transform hover:translate-y-[-2px]"
          }`}
        >
          {name}
        </Link>
      ))}
      <Link
        href="/comprar-boletos"
        className={`block bg-[#F90A12] text-white px-6 py-2 rounded-full font-bold hover:bg-opacity-80 transition-all duration-300 ${
          mobile ? "mt-4" : "hover:transform hover:scale-105 hover:shadow-lg"
        }`}
      >
        Comprar Boletos
      </Link>
    </>
  );
};

export default Navbar;
