
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";
import LogoImage from "../assets/logo.jpg"; // <-- your logo image

export default function Footer() {
  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: "#" },
    { icon: <Instagram className="h-5 w-5" />, href: "#" },
    { icon: <Twitter className="h-5 w-5" />, href: "#" },
    { icon: <Mail className="h-5 w-5" />, href: "#" },
  ];

  return (
    <footer className="relative  text-gray-800 pt-20 pb-10 overflow-hidden" style={{backgroundColor:"#f7f7f7"}}>
      <div className="max-w-7xl mx-auto sm: relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section with Image */}
          <div>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center mb-4">
              <img src={LogoImage} alt="Fertibase Logo" className="w-2xl h-36 mr-44 object-contain"/>
              
            </motion.div>
            <p className="text-gray-600 leading-relaxed">
              Empowering sustainable agriculture with organic, eco-friendly
              solutions that rejuvenate your soil and maximize yield.
            </p>

            <div className="flex space-x-4 mt-5">
              {socialLinks.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="p-2 bg-gray-100 shadow-sm rounded-full hover:bg-emerald-100 transition"
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-l-4 border-emerald-400 pl-3 text-emerald-700">
              Products
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="#products" className="hover:text-emerald-700 transition">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-emerald-700 transition">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-emerald-700 transition">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-l-4 border-emerald-400 pl-3 text-emerald-700">
              Resources
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="#" className="hover:text-emerald-700 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-700 transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-700 transition">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-l-4 border-emerald-400 pl-3 text-emerald-700">
              Contact
            </h4>
            <ul className="space-y-3 text-gray-700">
              <li>📞 +91 98765 43210</li>
              <li>📧 info@ferti.in</li>
              <li>
                🌍 123 Green Fields, Agriculture Zone,
                <br />
                Punjab, India
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-6 text-center text-gray-600 text-sm">
          <p>
            © {new Date().getFullYear()} <span className="font-semibold text-emerald-700">Fertibase</span>. 
            All rights reserved. | Designed with 🌱 for a greener tomorrow.
          </p>
        </div>
      </div>
    </footer>
  );
}
