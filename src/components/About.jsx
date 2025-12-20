

/* eslint-disable no-unused-vars */

import { Leaf, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { HERO_IMAGES } from "../config/images";

/* =======================
   STATIC DATA
======================= */

const ABOUT_CONTENT = {
  title: "Why Choose",
  highlight: "Fertibase?",
  description: `
    Fertibase provides biofertilizers that boost soil health and strengthen crop growth.
    Our innovative solutions are designed to bring life back to the soil, one microbe at a time,
    ensuring strong fields grow from a stronger foundation.
  `,
  
  cta: {
    label: "Learn More About Us",
    link: "#aboutus",
  },
};

const FEATURES = [
  "Scientifically driven microbial formulations that enhance soil health naturally",
  "Proven products that boost nutrient availability and improve crop performance",
  "Sustainable, residue-free solutions that support long-term soil fertility",
  "Farmer-focused innovations designed for all AGRO-CLIMATIC conditions",
];

/* =======================
   COMPONENT
======================= */

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-br from-green-50 via-white to-lime-50 overflow-hidden"
    >
      {/* Decorative Top Wave */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-20 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66 83.86c-58.22 7.74-117.22 12.39-176.44 14.17C574.12 104.51 342.62 79.64 120 27.35 81.77 18.48 40.32 9.46 0 0v120h1200V0c-66.67 27.44-133.33 54.88-214.34 83.86z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={HERO_IMAGES.about}
              alt="Organic Farming"
              className="w-full h-96 object-cover hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            {ABOUT_CONTENT.title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-500">
              {ABOUT_CONTENT.highlight}
            </span>
          </h2>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {ABOUT_CONTENT.description}
          </p>

          <ul className="space-y-5">
            {FEATURES.map((feature, index) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 bg-white/70 backdrop-blur-sm p-3 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <CheckCircle2 className="h-6 w-6 text-green-600" />
                <span className="text-gray-800 font-medium">{feature}</span>
              </motion.li>
            ))}
          </ul>

          <motion.a
            whileHover={{ scale: 1.05 }}
            href={ABOUT_CONTENT.cta.link}
            className="inline-block mt-10 px-8 py-4 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition"
          >
            {ABOUT_CONTENT.cta.label}
          </motion.a>
        </motion.div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
        <svg
          className="relative block w-full h-20 text-white"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66 83.86c-58.22 7.74-117.22 12.39-176.44 14.17C574.12 104.51 342.62 79.64 120 27.35 81.77 18.48 40.32 9.46 0 0v120h1200V0c-66.67 27.44-133.33 54.88-214.34 83.86z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  );
}



