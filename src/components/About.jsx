// import { Leaf } from 'lucide-react';

// export default function About() {
//   const features = [
//     '100% Organic & Eco-Friendly',
//     'Enhances Soil Fertility Long-Term',
//     'Suitable for All Crops & Climates',
//     'Certified by Ministry of Agriculture'
//   ];

//   return (
//     <section id="about" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <div>
//             <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Ferti?</h2>
//             <p className="text-lg text-gray-600 mb-6">
//               For over 15 years, Ferti has been the trusted partner of farmers across India. 
//               Our 100% organic fertilizers deliver up to <span className="text-primary font-bold">35% higher yields</span>.
//             </p>
//             <ul className="space-y-4">
//               {features.map((item) => (
//                 <li key={item} className="flex items-start">
//                   <Leaf className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-1" />
//                   <span className="text-gray-700">{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96"></div>
//         </div>
//       </div>
//     </section>
//   );
// }




import { Leaf, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const features = [
    "100% Organic & Eco-Friendly",
    "Enhances Soil Fertility Long-Term",
    "Suitable for All Crops & Climates",
    "Certified by Ministry of Agriculture",
  ];

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-br from-green-50 via-white to-lime-50 overflow-hidden"
    >
      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-20 text-white"
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

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1606741965326-7ab8e1b1f2a4?auto=format&fit=crop&w=800&q=80"
              alt="Organic Farming"
              className="w-full h-96 object-cover transform hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
          </div>

          <div className="absolute -bottom-6 -left-6 bg-white shadow-lg rounded-2xl px-6 py-4 flex items-center gap-3">
            <Leaf className="h-8 w-8 text-green-500" />
            <div>
              <p className="text-sm text-gray-500">Serving Farmers for</p>
              <p className="text-xl font-bold text-green-700">15+ Years</p>
            </div>
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-500">
              Fertile base 
            </span>
          </h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            For over <span className="font-semibold text-green-700">15 years</span>, Ferti has
            empowered farmers across India to grow stronger crops and healthier
            yields — the natural way. Our 100% organic fertilizers improve soil
            vitality and boost productivity by up to{" "}
            <span className="font-bold text-green-600">35% sustainably</span>.
          </p>

          <ul className="space-y-5">
            {features.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-white/70 backdrop-blur-sm p-3 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{item}</span>
              </motion.li>
            ))}
          </ul>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#contact"
            className="inline-block mt-10 px-8 py-4 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition"
          >
            Learn More About Us
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-20 text-white"
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
  );
}
