import { Outlet } from "react-router-dom";
import Navbar from "./src/components/Navbar";
import Footer from "./src/components/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ Navbar always visible */}
      <Navbar />

      {/* ✅ Page content changes here */}
      <main className="flex-grow mt-14">
        <Outlet />
      </main>

      {/* ✅ Footer always visible */}
      <Footer />
    </div>
  );
}
