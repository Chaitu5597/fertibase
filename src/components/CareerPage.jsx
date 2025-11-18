

// // src/pages/CareerPage.jsx
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronDown, ArrowLeft } from "lucide-react";
// import Slider from "react-slick";
// import { useNavigate } from "react-router-dom";
// import jobs from "./../../data/jobsData";

// export default function CareerPage() {
//   const [openIndex, setOpenIndex] = useState(null);
//   const [search, setSearch] = useState("");
//   const navigate = useNavigate();

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 600,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: false,
//     arrows: true,
//     responsive: [
//       { breakpoint: 1200, settings: { slidesToShow: 2 } },
//       { breakpoint: 768, settings: { slidesToShow: 1 } },
//     ],
//   };

//   // 🔍 Filter based on search
//   const filteredJobs = jobs.map((group) => ({
//     ...group,
//     cards: group.cards.filter((card) =>
//       card.title.toLowerCase().includes(search.toLowerCase())
//     ),
//   }));

//   return (
//     <section className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-lime-100 py-12 px-4">
//       <div className="max-w-6xl mx-auto">

//         {/* 🔙 Go Back Button */}
//         <button
//           onClick={() => navigate(-1)}
//           className="flex items-center gap-2 text-emerald-800 font-semibold mb-4 hover:underline"
//         >
//           <ArrowLeft size={22} />
//           Go Back
//         </button>

//         {/* 🔍 Heading + Search */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-4">
//           <h1 className="text-4xl font-extrabold text-emerald-800 text-center md:text-left">
//             Career Opportunities
//           </h1>

//           {/* Search Bar */}
//           <input
//             type="text"
//             placeholder="Search roles..."
//             className="w-full md:w-72 px-4 py-2 rounded-xl border border-emerald-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>

//         {/* All job groups */}
//         <div className="space-y-6">
//           {filteredJobs.map((group, i) => (
//             <div
//               key={group.category}
//               className="bg-white/80 rounded-2xl border border-emerald-100 shadow-sm overflow-hidden"
//             >
//               {/* Header */}
//               <button
//                 onClick={() => setOpenIndex(openIndex === i ? null : i)}
//                 className="w-full flex items-center justify-between px-6 py-5"
//               >
//                 <div>
//                   <h2 className="text-2xl font-semibold text-emerald-800">
//                     {group.category}
//                   </h2>
//                   <p className="text-sm text-emerald-600 mt-1">
//                     {group.cards.length} roles available
//                   </p>
//                 </div>

//                 <motion.div
//                   animate={{ rotate: openIndex === i ? 180 : 0 }}
//                   transition={{ duration: 0.2 }}
//                 >
//                   <ChevronDown size={26} className="text-emerald-700" />
//                 </motion.div>
//               </button>

//               {/* Body */}
//               <AnimatePresence>
//                 {openIndex === i && group.cards.length > 0 && (
//                   <motion.div
//                     key={`body-${i}`}
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.35 }}
//                     className="px-6 pb-6"
//                   >
//                     <Slider {...settings}>
//                       {group.cards.map((card) => (
//                         <div key={card.id} className="px-3">
//                           <motion.div
//                             whileHover={{ y: -6, scale: 1.02 }}
//                             transition={{
//                               type: "spring",
//                               stiffness: 260,
//                               damping: 18,
//                             }}
//                             className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-lg cursor-pointer"
//                           >
//                             <h3 className="text-lg font-bold text-emerald-800">
//                               {card.title}
//                             </h3>

//                             <p className="text-gray-600 mt-2">
//                               {card.preview}
//                             </p>

//                             <div className="mt-4 text-sm text-emerald-700 font-medium">
//                               {card.positions} positions • {card.daysLeft} days left
//                             </div>

//                             <div className="mt-5 flex gap-3">
//                               <button
//                                 onClick={() =>
//                                   navigate(`/career/${card.id}`, {
//                                     state: card,
//                                   })
//                                 }
//                                 className="flex-1 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700"
//                               >
//                                 See Details
//                               </button>

//                               <button
//                                 onClick={() =>
//                                   navigate(`/career/${card.id}`, {
//                                     state: card,
//                                   })
//                                 }
//                                 className="py-2 px-4 border border-emerald-600 text-emerald-700 rounded-lg hover:bg-emerald-50"
//                               >
//                                 Apply
//                               </button>
//                             </div>
//                           </motion.div>
//                         </div>
//                       ))}
//                     </Slider>
//                   </motion.div>
//                 )}
//               </AnimatePresence>

//               {/* If search gives zero results */}
//               {openIndex === i && group.cards.length === 0 && (
//                 <p className="px-6 pb-6 text-center text-gray-500">
//                   No matching roles found.
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



// CareerPage.jsx — Option C (Select Dropdown + Search + See More + Auto Scroll)

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowLeft } from "lucide-react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import jobs from "./../../data/jobsData";

export default function CareerPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCards, setVisibleCards] = useState({});
  const scrollRef = useRef(null);

  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3200,
    arrows: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const categories = ["All", ...jobs.map((g) => g.category)];

  const filteredJobs = jobs
    .filter((g) => (selectedCategory === "All" ? true : g.category === selectedCategory))
    .map((g) => ({
      ...g,
      cards: g.cards.filter((c) => c.title.toLowerCase().includes(search.toLowerCase())),
    }));

  const handleSeeMore = (cat) => {
    setVisibleCards((prev) => ({
      ...prev,
      [cat]: (prev[cat] || 3) + 3,
    }));
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [openIndex]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-lime-100 py-12 px-4 mt-4">
      <div className="max-w-7xl mx-auto">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-emerald-800 font-semibold mb-6 hover:underline">
          <ArrowLeft size={22} /> Go Back
        </button>

        {/* <h1 className="text-4xl font-extrabold text-emerald-800 text-center mb-8">Join With Us</h1> */}
        <h1 className="text-xl md:text-6xl font-extrabold text-emerald-700 text-center mb-6">
  Growing the Future of <span className="text-green-500">FertiBase</span>
</h1>
<p className="text-md md:text-lg text-gray-700 max-w-3xl mx-auto mb-9 text-center">
  Innovative solutions for sustainable and smarter farming — empowering growth, naturally.
</p>


        <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-10">
          <input
            type="text"
            placeholder="Search roles..."
            className="w-full md:w-96 px-5 py-3 rounded-xl border border-emerald-300 shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full md:w-64 px-4 py-3 rounded-xl border border-emerald-300 shadow-sm bg-white text-emerald-700 focus:ring-2 focus:ring-emerald-500 outline-none"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="space-y-6">
          {filteredJobs.map((group, i) => (
            <div
              ref={openIndex === i ? scrollRef : null}
              key={group.category}
              className="bg-white/80 rounded-2xl border border-emerald-100 shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5"
              >
                <div>
                  <h2 className="text-2xl font-semibold text-emerald-800">{group.category}</h2>
                  <p className="text-sm text-emerald-600 mt-1 flex justify-start">{group.cards.length} roles available</p>
                </div>

                <motion.div animate={{ rotate: openIndex === i ? 180 : 0 }}>
                  <ChevronDown size={26} className="text-emerald-700" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && group.cards.length > 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="px-6 pb-6"
                  >
                    <Slider {...settings}>
                      {group.cards.slice(0, visibleCards[group.category] || 9).map((card) => (
                        // <div key={card.id} className="px-3">
                        //   <motion.div whileHover={{ y: -6, scale: 1.02 }} className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-lg cursor-pointer">
                        //     <h3 className="text-lg font-bold text-emerald-800">{card.title}</h3>
                        //     <p className="text-gray-600 mt-2">{card.preview}</p>
                        //     <div className="mt-4 text-sm text-emerald-700 font-medium">{card.positions} positions • {card.daysLeft} days left</div>

                        //     <div className="mt-5 flex gap-3">
                        //       {/* <button onClick={() => navigate(`/career/${card.id}`, { state: card })} className="flex-1 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700">See Details</button> */}
                        //       <button onClick={() => navigate(`/career/${card.id}`, { state: card })} className="py-2 px-4 border border-emerald-600 text-emerald-700 rounded-lg hover:bg-emerald-50">See Details</button>
                        //     </div>
                        //   </motion.div>
                        // </div>
                        <div key={card.id} className="px-3">
                          <motion.div
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 220, damping: 18 }}
                            className="
      bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl 
      rounded-3xl cursor-pointer p-6 h-[380px] flex flex-col justify-between m-3
    "
                          >
                            <div>
                              <h3 className="text-2xl font-bold text-emerald-900 tracking-tight line-clamp-1">
                                {card.title}
                              </h3>

                              <p className="text-gray-700 mt-3 text-base line-clamp-4 leading-relaxed">
                                {card.preview}
                              </p>
                            </div>

                            <div>
                              <div className="text-sm text-emerald-800 font-semibold ">
                                {card.positions} positions • {card.daysLeft} days left
                              </div>

                              <button
                                onClick={() => navigate(`/career/${card.id}`, { state: card })}
                                className="
          mt-5 w-full py-2.5 rounded-xl font-medium text-emerald-900
          bg-emerald-100 hover:bg-emerald-200 transition
        "
                              >
                                See Details →
                              </button>
                            </div>
                          </motion.div>
                        </div>


                      ))}
                    </Slider>

                    {group.cards.length > (visibleCards[group.category] || 3) && (
                      <div className="text-center mt-6">
                        <button onClick={() => handleSeeMore(group.category)} className="px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700">See More Jobs</button>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {openIndex === i && group.cards.length === 0 && (
                <p className="px-6 pb-6 text-center text-gray-500">No matching roles found.</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
