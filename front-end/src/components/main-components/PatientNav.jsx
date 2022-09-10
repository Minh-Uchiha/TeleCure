import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHospitalUser } from "@fortawesome/free-solid-svg-icons";
import "../../css/PatientNav.css";

const PatientNav = () => {
  return (
    <div className="welcome-option-box">
      <Link to="/patient" className="patient-nav link">
        Patient
        <FontAwesomeIcon className="icon" icon={faHospitalUser} />
      </Link>
    </div>
  );
};

export default PatientNav;
