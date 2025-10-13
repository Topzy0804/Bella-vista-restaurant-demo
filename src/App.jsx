import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import BuildMenu from "./pages/Build-menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NewMenuItem from "./pages/NewMenu";
import Login from "./authentication/login";
import Register from "./authentication/register";

import Header from "./components/Header";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/authentication" >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<Order />} />
        <Route path="/build-menu" element={<BuildMenu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/new-menu" element={<NewMenuItem />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
