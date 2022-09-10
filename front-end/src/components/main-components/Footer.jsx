import React from "react";
import { Link } from "react-router-dom";
import "../../css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>This is the footer</p>
      <Link className="link" to="/about">
        About us
      </Link>
    </footer>
  );
};

export default Footer;
