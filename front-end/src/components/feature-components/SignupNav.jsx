import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import "../../css/SignupNav.css";
import { useUserContext } from "../../context/UserContext";

const SignupNav = () => {
  const { isDoctor } = useUserContext();

  return (
    <div>
      <Link
        className="signup-link link"
        to={`/signup/${isDoctor ? "doctor" : "patient"}`}
      >
        Sign up
        <FontAwesomeIcon className="icon" icon={faRightToBracket} />
      </Link>
    </div>
  );
};

export default SignupNav;
