// client/src/components/Signup.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const { username, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5001/api/auth/register", {
        username,
        email,
        password,
      });
      console.log(res.data);
      navigate("/main");
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="form-container">
      <h2>Create Account</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={onChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
