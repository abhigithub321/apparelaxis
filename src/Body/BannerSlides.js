import React from "react";
import "./BannerSlides.css";
// import { Card, Row, Col } from 'react-bootstrap';
import Carousel from "react-bootstrap/Carousel";
// import img1 from './Images/Banner.jpg'



const BannerSlide = () => {
  // const cards = [
  //   'https://www.shutterstock.com/shutterstock/photos/1120225910/display_1500/stock-photo-bottle-of-milk-eggs-and-bread-on-the-wooden-table-with-copy-space-for-text-1120225910.jpg',
  //   'https://www.shutterstock.com/shutterstock/photos/1318643657/display_1500/stock-photo-assortment-of-healthy-protein-source-and-body-building-food-salmon-chicken-breast-eggs-1318643657.jpg',
  //   'https://www.spencers.in/media/catalog/product/1/4/1400792_1.jpg',
  //   'https://via.placeholder.com/150/6495ed',
  //   'https://via.placeholder.com/150/ff6347',
  //   'https://via.placeholder.com/150/40e0d0'
  // ];

  const handleClick = () => {
    window.location.href = './Images/Banner.jpg'; // Replace with the URL you want to redirect to
  };
  return (
    <>
      <div className="banner-section">
        <Carousel>
          {/* Slide 1 */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src='./Images/Banner.jpg'
              alt="Premium Fabrics"
            />
            <Carousel.Caption>
              <h2>Premium Fabrics for Every Need</h2>
              <p>Explore our exclusive collection of high-quality textiles.</p>
              <a href="/shop" className="btn btn-primary">
                Shop Now
              </a>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 2 */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src= './Images/FashionBanner.png'
              alt="Sustainable Solutions"
            />
            <Carousel.Caption>
              <h2>Sustainable Textile Solutions</h2>
              <p>Eco-friendly fabrics for a better tomorrow.</p>
              <a href="/learn-more" className="btn btn-secondary">
                Learn More
              </a>
            </Carousel.Caption>
          </Carousel.Item>

          {/* Slide 3 */}
          <Carousel.Item>
            <img
              className="d-block w-100"
              src='./Images/SummerBanner.png'
              alt="Wholesale Deals"
            />
            <Carousel.Caption>
              <h2>Wholesale Textile Deals</h2>
              <p>Unbeatable prices for bulk orders.</p>
              <a href="/deals" className="btn btn-success">
                Explore Deals
              </a>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* Horizontal Cards Section */}
    </>
  );
};

export default BannerSlide;
