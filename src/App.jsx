import { Outlet } from "react-router-dom";
import Navbar from "./views/Navbar";
import Home from "./views/Home";
import Footer from "./components/Footer";
import OurExpert from "./components/OurExpert";
// import AboutUs from "./views/AboutUs";
import { Characteristics } from "./components/Characteristics";
import Timeline from "./components/Timeline";
import AboutUs from "./views/about_us";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <AboutUs /> */}
      <AboutUs />
      <Characteristics />
      <OurExpert />
      <Timeline />
      <Footer />
    </div>
  );
}
