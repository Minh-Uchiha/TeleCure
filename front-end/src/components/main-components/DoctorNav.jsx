import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import "../../css/DoctorNav.css";
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";

const DoctorNav = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="welcome-option-box">
      <Link
        to={isLoggedIn ? "/doctor" : `/signup/doctor`}
        className="doctor-nav link"
      >
        Doctor
        <FontAwesomeIcon className="icon" icon={faUserDoctor} />
      </Link>
    </div>
  );
};

export default DoctorNav;
