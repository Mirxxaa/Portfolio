// src/pages/Home.js
import React, { useEffect, useRef } from "react";
import "../Styles/Home.css";
import "../Styles/global.css";
import myImage from "../assets/myImage.png"; // Adjust the path as needed

const Home = () => {
  const shapesRef = useRef([]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    shapesRef.current.forEach((shape) => {
      const offsetX = (Math.random() - 0.5) * 40; // Increased offset for more movement
      const offsetY = (Math.random() - 0.5) * 40; // Increased offset for more movement
      shape.style.transform = `translate(${clientX / 20 + offsetX}px, ${
        clientY / 20 + offsetY
      }px)`;
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const renderCircles = () => {
    const circles = [];
    for (let i = 0; i < 20; i++) {
      // Increased number of circles for more coverage
      const size = Math.random() * 150 + 50; // Random size between 50px and 200px
      const left = Math.random() * 100; // Random horizontal position
      const top = Math.random() * 100; // Random vertical position
      circles.push(
        <div
          className="circle"
          key={i}
          ref={(el) => (shapesRef.current[i] = el)}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            borderRadius: "50%", // Ensure the shapes are circles
            position: "absolute", // Position absolute for free movement
            zIndex: -1, // Send circles behind the text and image
          }}
        ></div>
      );
    }
    return circles;
  };

  return (
    <div className="home-container">
      <div className="shapes">
        {renderCircles()} {/* Render multiple circles */}
      </div>
      <div className="intro">
        <h1>
          Welcome to My <span className="Foreground-Color">Portfolio</span>
        </h1>
        <h3>
          One stop solution for Every{" "}
          <span className="Foreground-Color"> Design Problem </span>
        </h3>
        <p>
          Hello! I'm Mirza Ibrahim, a multi-talented professional with a passion
          for graphic design and front-end development. I specialize in creating
          stunning visual designs and dynamic web applications. <br></br> With
          <b> Experience</b> in Adobe Creative Cloud, HTML, CSS, JavaScript,
          Tailwind CSS, React JS, and React Native, I'm dedicated to delivering
          high-quality work. Explore my projects and skills below!
        </p>
        <div className="learn-more"></div>
        <button className="learn btn"> Learn More</button>
      </div>
      <div className="image-container">
        <img src={myImage} alt="Mirza Ibrahim" />
      </div>
    </div>
  );
};

export default Home;
