import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import {
  All,
  Cloths,
  Electronics,
  Furnitures,
  Others,
  ProductPage,
  Shoes,
} from "./components/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<All />} />
      <Route path="cloths" element={<Cloths />} />
      <Route path="electronics" element={<Electronics />} />
      <Route path="furnitures" element={<Furnitures />} />
      <Route path="shoes" element={<Shoes />} />
      <Route path="others" element={<Others />} />
      <Route path="product/:id" element={<ProductPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
