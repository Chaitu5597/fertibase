// import { Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import ProductsPage from './components/ProductsPage';
// import ProductDetails from './components/ProductDetails';
// import Benefits from './components/Benefits';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <About />
//               {/* <Benefits /> */}
//               <Contact />
//               <Footer />
//             </>
//           } 
//         />
//         <Route path="/products" element={<ProductsPage />} />
//         <Route path="/products/:id" element={<ProductDetails />} />
//       </Routes>
//     </>
//   );
// }

// export default App;


import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProductsPage from "./components/ProductsPage";
import ProductDetails from "./components/ProductDetails";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FertibaseSplash from "./components/FertibaseSplash";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/contactus";
import Services from "./components/Services";

function App() {
  const [showSplash, setShowSplash] = useState(true); // Always start with splash

  // Optional: Reset splash on route change (so it plays when navigating back)
  // If you want splash ONLY on initial load, remove this useEffect
  // useEffect(() => {
  //   setShowSplash(true);
  // }, []);

  return (
    <>
      {/* === SPLASH SCREEN – SHOWS EVERY TIME === */}
      {showSplash && (
        <FertibaseSplash
          logoSrc="/logo.png"
          onComplete={() => setShowSplash(false)}
        />
      )}

      {/* === MAIN APP === */}
      <div style={{ display: showSplash ? "none" : "block" }}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Contact />
                
              </>
            }
          />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;