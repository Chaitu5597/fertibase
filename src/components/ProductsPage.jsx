import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import productService from "../api/productService";

export default function ProductsPage() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAllProducts();
        setProducts(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err.message || 'Failed to load products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-emerald-200 to-green-300">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-emerald-600 mx-auto mb-4"></div>
          <p className="text-emerald-900 font-semibold text-lg">Loading products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 via-emerald-200 to-green-300">
        <div className="text-center bg-white p-8 rounded-3xl shadow-xl max-w-md">
          <p className="text-red-600 font-semibold text-lg mb-4">Error loading products</p>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-green-100 via-emerald-200 to-green-300 min-h-screen relative overflow-hidden">
      {/* Floating Glow Blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-emerald-400/30 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-lime-400/20 rounded-full blur-3xl"
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
            className="text-emerald-800 font-semibold my-16 ml-2 hover:text-emerald-950 mb-4"
          >
            ← Back to Products
          </button>
        </div>

        <h2 className="text-5xl font-extrabold text-center text-emerald-900 mb-12 drop-shadow-md">
          Our Premium Products
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-3">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileTap={{ scale: 0.9 }}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 backdrop-blur-md ${activeCategory === cat
                ? "bg-gradient-to-r from-emerald-600 to-green-500 text-white shadow-lg shadow-emerald-300/40 scale-105"
                : "bg-white/60 text-gray-700 border border-gray-300 hover:bg-emerald-100/60"
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.04 }}
                onClick={() => navigate(`/products/${product.id}`)}
                className="group relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 border border-emerald-200"
              >
                {/* Image Section */}
                <div className="relative h-70 overflow-hidden bg-gradient-to-br via-green-300 to-lime-200 flex items-center justify-center rounded-3xl group">
                  {/* Soft Rotating Glow */}
                  <motion.div
                    className="absolute w-72 h-72 rounded-full bg-gradient-to-r via-lime-200/20 to-transparent blur-3xl"
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                  />

                  {/* Product Image */}
                  <motion.img
                    src={product.image || "/images/placeholder.jpg"}
                    alt={product.name}
                    className="object-contain h-full w-full z-10 p-6"
                    initial={{ scale: 1 }}
                    whileHover={{
                      scale: 1.1,
                      rotateY: 6,
                      rotateX: 2,
                      transition: { duration: 0.6, ease: "easeInOut" },
                    }}
                  />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {product.badge && (
                    <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}

                  <h3 className="text-xl font-bold text-gray-900 mt-3 group-hover:text-emerald-700 transition-colors line-clamp-2 h-14">
                    {product.name}
                  </h3>

                  {product.overview && (
                    <p className="text-gray-600 mt-2 line-clamp-3 text-sm h-16">
                      {product.overview}
                    </p>
                  )}

                  <div className="mt-5 flex items-center text-emerald-700 font-semibold group-hover:text-emerald-900 transition-colors">
                    View More <ChevronRight className="ml-1 h-5 w-5" />
                  </div>
                </div>

                {/* Decorative Border on Hover */}
                <div className="absolute inset-0 border-2 border-transparent rounded-3xl group-hover:border-emerald-400 transition-all duration-300"></div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
