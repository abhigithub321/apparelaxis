import React from "react";
import "./Mens.css"; // Optional: Add custom styles

const Mens = () => {
  const mensProducts = [
    {
      id: 1,
      name: "Cotton Shirt",
      image: "https://via.placeholder.com/150",
      price: "$30",
    },
    {
      id: 2,
      name: "Formal Trousers",
      image: "https://via.placeholder.com/150",
      price: "$40",
    },
    {
      id: 3,
      name: "Silk Tie",
      image: "https://via.placeholder.com/150",
      price: "$15",
    },
    {
      id: 4,
      name: "Woolen Sweater",
      image: "https://via.placeholder.com/150",
      price: "$50",
    },
    {
      id: 5,
      name: "Leather Jacket",
      image: "https://via.placeholder.com/150",
      price: "$100",
    },
    {
      id: 6,
      name: "Denim Jeans",
      image: "https://via.placeholder.com/150",
      price: "$45",
    },
  ];

  return (
    <div className="mens-container p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Men's Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {mensProducts.map((product) => (
          <div
            key={product.id}
            className="product-card p-4 border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-500">{product.price}</p>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
              onClick={() => alert(`Added ${product.name} to cart!`)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mens;
