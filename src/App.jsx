import { Outlet } from "react-router-dom";
import Navbar from "./views/navbar";
import Home from "./views/Home";

export default function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}