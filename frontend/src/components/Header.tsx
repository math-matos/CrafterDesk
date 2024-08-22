import React from "react";
import logo from "../assets/logo2.png";

import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export default function Header() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} />
        <h2>Craft Desk</h2>
      </div>
      <nav className="nav-links">
        <a href="#features">Sobre o projeto</a>
        <a href="#contact">Contact</a>
        <Button variant="contained" href="#signup" style={{ height: "3rem" }}>
          Get Started
        </Button>
      </nav>
    </header>
  );
}
