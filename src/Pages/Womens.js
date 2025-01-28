import React from "react";
import "./Womens.css"; // Optional: Add custom styles

const Womens = () => {
  const womensProducts = [
    {
      id: 1,
      name: "Chiffon Saree",
      image: "https://via.placeholder.com/150",
      price: "$35",
    },
    {
      id: 2,
      name: "Silk Blouse",
      image: "https://via.placeholder.com/150",
      price: "$20",
    },
    {
      id: 3,
      name: "Designer Lehenga",
      image: "https://via.placeholder.com/150",
      price: "$120",
    },
    {
      id: 4,
      name: "Cotton Kurti",
      image: "https://via.placeholder.com/150",
      price: "$25",
    },
    {
      id: 5,
      name: "Party Dress",
      image: "https://via.placeholder.com/150",
      price: "$70",
    },
    {
      id: 6,
      name: "Woolen Stole",
      image: "https://via.placeholder.com/150",
      price: "$30",
    },
  ];

  return (
    <div className="womens-container p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Women's Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {womensProducts.map((product) => (
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
              className="mt-4 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition"
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

export default Womens;
