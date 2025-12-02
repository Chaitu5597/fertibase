import { motion } from "framer-motion";
import { Leaf, Users, Map, Globe, Mail, Phone, Clock, Award, Target, Lightbulb, Handshake, Smartphone } from "lucide-react";

export default function Aboutus() {
  return (
    <div className="bg-white text-gray-800">
      {/* HERO SECTION - Redesigned with cleaner layout */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-700">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <Leaf className="w-16 h-16 mx-auto text-lime-400 mb-4" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight"
          >
            Empowering Farmers,
            <br />
            <span className="text-lime-300">Growing the Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-emerald-100 max-w-4xl mx-auto font-light"
          >
            Leading agricultural innovation through science, technology, and partnership
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* COMPANY INTRODUCTION - New Section */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-emerald-600">Fertibase</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-lime-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <Award className="w-12 h-12" />,
                title: "Leading Innovation",
                description: "A leading agricultural innovation company dedicated to empowering farmers with high-quality crop nutrition solutions and advanced farming technologies."
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "Sustainable Focus",
                description: "Strong commitment to sustainable agriculture, delivering scientifically formulated Biofertilizers, biological products, and soil-enhancing inputs."
              },
              {
                icon: <Lightbulb className="w-12 h-12" />,
                title: "Research-Based",
                description: "Transform farming practices through reliable, research-based, and result-oriented products with consistent performance and unmatched field support."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-lime-500 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERSHIP SECTION - New */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Handshake className="w-16 h-16 mx-auto mb-6 text-lime-300" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Growth Through Partnership
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              We believe that true growth lies in partnership. Through our strong network, we work closely with farmers to ensure better guidance, improved yield, and profitable farming.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: <Users className="w-8 h-8" />, title: "Dealer Network", desc: "Strong network of trusted dealers" },
              { icon: <Leaf className="w-8 h-8" />, title: "Field Teams", desc: "Dedicated field support teams" },
              { icon: <Award className="w-8 h-8" />, title: "Agronomists", desc: "Expert agricultural guidance" },
              { icon: <Smartphone className="w-8 h-8" />, title: "Farminsta App", desc: "Digital farming solutions" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:bg-white/20 transition-all border border-white/20"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-lime-300">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-emerald-100 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Impact <span className="text-emerald-600">in Numbers</span>
            </h2>
            <p className="text-xl text-gray-600">
              Transforming agriculture across regions with measurable results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Map className="w-12 h-12" />, num: "2", label: "States", desc: "Operating across multiple regions" },
              { icon: <Users className="w-12 h-12" />, num: "100+", label: "Dealers", desc: "Strong distribution network" },
              { icon: <Globe className="w-12 h-12" />, num: "1L+", label: "Acres", desc: "Farmland transformed" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all border border-emerald-100 group-hover:scale-105 transform duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white group-hover:rotate-12 transition-transform">
                    {stat.icon}
                  </div>
                  <h3 className="text-5xl font-extrabold text-emerald-600 mb-2">{stat.num}</h3>
                  <p className="text-xl font-bold text-gray-900 mb-2">{stat.label}</p>
                  <p className="text-gray-600">{stat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Core <span className="text-emerald-600">Values</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-lime-500 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🧪",
                title: "Quality Assurance",
                desc: "Premium products tested and proven in real-world farming conditions"
              },
              {
                icon: "🌿",
                title: "Farmer-First Approach",
                desc: "Prioritizing farmers' needs with direct support and field training"
              },
              {
                icon: "✅",
                title: "Innovation & Research",
                desc: "Continuous development of advanced biological solutions"
              },
              {
                icon: "🤝",
                title: "Integrity & Trust",
                desc: "Transparent business processes and long-term relationships"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all text-center border border-gray-100 hover:border-emerald-200"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-100 rounded-full opacity-50"></div>
              <div className="relative bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-10 shadow-lg border border-emerald-100">
                <Target className="w-16 h-16 text-emerald-600 mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To become the most trusted agricultural brand in India, enabling farmers to achieve higher yields, better income, and a prosperous future.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-lime-100 rounded-full opacity-50"></div>
              <div className="relative bg-gradient-to-br from-lime-50 to-emerald-50 rounded-2xl p-10 shadow-lg border border-lime-100">
                <Lightbulb className="w-16 h-16 text-lime-600 mb-6" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To strengthen farmers' productivity and profitability by providing effective agricultural solutions that enhance crop health and ensure sustainable farming.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-emerald-600">Leadership</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guided by experienced leaders committed to agricultural excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Dr. L. N. Reddy", title: "Founding Director & CEO", image: "/profiles/dr_reddy.jpg" },
              { name: "Krishnamurali Chowdary", title: "Director - Sales", image: "/profiles/krishnamurali.jpg" },
              { name: "E Satyanarayana Reddy", title: "Chief Business Officer (South India)", image: "/profiles/satyanarayana.jpg" }
            ].map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all text-center group"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-emerald-200 group-hover:border-emerald-400 transition-all">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-emerald-500 to-lime-500 flex items-center justify-center text-white text-3xl font-bold">${person.name.charAt(0)}</div>`;
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{person.name}</h3>
                <p className="text-emerald-600 font-medium">{person.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     

      {/* CONTACT CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 rounded-3xl p-12 text-center text-white shadow-2xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Farming?</h2>
              <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                Join thousands of farmers who trust Fertibase for sustainable and profitable agriculture
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">+91 9133 737 737</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3">
                  <Mail className="w-5 h-5" />
                  <span className="font-semibold">Admin@fertibase.in</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3">
                  <Clock className="w-5 h-5" />
                  <span className="font-semibold">8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
