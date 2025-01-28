import React from "react";
import "./Contacts.css"; // Optional: Add custom styles

const Contacts = () => {
  return (
    <div className="contacts-container p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <p className="text-gray-700 text-lg leading-relaxed text-center">
        Have questions? We're here to help!
      </p>
      <div className="mt-6 text-center">
        <p className="text-gray-700">
          <strong>Email:</strong> support@textilestore.com
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Phone:</strong> +1 (555) 123-4567
        </p>
        <p className="text-gray-700 mt-2">
          <strong>Address:</strong> 123 Textile Avenue, Fashion City, TX 78910
        </p>
      </div>
      <form className="contact-form mt-8 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 mb-4 border border-gray-300 rounded h-24"
        />
        <button
          type="submit"
          className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contacts;
