import React from "react";
import { useEffect } from "react";
import { useUserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import "../css/PatientPage.css";

const PatientPage = () => {
  const { signedIn, userInfo, setUserToDoctor } = useUserContext();
  const { foreName, surName } = userInfo;

  useEffect(() => {
    setUserToDoctor(false);
  }, []);

  const handleMakeAppointment = () => {};

  return (
    <section className="patient-page">
      <div className="greettings">
        <h1>
          Welcome
          {signedIn ? (
            <span className="link">{foreName + " " + surName}</span>
          ) : (
            <Link className="link" to="/signup/patient">
              Sign in
            </Link>
          )}
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
