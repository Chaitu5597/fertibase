
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/aboutus" },
    { name: "Products", path: "/products" },
    // { name: "Benefits", path: "/benefits" },
    { name: "Contact", path: "/contactus" },
    { name: "Our Services", path: "/services" },
    { name: "Career", path: "/CareerPage" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50  shadow-md transition-all duration-300" style={{backgroundColor:"#f7f7f7"}}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 pl-0  md:pr-1">
        
        {/* === FULL LOGO IMAGE === */}
        <Link to="/" onClick={closeMenu} className="flex items-center">
          <img
            src={logo}
            alt="FertiBase Logo"
            className="h-12 w-auto object-contain md:h-24"
          />
        </Link>

        {/* === DESKTOP MENU === */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium text-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`hover:text-green-600 transition-colors ${
                location.pathname === link.path ? "text-green-700 font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* === MOBILE TOGGLE === */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* === MOBILE MENU === */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="flex flex-col space-y-3 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={`text-gray-700 hover:text-green-600 transition-colors text-left ${
                  location.pathname === link.path ? "text-green-700 font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}





