import React from "react";
import { Link } from "react-router-dom";
import "./css/Home.css";

// Import your floating PNGs (make sure to place them in your assets folder)
import floating1 from "../assets/floating1.png";
import floating2 from "../assets/floating2.png";
import floating3 from "../assets/floating3.png";

const Home = () => (
  <div className="container">
    {/* Floating PNG images */}
    <img src={floating1} alt="Floating" className="floating-img img1" />
    <img src={floating2} alt="Floating" className="floating-img img2" />
    <img src={floating3} alt="Floating" className="floating-img img3" />

    <div className="content">
      <h1>Sand Box</h1>
      <div className="button-wrapper">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Create Account</button>
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
