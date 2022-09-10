import React from "react";
import { Link } from "react-router-dom";

const PatientNav = () => {
  return (
    <div>
      <Link to="/patient" className="patient-nav">
        PatientNav
      </Link>
    </div>
  );
};

export default PatientNav;
