// import { Phone, Mail, MapPin } from 'lucide-react';

// export default function Contact() {
//   return (
//     <section id="contact" className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Get In Touch</h2>
//         <div className="grid md:grid-cols-2 gap-12">
//           <div>
//             <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
//             <div className="space-y-6">
//               <div className="flex items-center">
//                 <Phone className="h-6 w-6 text-primary mr-4" />
//                 <span>+91 98765 43210</span>
//               </div>
//               <div className="flex items-center">
//                 <Mail className="h-6 w-6 text-primary mr-4" />
//                 <span>info@ferti.in</span>
//               </div>
//               <div className="flex items-start">
//                 <MapPin className="h-6 w-6 text-primary mr-4 mt-1" />
//                 <span>123 Green Fields, Agriculture Zone,<br />Punjab, India</span>
//               </div>
//             </div>
//           </div>
//           <form className="space-y-6">
//             <input type="text" placeholder="Your Name" required className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-primary" />
//             <input type="email" placeholder="Your Email" required className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-primary" />
//             <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-primary" />
//             <textarea placeholder="Message" rows="5" required className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-primary"></textarea>
//             <button type="submit" className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-secondary transition">
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }



// import { Phone, Mail, MapPin, Send } from "lucide-react";

// export default function Contact() {
//   return (
//     <section id="contact" className="relative py-20 bg-gradient-to-br from-indigo-50 via-white to-green-50 overflow-hidden">
//       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-wall-3.png')] opacity-40"></div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Heading */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Get in <span className="text-indigo-600">Touch</span>
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Have questions about our products or want to collaborate? Reach out and we’ll get back to you within 24 hours.
//           </p>
//         </div>

//         {/* Contact Section */}
//         <div className="grid lg:grid-cols-2 gap-10 items-stretch">
//           {/* Left Card - Contact Info */}
//           <div className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-gray-100">
//             <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
//             <p className="text-gray-600 mb-8">
//               Fill out the form and our team will reach out to you as soon as possible.
//             </p>

//             <div className="space-y-6">
//               <div className="flex items-center space-x-4">
//                 <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
//                   <Phone className="h-6 w-6" />
//                 </div>
//                 <span className="text-gray-700 text-lg font-medium">+91 98765 43210</span>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div className="p-3 rounded-full bg-green-100 text-green-600">
//                   <Mail className="h-6 w-6" />
//                 </div>
//                 <span className="text-gray-700 text-lg font-medium">info@ferti.in</span>
//               </div>

//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-pink-100 text-pink-600">
//                   <MapPin className="h-6 w-6" />
//                 </div>
//                 <span className="text-gray-700 text-lg font-medium">
//                   123 Green Fields, Agriculture Zone,
//                   <br />
//                   Punjab, India
//                 </span>
//               </div>
//             </div>

//             <div className="mt-10 border-t border-gray-200 pt-6">
//               <p className="text-gray-500 text-sm">
//                 We’re available Mon–Sat from 9am to 7pm.
//               </p>
//             </div>
//           </div>

//           {/* Right Card - Contact Form */}
//           <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
//             <h3 className="text-2xl font-bold text-gray-800 mb-6">
//               Send Us a Message
//             </h3>

//             <form className="space-y-5">
//               <div className="grid md:grid-cols-2 gap-5">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   required
//                   className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
//                 />
//               </div>

//               <input
//                 type="tel"
//                 placeholder="Phone Number"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
//               />

//               <textarea
//                 placeholder="Your Message"
//                 rows="5"
//                 required
//                 className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
//               ></textarea>

//               <button
//                 type="submit"
//                 className="w-full bg-gradient-to-r from-indigo-600 to-green-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center space-x-2"
//               >
//                 <Send className="h-5 w-5" />
//                 <span>Send Message</span>
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import { Phone, Mail, MapPin, Send } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper"; // Make sure this file exists

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Get in <span className="text-green-600">Touch</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions about our products or want to collaborate? Reach out and we’ll get back to you within 24 hours.
        </p>
      </div>

      {/* Contact Section */}
      <div className="grid lg:grid-cols-2 gap-10 items-stretch">
        {/* Left Card - Contact Info */}
        <div className="bg-white/70 backdrop-blur-xl p-10 rounded-3xl shadow-xl border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>
          <p className="text-gray-600 mb-8">
            Fill out the form and our team will reach out to you as soon as possible.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
                <Phone className="h-6 w-6" />
              </div>
              <span className="text-gray-700 text-lg font-medium">+91 98765 43210</span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-full bg-green-100 text-green-600">
                <Mail className="h-6 w-6" />
              </div>
              <span className="text-gray-700 text-lg font-medium">info@ferti.in</span>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full bg-pink-100 text-pink-600">
                <MapPin className="h-6 w-6" />
              </div>
              <span className="text-gray-700 text-lg font-medium">
                123 Green Fields, Agriculture Zone,
                <br />
                Punjab, India
              </span>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-200 pt-6">
            <p className="text-gray-500 text-sm">
              We’re available Mon–Sat from 9am to 7pm.
            </p>
          </div>
        </div>

        {/* Right Card - Contact Form */}
        <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>

          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
              />
            </div>

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-lime-500 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center justify-center space-x-2"
            >
              <Send className="h-5 w-5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
