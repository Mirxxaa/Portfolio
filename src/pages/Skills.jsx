import React, { useEffect, useState } from "react";
import SpotlightCard from "../components/SpotlightCard";
import { db } from "../firebase"; // Firebase Firestore instance
import { collection, getDocs } from "firebase/firestore"; // Firestore functions
import Footer from "../components/Footer";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Skills = () => {
  const [skills, setSkills] = useState([]); // State for skills
  const [tools, setTools] = useState([]); // State for tools
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error handling
  const [isMobile, setIsMobile] = useState(false); // Track mobile view

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500, // time between slides in milliseconds
    slidesToShow: 1, // Show one item per slide on mobile
    slidesToScroll: 1, // Scroll one item per slide
    responsive: [
      {
        breakpoint: 768, // for mobile view
        settings: {
          slidesToShow: 1, // Shows one item on small screens
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024, // for tablets, larger phones, etc.
        settings: {
          slidesToShow: 3, // Show 3 items per slide for medium screens
          slidesToScroll: 3,
        },
      },
    ],
  };

  // Handle window resize for mobile detection
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    // Check if it's mobile or desktop on load
    checkMobile();

    // Event listener to check on window resize
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Fetch both tools and skills
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Skills
        const skillsSnapshot = await getDocs(collection(db, "skills"));
        const skillsData = skillsSnapshot.docs.map((doc) => ({
          _id: doc.id,
          ...doc.data(),
        }));

        // Fetch Tools
        const toolsSnapshot = await getDocs(collection(db, "tools"));
        const toolsData = toolsSnapshot.docs.map((doc) => doc.data());

        setSkills(skillsData); // Set skills state
        setTools(toolsData); // Set tools state
        setLoading(false); // Stop loading
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later."); // Handle error
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to display stars based on proficiency level
  const renderStars = (rating) => {
    const validRating =
      !isNaN(rating) && rating >= 0 && rating <= 5 ? rating : 0;
    const fullStars = Math.floor(validRating);
    const hasHalfStar = validRating % 1 !== 0;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-yellow-600" />
        ))}
        {hasHalfStar && <FaStarHalfAlt className="text-yellow-600" />}
        {[...Array(5 - Math.ceil(validRating))].map((_, i) => (
          <FaRegStar key={i} className="text-yellow-600" />
        ))}
      </>
    );
  };

  // Show loading state
  if (loading) {
    return (
      <div className="w-full h-screen bg-black flex justify-center items-center">
        <div className="border-t-4 border-b-4 border-white w-16 h-16 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Show error state
  if (error) {
    return (
      <div className="bg-black h-screen flex items-center justify-center">
        <p className="text-red-500 text-2xl">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-auto">
      <div className="w-[80vw] m-auto py-10">
        {/* Skills Section */}
        <div className="flex items-center justify-center text-white font-bold mb-4">
          <h1 className="text-2xl font-semibold mr-4">Skills</h1>
          <div className="flex-grow border-t-1 border-white"></div>
        </div>

        <div className="flex flex-wrap gap-4 justify-start p-6 mb-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-start w-full sm:w-auto"
            >
              <span className="bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-full shadow-md mb-2">
                {skill.skillName}
              </span>
              <div className="flex items-start justify-start flex-wrap text-sm gap-1">
                {renderStars(skill.proficiencyLevel)}
              </div>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <div className="flex items-center justify-center text-white font-bold mb-8">
          <h1 className="text-2xl font-semibold mr-4">Tools</h1>
          <div className="flex-grow border-t-1 border-white"></div>
        </div>

        {/* Conditional Rendering for Carousel on Mobile */}
        {isMobile ? (
          <div className="w-full ">
            <Slider {...settings}>
              {tools.map((tool, index) => (
                <SpotlightCard
                  key={index}
                  className="flex flex-col mx-2 items-center"
                >
                  <img
                    src={tool.toolImage}
                    alt={tool.toolName}
                    className="w-20 h-20 object-contain mb-4"
                  />
                  <p className="text-center text-white text-lg font-medium">
                    {tool.toolName}
                  </p>
                </SpotlightCard>
              ))}
            </Slider>
          </div>
        ) : (
          <div className="flex flex-wrap gap-6 p-6">
            {tools.map((tool, index) => (
              <SpotlightCard key={index} className="flex flex-col items-center">
                <img
                  src={tool.toolImage}
                  alt={tool.toolName}
                  className="w-20 h-20 object-contain mb-4"
                />
                <p className="text-center text-white text-lg font-medium">
                  {tool.toolName}
                </p>
              </SpotlightCard>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Skills;
