
import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import FertibaseSplash from "./components/FertibaseSplash";
import Hero from "./components/Hero";
import ProductsPage from "./components/ProductsPage";
import ProductDetails from "./components/ProductDetails";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/contactus";
import Services from "./components/Services";
import Layout from "../layout";
import CareerPage from "./components/CareerPage";
import JobDetails from "./components/JobDetails";



function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000); // Splash duration
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <FertibaseSplash logoSrc="/logo.png" />;
  }

  return (
    <Routes>
      {/* Main layout with Navbar + Footer */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Hero />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:id" element={<ProductDetails />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="contactus" element={<Contactus />} />
        <Route path="services" element={<Services />} />
        <Route path="CareerPage" element={<CareerPage />} />
        <Route path="/Careers/:id" element={<JobDetails />} />
      </Route>

      {/* Redirect any unmatched /fertibase/... URL to root */}
      <Route path="/fertibase/*" element={<Navigate to="/" replace />} />
      {/* Optional catch-all for any other unknown routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
