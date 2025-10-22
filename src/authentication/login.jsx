import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

import { account } from "./../lib/appwrite";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleUpdate = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const user = await account.createEmailPasswordSession(loginDetails);
      setUser(user);
      navigate("/admin/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "100px auto", padding: "20px" }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            onChange={handleUpdate}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            className="form-input"
            type="password"
            id="password"
            name="password"
            onChange={handleUpdate}
            required
          />
        </div>
        <p>
          Don't have an account?
          <Link to="/auth/register" className="nav-link">
            {" "}
            Register here.{" "}
          </Link>
        </p>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
