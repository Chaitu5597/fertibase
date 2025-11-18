
// import cloud from '../assets/cloud.png';
// export default function WordCloudSection() {
//   return (
//     <section className="relative w-full h-[420px] md:h-[520px] flex items-center justify-center overflow-hidden rounded-3xl shadow-lg my-10">

//       {/* Background Image */}
//       <img
//         src= {cloud}   // <-- change path here
//         alt="Product Word Cloud"
//         className="absolute inset-0 w-full h-full object-fit opacity-90"
//       />

//       {/* Overlay Gradient */}
//       <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-white/70"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-4">
//         <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-800 drop-shadow-sm">
//           Our Premium Product Range
//         </h1>

//         <p className="mt-4 max-w-2xl mx-auto text-lg text-emerald-700">
//           Trusted microbiological & nutrient solutions designed for modern agriculture.
//         </p>

//         <button
//           className="mt-6 px-6 py-3 bg-emerald-600 text-white rounded-full shadow-md hover:bg-emerald-700 transition"
//         >
//           Explore Products
//         </button>
//       </div>
//     </section>
//   );
// }











// import cloud from '../assets/cloud.png';

// export default function WordCloudSection() {
//   return (
//     <section className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center overflow-hidden ">

//       {/* Background Image — FIXED so full image shows */}
//       <img
//         src={cloud}
//         alt="Product Cloud"
//         className="absolute inset-0 w-full h-full object-contain md:object-cover scale-110 md:scale-100 opacity-95 animate-floating"
//       />

//       {/* Soft White Overlay */}
//       <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
//         <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-800 drop-shadow-lg">
//           Our Premium Product Range
//         </h1>

//         <p className="mt-4 text-lg md:text-xl text-emerald-700 font-medium drop-shadow-sm">
//           Trusted microbiological & nutrient solutions designed for modern agriculture.
//         </p>

//         <button className="mt-6 px-8 py-3 bg-emerald-700 text-white rounded-full shadow-lg hover:bg-emerald-800 transition-all duration-300">
//           Explore Products
//         </button>
//       </div>

//     </section>
//   );
// }



// import cloud from '../assets/cloud.png';

// export default function WordCloudSection() {
//   return (
//     <section className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center overflow-hidden px-4  ">
      
//       {/* Soft White Overlay */}
//       <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]"></div>

//       {/* Content: Image left, Text right */}
//       <div className="relative z-10 flex flex-col md:flex-row items-center max-w-6xl w-full gap-8">

//         {/* Image on Left */}
//         <div className="w-full md:w-1/2 flex justify-center md:justify-start">
//           <img
//             src={cloud}
//             alt="Product Cloud"
//             className="w-full h-auto object-contain scale-110 md:scale-100 animate-floating"
//           />
//         </div>

//         {/* Text on Right */}
//         <div className="w-full md:w-1/2 text-center md:text-left">
//           <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-800 drop-shadow-lg">
//             Our Premium Product Range
//           </h1>

//           <p className="mt-4 text-lg md:text-xl text-emerald-700 font-medium drop-shadow-sm">
//             Trusted microbiological & nutrient solutions designed for modern agriculture.
//           </p>

//           <button className="mt-6 px-8 py-3 bg-emerald-700 text-white rounded-full shadow-lg hover:bg-emerald-800 transition-all duration-300">
//             Explore Products
//           </button>
//         </div>

//       </div>

//     </section>
//   );
// }


// import cloud from '../assets/cloud.png';
// import { SectionWrapper } from './SectionWrapper';
// import { useNavigate } from "react-router-dom";

// export default function WordCloudSection() {
//     const navigate = useNavigate();
//   return (
//     <SectionWrapper id="products">
//       <div className="flex flex-col md:flex-row items-center gap-8">
//         {/* Image Left */}
//         <div className="w-full md:w-1/2 flex justify-center md:justify-start">
//           <img
//             src={cloud}
//             alt="Product Cloud"
//             className="w-full h-auto object-contain scale-110 md:scale-100 animate-floating"
//           />
//         </div>

//         {/* Text Right */}
//         <div className="w-full md:w-1/2 text-center md:text-left">
//           <h1 className="text-4xl md:text-6xl font-extrabold text-emerald-800 drop-shadow-lg">
//             Our Premium Product Range
//           </h1>

//           <p className="mt-4 text-lg md:text-xl text-emerald-700 font-medium drop-shadow-sm">
//             Trusted microbiological & nutrient solutions designed for modern agriculture.
//           </p>

//           <button
//           onClick={() => navigate("/Products")} 
//            className="mt-6 px-8 py-3 bg-emerald-700 text-white rounded-full shadow-lg hover:bg-emerald-800 transition-all duration-300">
//             Explore Products
//           </button>
//         </div>
//       </div>
//     </SectionWrapper>
//   );
// }





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
