import React, { useState } from 'react';

// Sample data for products (can be fetched from an API in a real application)
const products = [
  {
    id: 1,
    name: 'Cotton Shirt',
    image: './Images/cottonshirt.webp',
    price: '$20.99',
  },
  {
    id: 2,
    name: 'Silk Scarf',
    image: '/images/silk-scarf.jpg',
    price: '$35.99',
  },
  {
    id: 3,
    name: 'Wool Sweater',
    image: '/images/wool-sweater.jpg',
    price: '$50.99',
  },
  // Add more products as needed
];

const FeaturedProducts = () => {
  const [cart, setCart] = useState([]);

  // Handle adding product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  // Handle quick view (could show more details, for now just a placeholder)
  const quickView = (product) => {
    alert(`Quick view of ${product.name}:\nPrice: ${product.price}`);
  };

  return (
    <div className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-row">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
            quickView={quickView}
          />
        ))}
      </div>
      <div className="cart">
        <h3>Items in Cart: {cart.length}</h3>
      </div>
    </div>
  );
};

const ProductCard = ({ product, addToCart, quickView }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={() => quickView(product)} className="quick-view-btn">
        Quick View
      </button>
      <button onClick={() => addToCart(product)} className="add-to-cart-btn">
        Add to Cart
      </button>
    </div>
  );
};

export default FeaturedProducts;
