
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
