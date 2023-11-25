import { Outlet } from "react-router-dom";
import Homee from "./views/Home";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      {/* <Navbar /> */}
     <Navbar />
      <Outlet />
    </div>
  );
}
