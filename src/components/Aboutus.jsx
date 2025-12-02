// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// export default function Aboutus() {
//   return (
//     <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-emerald-100 to-white text-gray-800">
//       {/* Header Section */}
//       <div className="max-w-7xl mx-auto px-6 text-center mb-16">
//         <motion.h1
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-5xl md:text-6xl font-bold mb-4 text-emerald-700"
//         >
//           Growing the Future of Agriculture
//         </motion.h1>
//         <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
//           Innovative solutions for sustainable farming.
//         </p>
//       </div>

//       {/* Stats Section */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 px-6">
//         {[
//           { num: ">18", label: "States", desc: "FertiBase operates in more than 18 States." },
//           { num: "400+", label: "Families", desc: "More than 400+ families work for FertiBase." },
//           { num: "1,00,000+", label: "Acres", desc: "FertiBase transformed over 1L acres of farmland." },
//         ].map((item, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6, delay: index * 0.2 }}
//             viewport={{ once: true }}
//             className="bg-white/80 backdrop-blur-md shadow-md rounded-2xl p-8 text-center hover:shadow-xl transition-all"
//           >
//             <h2 className="text-4xl font-bold text-emerald-600 mb-2">{item.num}</h2>
//             <h3 className="text-xl font-semibold mb-2">{item.label}</h3>
//             <p className="text-gray-600">{item.desc}</p>
//           </motion.div>
//         ))}
//       </div>

//       {/* Vision & Mission */}
//       <div className="max-w-6xl mx-auto px-6 mb-24 grid md:grid-cols-2 gap-12">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="bg-white/80 rounded-2xl shadow-lg p-8"
//         >
//           <h2 className="text-3xl font-bold text-emerald-700 mb-4">Our Vision</h2>
//           <p className="text-gray-700 leading-relaxed">
//             To lead global sustainable agriculture by innovating biofertilizers and organic inputs that enhance soil health, crop quality, and eco-friendly practices across farming, poultry, and livestock industries.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="bg-white/80 rounded-2xl shadow-lg p-8"
//         >
//           <h2 className="text-3xl font-bold text-emerald-700 mb-4">Our Mission</h2>
//           <p className="text-gray-700 leading-relaxed">
//             FertiBase transforms agriculture with advanced biofertilizers and organic solutions, tackling soil fertility challenges and reducing chemical dependency. Through continuous innovation, we empower farmers with sustainable, high-performance solutions for a healthier planet.
//           </p>
//         </motion.div>
//       </div>

//       {/* Future of Farming */}
//       <div className="text-center max-w-4xl mx-auto px-6 mb-24">
//         <motion.h2
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-4xl font-bold text-emerald-700 mb-4"
//         >
//           A New Era of Farming
//         </motion.h2>
//         <p className="text-gray-700 leading-relaxed text-lg">
//           Farming is evolving with AI, IoT, and sustainable practices like hydroponics and regenerative agriculture.
//           Automation, drones, and data analytics enhance efficiency, ensuring smarter, resilient, and eco-friendly food
//           production for the future.
//         </p>
//       </div>

//       {/* Management Section */}
//       <div className="max-w-6xl mx-auto px-6 mb-24">
//         <h2 className="text-4xl font-bold text-center text-emerald-700 mb-12">
//           Management & Science
//         </h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {[
//             { name: "DR. L. N. REDDY", title: "Founding Director & CEO" },
//             { name: "Krishnamurali Chowdary", title: "Director - Sales" },
//             { name: "E SATYANARAYANA REDDY", title: "Chief Business Officer (South India)" },
//           ].map((person, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               className="bg-white/80 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all"
//             >
//               <h3 className="text-xl font-bold text-emerald-700 mb-2">{person.name}</h3>
//               <p className="text-gray-600 mb-4">{person.title}</p>
//               <button className="text-emerald-600 font-semibold flex items-center justify-center gap-2 hover:underline mx-auto">
//                 More <ArrowRight className="w-4 h-4" />
//               </button>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Contact Info */}
//       <div className="bg-emerald-700 text-white py-16">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left px-6">
//           <div>
//             <h3 className="text-xl font-bold mb-2">Call Us</h3>
//             <p className="text-gray-100">+91 9133 737 737</p>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold mb-2">Email Us</h3>
//             <p className="text-gray-100">Admin@fertibase.in</p>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
//             <p className="text-gray-100">8:00 AM - 6:00 PM</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }








import { motion } from "framer-motion";
import { Leaf, Users, Map, Globe, Mail, Phone, Clock } from "lucide-react";

export default function About() {
  return (
    <div className="bg-gradient-to-b from-white via-green-50 to-emerald-100 text-gray-800">
      {/* HERO SECTION */}
      {/* <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-700/70 via-green-600/60 to-emerald-400/50 mix-blend-multiply"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-28 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg"
          >
            Growing the Future of Agriculture
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Innovative solutions for sustainable and smarter farming — empowering growth, naturally.
          </motion.p>
        </div>
      </section> */}

     


     <section className="relative overflow-hidden">
  {/* Background Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-emerald-700/80 via-green-600/70 to-emerald-400/60 mix-blend-multiply"></div>

  {/* Container */}
  <div className="relative max-w-7xl mx-auto px-6 py-28 text-center flex flex-col items-center justify-center">
    
    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-lg leading-tight"
    >
      Growing the{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 to-green-100">
        Future of Agriculture
      </span>
    </motion.h1>

    {/* Subheading */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="text-lg md:text-xl max-w-3xl mx-auto text-white/90 mb-8"
    >
      Innovative solutions for sustainable and smarter farming — empowering growth, naturally.
    </motion.p>

    {/* Call to Action Button */}
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-4 bg-gradient-to-r from-green-400 to-lime-300 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all text-lg"
      onClick={() => window.location.href = "#about"}
    >
      Learn More
    </motion.button>

    {/* Decorative Floating Leaf */}
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-10 right-10"
    >
      <svg className="w-12 h-12 text-green-200 opacity-70" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C8 8 4 20 12 22s8-8 8-8-4-12-8-12z" />
      </svg>
    </motion.div>
  </div>
</section>




      {/* STATISTICS STRIP */}
      {/* <section className="relative bg-white/60 backdrop-blur-xl py-12 border-y border-emerald-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center px-6">
          {[
            { icon: <Map className="w-8 h-8 text-emerald-600 mx-auto" />, num: "18+", label: "States", desc: "FertiBase operates nationwide" },
            { icon: <Users className="w-8 h-8 text-emerald-600 mx-auto" />, num: "400+", label: "Families", desc: "Empowering sustainable livelihoods" },
            { icon: <Globe className="w-8 h-8 text-emerald-600 mx-auto" />, num: "1L+", label: "Acres", desc: "Transformed into fertile land" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition-all"
            >
              {stat.icon}
              <h3 className="text-3xl font-bold text-emerald-700 mt-3">{stat.num}</h3>
              <p className="font-semibold">{stat.label}</p>
              <p className="text-gray-600 mt-1">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section> */}

<section className="relative py-20 bg-gradient-to-br from-emerald-50 via-white to-green-50 overflow-hidden">
  {/* Decorative floating elements */}
  <div className="absolute -top-10 -left-10 w-24 h-24 bg-emerald-200/40 rounded-full filter blur-3xl animate-pulse-slow"></div>
  <div className="absolute -bottom-20 -right-10 w-32 h-32 bg-lime-200/30 rounded-full filter blur-3xl animate-pulse-slower"></div>

  {/* Heading */}
  <div className="text-center mb-12 px-6">
    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
      Our Impact <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-lime-500">in Numbers</span>
    </h2>
    <p className="text-gray-700 text-lg max-w-2xl mx-auto">
      FertiBase has transformed agriculture across India with measurable results.
    </p>
  </div>

  {/* Statistics Cards */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-6">
    {[
      { icon: <Map className="w-10 h-10 text-emerald-500 mx-auto" />, num: "18+", label: "States", desc: "FertiBase operates nationwide" },
      { icon: <Users className="w-10 h-10 text-lime-500 mx-auto" />, num: "400+", label: "Families", desc: "Empowering sustainable livelihoods" },
      { icon: <Globe className="w-10 h-10 text-green-600 mx-auto" />, num: "1L+", label: "Acres", desc: "Transformed into fertile land" },
    ].map((stat, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: i * 0.2 }}
        viewport={{ once: true }}
        className="relative p-8 rounded-3xl bg-white/40 backdrop-blur-lg border border-white/30 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
      >
        {/* Icon Circle */}
        <div className="w-16 h-16 flex items-center justify-center bg-white/60 rounded-full mx-auto mb-4 shadow-md">
          {stat.icon}
        </div>
        <h3 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-lime-500 text-center">
          {stat.num}
        </h3>
        <p className="font-semibold text-center mt-2">{stat.label}</p>
        <p className="text-gray-700 text-center mt-1">{stat.desc}</p>
      </motion.div>
    ))}
  </div>
</section>



<section className="relative py-24 bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 text-center">
    {/* Section Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl md:text-6xl font-extrabold text-emerald-700 mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-lime-500"
    >
      Achievements & Innovation
    </motion.h2>

    {/* Timeline / Highlights */}
    <div className="space-y-12">
      {/* Research & Innovation */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
      >
        <div className="flex-shrink-0 bg-green-100 p-6 rounded-3xl shadow-lg">
          <span className="text-4xl font-bold text-green-700">🧪</span>
        </div>
        <div className="text-left md:text-left">
          <h3 className="text-2xl font-bold text-emerald-700 mb-2">Research & Innovation</h3>
          <p className="text-gray-700 mb-2">8 nanotechnology patents & 23 patented probiotic strains</p>
          <p className="text-gray-600">Collaborations with UoH, recognized by DSIR for R&D excellence.</p>
        </div>
      </motion.div>

      {/* Product & Market Impact */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12"
      >
        <div className="flex-shrink-0 bg-emerald-100 p-6 rounded-3xl shadow-lg">
          <span className="text-4xl font-bold text-emerald-700">🌿</span>
        </div>
        <div className="text-left md:text-left">
          <h3 className="text-2xl font-bold text-emerald-700 mb-2">Product & Market Impact</h3>
          <p className="text-gray-700 mb-2">17 certified organic products across 18+ states</p>
          <p className="text-gray-600">Benefiting over 100,000 acres with agriculture, poultry, aquaculture & livestock solutions.</p>
        </div>
      </motion.div>

      {/* Quality & Sustainability */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
      >
        <div className="flex-shrink-0 bg-lime-100 p-6 rounded-3xl shadow-lg">
          <span className="text-4xl font-bold text-lime-700">✅</span>
        </div>
        <div className="text-left md:text-left">
          <h3 className="text-2xl font-bold text-emerald-700 mb-2">Quality & Sustainability</h3>
          <p className="text-gray-700 mb-2">IFOAM & USDA certified, eco-friendly solutions</p>
          <p className="text-gray-600">Enhancing soil health, crop yield & reducing chemical dependency naturally.</p>
        </div>
      </motion.div>
    </div>
  </div>
</section>















      {/* VISION SECTION */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 py-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1606206522513-599a7e6c75c9?auto=format&fit=crop&w=900&q=80"
            alt="Sustainable farming"
            className="rounded-3xl shadow-xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-emerald-700 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To lead global sustainable agriculture by innovating biofertilizers and organic inputs that enhance soil
            health, crop quality, and eco-friendly practices across farming, poultry, and livestock industries.
          </p>
        </motion.div>
      </section>

      {/* MISSION SECTION */}
      <section className="bg-gradient-to-r from-emerald-700 to-green-600 py-24 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg leading-relaxed text-emerald-50">
              FertiBase transforms agriculture with advanced biofertilizers and organic solutions, tackling soil
              fertility challenges and reducing chemical dependency. Through innovation, we empower farmers with
              sustainable, high-performance solutions for a healthier planet.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80"
              alt="Biofertilizer innovation"
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>




      {/* FUTURE FARMING */}
      {/* <section className="py-24 max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-emerald-700 mb-6"
        >
          A New Era of Farming
        </motion.h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          Farming is evolving with AI, IoT, and sustainable practices like hydroponics and regenerative agriculture.
          Automation, drones, and data analytics enhance efficiency, ensuring smarter, resilient, and eco-friendly food
          production for the future.
        </p>
      </section> */}


<section className="relative py-24 bg-gradient-to-br from-green-50 via-white to-lime-50 overflow-hidden">
  {/* Decorative shapes */}
  <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-200/40 rounded-full filter blur-3xl animate-pulse-slow"></div>
  <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-lime-200/30 rounded-full filter blur-3xl animate-pulse-slower"></div>

  {/* Heading */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-12 px-6 relative z-10"
  >
    <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-lime-500">
        A New Era of Farming
      </span>
    </h2>
    <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
      Farming is evolving with AI, IoT, and sustainable practices like hydroponics and regenerative agriculture.
      Automation, drones, and data analytics enhance efficiency, ensuring smarter, resilient, and eco-friendly food
      production for the future.
    </p>
  </motion.div>

  {/* Image / Illustration */}
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="relative max-w-4xl mx-auto mt-12"
  >
    <img
      src="https://pikwizard.com/pw/medium/8642d157efe9dca4bee8bbaae799a54f.jpg"
      alt="Futuristic Farming"
      className="w-full rounded-3xl shadow-2xl object-cover"
    />
  </motion.div>
</section>




      {/* MANAGEMENT TEAM */}
      {/* <section className="bg-white/70 py-24 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-emerald-700 mb-12">Management & Science</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { name: "Dr. L. N. Reddy", title: "Founding Director & CEO" },
              { name: "Krishnamurali Chowdary", title: "Director - Sales" },
              { name: "E Satyanarayana Reddy", title: "Chief Business Officer (South India)" },
            ].map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="rounded-2xl shadow-lg p-8 bg-white hover:shadow-2xl transition-all"
              >
                <div className="w-24 h-24 bg-emerald-200 rounded-full mx-auto mb-4 flex items-center justify-center text-emerald-700 font-bold text-2xl">
                  {person.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-emerald-700 mb-1">{person.name}</h3>
                <p className="text-gray-600 mb-3">{person.title}</p>
                <button className="text-emerald-600 font-semibold hover:underline">More</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}


<section className="relative bg-green-50/80 py-32 overflow-hidden">
  {/* Decorative floating shapes */}
  <div className="absolute -top-16 -left-16 w-48 h-48 bg-emerald-300 rounded-full opacity-30 animate-pulse"></div>
  <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-green-400 rounded-full opacity-20 animate-ping"></div>

  <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
    <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-600 mb-16">
      Our Leadership
    </h2>

    <div className="relative flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Left member */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center transform hover:-translate-y-2 transition-all"
      >
        <div className="w-32 h-32 rounded-full border-4 border-emerald-300 overflow-hidden shadow-lg">
          <img
            src="/profiles/krishnamurali.jpg"
            alt="Krishnamurali Chowdary"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="mt-4 text-xl font-bold text-emerald-700">Krishnamurali Chowdary</h3>
        <p className="text-gray-600">Director - Sales</p>
      </motion.div>

      {/* Center / CEO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center transform hover:-translate-y-3 transition-all"
      >
        <div className="w-40 h-40 rounded-full border-8 border-gradient-to-tr from-emerald-400 to-green-600 shadow-2xl overflow-hidden">
          <img
            src="/profiles/dr_reddy.jpg"
            alt="Dr. L. N. Reddy"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="mt-5 text-2xl font-extrabold text-emerald-700">Dr. L. N. Reddy</h3>
        <p className="text-gray-600">Founding Director & CEO</p>
        <button className="mt-3 px-6 py-2 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition">
          More
        </button>
      </motion.div>

      {/* Right member */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center transform hover:-translate-y-2 transition-all"
      >
        <div className="w-32 h-32 rounded-full border-4 border-emerald-300 overflow-hidden shadow-lg">
          <img
            src="/profiles/satyanarayana.jpg"
            alt="E Satyanarayana Reddy"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="mt-4 text-xl font-bold text-emerald-700">E Satyanarayana Reddy</h3>
        <p className="text-gray-600">Chief Business Officer (South India)</p>
      </motion.div>
    </div>
  </div>
</section>




      {/* CONTACT SECTION */}
      {/* <section className="bg-emerald-800 text-white py-20">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-8 px-6 text-center sm:text-left">
          <div>
            <Phone className="mx-auto sm:mx-0 mb-2" />
            <h4 className="font-semibold">Call Us</h4>
            <p>+91 9133 737 737</p>
          </div>
          <div>
            <Mail className="mx-auto sm:mx-0 mb-2" />
            <h4 className="font-semibold">Email Us</h4>
            <p>Admin@fertibase.in</p>
          </div>
          <div>
            <Clock className="mx-auto sm:mx-0 mb-2" />
            <h4 className="font-semibold">Working Hours</h4>
            <p>8:00 AM - 6:00 PM</p>
          </div>
        </div>
      </section> */}


      








    </div>
  );
}













// import { motion } from "framer-motion";
// import { Leaf, Globe2, Users2, MapPinned, Phone, Mail, Clock8 } from "lucide-react";

// export default function About() {
//   return (
//     <div className="overflow-hidden bg-gradient-to-b from-green-50 via-white to-emerald-50 text-gray-800">
//       {/* ===== HERO SECTION ===== */}
//       <section className="relative h-[90vh] flex flex-col justify-center items-center text-center px-6">
//         <img
//           src="https://images.unsplash.com/photo-1603575448362-4ce02c02ef8b?auto=format&fit=crop&w=2000&q=80"
//           alt="Farming Field"
//           className="absolute inset-0 w-full h-full object-cover brightness-[0.6]"
//         />
//         <div className="absolute inset-0 bg-gradient-to-b from-emerald-800/70 to-green-700/60" />
//         <motion.h1
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9 }}
//           className="relative text-white text-5xl md:text-6xl font-bold drop-shadow-lg"
//         >
//           Growing the Future of Agriculture
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.9 }}
//           className="relative text-emerald-50 mt-4 text-lg md:text-xl max-w-2xl mx-auto"
//         >
//           Innovative solutions for sustainable and intelligent farming.
//         </motion.p>
//       </section>

//       {/* ===== STATS FLOATING ===== */}
//       <section className="relative z-10 -mt-20 mb-16">
//         <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-6 px-6">
//           {[
//             { icon: <MapPinned size={40} className="text-emerald-600" />, value: "18+", label: "States Covered" },
//             { icon: <Users2 size={40} className="text-emerald-600" />, value: "400+", label: "Families Empowered" },
//             { icon: <Globe2 size={40} className="text-emerald-600" />, value: "1L+", label: "Acres Revitalized" },
//           ].map((stat, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: i * 0.2 }}
//               viewport={{ once: true }}
//               className="bg-white shadow-xl rounded-2xl p-6 text-center hover:shadow-2xl transition-all"
//             >
//               <div className="flex justify-center mb-3">{stat.icon}</div>
//               <h3 className="text-3xl font-extrabold text-emerald-700">{stat.value}</h3>
//               <p className="font-semibold text-gray-700">{stat.label}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ===== ABOUT STORY ===== */}
//       <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 py-20 items-center">
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <img
//             src="https://images.unsplash.com/photo-1592784202064-8b8ef85aa66f?auto=format&fit=crop&w=900&q=80"
//             alt="Soil health"
//             className="rounded-3xl shadow-2xl"
//           />
//         </motion.div>
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl font-bold text-emerald-700 mb-4">Who We Are</h2>
//           <p className="text-lg leading-relaxed text-gray-700">
//             At <span className="font-semibold text-emerald-700">FertiBase</span>, we are committed to reshaping
//             agriculture by empowering farmers with advanced biofertilizers. Our products enrich soil health through
//             beneficial microorganisms that improve structure, nutrient content, and water retention.
//           </p>
//         </motion.div>
//       </section>

//       {/* ===== VISION & MISSION ===== */}
//       <section className="relative bg-gradient-to-r from-emerald-800 to-green-700 text-white py-24">
//         <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/green-fibers.png')]"></div>
//         <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 relative">
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl font-bold mb-3">Our Vision</h2>
//             <p className="text-lg leading-relaxed text-emerald-50">
//               To lead sustainable global agriculture by innovating biofertilizers that strengthen soil health, enhance
//               crop quality, and promote eco-friendly farming across all sectors.
//             </p>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <h2 className="text-4xl font-bold mb-3">Our Mission</h2>
//             <p className="text-lg leading-relaxed text-emerald-50">
//               FertiBase transforms agriculture with advanced organic solutions, tackling soil fertility challenges while
//               reducing chemical dependency — building a healthier planet for generations to come.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ===== FUTURE OF FARMING ===== */}
//       <section className="max-w-6xl mx-auto px-6 py-24 text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-4xl font-bold text-emerald-700 mb-4"
//         >
//           A New Era of Farming
//         </motion.h2>
//         <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
//           With AI, IoT, drones, and data-driven analytics, farming is entering a smart, resilient, and sustainable
//           phase. At FertiBase, we merge technology with nature to make agriculture more efficient, eco-friendly, and
//           future-ready.
//         </p>
//       </section>

//       {/* ===== TEAM ===== */}
//       <section className="bg-white py-24">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-4xl font-bold text-emerald-700 mb-12">Our Leadership</h2>
//           <div className="grid sm:grid-cols-3 gap-10">
//             {[
//               { name: "Dr. L. N. Reddy", role: "Founding Director & CEO" },
//               { name: "Krishnamurali Chowdary", role: "Director - Sales" },
//               { name: "E. Satyanarayana Reddy", role: "Chief Business Officer (South India)" },
//             ].map((member, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: i * 0.2 }}
//                 viewport={{ once: true }}
//                 className="rounded-3xl p-8 bg-gradient-to-b from-white to-emerald-50 shadow-lg hover:shadow-2xl transition-all"
//               >
//                 <div className="w-24 h-24 mx-auto mb-4 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-3xl font-bold">
//                   {member.name.charAt(0)}
//                 </div>
//                 <h3 className="text-xl font-bold mb-1">{member.name}</h3>
//                 <p className="text-gray-600">{member.role}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ===== CONTACT ===== */}
//       <section className="bg-emerald-900 text-white py-20">
//         <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10 px-6 text-center sm:text-left">
//           <div>
//             <Phone className="mx-auto sm:mx-0 mb-2 text-emerald-300" />
//             <h4 className="font-semibold text-lg">Call Us</h4>
//             <p className="text-emerald-100">+91 9133 737 737</p>
//           </div>
//           <div>
//             <Mail className="mx-auto sm:mx-0 mb-2 text-emerald-300" />
//             <h4 className="font-semibold text-lg">Email Us</h4>
//             <p className="text-emerald-100">Admin@fertibase.in</p>
//           </div>
//           <div>
//             <Clock8 className="mx-auto sm:mx-0 mb-2 text-emerald-300" />
//             <h4 className="font-semibold text-lg">Working Hours</h4>
//             <p className="text-emerald-100">8:00 AM - 6:00 PM</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }






