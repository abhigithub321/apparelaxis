import React from "react";
import "./AboutUs.css"; // Optional: Add custom styles

const AboutUs = () => {
  return (
    <div className="about-us-container p-6">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <p className="text-gray-700 text-lg leading-relaxed">
        Welcome to our textile store, your one-stop destination for premium
        clothing and accessories. With a legacy of excellence in textiles, we
        pride ourselves on offering top-notch products for men, women, and kids.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed mt-4">
        Our mission is to bring you high-quality, stylish, and comfortable
        apparel crafted with love and care. From traditional to modern designs,
        our collection is curated to suit every occasion and mood.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed mt-4">
        Thank you for choosing us. Your satisfaction is our utmost priority!
      </p>
    </div>
  );
};

export default AboutUs;
