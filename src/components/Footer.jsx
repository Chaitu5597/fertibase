// const Footer = () => {
//   return (
//     <footer className="bg-muted/30 py-12 border-t border-border/50">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//           <div>
//             <h3 className="text-xl font-bold mb-4 text-foreground">Fertibase</h3>
//             <p className="text-muted-foreground">
//               Revolutionizing agriculture with smart fertilizer management.
//             </p>
//           </div>
          
//           <div>
//             <h4 className="font-semibold mb-4 text-foreground">Product</h4>
//             <ul className="space-y-2 text-muted-foreground">
//               <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
//               <li><a href="#pricing" className="hover:text-primary transition-colors">Pricing</a></li>
//               <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
//             <ul className="space-y-2 text-muted-foreground">
//               <li><a href="#blog" className="hover:text-primary transition-colors">Blog</a></li>
//               <li><a href="#docs" className="hover:text-primary transition-colors">Documentation</a></li>
//               <li><a href="#support" className="hover:text-primary transition-colors">Support</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h4 className="font-semibold mb-4 text-foreground">Company</h4>
//             <ul className="space-y-2 text-muted-foreground">
//               <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
//               <li><a href="#careers" className="hover:text-primary transition-colors">Careers</a></li>
//               <li><a href="#privacy" className="hover:text-primary transition-colors">Privacy</a></li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="pt-8 border-t border-border/50 text-center text-muted-foreground">
//           <p>&copy; 2024 Fertibase. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// import { Facebook, Instagram, Twitter, Mail, Leaf } from "lucide-react";
// import { motion } from "framer-motion";

// export default function Footer() {
//   const socialLinks = [
//     { icon: <Facebook className="h-5 w-5" />, href: "#" },
//     { icon: <Instagram className="h-5 w-5" />, href: "#" },
//     { icon: <Twitter className="h-5 w-5" />, href: "#" },
//     { icon: <Mail className="h-5 w-5" />, href: "#" },
//   ];

//   return (
//     <footer className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-600 text-white pt-20 pb-10 overflow-hidden">
//       {/* Decorative Leaf Icons */}
//       <Leaf className="absolute top-6 left-10 text-white/10 h-16 w-16 rotate-12" />
//       <Leaf className="absolute bottom-8 right-16 text-white/10 h-20 w-20 -rotate-12" />

//       {/* Content */}
//       <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
//           {/* Brand Info */}
//           <div>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex items-center mb-4"
//             >
//               <Leaf className="h-8 w-8 text-white mr-2" />
//               <h3 className="text-2xl font-bold">Ferti</h3>
//             </motion.div>
//             <p className="text-white/80 leading-relaxed">
//               Empowering sustainable agriculture with organic, eco-friendly
//               solutions that rejuvenate your soil and maximize yield.
//             </p>

//             <div className="flex space-x-4 mt-5">
//               {socialLinks.map((s, i) => (
//                 <motion.a
//                   key={i}
//                   href={s.href}
//                   whileHover={{ scale: 1.2, y: -3 }}
//                   className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition"
//                 >
//                   {s.icon}
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           {/* Product Links */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4 border-l-4 border-white pl-3">
//               Products
//             </h4>
//             <ul className="space-y-2 text-white/80">
//               <li>
//                 <a
//                   href="#products"
//                   className="hover:text-white transition-colors"
//                 >
//                   Our Products
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#benefits"
//                   className="hover:text-white transition-colors"
//                 >
//                   Benefits
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#about"
//                   className="hover:text-white transition-colors"
//                 >
//                   About Us
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Resources */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4 border-l-4 border-white pl-3">
//               Resources
//             </h4>
//             <ul className="space-y-2 text-white/80">
//               <li>
//                 <a href="#" className="hover:text-white transition-colors">
//                   Blog
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white transition-colors">
//                   Documentation
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-white transition-colors">
//                   Support
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4 border-l-4 border-white pl-3">
//               Contact
//             </h4>
//             <ul className="space-y-3 text-white/80">
//               <li>📞 +91 98765 43210</li>
//               <li>📧 info@ferti.in</li>
//               <li>
//                 🌍 123 Green Fields, Agriculture Zone,
//                 <br />
//                 Punjab, India
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="border-t border-white/20 pt-6 text-center text-white/70 text-sm">
//           <p>
//             © {new Date().getFullYear()} Ferti. All rights reserved. | Designed
//             with ❤️ for a greener tomorrow.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }





// import { Facebook, Instagram, Twitter, Mail, Leaf } from "lucide-react";
// import { motion } from "framer-motion";

// export default function Footer() {
//   const socialLinks = [
//     { icon: <Facebook className="h-5 w-5" />, href: "#" },
//     { icon: <Instagram className="h-5 w-5" />, href: "#" },
//     { icon: <Twitter className="h-5 w-5" />, href: "#" },
//     { icon: <Mail className="h-5 w-5" />, href: "#" },
//   ];

//   return (
//     <footer className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-100 text-gray-800 pt-20 pb-10 overflow-hidden">
//       {/* Decorative Background Leafs */}
//       <Leaf className="absolute top-10 left-8 text-emerald-300/20 h-16 w-16 rotate-12" />
//       <Leaf className="absolute bottom-8 right-16 text-green-300/20 h-20 w-20 -rotate-12" />

//       <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
//           {/* Brand Section */}
//           <div>
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex items-center mb-4"
//             >
//               <Leaf className="h-8 w-8 text-emerald-600 mr-2" />
//               <h3 className="text-2xl font-bold text-emerald-700">Fertibase</h3>
//             </motion.div>
//             <p className="text-gray-600 leading-relaxed">
//               Empowering sustainable agriculture with organic, eco-friendly
//               solutions that rejuvenate your soil and maximize yield.
//             </p>

//             <div className="flex space-x-4 mt-5">
//               {socialLinks.map((s, i) => (
//                 <motion.a
//                   key={i}
//                   href={s.href}
//                   whileHover={{ scale: 1.2, y: -3 }}
//                   className="p-2 bg-white shadow-sm rounded-full hover:bg-emerald-100 transition"
//                 >
//                   {s.icon}
//                 </motion.a>
//               ))}
//             </div>
//           </div>

//           {/* Products */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4 border-l-4 border-emerald-400 pl-3 text-emerald-700">
//               Products
//             </h4>
//             <ul className="space-y-2 text-gray-700">
//               <li>
//                 <a href="#products" className="hover:text-emerald-700 transition">
//                   Our Products
//                 </a>
//               </li>
//               <li>
//                 <a href="#benefits" className="hover:text-emerald-700 transition">
//                   Benefits
//                 </a>
//               </li>
//               <li>
//                 <a href="#about" className="hover:text-emerald-700 transition">
//                   About Us
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Resources */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4 border-l-4 border-emerald-400 pl-3 text-emerald-700">
//               Resources
//             </h4>
//             <ul className="space-y-2 text-gray-700">
//               <li>
//                 <a href="#" className="hover:text-emerald-700 transition">
//                   Blog
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-emerald-700 transition">
//                   Documentation
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="hover:text-emerald-700 transition">
//                   Support
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4 border-l-4 border-emerald-400 pl-3 text-emerald-700">
//               Contact
//             </h4>
//             <ul className="space-y-3 text-gray-700">
//               <li>📞 +91 98765 43210</li>
//               <li>📧 info@ferti.in</li>
//               <li>
//                 🌍 123 Green Fields, Agriculture Zone,
//                 <br />
//                 Punjab, India
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="border-t border-emerald-200 pt-6 text-center text-gray-600 text-sm">
//           <p>
//             © {new Date().getFullYear()} <span className="font-semibold text-emerald-700">Fertibase</span>. 
//             All rights reserved. | Designed with 🌱 for a greener tomorrow.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }



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
