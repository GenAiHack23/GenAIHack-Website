import { Outlet } from "react-router-dom";
import Navbar from "./views/Navbar";
import Home from "./views/Home";
import Footer from "./components/Footer";
import OurExpert from "./components/OurExpert";
import AboutUs from "./views/AboutUs";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutUs />
      <OurExpert />
      <Footer />
    </div>
  );
}
