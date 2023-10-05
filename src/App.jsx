import { Outlet } from "react-router-dom";
import Navbar from "./views/navbar";
import Home from "./views/Home";
import Aboutus from "./views/about_us";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Aboutus />
    </div>
  );
}