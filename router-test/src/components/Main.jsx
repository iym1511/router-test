import { Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Layout from "./Layout";
import Product from "./Product";
import ProductPage from "./ProductPage";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Product" element={<Product />}></Route>
        <Route path="/ProductPage" element={<ProductPage />}></Route>
      </Route>
    </Routes>
  );
};

export default Main;
