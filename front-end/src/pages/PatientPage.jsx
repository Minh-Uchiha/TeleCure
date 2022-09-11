import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";
import "../css/PatientPage.css";

const PatientPage = () => {
  const { user, isLoggedIn } = useContext(AuthContext);

  const handleMakeAppointment = () => {};

  return (
    <section className="patient-page">
      <div className="greettings">
        <h1>
          Welcome
          {isLoggedIn &&
            <span className="link">{user.forename + " " + user.surname}</span>
          }{!isLoggedIn &&
            <Link className="link" to="/signup/patient">
              Sign in
            </Link>
          }
        </h1>
      </div>
      <div className="make-appointment-container">
        <button onClick={handleMakeAppointment}>
          Make an appointment with a doctor now!
        </button>
      </div>
    </section>
  );
};

export default PatientPage;
