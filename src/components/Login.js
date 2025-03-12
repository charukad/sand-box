// client/src/components/Login.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./css/new.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // Example in Login.js
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/api/auth/login", {
        email,
        password,
      });
      console.log("Login response:", res.data);
      // Save the token to localStorage
      localStorage.setItem("token", res.data.token);
      navigate("/main");
    } catch (err) {
      console.error(err.response ? err.response.data : err.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
