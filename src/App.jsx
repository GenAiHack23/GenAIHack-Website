import { Outlet } from "react-router-dom";
import Navbar from "./views/navbar";
import Home from "./views/Home";
import Footer from "./components/Footer";
import OurExpert from "./components/OurExpert";
import AboutUs from "./views/AboutUs";
import { Characteristics } from "./components/Characteristics";
import Timeline from "./components/Timeline";

export default function App() {
  return (
    <div> 
      <Navbar />
      <Home />
      <AboutUs />
      <Characteristics />
      <OurExpert />
      <Timeline />
      <Footer />
    </div>
  );
}
