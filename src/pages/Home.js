import React from "react";
import "../App.css";
import "../css/route-pages.css";
import "../css/navbar.css";
import "../css/home.css"
// import Login from "./Login";
import {NavLink} from "react-router-dom";


const Home = () => {
  return (
      <div className="navbar">
          <h1> Home </h1>
          <div className= "navbar-right">
              <NavLink to="/profile">My Profile</NavLink>
              <NavLink to="/register">Register</NavLink>
          </div>
      </div>
  );
};
export default Home;
