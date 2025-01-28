// import React from "react";
// import "./Banner.css";

// const Banner = () => {
//   const cards = [
//     { id: 1, title: "Card 1", image: "/Images/slidebanner/Untitled design (1).png" },
//     { id: 2, title: "Card 2", image: "/Images/slidebanner/Untitled design (2).png" },
//     { id: 3, title: "Card 3", image: "/Images/slidebanner/Untitled design (3).png" },
//     { id: 4, title: "Card 4", image: "/Images/slidebanner/Untitled design.png" },
//   ];

//   return (
//     <div className="banner-container">
//       {cards.map((card) => (
//         <div key={card.id} className="banner-card">
//           <img src={card.image} alt={card.title} className="banner-image" />
//           <h3>{card.title}</h3>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Banner;


import React from "react";
import "./Banner.css";

const Banner = () => {
  const cards = [
    { id: 1, title: "Card 1", image: "/Images/slidebanner/Untitled design (1).png", link: "https://example.com/1" },
    { id: 2, title: "Card 2", image: "/Images/slidebanner/Untitled design (2).png", link: "https://example.com/2" },
    { id: 3, title: "Card 3", image: "/Images/slidebanner/Untitled design (3).png", link: "https://example.com/3" },
    { id: 4, title: "Card 4", image: "/Images/slidebanner/Untitled design.png", link: "https://example.com/4" },
  ];

  return (
    <div className="banner-container">
      {cards.map((card) => (
        <div key={card.id} className="banner-card">
          <a href={card.link} target="_blank" rel="noopener noreferrer">
            <img src={card.image} alt={card.title} className="banner-image" />
          </a>
          <h3>{card.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default Banner;