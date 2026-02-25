import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductsLayout from "./pages/ProductsLayout";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/products" element={<ProductsLayout />}>
        <Route index element={<ProductList />} />
        <Route path=":id" element={<ProductDetails />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App