import { BrowserRouter, Routes, Route } from "react-router-dom";
import SmoothScroll from "./components/SmoothScroll";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

// Section Components for the Home Page
import Hero from "./components/Hero";
import Philosophy from "./components/Philosophy";
import Showcase from "./components/Showcase";
import Materials from "./components/Materials";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import TnC from "./pages/TnC";

// The Home Page composed of the 4 sections
const Home = () => (
  <main>
    <Hero />
    <Philosophy />
    <Showcase />
    <Materials />
  </main>
);

export default function App() {
  return (
    <SmoothScroll>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms-and-conditions" element={<TnC />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </SmoothScroll>
  );
}
