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
        <Route index path="/Home" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Product" element={<Product />}></Route>
        <Route path="/ProductPage" element={<ProductPage />}></Route> {/** 쿼리스트링 */}
        <Route path="/ProductPage/:name" element={<ProductPage />}></Route> {/** param */}
      </Route>
    </Routes>
  );
};

export default Main;
