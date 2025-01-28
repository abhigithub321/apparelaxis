import './App.css';
import BannerSlide from './Body/BannerSlides';
import TextileEcommerce from './Products/TextileE-commerce';
import HeaderAndFooterExample from './FooterBanner.js/FooterBanner';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer/Footer';
import Navbar from './Navbar1/Navbar';

import React, { useState } from "react"; // Import useState
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products";
import Mens from "./Pages/Mens";
import Womens from "./Pages/Womens";
import Kids from "./Pages/Kids";
import AboutUs from "./Pages/AboutUs";
import Contacts from "./Pages/Contacts";
// import Home from "./Pages/Home";

function App() {
  const [showOnlyLinkContent, setShowOnlyLinkContent] = useState(false);

  return (
    <div>
      <Router>
        <Navbar setShowOnlyLinkContent={setShowOnlyLinkContent} />
        <div className="content">
          {!showOnlyLinkContent ? (
            <>
              <Routes>
                {/* <Route path="/" element={<Home />} /> */}
              </Routes>
              <BannerSlide />
              <HeaderAndFooterExample />
              <TextileEcommerce />
              <Footer></Footer>
            </>
          ) : (
            <Routes>
              <Route path="/products" element={<Products />} />
              <Route path="/mens" element={<Mens />} />
              <Route path="/womens" element={<Womens />} />
              <Route path="/kids" element={<Kids />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
          )}
        </div>
      </Router>
    </div>
  );
}

export default App;
