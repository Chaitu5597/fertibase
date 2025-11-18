// import { Leaf, Menu } from 'lucide-react';
// import { useState } from 'react';
// import MobileMenu from './MobileMenu';

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const navLinks = ['Home', 'About', 'Products', 'Benefits', 'Contact'];

//   return (
//     <nav className="fixed top-0 w-full bg-white shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center">
//             <Leaf className="h-8 w-8 text-primary mr-2" />
//             <span className="text-2xl font-bold text-primary">Ferti</span>
//           </div>

//           <div className="hidden md:flex space-x-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link}
//                 href={`#${link.toLowerCase()}`}
//                 className="text-gray-700 hover:text-primary font-medium transition"
//               >
//                 {link}
//               </a>
//             ))}
//           </div>

//           <button
//             onClick={() => setMobileMenuOpen(true)}
//             className="md:hidden"
//           >
//             <Menu className="h-6 w-6" />
//           </button>
//         </div>
//       </div>

//       <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
//     </nav>
//   );
// }


// import { Leaf, Menu } from 'lucide-react';
// import { useState } from 'react';
// import MobileMenu from './MobileMenu';

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const navLinks = ['Home', 'About', 'Products', 'Benefits', 'Contact'];

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id.toLowerCase());
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <nav className="fixed top-0 w-full bg-white shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center">
//             <Leaf className="h-8 w-8 text-primary mr-2" />
//             <span className="text-2xl font-bold text-primary">Ferti</span>
//           </div>

//           <div className="hidden md:flex space-x-8">
//             {navLinks.map((link) => (
//               <button
//                 key={link}
//                 onClick={() => scrollToSection(link)}
//                 className="text-gray-700 hover:text-primary font-medium transition"
//               >
//                 {link}
//               </button>
//             ))}
//           </div>

//           <button
//             onClick={() => setMobileMenuOpen(true)}
//             className="md:hidden"
//           >
//             <Menu className="h-6 w-6" />
//           </button>
//         </div>
//       </div>

//       <MobileMenu
//         isOpen={mobileMenuOpen}
//         onClose={() => setMobileMenuOpen(false)}
//         scrollToSection={scrollToSection} // Pass handler to mobile menu
//       />
//     </nav>
//   );
// }



// import { Leaf, Menu } from 'lucide-react';
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import MobileMenu from './MobileMenu';

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   const navLinks = [
//     { name: 'Home', type: 'scroll', target: 'hero' },       // scroll on home page
//     { name: 'About', type: 'scroll', target: 'about' },     // scroll on home page
//     { name: 'Products', type: 'route', path: '/products' }, // navigate to page
//     { name: 'Benefits', type: 'scroll', target: 'benefits' },
//     { name: 'Contact', type: 'scroll', target: 'contact' },
//   ];

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id.toLowerCase());
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const handleClick = (link) => {
//     if (link.type === 'route') {
//       navigate(link.path);
//     } else if (link.type === 'scroll') {
//       scrollToSection(link.target);
//     }
//     setMobileMenuOpen(false); // close mobile menu on click
//   };

//   return (
//     <nav className="fixed top-0 w-full bg-white shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center">
//             <Leaf className="h-8 w-8 text-primary mr-2" />
//             <span className="text-2xl font-bold text-primary">Ferti</span>
//           </div>

//           <div className="hidden md:flex space-x-8">
//             {navLinks.map((link) => (
//               <button
//                 key={link.name}
//                 onClick={() => handleClick(link)}
//                 className="text-gray-700 hover:text-primary font-medium transition"
//               >
//                 {link.name}
//               </button>
//             ))}
//           </div>

//           <button onClick={() => setMobileMenuOpen(true)} className="md:hidden">
//             <Menu className="h-6 w-6" />
//           </button>
//         </div>
//       </div>

//       <MobileMenu
//         isOpen={mobileMenuOpen}
//         onClose={() => setMobileMenuOpen(false)}
//         handleLinkClick={handleClick} // Pass handler to mobile menu
//       />
//     </nav>
//   );
// }


// import { Leaf, Menu } from 'lucide-react';
// import { useState, useEffect } from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';
// import MobileMenu from './MobileMenu';

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const navLinks = [
//     { name: 'Home', type: 'scroll', target: 'hero' },
//     { name: 'About', type: 'scroll', target: 'about' },
//     { name: 'Products', type: 'route', path: '/products' },
//     { name: 'Benefits', type: 'scroll', target: 'benefits' },
//     { name: 'Contact', type: 'scroll', target: 'contact' },
//   ];

//   // Function to scroll to section
//   const scrollToSection = (id) => {
//     const element = document.getElementById(id.toLowerCase());
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   // Handle navbar clicks
//   const handleClick = (link) => {
//     if (link.type === 'route') {
//       navigate(link.path);
//     } else if (link.type === 'scroll') {
//       if (window.location.pathname !== '/') {
//         // Navigate to home page and pass scroll target via state
//         navigate('/', { state: { scrollTo: link.target } });
//       } else {
//         scrollToSection(link.target);
//       }
//     }
//     setMobileMenuOpen(false);
//   };

//   // Scroll to section if coming from another page
//   useEffect(() => {
//     if (location.pathname === '/' && location.state?.scrollTo) {
//       scrollToSection(location.state.scrollTo);
//     }
//   }, [location]);

//   return (
//     <nav className="fixed top-0 w-full bg-white shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           <div className="flex items-center">
//             <Leaf className="h-8 w-8 text-primary mr-2" />
//             <span className="text-2xl font-bold text-primary">Ferti</span>
//           </div>

//           <div className="hidden md:flex space-x-8">
//             {navLinks.map((link) => (
//               <button
//                 key={link.name}
//                 onClick={() => handleClick(link)}
//                 className="text-gray-700 hover:text-primary font-medium transition"
//               >
//                 {link.name}
//               </button>
//             ))}
//           </div>

//           <button
//             onClick={() => setMobileMenuOpen(true)}
//             className="md:hidden"
//           >
//             <Menu className="h-6 w-6" />
//           </button>
//         </div>
//       </div>

//       <MobileMenu
//         isOpen={mobileMenuOpen}
//         onClose={() => setMobileMenuOpen(false)}
//         handleLinkClick={handleClick}
//       />
//     </nav>
//   );
// }




// import { Leaf, Menu } from "lucide-react";
// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import MobileMenu from "./MobileMenu";
// import { motion, AnimatePresence } from "framer-motion";

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", type: "scroll", target: "hero" },
//     { name: "About", type: "scroll", target: "about" },
//     { name: "Products", type: "route", path: "/products" },
//     { name: "Benefits", type: "scroll", target: "benefits" },
//     { name: "Contact", type: "scroll", target: "contact" },
//   ];

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id.toLowerCase());
//     if (element) element.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleClick = (link) => {
//     if (link.type === "route") {
//       navigate(link.path);
//     } else if (link.type === "scroll") {
//       if (window.location.pathname !== "/") {
//         navigate("/", { state: { scrollTo: link.target } });
//       } else {
//         scrollToSection(link.target);
//       }
//     }
//     setMobileMenuOpen(false);
//   };

//   // Detect scrolling to add background blur
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 30);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Scroll to section if coming from another page
//   useEffect(() => {
//     if (location.pathname === "/" && location.state?.scrollTo) {
//       scrollToSection(location.state.scrollTo);
//     }
//   }, [location]);

//   return (
//     <motion.nav
//       initial={{ y: -80 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6 }}
//       className={`fixed top-0 w-full z-50 transition-all duration-500 ${
//         scrolled
//           ? "backdrop-blur-md bg-white/70 shadow-md"
//           : "bg-transparent text-white"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="flex items-center cursor-pointer"
//             onClick={() => navigate("/")}
//           >
//             <Leaf
//               className={`h-8 w-8 mr-2 ${
//                 scrolled ? "text-green-700" : "text-white"
//               }`}
//             />
//             <span
//               className={`text-2xl font-extrabold ${
//                 scrolled ? "text-green-700" : "text-white"
//               }`}
//             >
//               Ferti
//             </span>
//           </motion.div>

//           {/* Desktop Links */}
//           <div className="hidden md:flex space-x-8">
//             {navLinks.map((link) => {
//               const isActive =
//                 location.pathname === link.path ||
//                 (link.type === "scroll" &&
//                   location.state?.scrollTo === link.target);
//               return (
//                 <motion.button
//                   key={link.name}
//                   onClick={() => handleClick(link)}
//                   whileHover={{ scale: 1.05 }}
//                   className={`relative font-medium transition-colors ${
//                     scrolled
//                       ? "text-gray-800 hover:text-green-700"
//                       : "text-white hover:text-green-300"
//                   }`}
//                 >
//                   {link.name}
//                   {isActive && (
//                     <motion.span
//                       layoutId="underline"
//                       className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-green-600"
//                     />
//                   )}
//                 </motion.button>
//               );
//             })}
//           </div>

//           {/* Mobile Menu Icon */}
//           <button
//             onClick={() => setMobileMenuOpen(true)}
//             className="md:hidden focus:outline-none"
//           >
//             <Menu
//               className={`h-7 w-7 ${
//                 scrolled ? "text-green-700" : "text-white"
//               }`}
//             />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <MobileMenu
//             isOpen={mobileMenuOpen}
//             onClose={() => setMobileMenuOpen(false)}
//             handleLinkClick={handleClick}
//           />
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }


// import { Menu } from "lucide-react";
// import { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import MobileMenu from "./MobileMenu";
// import { motion, AnimatePresence } from "framer-motion";

// // Replace with your actual logo path
// import  logoGreen from "../assets/logo.png";   // For transparent navbar
// import  logoWhite from "../assets/imagee.jpg";     // For scrolled navbar

// export default function Navbar() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const navLinks = [
//     { name: "Home", type: "scroll", target: "hero" },
//     { name: "About", type: "scroll", target: "about" },
//     { name: "Products", type: "route", path: "/products" },
//     { name: "Benefits", type: "scroll", target: "benefits" },
//     { name: "Contact", type: "scroll", target: "contact" },
//   ];

//   const scrollToSection = (id) => {
//     const element = document.getElementById(id.toLowerCase());
//     if (element) element.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleClick = (link) => {
//     if (link.type === "route") {
//       navigate(link.path);
//     } else if (link.type === "scroll") {
//       if (window.location.pathname !== "/") {
//         navigate("/", { state: { scrollTo: link.target } });
//       } else {
//         scrollToSection(link.target);
//       }
//     }
//     setMobileMenuOpen(false);
//   };

//   // Detect scroll for background blur + logo switch
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 30);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Scroll to section on route change
//   useEffect(() => {
//     if (location.pathname === "/" && location.state?.scrollTo) {
//       scrollToSection(location.state.scrollTo);
//     }
//   }, [location]);

//   return (
//     <motion.nav
//       initial={{ y: -80 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6 }}
//       className={`fixed top-0 w-full z-50 transition-all duration-500 ${
//         scrolled
//           ? "backdrop-blur-md bg-white shadow-md"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* === IMAGE LOGO === */}
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="flex items-center cursor-pointer"
//             onClick={() => navigate("/")}
//           >
//             <img
//               src={scrolled ? logoGreen : logoWhite}
//               alt="Fertibase Logo"
//               className="h-10 w-auto object-contain"
//             />
//           </motion.div>

//           {/* Desktop Links */}
//           <div className="hidden md:flex space-x-8">
//             {navLinks.map((link) => {
//               const isActive =
//                 location.pathname === link.path ||
//                 (link.type === "scroll" &&
//                   location.state?.scrollTo === link.target);

//               return (
//                 <motion.button
//                   key={link.name}
//                   onClick={() => handleClick(link)}
//                   whileHover={{ scale: 1.05 }}
//                   className={`relative font-medium transition-colors ${
//                     scrolled
//                       ? "text-white hover:text-green-700"
//                       : "text-white hover:text-green-300"
//                   }`}
//                 >
//                   {link.name}
//                   {isActive && (
//                     <motion.span
//                       layoutId="underline"
//                       className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-green-600"
//                     />
//                   )}
//                 </motion.button>
//               );
//             })}
//           </div>

//           {/* Mobile Menu Icon */}
//           <button
//             onClick={() => setMobileMenuOpen(true)}
//             className="md:hidden focus:outline-none"
//           >
//             <Menu
//               className={`h-7 w-7 ${
//                 scrolled ? "text-green-700" : "text-white"
//               }`}
//             />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <MobileMenu
//             isOpen={mobileMenuOpen}
//             onClose={() => setMobileMenuOpen(false)}
//             handleLinkClick={handleClick}
//           />
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// }



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
    { name: "Benefits", path: "/benefits" },
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







// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   // Scroll detection
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 30);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/aboutus" },
//     { name: "Products", path: "/products" },
//     { name: "Benefits", path: "/benefits" },
//     { name: "Contact", path: "/Contactus" },
//     { name: "Our Services", path: "/Services" },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 md:px-8">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2">
//           <img
//             src="/fertibase-logo.png"
//             alt="FertiBase Logo"
//             className="w-9 h-9 object-contain"
//           />
//           <span className="text-2xl font-bold text-green-700">FertiBase</span>
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               to={link.path}
//               className="hover:text-green-600 transition-colors"
//             >
//               {link.name}
//             </Link>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-gray-800"
//           aria-label="Toggle Menu"
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
//           <div className="flex flex-col space-y-3 px-4 py-4">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 onClick={() => setIsOpen(false)}
//                 className="text-gray-700 hover:text-green-600 transition-colors"
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }



