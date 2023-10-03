import { Route } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import HomeView from "./views/Home";
import AboutView from "./views/About";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<HomeView />} />
      <Route path="about" element={<AboutView />} />
    </Route>
  )
)