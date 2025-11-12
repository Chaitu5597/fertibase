// import { useParams, Link } from "react-router-dom";
// import { products } from "./../../data/productsData";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const product = products.find((p) => p.id === id);

//   if (!product) {
//     return (
//       <div className="text-center py-20">
//         <h2 className="text-3xl font-bold text-gray-800">Product Not Found</h2>
//         <Link to="/products" className="text-green-600 underline">
//           Back to Products
//         </Link>
//       </div>
//     );
//   }

//   return (

//     <div>

  
//       <div className="my-10">

//         <Link
//         to="/products"
//         className="text-green-600 font-semibold hover:text-green-800"
//       >
//         ← Back to Products
//       </Link>
//       </div>
//      <div className="max-w-4xl mx-auto py-16 px-6">

//       <img
//         src={product.image}
//         alt={product.name}
//         className="rounded-xl shadow-lg mb-8 w-full h-80 object-cover"
//       />
//       <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
//       {product.category && (
//         <p className="text-sm text-gray-500 mb-4 uppercase">{product.category}</p>
//       )}
//       <p className="text-gray-700 mb-4 font-medium">{product.desc}</p>
//       <p className="text-gray-600 mb-6">{product.details}</p>

//       {product.benefits?.length > 0 && (
//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold mb-2">Benefits:</h2>
//           <ul className="list-disc list-inside text-gray-600">
//             {product.benefits.map((benefit, index) => (
//               <li key={index}>{benefit}</li>
//             ))}
//           </ul>
//         </div>
//       )}

//       <div className="grid grid-cols-2 gap-4 mb-6">
//         {product.dosage && (
//           <div>
//             <h3 className="font-semibold text-gray-800">Dosage</h3>
//             <p className="text-gray-600">{product.dosage}</p>
//           </div>
//         )}
//         {product.application && (
//           <div>
//             <h3 className="font-semibold text-gray-800">Application</h3>
//             <p className="text-gray-600">{product.application}</p>
//           </div>
//         )}
//         {product.crops && (
//           <div>
//             <h3 className="font-semibold text-gray-800">Crops</h3>
//             <p className="text-gray-600">{product.crops}</p>
//           </div>
//         )}
//       </div>

      
//     </div>
//       </div>
//   );
// }



// import { useParams, Link } from "react-router-dom";
// import { products } from "./../../data/productsData";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const product = products.find((p) => p.id === id);

//   if (!product) {
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
//     <div className="py-16 bg-gray-50 min-h-screen">
//       <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Back link */}
//         <div className="mb-6">
//           <Link
//             to="/products"
//             className="text-green-600 font-semibold hover:text-green-800 flex items-center"
//           >
//             ← Back to Products
//           </Link>
//         </div>

//         {/* Product card */}
//         <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-96 object-cover"
//           />

//           <div className="p-8">
//             {/* Product title and category */}
//             <div className="mb-4">
//               <h1 className="text-4xl font-bold text-gray-900 mb-1">{product.name}</h1>
//               {product.category && (
//                 <span className="text-sm text-gray-500 uppercase tracking-wide">
//                   {product.category}
//                 </span>
//               )}
//             </div>

//             {/* Description and details */}
//             <div className="mb-6">
//               <p className="text-gray-700 mb-2 font-medium">{product.desc}</p>
//               <p className="text-gray-600">{product.details}</p>
//             </div>

//             {/* Benefits */}
//             {product.benefits?.length > 0 && (
//               <div className="mb-6">
//                 <h2 className="text-2xl font-semibold text-gray-800 mb-2">Benefits</h2>
//                 <ul className="list-disc list-inside text-gray-600 space-y-1">
//                   {product.benefits.map((benefit, index) => (
//                     <li key={index}>{benefit}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {/* Dosage, Application, Crops */}
//             <div className="grid sm:grid-cols-2 gap-6 mb-6">
//               {product.dosage && (
//                 <div className="p-4 border rounded-lg bg-gray-50">
//                   <h3 className="font-semibold text-gray-800 mb-1">Dosage</h3>
//                   <p className="text-gray-600">{product.dosage}</p>
//                 </div>
//               )}
//               {product.application && (
//                 <div className="p-4 border rounded-lg bg-gray-50">
//                   <h3 className="font-semibold text-gray-800 mb-1">Application</h3>
//                   <p className="text-gray-600">{product.application}</p>
//                 </div>
//               )}
//               {product.crops && (
//                 <div className="p-4 border rounded-lg bg-gray-50">
//                   <h3 className="font-semibold text-gray-800 mb-1">Crops</h3>
//                   <p className="text-gray-600">{product.crops}</p>
//                 </div>
//               )}
//             </div>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// import { useParams, Link } from "react-router-dom";
// import { products } from "./../../data/productsData";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const product = products.find((p) => p.id === id);

//   if (!product) {
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
//     <div className="py-16 bg-gray-50 min-h-screen">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Back Link */}
//         <div className="mb-6">
//           <Link
//             to="/products"
//             className="text-green-600 font-semibold hover:text-green-800 flex items-center"
//           >
//             ← Back to Products
//           </Link>
//         </div>

//         {/* Split Layout */}
//         <div className="flex flex-col lg:flex-row bg-white rounded-2xl shadow-lg overflow-hidden">
//           {/* Left: Image */}
//           <div className="lg:w-1/2 h-80 lg:h-auto">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-full object-cover"
//             />
//           </div>

//           {/* Right: Info */}
//           <div className="lg:w-1/2 p-8 flex flex-col justify-between">
//             <div>
//               {/* Name & Category */}
//               <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
//               {product.category && (
//                 <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">
//                   {product.category}
//                 </p>
//               )}

//               {/* Description & Details */}
//               <p className="text-gray-700 mb-4 font-medium">{product.desc}</p>
//               <p className="text-gray-600 mb-6">{product.details}</p>

//               {/* Benefits */}
//               {product.benefits?.length > 0 && (
//                 <div className="mb-6">
//                   <h2 className="text-2xl font-semibold text-gray-800 mb-3">Benefits</h2>
//                   <div className="grid gap-2">
//                     {product.benefits.map((benefit, index) => (
//                       <div
//                         key={index}
//                         className="bg-green-50 border-l-4 border-green-500 p-3 rounded-md text-gray-700"
//                       >
//                         {benefit}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Dosage, Application, Crops */}
//             <div className="grid sm:grid-cols-3 gap-4 mt-4">
//               {product.dosage && (
//                 <div className="bg-gray-50 p-4 rounded-lg shadow-sm text-center">
//                   <h3 className="font-semibold text-gray-800 mb-1">Dosage</h3>
//                   <p className="text-gray-600">{product.dosage}</p>
//                 </div>
//               )}
//               {product.application && (
//                 <div className="bg-gray-50 p-4 rounded-lg shadow-sm text-center">
//                   <h3 className="font-semibold text-gray-800 mb-1">Application</h3>
//                   <p className="text-gray-600">{product.application}</p>
//                 </div>
//               )}
//               {product.crops && (
//                 <div className="bg-gray-50 p-4 rounded-lg shadow-sm text-center">
//                   <h3 className="font-semibold text-gray-800 mb-1">Crops</h3>
//                   <p className="text-gray-600">{product.crops}</p>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// import { useParams, Link } from "react-router-dom";
// import { products } from "./../../data/productsData";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const product = products.find((p) => p.id === id);

//   if (!product) {
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
//     <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-5xl mx-auto space-y-8">

//         {/* Back Link */}
//         <Link
//           to="/products"
//           className="inline-block text-green-600 font-semibold hover:text-green-800 mb-4"
//         >
//           ← Back to Products
//         </Link>

//         {/* Product Header */}
//         <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
//           <div className="lg:w-1/2">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-80 lg:h-full object-cover"
//             />
//           </div>
//           <div className="lg:w-1/2 p-8 flex flex-col justify-center">
//             <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
//             {product.category && (
//               <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">{product.category}</p>
//             )}
//             <p className="text-gray-700 mb-3">{product.desc}</p>
//             <p className="text-gray-600">{product.details}</p>
//           </div>
//         </div>


//         {/* Info Cards */}
//         <div className="grid sm:grid-cols-3 gap-6">
//           {product.dosage && (
//             <div className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-xl transition">
//               <h3 className="text-lg font-semibold text-gray-800 mb-1">Dosage</h3>
//               <p className="text-gray-600">{product.dosage}</p>
//             </div>
//           )}
//           {product.application && (
//             <div className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-xl transition">
//               <h3 className="text-lg font-semibold text-gray-800 mb-1">Application</h3>
//               <p className="text-gray-600">{product.application}</p>
//             </div>
//           )}
//           {product.crops && (
//             <div className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-xl transition">
//               <h3 className="text-lg font-semibold text-gray-800 mb-1">Crops</h3>
//               <p className="text-gray-600">{product.crops}</p>
//             </div>
//           )}
//         </div>

//         {/* Benefits Section */}
//         {product.benefits?.length > 0 && (
//           <div className="bg-green-50 p-6 rounded-2xl shadow-md">
//             <h2 className="text-2xl font-semibold text-green-800 mb-4">Benefits</h2>
//             <ul className="space-y-2 list-disc list-inside text-gray-700">
//               {product.benefits.map((benefit, idx) => (
//                 <li key={idx} className="hover:translate-x-1 transition-transform">
//                   {benefit}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

        

//       </div>
//     </div>
//   );
// }


// import { useParams, Link } from "react-router-dom";
// import { products } from "./../../data/productsData";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const product = products.find((p) => p.id === id);

//   if (!product) {
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
//     <div className="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
//         {/* Back Link */}
//         <Link
//           to="/products"
//           className="inline-block text-green-600 font-semibold my-16 ml-4 hover:text-green-800 mb-4"
//         >
//           ← Back to Products
//         </Link>
        
//       <div className="max-w-5xl mx-auto space-y-8">


//         {/* Product Header */}
//         <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row">
//           <div className="lg:w-1/2 h-80 lg:h-auto">
//             <img
//               src={product.image || "/images/placeholder.jpg"}
//               alt={product.name}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <div className="lg:w-1/2 p-8 flex flex-col justify-center">
//             <h1 className="text-4xl font-bold text-gray-900 mb-2">{product.name}</h1>
//             <p className="text-sm text-gray-500 uppercase tracking-wide mb-4">
//               {product.category || "Not specified"}
//             </p>
//             <p className="text-gray-700 mb-3 font-medium">{product.desc || "Not specified"}</p>
//             <p className="text-gray-600">{product.details || "Not specified"}</p>
//           </div>
//         </div>

//         {/* Benefits Section */}
//         <div className="bg-white rounded-2xl shadow-md p-6">
//           <h2 className="text-2xl font-semibold text-gray-800 mb-4">Benefits</h2>
//           {product.benefits?.length > 0 ? (
//             <ul className="list-disc list-inside text-gray-700 space-y-2">
//               {product.benefits.map((b, idx) => (
//                 <li key={idx}>{b}</li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-500">Not specified</p>
//           )}
//         </div>

//         {/* Dosage / Application / Crops */}
//         <div className="grid sm:grid-cols-3 gap-6">
//           <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition text-center">
//             <h3 className="font-semibold text-gray-800 mb-1">Dosage</h3>
//             <p className="text-gray-600">{product.dosage || "Not specified"}</p>
//           </div>
//           <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition text-center">
//             <h3 className="font-semibold text-gray-800 mb-1">Application</h3>
//             <p className="text-gray-600">{product.application || "Not specified"}</p>
//           </div>
//           <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition text-center">
//             <h3 className="font-semibold text-gray-800 mb-1">Crops</h3>
//             <p className="text-gray-600">{product.crops || "Not specified"}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// import { useParams, Link } from "react-router-dom";
// import { products } from "./../../data/productsData";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const product = products.find((p) => p.id === id);

//   if (!product) {
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
//     <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
//       {/* Back Link */}
//       <Link
//         to="/products"
//         className="inline-block text-green-600 font-semibold my-20 ml-4 hover:text-green-800"
//       >
//         ← Back to Products
//       </Link>

//       {/* Main Product Section */}
//       <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
//         {/* Left: Image */}
//         <div className="lg:w-1/2 bg-gradient-to-br from-purple-100 to-gray-600 rounded-3xl shadow-xl relative flex items-center justify-center overflow-hidden">
//           <img
//             src={product.image || "/images/placeholder.jpg"}
//             alt={product.name}
//             className="w-full h-80 object-contain p-6"
//           />
//           {/* Price Badge */}
//           <div className="absolute top-6 right-6 bg-green-600 text-white px-5 py-2 rounded-full shadow-lg text-lg font-bold">
//             ${product.price || "N/A"}
//           </div>
//           {product.badge && (
//             <div className="absolute top-6 left-6 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full font-semibold shadow">
//               {product.badge}
//             </div>
//           )}
//         </div>

//         {/* Right: Product Info */}
//         <div className="lg:w-1/2 flex flex-col justify-center space-y-6">
//           <h1 className="text-4xl font-extrabold text-gray-900">{product.name}</h1>
//           <p className="text-sm text-gray-500 uppercase tracking-wide">{product.category || "Not specified"}</p>
//           <p className="text-gray-700 text-lg">{product.desc || "Not specified"}</p>
//           <p className="text-gray-600">{product.details || "Not specified"}</p>

//           <button className="mt-4 w-44 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-full shadow-xl transition-transform transform hover:-translate-y-1">
//             Add to Cart
//           </button>
//         </div>
//       </div>


//               {/* Dosage / Application / Crops side by side */}
// <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
//   <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 text-center">
//     <h3 className="font-semibold text-gray-800 mb-2 text-lg">Dosage</h3>
//     <p className="text-gray-600">{product.dosage || "Not specified"}</p>
//   </div>

//   <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 text-center">
//     <h3 className="font-semibold text-gray-800 mb-2 text-lg">Application</h3>
//     <p className="text-gray-600">{product.application || "Not specified"}</p>
//   </div>

//   <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 text-center">
//     <h3 className="font-semibold text-gray-800 mb-2 text-lg">Crops</h3>
//     <p className="text-gray-600">{product.crops || "Not specified"}</p>
//   </div>
// </div>

//       {/* Benefits Section */}
//       <div className="max-w-6xl mx-auto mt-12 space-y-6">
//         <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
//           <h3 className="font-semibold text-gray-800 mb-2 text-lg">Benefits</h3>
//           {product.benefits?.length ? (
//             <ul className="list-disc list-inside text-gray-700 space-y-1">
//               {product.benefits.map((b, idx) => (
//                 <li key={idx}>{b}</li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-500">Not specified</p>
//           )}
//         </div>
          
          
//         {/* Dosage / Application / Crops stacked below */}


//       </div>
//     </div>
//   );
// }








import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "./../../data/productsData";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold text-gray-800">Product Not Found</h2>
        <Link
          to="/products"
          className="text-green-600 underline mt-4 inline-block"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-green-50 to-emerald-100 min-h-screen py-16 px-4  sm:px-6 lg:px-8">
      {/* Back Link */}
      <Link
        to="/products"
        className="inline-block text-emerald-700 font-semibold mb-24 ml-14 hover:text-emerald-900 transition-colors"
      >
        ← Back to Products
      </Link>

      {/* Product Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}     
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10"
      >
        {/* Left: Image with animations */}
        <div className="lg:w-1/2 relative flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl bg-gray/90 backdrop-blur-lg">
          {/* Glowing aura */}
          <motion.div
            className="absolute w-64 h-64 bg-gradient-to-r from-emerald-300/40 to-green-400/30 rounded-full blur-3xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          
          {/* Floating product image */}
          <motion.img
            src={product.image || "/images/placeholder.jpg"}
            alt={product.name}
            className="relative z-10 w-full h-96 object-contain drop-shadow-2xl"
            whileHover={{
              scale: 1.1,
              rotate: 2,
              transition: { duration: 0.6, ease: "easeInOut" },
            }}
          />

          {/* Price Badge */}
          <motion.div
            className="absolute top-6 right-6 bg-emerald-600 text-white px-5 py-2 rounded-full shadow-xl text-lg font-bold"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            ${product.price || "N/A"}
          </motion.div>

          {/* Badge */}
          {product.badge && (
            <motion.div
              className="absolute top-6 left-6 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full font-semibold shadow"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {product.badge}
            </motion.div>
          )}
        </div>

        {/* Right: Details */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 flex flex-col justify-center space-y-6"
        >
          <h1 className="text-5xl font-extrabold text-gray-900">
            {product.name}
          </h1>
          <p className="text-sm text-emerald-700 uppercase tracking-wide">
            {product.category || "Not specified"}
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            {product.desc || "Not specified"}
          </p>
          <p className="text-gray-600">{product.details || "Not specified"}</p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 w-48 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-full shadow-lg transition-transform"
          >
            Add to Cart
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Info Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6"
      >
        {[
          { title: "Dosage", value: product.dosage },
          { title: "Application", value: product.application },
          { title: "Crops", value: product.crops },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-lg text-center border border-emerald-100"
          >
            <h3 className="font-semibold text-emerald-800 mb-2 text-lg">
              {item.title}
            </h3>
            <p className="text-gray-700">{item.value || "Not specified"}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="max-w-6xl mx-auto mt-16"
      >
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-emerald-100">
          <h3 className="font-semibold text-emerald-800 mb-4 text-xl">
            Benefits
          </h3>
          {product.benefits?.length ? (
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {product.benefits.map((b, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                >
                  {b}
                </motion.li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">Not specified</p>
          )}
        </div>
      </motion.div>
    </div>
  );
}



















// import { useParams, Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { products } from "./../../data/productsData";
// import { ArrowLeft } from "lucide-react";

// export default function ProductDetails() {
//   const { id } = useParams();
//   const product = products.find((p) => p.id === id);

//   if (!product) {
//     return (
//       <div className="text-center py-32 bg-gray-100 min-h-screen">
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
//     <section className="relative bg-gradient-to-br from-green-50 via-white to-emerald-50 py-20 min-h-screen overflow-hidden">
//       {/* Decorative background shapes */}
//       <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern.svg')] bg-repeat"></div>

//       <div className="max-w-6xl mx-auto px-6 relative z-10">
//         {/* Back Link */}
//         <Link
//           to="/products"
//           className="flex items-center text-green-700 font-medium mb-10 hover:text-green-900 transition"
//         >
//           <ArrowLeft className="mr-2 h-5 w-5" /> Back to Products
//         </Link>

//         {/* Product Card */}
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="bg-white/70 backdrop-blur-lg shadow-2xl rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-10 border border-gray-200"
//         >
//           {/* Image Section */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8 }}
//             className="relative flex justify-center items-center"
//           >
//             <img
//               src={product.image || "/images/placeholder.jpg"}
//               alt={product.name}
//               className="w-full h-80 object-contain drop-shadow-xl hover:scale-105 transition-transform duration-500"
//             />
//             {product.badge && (
//               <span className="absolute top-6 left-6 bg-yellow-400 text-gray-800 px-4 py-1 rounded-full font-semibold shadow">
//                 {product.badge}
//               </span>
//             )}
//             <span className="absolute bottom-6 right-6 bg-green-600 text-white px-5 py-2 rounded-full text-lg font-bold shadow-lg">
//               ${product.price || "N/A"}
//             </span>
//           </motion.div>

//           {/* Info Section */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.9 }}
//             className="space-y-6"
//           >
//             <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
//               {product.name}
//             </h1>
//             <p className="text-sm text-green-600 uppercase font-semibold tracking-wide">
//               {product.category || "General Product"}
//             </p>
//             <p className="text-gray-700 leading-relaxed">{product.desc}</p>
//             <p className="text-gray-600">{product.details}</p>

//             <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
//               Add to Cart
//             </button>
//           </motion.div>
//         </motion.div>

//         {/* Information Cards */}
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, delay: 0.3 }}
//           className="grid md:grid-cols-3 gap-6 mt-12"
//         >
//           {[
//             { title: "Dosage", value: product.dosage },
//             { title: "Application", value: product.application },
//             { title: "Crops", value: product.crops },
//           ].map((item, idx) => (
//             <div
//               key={idx}
//               className="bg-white/60 backdrop-blur-lg border border-gray-200 p-6 rounded-2xl shadow hover:shadow-xl transition-transform transform hover:-translate-y-1 text-center"
//             >
//               <h3 className="font-semibold text-gray-900 text-lg mb-2">
//                 {item.title}
//               </h3>
//               <p className="text-gray-700">
//                 {item.value || "Information not available"}
//               </p>
//             </div>
//           ))}
//         </motion.div>

//         {/* Benefits Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.9, delay: 0.4 }}
//           className="bg-white/60 backdrop-blur-lg border border-gray-200 mt-12 rounded-3xl shadow-xl p-8 hover:shadow-2xl transition"
//         >
//           <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits</h3>
//           {product.benefits?.length ? (
//             <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-gray-700">
//               {product.benefits.map((b, idx) => (
//                 <li key={idx} className="flex items-center gap-3">
//                   <span className="w-2 h-2 bg-green-600 rounded-full"></span>
//                   {b}
//                 </li>
//               ))}
//             </ul>
//           ) : (
//             <p className="text-gray-600">No benefits listed for this product.</p>
//           )}
//         </motion.div>
//       </div>
//     </section>
//   );
// }
