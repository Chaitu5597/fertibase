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


// import { useEffect, useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import ProductsPage from "./components/ProductsPage";
// import ProductDetails from "./components/ProductDetails";

// import FertibaseSplash from "./components/FertibaseSplash";
// import Aboutus from "./components/Aboutus";
// import Contactus from "./components/contactus";
// import Services from "./components/Services";

// function App() {
//   const [showSplash, setShowSplash] = useState(true); // Always start with splash

//   // Optional: Reset splash on route change (so it plays when navigating back)
//   // If you want splash ONLY on initial load, remove this useEffect
//   // useEffect(() => {
//   //   setShowSplash(true);
//   // }, []);

//   return (
//     <>
//       {/* === SPLASH SCREEN – SHOWS EVERY TIME === */}
//       {showSplash && (
//         <FertibaseSplash
//           logoSrc="/logo.png"
//           onComplete={() => setShowSplash(false)}
//         />
//       )}

//       {/* === MAIN APP === */}
//       <div style={{ display: showSplash ? "none" : "block" }}>
//         <Navbar />
//         <Routes>
//           <Route
//             path="/"
//             element={ <Hero /> }
//           />
//           <Route path="/products" element={<ProductsPage />} />
//           <Route path="/products/:id" element={<ProductDetails />} />
//           <Route path="/aboutus" element={<Aboutus />} />
//           <Route path="/Contactus" element={<Contactus />} />
//           <Route path="/Services" element={<Services />} />
//         </Routes>
//       </div>
//     </>
//   );
// }

// export default App;



// import { useEffect, useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import ProductsPage from "./components/ProductsPage";
// import ProductDetails from "./components/ProductDetails";
// import FertibaseSplash from "./components/FertibaseSplash";
// import Aboutus from "./components/Aboutus";
// import Contactus from "./components/contactus";
// import Services from "./components/Services";

// function App() {
//   const [showSplash, setShowSplash] = useState(true);

//   // Simulate splash duration (for example, 3 seconds)
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowSplash(false);
//     }, 3000); // Change 3000 to your splash animation duration (in ms)

//     return () => clearTimeout(timer);
//   }, []);

//   // 🟢 If splash is showing, only render splash (not Navbar or Routes)
//   if (showSplash) {
//     return <FertibaseSplash logoSrc="/logo.png" />;
//   }

//   // 🟢 Once splash completes, render main site
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Hero />} />
//         <Route path="/products" element={<ProductsPage />} />
//         <Route path="/products/:id" element={<ProductDetails />} />
//         <Route path="/aboutus" element={<Aboutus />} />
//         <Route path="/contactus" element={<Contactus />} />
//         <Route path="/services" element={<Services />} />
//       </Routes>
//     </>
//   );
// }

// export default App;


// import { useEffect, useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import FertibaseSplash from "./components/FertibaseSplash";
// import Hero from "./components/Hero";
// import ProductsPage from "./components/ProductsPage";
// import ProductDetails from "./components/ProductDetails";
// import Aboutus from "./components/Aboutus";
// import Contactus from "./components/contactus";
// import Services from "./components/Services";
// import Layout from "../layout";

// function App() {
//   const [showSplash, setShowSplash] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowSplash(false);
//     }, 3000); // Splash duration
//     return () => clearTimeout(timer);
//   }, []);

//   if (showSplash) {
//     return <FertibaseSplash logoSrc="/logo.png" />;
//   }

//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Hero />} />
//         <Route path="products" element={<ProductsPage />} />
//         <Route path="products/:id" element={<ProductDetails />} />
//         <Route path="aboutus" element={<Aboutus />} />
//         <Route path="contactus" element={<Contactus />} />
//         <Route path="services" element={<Services />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;



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
        <Route path="/career/:id" element={<JobDetails />} />
      </Route>

      {/* Redirect any unmatched /fertibase/... URL to root */}
      <Route path="/fertibase/*" element={<Navigate to="/" replace />} />
      {/* Optional catch-all for any other unknown routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
