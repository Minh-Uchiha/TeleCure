import React from "react";
import { Link } from "react-router-dom";

const DoctorNav = () => {
  return (
    <div>
      <Link to="/doctor" className="doctor-nav">
        DoctorNav
      </Link>
    </div>
  );
};

export default DoctorNav;
