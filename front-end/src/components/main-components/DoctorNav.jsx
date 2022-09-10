import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor } from "@fortawesome/free-solid-svg-icons";
import "../../css/DoctorNav.css";

const DoctorNav = () => {
  return (
    <div className="welcome-option-box">
      <Link to="/doctor" className="doctor-nav link">
        Doctor
        <FontAwesomeIcon className="icon" icon={faUserDoctor} />
      </Link>
    </div>
  );
};

export default DoctorNav;
