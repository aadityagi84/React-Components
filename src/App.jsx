import React from "react"; // Correct import for React
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products"; // Fix typo in "Products"
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Products />
    </div>
  );
};

export default App;
