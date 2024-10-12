// src/App.js

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion"; // Import from Framer Motion
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import AboutMe from "./Pages/Aboutme";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

// Animation variants for the page transitions
const pageVariants = {
  initial: {
    opacity: 0,
    y: "-100vw", // Start offscreen to the left
  },
  in: {
    opacity: 1,
    y: 0, // Bring to screen
  },
  out: {
    opacity: 0,
    y: "100vw", // Slide out to the right
  },
};

// Define transition type
const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1,
};

// Create a wrapper for animated routes
const AnimatedRoutes = () => {
  const location = useLocation(); // Track current route

  return (
    <AnimatePresence mode="wait">
      {" "}
      {/* Replaced exitBeforeEnter with mode="wait" */}
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              style={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }} // Set your background color here
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              style={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }} // Set your background color here
            >
              <AboutMe />
            </motion.div>
          }
        />
        <Route
          path="/skills"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              style={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }} // Set your background color here
            >
              <Skills />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              style={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }} // Set your background color here
            >
              <Projects />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
              transition={pageTransition}
              style={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }} // Set your background color here
            >
              <Contact />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes /> {/* Use the animated routes */}
    </Router>
  );
};

export default App;
