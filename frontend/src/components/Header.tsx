import React from "react";
import logo from "../assets/logo.png";

import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export default function Header() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} style={{ width: 150, borderRadius: 20 }} />
        {/* <h2>Craft Desk</h2> */}
      </div>
      <nav className="nav-links">
        <a href="#features">About the project</a>
        <a href="#pricing">Pricing</a>
        <Button
          variant="contained"
          href="/chat"
          style={{ color: "white", height: "3rem" }}>
          Get Started
        </Button>
      </nav>
    </header>
  );
}
