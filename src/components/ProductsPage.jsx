// import { ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { products } from "./../../data/productsData";

// export default function Products() {
//   const navigate = useNavigate();

//   return (
//     <section id="products" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
//           Our Premium Products
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
//               onClick={() => navigate(`/products/${product.id}`)}
//             >
//               <div
//                 className="bg-gray-200 border-2 border-dashed h-48"
//                 style={{
//                   backgroundImage: `url(${product.image})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               ></div>
//               <div className="p-6">
//                 {product.badge && (
//                   <span className="bg-green-200 text-green-900 text-xs font-bold px-3 py-1 rounded-full">
//                     {product.badge}
//                   </span>
//                 )}
//                 <h3 className="text-2xl font-bold mt-3">{product.name}</h3>
//                 <p className="text-gray-600 mt-2">{product.desc}</p>
//                 <button className="mt-4 text-green-600 font-semibold hover:text-green-800 flex items-center">
//                   Learn More <ChevronRight className="ml-1 h-5 w-5" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// import { ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { products } from "../../data/productsData";

// export default function Products() {
//   const navigate = useNavigate();

//   // Filter products that have at least a name and image
//   const validProducts = products.filter(
//     (p) => p.name && p.image
//   );

//   return (
//     <section id="products" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
//           Our Premium Products
//         </h2>

//         {validProducts.length === 0 ? (
//           <p className="text-center text-gray-500">No products available at the moment.</p>
//         ) : (
//           <div className="grid md:grid-cols-3 gap-8">
//             {validProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
//                 onClick={() => navigate(`/products/${product.id}`)}
//               >
//                 <div
//                   className="bg-gray-200 border-2 border-dashed h-48"
//                   style={{
//                     backgroundImage: `url(${product.image})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                   }}
//                 ></div>
//                 <div className="p-6">
//                   {product.badge && (
//                     <span className="bg-green-200 text-green-900 text-xs font-bold px-3 py-1 rounded-full">
//                       {product.badge}
//                     </span>
//                   )}
//                   <h3 className="text-2xl font-bold mt-3">{product.name}</h3>
//                   {product.desc && <p className="text-gray-600 mt-2">{product.desc}</p>}
//                   <button className="mt-4 text-green-600 font-semibold hover:text-green-800 flex items-center">
//                     Learn More <ChevronRight className="ml-1 h-5 w-5" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }



// import { ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { products } from "./../../data/productsData";

// export default function ProductsPage() {
//   const navigate = useNavigate();

//   const validProducts = products.filter((p) => p.name && p.image);

//   return (
//     <section className="py-20 bg-gray-50 min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
//           Our Premium Products
//         </h2>

//         {validProducts.length === 0 ? (
//           <p className="text-center text-gray-500">No products available at the moment.</p>
//         ) : (
//           <div className="grid md:grid-cols-3 gap-8">
//             {validProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
//                 onClick={() => navigate(`/products/${product.id}`)}
//               >
//                 <div
//                   className="bg-gray-200 border-2 border-dashed h-48"
//                   style={{
//                     backgroundImage: `url(${product.image})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                   }}
//                 ></div>
//                 <div className="p-6">
//                   {product.badge && (
//                     <span className="bg-green-200 text-green-900 text-xs font-bold px-3 py-1 rounded-full">
//                       {product.badge}
//                     </span>
//                   )}
//                   <h3 className="text-2xl font-bold mt-3">{product.name}</h3>
//                   {product.desc && <p className="text-gray-600 mt-2">{product.desc}</p>}
//                   <button className="mt-4 text-green-600 font-semibold hover:text-green-800 flex items-center">
//                     Learn More <ChevronRight className="ml-1 h-5 w-5" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }



// import { ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { products } from "./../../data/productsData";

// export default function ProductsPage() {
//   const navigate = useNavigate();

//   // Extract unique categories from products
//   const categories = [
//     "All",
//     ...Array.from(new Set(products.map((p) => p.category || "Uncategorized")))
//   ];

//   const [activeCategory, setActiveCategory] = useState("All");

//   // Filter products based on active category
//   const filteredProducts =
//     activeCategory === "All"
//       ? products
//       : products.filter(
//           (p) => (p.category || "Uncategorized") === activeCategory
//         );

//         if (!products) {
//     return (
//       <div className="text-center py-20">
//         <h2 className="text-3xl font-bold text-gray-800">Product Not Found</h2>
//         <Link
//           to="/products"
//           className="text-green-600 underline mt-4 inline-block"
//         >
//           Back to Products
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <section className="py-20 bg-gray-50 min-h-screen">
//       <Link
//           to="/products"
//           className="inline-block text-green-600 font-semibold my-16 ml-4 hover:text-green-800 mb-4"
//         >
//           ← Back to Products
//         </Link>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
//           Our Premium Products
//         </h2>

//         {/* Category Tabs */}
//         <div className="flex flex-wrap justify-center mb-12 space-x-2">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveCategory(cat)}
//               className={`px-4 py-2 rounded-full font-semibold transition ${
//                 activeCategory === cat
//                   ? "bg-green-600 text-white shadow"
//                   : "bg-white text-gray-700 border border-gray-300 hover:bg-green-100"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         {filteredProducts.length === 0 ? (
//           <p className="text-center text-gray-500">No products available.</p>
//         ) : (
//           <div className="grid md:grid-cols-3 gap-8">
//             {filteredProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
//                 onClick={() => navigate(`/products/${product.id}`)}
//               >
//                 <div
//                   className="bg-gray-200 border-2 border-dashed h-48"
//                   style={{
//                     backgroundImage: `url(${product.image})`,
//                     backgroundSize: "cover",
//                     backgroundPosition: "center",
//                   }}
//                 ></div>
//                 <div className="p-6">
//                   {product.badge && (
//                     <span className="bg-green-200 text-green-900 text-xs font-bold px-3 py-1 rounded-full">
//                       {product.badge}
//                     </span>
//                   )}
//                   <h3 className="text-2xl font-bold mt-3">{product.name}</h3>
//                   {product.desc && (
//                     <p className="text-gray-600 mt-2">{product.desc}</p>
//                   )}
//                   <button className="mt-4 text-green-600 font-semibold hover:text-green-800 flex items-center">
//                     View More <ChevronRight className="ml-1 h-5 w-5" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }



// import { ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { products } from "./../../data/productsData";

// export default function ProductsPage() {
//   const navigate = useNavigate();

//   // Extract unique categories from products
//   const categories = [
//     "All",
//     ...Array.from(new Set(products.map((p) => p.category || "Uncategorized"))),
//   ];

//   const [activeCategory, setActiveCategory] = useState("All");

//   // Filter products based on active category
//   const filteredProducts =
//     activeCategory === "All"
//       ? products
//       : products.filter(
//           (p) => (p.category || "Uncategorized") === activeCategory
//         );

//   return (
//     <section className="py-20 bg-gray-50 min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Back Button inside the page */}
//         <div className="mb-6">
//           <button
//             onClick={() => navigate(-1)}
//             className="text-indigo-600 font-semibold my-16 ml-2 hover:text-indigo-800 mb-4"
//           >
//             ← Back to Products
//           </button>
//         </div>

//         <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
//           Our Products
//         </h2>

//         {/* Category Tabs */}
//         <div className="flex flex-wrap justify-center mb-12 space-x-2">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveCategory(cat)}
//               className={`px-4 py-2 rounded-full font-semibold transition ${
//                 activeCategory === cat
//                   ? "bg-indigo-600 text-white shadow"
//                   : "bg-white text-gray-700 border border-gray-300 hover:bg-indigo-100"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         {filteredProducts.length === 0 ? (
//           <p className="text-center text-gray-500">No products available.</p>
//         ) : (
//           <div className="grid md:grid-cols-3 gap-8">
//             {filteredProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-white rounded-xl shadow-indigo-200 overflow-hidden hover:shadow-2xl transition cursor-pointer"
//                 onClick={() => navigate(`/products/${product.id}`)}
//               >
//                 <div
//                   className="bg-gray-200 border-2 border-dashed h-60 bg-gradient-to-br from-purple-100 to-gray-600 "
                  
//                 ></div>
//                 <div className="p-6">
//                   {product.badge && (
//                     <span className="bg-green-200 text-green-900 text-xs font-bold px-3 py-1 rounded-full">
//                       {product.badge}
//                     </span>
//                   )}
//                   <h3 className="text-2xl font-bold mt-3">{product.name}</h3>
//                   {product.desc && (
//                     <p className="text-gray-600 mt-2">{product.desc}</p>
//                   )}
//                   <button className="mt-4 text-indigo-600 font-semibold hover:text-indigo-400 flex items-center">
//                     View More <ChevronRight className="ml-1 h-5 w-5" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }


// import { ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import { products } from "./../../data/productsData";

// export default function ProductsPage() {
//   const navigate = useNavigate();

//   // Extract unique categories
//   const categories = [
//     "All",
//     ...Array.from(new Set(products.map((p) => p.category || "Uncategorized"))),
//   ];

//   const [activeCategory, setActiveCategory] = useState("All");

//   // Filter products by category
//   const filteredProducts =
//     activeCategory === "All"
//       ? products
//       : products.filter(
//           (p) => (p.category || "Uncategorized") === activeCategory
//         );

//   return (
//     <section className="py-20 bg-gray-50 min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Back Button */}
//         <div className="mb-6">
//           <button
//             onClick={() => navigate(-1)}
//             className="text-indigo-600 font-semibold my-16 ml-2 hover:text-indigo-800 mb-4"
//           >
//             ← Back to Products
//           </button>
//         </div>

//         <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
//           Our Products
//         </h2>

//         {/* Category Tabs */}
//         <div className="flex flex-wrap justify-center mb-12 gap-2">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveCategory(cat)}
//               className={`px-4 py-2 rounded-full font-semibold transition ${
//                 activeCategory === cat
//                   ? "bg-indigo-600 text-white shadow"
//                   : "bg-white text-gray-700 border border-gray-300 hover:bg-indigo-100"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Product Cards */}
//         {filteredProducts.length === 0 ? (
//           <p className="text-center text-gray-500">No products available.</p>
//         ) : (
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer"
//                 onClick={() => navigate(`/products/${product.id}`)}
//               >
//                 {/* Image Section */}
//                 <div className="h-60 w-full bg-gradient-to-br from-purple-100 to-gray-600 flex items-center justify-center overflow-hidden">
//                   <img
//                     src={product.image || "/images/placeholder.jpg"}
//                     alt={product.name}
//                     className="object-contain h-full w-full"
//                   />
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-6">
//                   {product.badge && (
//                     <span className="bg-green-200 text-green-900 text-xs font-bold px-3 py-1 rounded-full">
//                       {product.badge}
//                     </span>
//                   )}
//                   <h3 className="text-2xl font-bold text-gray-900 mt-3">
//                     {product.name}
//                   </h3>
//                   {product.desc && (
//                     <p className="text-gray-600 mt-2 line-clamp-3">
//                       {product.desc}
//                     </p>
//                   )}
//                   <button className="mt-4 text-indigo-600 font-semibold hover:text-indigo-400 flex items-center">
//                     View More <ChevronRight className="ml-1 h-5 w-5" />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }


// import { ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { products } from "./../../data/productsData";

// export default function ProductsPage() {
//   const navigate = useNavigate();

//   // Extract unique categories
//   const categories = [
//     "All",
//     ...Array.from(new Set(products.map((p) => p.category || "Uncategorized"))),
//   ];

//   const [activeCategory, setActiveCategory] = useState("All");

//   // Filter products by category
//   const filteredProducts =
//     activeCategory === "All"
//       ? products
//       : products.filter(
//           (p) => (p.category || "Uncategorized") === activeCategory
//         );

//   return (
//     <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100 min-h-screen">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Back Button */}
//         <div className="mb-6">
//           <button
//             onClick={() => navigate(-1)}
//             className="text-emerald-700 font-semibold my-16 ml-2 hover:text-emerald-900 mb-4"
//           >
//             ← Back to Products
//           </button>
//         </div>

//         <h2 className="text-4xl font-bold text-center text-gray-900 mb-10">
//           Our Products
//         </h2>

//         {/* Category Tabs */}
//         <div className="flex flex-wrap justify-center mb-12 gap-3">
//           {categories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => setActiveCategory(cat)}
//               className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
//                 activeCategory === cat
//                   ? "bg-emerald-600 text-white shadow-md scale-105"
//                   : "bg-white text-gray-700 border border-gray-300 hover:bg-emerald-100"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Product Cards */}
//         {filteredProducts.length === 0 ? (
//           <p className="text-center text-gray-500">No products available.</p>
//         ) : (
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//             {filteredProducts.map((product, i) => (
//               <motion.div
//                 key={product.id}
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1, duration: 0.5 }}
//                 whileHover={{ scale: 1.04 }}
//                 onClick={() => navigate(`/products/${product.id}`)}
//                 className="group relative bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
//               >
//                 {/* Image Section */}
//                 {/* <div className="relative h-64 overflow-hidden bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
//                   <motion.img
//                     src={product.image || "/images/placeholder.jpg"}
//                     alt={product.name}
//                     className="object-contain h-full w-full transform group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 </div> */}








// <div className="relative h-64 overflow-hidden bg-gradient-to-br from-green-500 via-emerald-100 to-green-200 flex items-center justify-center rounded-3xl group">
//   {/* Soft Rotating Glow Ring */}
//   <motion.div
//     className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-green-300/40 via-emerald-200/20 to-transparent blur-3xl"
//     animate={{ rotate: 360 }}
//     transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
//   />

//   {/* Product Image with Tilt + Zoom */}
//   <motion.img
//     src={product.image || "/images/placeholder.jpg"}
//     alt={product.name}
//     className="object-contain h-full w-full z-10"
//     initial={{ scale: 1 }}
//     whileHover={{
//       scale: 1.1,
//       rotateY: 6,
//       rotateX: 2,
//       transition: { duration: 0.6, ease: "easeInOut" },
//     }}
//   />

//   {/* 🪄 Dynamic Gradient Overlay (moves & shines) */}
//   <motion.div
//     className="absolute inset-0 bg-gradient-to-tr from-green-400/20 via-transparent to-emerald-500/20 opacity-0 group-hover:opacity-100"
//     animate={{
//       backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
//     }}
//     transition={{
//       duration: 4,
//       ease: "easeInOut",
//       repeat: Infinity,
//     }}
//     style={{
//       backgroundSize: "200% 200%",
//       mixBlendMode: "overlay",
//     }}
//   />

//   {/* ✨ Moving Light Shine */}
//   <motion.div
//     className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
//     initial={{ x: "-100%" }}
//     whileHover={{
//       x: ["-100%", "100%"],
//       transition: { duration: 1.8, ease: "easeInOut" },
//     }}
//     style={{ mixBlendMode: "soft-light" }}
//   />

//   {/* Floating Glow Particles */}
//   {[...Array(4)].map((_, i) => (
//     <motion.span
//       key={i}
//       className="absolute w-2 h-2 bg-emerald-400/40 rounded-full blur-sm"
//       initial={{
//         x: Math.random() * 180 - 90,
//         y: Math.random() * 120 - 60,
//         opacity: 0.5,
//       }}
//       animate={{
//         y: ["0%", "30%", "0%"],
//         opacity: [0.4, 0.8, 0.4],
//       }}
//       transition={{
//         duration: 4 + Math.random() * 2,
//         repeat: Infinity,
//         repeatType: "mirror",
//         ease: "easeInOut",
//         delay: i * 0.4,
//       }}
//     />
//   ))}
// </div>



                



//                 {/* Content Section */}
//                 <div className="p-6">
//                   {product.badge && (
//                     <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
//                       {product.badge}
//                     </span>
//                   )}

//                   <h3 className="text-2xl font-bold text-gray-900 mt-3 group-hover:text-emerald-700 transition-colors">
//                     {product.name}
//                   </h3>

//                   {product.desc && (
//                     <p className="text-gray-600 mt-2 line-clamp-3">
//                       {product.desc}
//                     </p>
//                   )}

//                   <div className="mt-5 flex items-center text-emerald-700 font-semibold group-hover:text-emerald-900 transition-colors">
//                     View More <ChevronRight className="ml-1 h-5 w-5" />
//                   </div>
//                 </div>

//                 {/* Decorative Border on Hover */}
//                 <div className="absolute inset-0 border-2 border-transparent rounded-3xl group-hover:border-emerald-400 transition-all duration-300"></div>
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }





// import { ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { products } from "./../../data/productsData";

// export default function ProductsPage() {
//   const navigate = useNavigate();

//   const categories = [
//     "All",
//     ...Array.from(new Set(products.map((p) => p.category || "Uncategorized"))),
//   ];

//   const [activeCategory, setActiveCategory] = useState("All");

//   const filteredProducts =
//     activeCategory === "All"
//       ? products
//       : products.filter(
//           (p) => (p.category || "Uncategorized") === activeCategory
//         );

//   return (
//     <section className="py-20 bg-gradient-to-br from-green-100 via-emerald-200 to-green-300 min-h-screen relative overflow-hidden">
//       {/* Floating Glow Blobs */}
//       <motion.div
//         className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-400/30 rounded-full blur-3xl"
//         animate={{
//           x: [0, 30, 0],
//           y: [0, 50, 0],
//         }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-0 right-0 w-96 h-96 bg-lime-400/20 rounded-full blur-3xl"
//         animate={{
//           x: [0, -40, 0],
//           y: [0, -60, 0],
//         }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Back Button */}
//         <div className="mb-6">
//           <button
//             onClick={() => navigate(-1)}
//             className="text-emerald-800 font-semibold my-16 ml-2 hover:text-emerald-950 mb-4"
//           >
//             ← Back to Products
//           </button>
//         </div>

//         <h2 className="text-5xl font-extrabold text-center text-emerald-900 mb-12 drop-shadow-md">
//           Our Premium Products
//         </h2>

//         {/* Category Tabs */}
//         <div className="flex flex-wrap justify-center mb-12 gap-3">
//           {categories.map((cat) => (
//             <motion.button
//               key={cat}
//               onClick={() => setActiveCategory(cat)}
//               whileTap={{ scale: 0.9 }}
//               className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 backdrop-blur-md ${
//                 activeCategory === cat
//                   ? "bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-lg shadow-emerald-300/40 scale-105"
//                   : "bg-white/60 text-gray-700 border border-gray-300 hover:bg-emerald-100/60"
//               }`}
//             >
//               {cat}
//             </motion.button>
//           ))}
//         </div>

//         {/* Product Cards */}
//         {filteredProducts.length === 0 ? (
//           <p className="text-center text-gray-500">No products available.</p>
//         ) : (
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//             {filteredProducts.map((product, i) => (
//               <motion.div
//                 key={product.id}
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1, duration: 0.5 }}
//                 whileHover={{ scale: 1.04 }}
//                 onClick={() => navigate(`/products/${product.id}`)}
//                 className="group relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 border border-emerald-200"
//               >
//                 {/* Image Section */}
//                 <div className="relative h-64 overflow-hidden bg-gradient-to-br from-emerald-600 via-green-300 to-lime-200 flex items-center justify-center rounded-3xl group">
//                   {/* Soft Rotating Glow */}
//                   <motion.div
//                     className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-green-400/40 via-lime-200/20 to-transparent blur-3xl"
//                     animate={{ rotate: 360 }}
//                     transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
//                   />

//                   {/* Product Image */}
//                   <motion.img
//                     src={product.image || "/images/placeholder.jpg"}
//                     alt={product.name}
//                     className="object-contain h-full w-full z-10"
//                     initial={{ scale: 1 }}
//                     whileHover={{
//                       scale: 1.1,
//                       rotateY: 5,
//                       rotateX: 2,
//                       transition: { duration: 0.6, ease: "easeInOut" },
//                     }}
//                   />

//                   {/* Shine effect */}
//                   <motion.div
//                     className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100"
//                     initial={{ x: "-100%" }}
//                     whileHover={{
//                       x: ["-100%", "100%"],
//                       transition: { duration: 1.5, ease: "easeInOut" },
//                     }}
//                     style={{ mixBlendMode: "soft-light" }}
//                   />
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-6 text-center">
//                   {product.badge && (
//                     <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full">
//                       {product.badge}
//                     </span>
//                   )}
//                   <h3 className="text-2xl font-bold text-emerald-800 mt-3 group-hover:text-green-900 transition-colors">
//                     {product.name}
//                   </h3>

//                   {product.desc && (
//                     <p className="text-gray-700 mt-2 line-clamp-3">
//                       {product.desc}
//                     </p>
//                   )}

//                   <div className="mt-5 flex items-center justify-center text-emerald-700 font-semibold group-hover:text-green-900 transition-colors">
//                     View More <ChevronRight className="ml-1 h-5 w-5" />
//                   </div>
//                 </div>

//                 {/* Border Glow */}
//                 <motion.div
//                   className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-emerald-400/80"
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }






// import { ChevronRight } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { products } from "./../../data/productsData";

// export default function ProductsPage() {
//   const navigate = useNavigate();

//   const categories = [
//     "All",
//     ...Array.from(new Set(products.map((p) => p.category || "Uncategorized"))),
//   ];

//   const [activeCategory, setActiveCategory] = useState("All");

//   const filteredProducts =
//     activeCategory === "All"
//       ? products
//       : products.filter(
//           (p) => (p.category || "Uncategorized") === activeCategory
//         );

//   return (
//     <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-lime-100 min-h-screen relative overflow-hidden">
//       {/* Floating Glow Blobs */}
//       <motion.div
//         className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl"
//         animate={{
//           x: [0, 30, 0],
//           y: [0, 50, 0],
//         }}
//         transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
//       />
//       <motion.div
//         className="absolute bottom-0 right-0 w-96 h-96 bg-lime-300/30 rounded-full blur-3xl"
//         animate={{
//           x: [0, -40, 0],
//           y: [0, -60, 0],
//         }}
//         transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
//       />

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Back Button */}
//         <div className="mb-6">
//           <button
//             onClick={() => navigate(-1)}
//             className="inline-block text-emerald-700 font-semibold mb-8  hover:text-emerald-900 transition-colors"
//           >
//             ← Back to Products
//           </button>
//         </div> 

//         <h2 className="text-5xl font-extrabold text-center text-emerald-800 mb-12 drop-shadow-sm">
//           Our Products
//         </h2>

//         {/* Category Tabs */}
//         <div className="flex flex-wrap justify-center mb-12 gap-3">
//           {categories.map((cat) => (
//             <motion.button
//               key={cat}
//               onClick={() => setActiveCategory(cat)}
//               whileTap={{ scale: 0.9 }}
//               className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 backdrop-blur-md ${
//                 activeCategory === cat
//                   ? "bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-lg shadow-emerald-300/30 scale-105"
//                   : "bg-white/80 text-gray-700 border border-gray-300 hover:bg-emerald-50"
//               }`}
//             >
//               {cat}
//             </motion.button>
//           ))}
//         </div>

//         {/* Product Cards */}
//         {filteredProducts.length === 0 ? (
//           <p className="text-center text-gray-500">No products available.</p>
//         ) : (
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//             {filteredProducts.map((product, i) => (
//               <motion.div
//                 key={product.id}
//                 initial={{ opacity: 0, y: 40 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.1, duration: 0.5 }}
//                 whileHover={{ scale: 1.04 }}
//                 onClick={() => navigate(`/products/${product.id}`)}
//                 className="group relative bg-gradient-to-br from-white via-white-50 to-green-50 rounded-3xl shadow-md overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 border border-emerald-100"
//               >
//                 {/* Image Section */}
//                 <div className="relative h-64 overflow-hidden bg-gradient-to-br from-lime-700 via-green-100 to-lime-500 flex items-center justify-center rounded-3xl group">
//                   {/* Soft Glow */}
//                   {/* <motion.div
//                     className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-green-200/30 via-lime-100/20 to-transparent blur-3xl"
//                     animate={{ rotate: 360 }}
//                     transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
//                   /> */}
//                   <motion.div
//   className="absolute w-72 h-72  bg-green-100/40 "
//   animate={{ rotate: 360 }}
//   transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
// />


//                   {/* Product Image */}
//                   <motion.img
//                     src={product.image || "/images/placeholder.jpg"}
//                     alt={product.name}
//                     className="object-contain h-full w-full z-10"
//                     initial={{ scale: 1 }}
//                     whileHover={{
//                       scale: 1.1,
//                       rotateY: 5,
//                       rotateX: 2,
//                       transition: { duration: 0.6, ease: "easeInOut" },
//                     }}
//                   />

//                   {/* Light Shine */}
//                   <motion.div
//                     className="absolute inset-0  opacity-0 group-hover:opacity-100"
//                     initial={{ x: "-100%" }}
//                     whileHover={{
//                       x: ["-100%", "100%"],
//                       transition: { duration: 1.5, ease: "easeInOut" },
//                     }}
//                     style={{ mixBlendMode: "soft-light" }}
//                   />
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-6 text-left">
//                   {product.badge && (
//                     <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
//                       {product.badge}
//                     </span>
//                   )}
//                   <h3 className="text-2xl font-bold text-emerald-800 mt-3 group-hover:text-green-900 transition-colors">
//                     {product.name}
//                   </h3>

//                   {/* {product.desc && (
//                     <p className="text-gray-600 mt-2 line-clamp-3">
//                       {product.desc}
//                     </p>
//                   )} */}

//                   <div className="mt-5 flex items-right justify-center text-emerald-700 font-semibold group-hover:text-green-900 transition-colors">
//                     View More <ChevronRight className="ml-1 h-5 w-5" />
//                   </div>
//                 </div>

//                 {/* Border Glow */}
//                 <motion.div
//                   className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-emerald-300/60"
//                   transition={{ duration: 0.3 }}
//                 />
//               </motion.div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }



import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { products } from "./../../data/productsData";

export default function ProductsPage() {
  const navigate = useNavigate();

  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category || "Uncategorized"))),
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (p) => (p.category || "Uncategorized") === activeCategory
        );

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-emerald-50 to-lime-100 min-h-screen relative overflow-hidden">
      {/* Floating Glow Blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-lime-300/30 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, -60, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-block text-emerald-700 font-semibold mb-8 hover:text-emerald-900 transition-colors"
          >
            ← Back to Products
          </button>
        </div>

        {/* <h2 className="text-5xl font-extrabold text-center text-emerald-800 mb-12 drop-shadow-sm">
          Our Products
        </h2> */}
{/* Innovations by FertiBase */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-emerald-700 text-center mb-12">
          Innovations <span className="text-green-500">By FertiBase</span>
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-3">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileTap={{ scale: 0.9 }}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 backdrop-blur-md ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-lg shadow-emerald-300/30 scale-105"
                  : "bg-white/80 text-gray-700 border border-gray-300 hover:bg-emerald-50"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Product Cards */}
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500">No products available.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {filteredProducts.map((product, i) => (
              <motion.div
  key={product.id}
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: i * 0.1, duration: 0.5 }}
  whileHover={{ scale: 1.03 }}   // smoother and clean
  onClick={() => navigate(`/products/${product.id}`)}
  className="group relative bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer transition-all duration-500 border border-green-200/60 hover:border-green-400/70 hover:shadow-emerald-200/40 hover:shadow-[0px_0px_25px]"
>
  {/* Inner Shine */}
  <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-white/20 via-transparent to-emerald-100/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

  {/* Image Section */}
  <div className="relative h-52 bg-green-100 flex items-center justify-center rounded-3xl overflow-hidden">
    <motion.img
      src={product.image || "/images/placeholder.jpg"}
      alt={product.name}
      className="object-contain h-40 w-40 z-10"   // smaller + fixed size
      initial={{ scale: 0.95 }}
      whileHover={{
        scale: 1.05,   // small subtle zoom
        transition: { duration: 0.4, ease: "easeInOut" },
      }}
    />
  </div>

  {/* Content Section */}
  <div className="p-6 text-left">
    {product.badge && (
      <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
        {product.badge}
      </span>
    )}

    <h3 className="text-lg font-bold text-emerald-800 mt-3 group-hover:text-green-900 transition-colors">
      {product.name}
    </h3>

    <div className="mt-5 flex items-center justify-end text-emerald-700 font-semibold group-hover:text-green-900 transition-colors">
      View More <ChevronRight className="ml-1 h-5 w-5" />
    </div>
  </div>

  {/* Premium Border Glow */}
  <motion.div
    className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-emerald-300 transition-all duration-500"
  />
</motion.div>

            ))}
          </div>
        )}
      </div>
    </section>
  );
}



