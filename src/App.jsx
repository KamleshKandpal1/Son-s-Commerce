import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { All, Cart, Error, ProductPage } from "./Pages/index.js";
import Layout from "./Layout.jsx";
import { CartApiProvider } from "./Contexts/Contexts.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<All />} />
      <Route path="product/:id" element={<ProductPage />} />
      <Route path="*" element={<Error />} />
      <Route path="cart" element={<Cart />} />
    </Route>
  )
);

function App() {
  return (
    <CartApiProvider>
      <RouterProvider router={router} />
    </CartApiProvider>
  );
}

export default App;
