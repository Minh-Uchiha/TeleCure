import React from "react";
import { Link } from "react-router-dom";
import "../../css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <p>A product made by Sirius team</p>
      <Link className="link" to="/about">
        About us
      </Link>
    </footer>
  );
};

export default Footer;
