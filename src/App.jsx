import "./main.css";
import { account } from "./lib/appwrite";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

import Layout from "./pages/Layout";
import Home from "./pages/home";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import BuildMenu from "./pages/Build-menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NewMenuItem from "./pages/NewMenu";

import Login from "./authentication/login";
import Register from "./authentication/register";

import Dashboard from "./admin/pages/dashboard"; 
import Customers from "./admin/pages/customer";
import Orders from "./admin/pages/Orders";
import AdminLLayout from "./admin/Layout";
import MenuManagement from "./admin/pages/Menus";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getLoggedInUser = async () => {
      const currentUser = await account.get();
      console.log(currentUser);
      setUser(currentUser);
    };

    getLoggedInUser();
  }, []);

  return (
    <UserProvider>

    <BrowserRouter>
    <Routes>
      <Route path="/authentication">
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="admin" element={<AdminLLayout />}>
        <Route path="dashboard" element={<Dashboard user={user} />} />
        <Route path="menu-management" element={<MenuManagement user={user} />} />
        <Route path="orders" element={<Orders user={user} />} />
        <Route path="customers" element={<Customers user={user} />} />
      </Route>
    <Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="menu" element={<Menu />} />
  <Route path="order" element={<Order />} />
  <Route path="build-menu" element={<BuildMenu />} />
  <Route path="about" element={<About />} />
  <Route path="contact" element={<Contact />} />
  <Route path="new-menu" element={<NewMenuItem />} />
</Route>
    </Routes>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
