// import { ChevronRight } from 'lucide-react';

// export default function Hero() {
//   return (
//     <section id="home" className="pt-16 bg-gradient-to-br from-green-50 to-emerald-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
//         <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
//           Grow Stronger,<br />Harvest Better
//         </h1>
//         <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
//           Premium organic fertilizers that nourish your soil and maximize your yield – naturally.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <a href="#products" className="bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-secondary transition flex items-center justify-center">
//             Explore Products <ChevronRight className="ml-2 h-5 w-5" />
//           </a>
//           <a href="#contact" className="border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold hover:bg-primary hover:text-white transition">
//             Get a Quote
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }



// import { ChevronRight } from "lucide-react";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative pt-16 bg-gray-100"
//       style={{
//         backgroundImage:
//           "url('/images/hero-bg.jpg')", // Replace with your creative background
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/30"></div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
//         <h1 className="text-5xl md:text-6xl font-serif font-bold text-white drop-shadow-lg mb-6">
//           Grow Stronger, <br /> Harvest Better
//         </h1>
//         <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md">
//           Premium organic fertilizers that nourish your soil and maximize your yield – naturally.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-4 justify-center">
//           <a
//             href="#products"
//             className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition flex items-center justify-center shadow-lg"
//           >
//             Explore Products <ChevronRight className="ml-2 h-5 w-5" />
//           </a>
//           <a
//             href="#contact"
//             className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-600 transition shadow-lg"
//           >
//             Get a Quote
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }








// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";
// import heroImage from "@/assets/hero-bg.jpg";

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
//       {/* Background Image */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: `url(${heroImage})` }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background"></div>
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 py-20 text-center">
//         <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
//           Fertibase
//         </h1>
//         <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto animate-fade-in-delay">
//           Revolutionary Fertilizer Management for Modern Agriculture
//         </p>
//         <p className="text-lg mb-12 text-foreground/80 max-w-2xl mx-auto animate-fade-in-delay">
//           Optimize your crop yields with data-driven fertilizer recommendations, 
//           real-time soil analysis, and precision agriculture technology.
//         </p>
//         <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay">
//           <Button size="lg" variant="hero" className="text-lg px-8">
//             Get Started <ArrowRight className="ml-2 h-5 w-5" />
//           </Button>
//           <Button size="lg" variant="outline" className="text-lg px-8">
//             Learn More
//           </Button>
//         </div>
//       </div>

//       {/* Decorative Elements */}
//       <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
//     </section>
//   );
// };

// export default Hero;







// import { ChevronRight, Leaf, Sprout } from "lucide-react";
// import { motion } from "framer-motion";
// import Contact from "../components/Contact";
// import About from "../components/About";


// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative bg-gradient-to-br from-green-100 via-white to-green-50 overflow-hidden"
//     >
      
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1950&q=80')",
//         }}
//       ></div>

//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-40 text-center">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-xl">
//             Nurture the Soil,  
//             <br />
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-lime-300">
//               Grow the Future
//             </span>
//           </h1>

//           <p className="text-lg md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed">
//             Experience the power of nature with our eco-friendly biofertilizers.  
//             Healthier soil, stronger roots, and sustainable harvests — all naturally.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <motion.a
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//               href="#products"
//               className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-lime-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all"
//             >
//               <Leaf className="mr-2 h-5 w-5" />
//               Explore Products <ChevronRight className="ml-2 h-5 w-5" />
//             </motion.a>

//             <motion.a
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.98 }}
//               href="#contact"
//               className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-700 transition-all shadow-lg"
//             >
//               <Sprout className="mr-2 h-5 w-5" />
//               Get a Quote
//             </motion.a>
//           </div>
//         </motion.div>

//         {/* Floating Animated Leaves */}
//         {/* <motion.img
//           src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
//           alt="Leaf"
//           className="absolute w-10 bottom-10 left-16 opacity-60"
//           animate={{ y: [0, -10, 0] }}
//           transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
//         />
//         <motion.img
//           src="https://cdn-icons-png.flaticon.com/512/616/616490.png"
//           alt="Leaf"
//           className="absolute w-8 top-20 right-20 opacity-50"
//           animate={{ y: [0, 15, 0] }}
//           transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
//         /> */}
//       </div>

//       {/* Bottom Wave Divider */}
//       <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
//         <svg
//           className="relative block w-full h-24 text-white"
//           xmlns="http://www.w3.org/2000/svg"
//           preserveAspectRatio="none"
//           viewBox="0 0 1200 120"
//         >
//           <path
//             d="M985.66 83.86c-58.22 7.74-117.22 12.39-176.44 14.17C574.12 104.51 342.62 79.64 120 27.35 81.77 18.48 40.32 9.46 0 0v120h1200V0c-66.67 27.44-133.33 54.88-214.34 83.86z"
//             fill="currentColor"
//           ></path>
//         </svg>
//       </div>
   
//       <div>
//         <About />
//         <Contact />
      
//       </div>
//     </section>
//   );
// }



import { ChevronRight, Leaf, Sprout } from "lucide-react";
import { motion } from "framer-motion";
import Contact from "../components/Contact";
import About from "../components/About";
import { div } from "framer-motion/client";
import WordCloudSection from "./WordCloudSection";

export default function Hero() {
  return (
    <div>

    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      {/* ✅ Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1950&q=80')",
        }}
      ></div>

      {/* ✅ Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>

      {/* ✅ Content */}
      <div className="relative z-10 text-center px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Nurture the Soil,  
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-lime-300">
              Grow the Future
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Experience the power of nature with our eco-friendly biofertilizers.  
            Healthier soil, stronger roots, and sustainable harvests — all naturally.
          </p>

          {/* ✅ Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#products"
              className="inline-flex items-center justify-center bg-gradient-to-r from-green-500 to-lime-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl transition-all"
            >
              <Leaf className="mr-2 h-5 w-5" />
              Explore Products <ChevronRight className="ml-2 h-5 w-5" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#contact"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-700 transition-all shadow-lg"
            >
              <Sprout className="mr-2 h-5 w-5" />
              Get a Quote
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* ✅ Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-20">
        <svg
          className="relative block w-full h-24 text-green-100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M985.66 83.86c-58.22 7.74-117.22 12.39-176.44 14.17C574.12 104.51 342.62 79.64 120 27.35 81.77 18.48 40.32 9.46 0 0v120h1200V0c-66.67 27.44-133.33 54.88-214.34 83.86z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

    </section>
      {/* ✅ Next Sections */}
      <div className="relative z-30 w-full bg-white">
        <About />
        <WordCloudSection/>
        <Contact />
      </div>

        </div>

  );
}
