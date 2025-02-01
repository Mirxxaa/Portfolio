import React, { useEffect, useState } from "react";
import SpotlightCard from "@/components/SpotlightCard";
import { db } from "@/firebase"; // Import Firebase Firestore instance
import { collection, getDocs } from "firebase/firestore"; // Import Firestore functions
import Footer from "@/components/Footer";

const Skills = () => {
  const [skills, setSkills] = useState([]); // State to store fetched skills
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  // Fetch data from Firebase Firestore
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "skills")); // Fetch all skills from Firestore
        const skillsData = querySnapshot.docs.map((doc) => doc.data()); // Map the documents to an array of data
        setSkills(skillsData); // Update the state with fetched data
        setLoading(false); // Set loading to false
      } catch (error) {
        console.error("Error fetching skills:", error);
        setError("Failed to fetch skills. Please try again later."); // Set error message
        setLoading(false); // Set loading to false
      }
    };

    fetchSkills(); // Call the fetch function
  }, []); // Empty dependency array ensures this runs only once on mount

  // Display loading state
  if (loading) {
    return (
      <div className="w-full h-screen bg-black flex justify-center items-center">
        <div className="border-t-4 border-b-4 border-white w-16 h-16 rounded-full animate-spin"></div>
      </div>
    );
  }

  // Display error state
  if (error) {
    return (
      <div className="bg-black h-screen flex items-center justify-center">
        <p className="text-red-500 text-2xl">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-black h-screen">
      <div className="w-[80vw] h-screen bg-black m-auto">
        <div className="text-4xl text-white font-bold text-center mb-4">
          <h1>My Skills</h1>
        </div>

        {/* Grid for larger screens */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 p-6">
          {skills.map((skill, index) => (
            <SpotlightCard key={index} className="flex flex-col items-center">
              <img
                src={skill.skillImage}
                alt={skill.skillName}
                className="w-20 h-20 object-contain mb-4"
              />
              <p className="text-center text-white text-lg font-medium">
                {skill.skillName}
              </p>
            </SpotlightCard>
          ))}
        </div>

        {/* List for mobile screens */}
        <div className="block md:hidden p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SpotlightCard key={index} className="flex flex-col items-center">
                <img
                  src={skill.skillImage}
                  alt={skill.skillName}
                  className="w-16 h-16 object-contain mb-4"
                />
                <p className="text-center text-white text-lg font-medium">
                  {skill.skillName}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black">
        <Footer />
      </div>
    </div>
  );
};

export default Skills;
