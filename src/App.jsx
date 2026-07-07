import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Products from "./components/sections/Products";
import OurStory from "./components/sections/OurStory";
import Newsletter from "./components/sections/Newsletter";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <OurStory />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;