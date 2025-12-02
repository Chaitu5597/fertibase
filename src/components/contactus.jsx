// import { motion } from "framer-motion";
// import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

// export default function Contactus() {
//   return (
//     <div className="bg-gradient-to-b from-emerald-900 via-green-800 to-emerald-700 text-white overflow-hidden">
//       {/* Hero Section */}
//       <section className="relative text-center py-28 px-4">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-lime-300 via-emerald-200 to-green-400 drop-shadow-md"
//         >
//           Get in Touch with FertiBase
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5 }}
//           className="text-lg md:text-xl mt-6 max-w-2xl mx-auto text-emerald-100"
//         >
//           We're here to support sustainable agriculture — reach out to us for product
//           inquiries, partnerships, or collaborations.
//         </motion.p>
//       </section>

//       {/* Contact Info Cards */}
//       <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8 mb-24">
//         {[
//           { icon: <Phone size={28} />, title: "Call Us", info: "+91 9133 737 737" },
//           { icon: <Mail size={28} />, title: "Email Us", info: "admin@fertibase.in" },
//           { icon: <MapPin size={28} />, title: "Head Office", info: "Hyderabad, India" },
//           { icon: <Clock size={28} />, title: "Working Hours", info: "Mon–Sat, 8AM–6PM" },
//         ].map((item, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.05 }}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.2 }}
//             className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20"
//           >
//             <div className="flex justify-center mb-4 text-lime-300">{item.icon}</div>
//             <h3 className="text-xl font-semibold text-white">{item.title}</h3>
//             <p className="text-emerald-100 mt-2">{item.info}</p>
//           </motion.div>
//         ))}
//       </section>

//       {/* Contact Form */}
//       <section className="max-w-5xl mx-auto px-6 mb-32">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-10 shadow-2xl"
//         >
//           <h2 className="text-3xl font-bold text-center text-lime-200 mb-8">
//             Send Us a Message
//           </h2>
//           <form className="grid md:grid-cols-2 gap-8">
//             <div>
//               <label className="block text-sm mb-2 text-emerald-100">Full Name</label>
//               <input
//                 type="text"
//                 className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20 focus:outline-none focus:border-lime-300 placeholder-emerald-200"
//                 placeholder="John Doe"
//               />
//             </div>
//             <div>
//               <label className="block text-sm mb-2 text-emerald-100">Email</label>
//               <input
//                 type="email"
//                 className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20 focus:outline-none focus:border-lime-300 placeholder-emerald-200"
//                 placeholder="john@example.com"
//               />
//             </div>
//             <div className="md:col-span-2">
//               <label className="block text-sm mb-2 text-emerald-100">Message</label>
//               <textarea
//                 rows="5"
//                 className="w-full px-4 py-3 rounded-xl bg-white/10 text-white border border-white/20 focus:outline-none focus:border-lime-300 placeholder-emerald-200"
//                 placeholder="Write your message..."
//               ></textarea>
//             </div>
//             <div className="md:col-span-2 text-center mt-4">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-10 py-3 bg-gradient-to-r from-lime-400 via-emerald-400 to-green-500 text-emerald-900 font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all"
//               >
//                 Send Message
//               </motion.button>
//             </div>
//           </form>
//         </motion.div>
//       </section>

//       {/* Map & Social */}
//       <section className="bg-emerald-950 py-20 text-center">
//         <motion.h3
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           className="text-3xl font-bold mb-10 text-lime-200"
//         >
//           Visit Us & Connect
//         </motion.h3>
//         <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg mb-12">
//           <iframe
//             title="FertiBase Location"
//             className="w-full h-96 border-none"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.496332107397!2d78.4747!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9751b2c9b6f5%3A0x3a4b36ea122223b!2sHyderabad!5e0!3m2!1sen!2sin!4v1683712233441"
//             allowFullScreen
//             loading="lazy"
//           ></iframe>
//         </div>

//         <div className="flex justify-center gap-6 text-lime-300">
//           {[Facebook, Instagram, Linkedin].map((Icon, i) => (
//             <motion.a
//               key={i}
//               whileHover={{ scale: 1.2, color: "#fff" }}
//               href="#"
//               className="p-3 bg-white/10 rounded-full border border-white/20 hover:bg-white/20 transition"
//             >
//               <Icon size={24} />
//             </motion.a>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }




import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-gradient-to-br from-emerald-50 via-white to-green-50 min-h-screen flex flex-col items-center justify-center py-20 px-6 text-gray-800">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-emerald-700">
          Contact <span className="text-green-500">FertiBase</span>
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          We’re here to help you grow better — reach out to us anytime for product
          inquiries, collaborations, or partnerships.
        </p>
      </motion.div>

      {/* Contact Container */}
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-12 items-start">
        {/* Left - Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-xl border border-emerald-100 rounded-3xl shadow-xl p-10"
        >
          <h2 className="text-2xl font-bold text-emerald-700 mb-6">
            Get in Touch
          </h2>
          <ul className="space-y-6 text-gray-700">
            <li className="flex items-center gap-4">
              <div className="p-3 bg-emerald-100 rounded-full text-emerald-700">
                <Phone size={22} />
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p>+91 9133 737 737</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <div className="p-3 bg-emerald-100 rounded-full text-emerald-700">
                <Mail size={22} />
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p>admin@fertibase.in</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <div className="p-3 bg-emerald-100 rounded-full text-emerald-700">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="font-semibold">Head Office</h4>
                <p>Hyderabad, India</p>
              </div>
            </li>
            <li className="flex items-center gap-4">
              <div className="p-3 bg-emerald-100 rounded-full text-emerald-700">
                <Clock size={22} />
              </div>
              <div>
                <h4 className="font-semibold">Working Hours</h4>
                <p>Mon – Sat, 8:00 AM – 6:00 PM</p>
              </div>
            </li>
          </ul>

          <div className="mt-10">
            <iframe
              title="FertiBase Location"
              className="w-full h-64 rounded-2xl shadow-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.496332107397!2d78.4747!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9751b2c9b6f5%3A0x3a4b36ea122223b!2sHyderabad!5e0!3m2!1sen!2sin!4v1683712233441"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.form
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-white via-green-50 to-emerald-50 border border-emerald-100 rounded-3xl shadow-xl p-10"
        >
          <h2 className="text-2xl font-bold text-emerald-700 mb-8">
            Send Us a Message
          </h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full px-4 py-3 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-400 outline-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="w-full py-3 mt-4 bg-emerald-600 text-white font-semibold rounded-xl shadow-md hover:bg-emerald-700 transition-all"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
