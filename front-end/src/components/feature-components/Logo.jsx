import React from "react";
import { Link } from "react-router-dom";
import "../../css/Logo.css";

const Logo = () => {
  return (
    <div>
      <Link className="logo link" to="/">
        Tele<span>Cure</span>
      </Link>
    </div>
  );
};

export default Logo;
