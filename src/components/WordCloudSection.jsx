
import cloud from '../assets/cloud.png';
import { SectionWrapper } from './SectionWrapper';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function WordCloudSection() {
  const navigate = useNavigate();

  return (
    <SectionWrapper id="products">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Left */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src={cloud}
            alt="Product Cloud"
            className="w-full h-auto object-contain scale-110 md:scale-100 animate-floating"
          />
        </div>

        {/* Text Right */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-900">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-lime-500">Premium Product</span> Range
          </h1>

          <p className="mt-4 text-lg md:text-xl text-emerald-700 font-medium drop-shadow-sm">
            Trusted microbiological & nutrient solutions designed for modern agriculture.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/Products")}
            className="mt-6 px-8 py-4 bg-gradient-to-r from-green-600 to-lime-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore Products
          </motion.button>
        </div>
      </div>
    </SectionWrapper>
  );
}
