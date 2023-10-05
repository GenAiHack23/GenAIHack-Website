import { Outlet } from "react-router-dom";
import Navbar from "./views/Navbar";
import Home from "./views/Home";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
