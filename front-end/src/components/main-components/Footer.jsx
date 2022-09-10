import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <p>This is the footer</p>
      <Link to="/about">About us</Link>
    </div>
  );
};

export default Footer;
