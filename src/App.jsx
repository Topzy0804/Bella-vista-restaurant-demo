import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import BuildMenu from "./pages/Build-menu";

import Header from "./components/Header";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/build-menu" element={<BuildMenu />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
