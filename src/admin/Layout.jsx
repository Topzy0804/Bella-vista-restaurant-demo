import { Outlet, Navigate } from "react-router-dom";

import "./../main.css";
import "./css/admin.css";

import Header from "./components/Header";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Layout = () => {
  const { user } = useContext(UserContext);

  return (
    <>
    {user != null ? (
      <>
        <Header />
        <main className="main-content">
          {/* Main content goes here */}
          <Outlet />
        </main>
      </>
    ) : (
      <Navigate to="/authentication/login" />
    )}
      </>
  ); 
};

export default Layout;