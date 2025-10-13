import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }
    // TODO: Add authentication logic here
    alert(`Logged in as: ${form.email}`);
  };

  return (
    <main className="container" style={{ maxWidth: 400, margin: "50px auto", padding: "2rem 0" }}>
      <h2 className="mb-16">Login</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <div className="option-group mb-16">
          <label htmlFor="email">Email</label>
          <input
            className="form-input"
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="option-group mb-16">
          <label htmlFor="password">Password</label>
          <input
            className="form-input"
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <div style={{ color: "red", marginBottom: 12 }}>{error}</div>}
        <p>Don't have an account? <Link to="/authentication/register">Register</Link></p>
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;