import React from "react";
import { Logo, SignupNav } from "../feature-components";
import "../../css/Header.css";

const Header = () => {
  return (
    <header>
      <Logo />
      <SignupNav />
    </header>
  );
};

export default Header;
