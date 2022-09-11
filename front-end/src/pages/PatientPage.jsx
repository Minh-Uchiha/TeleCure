import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import { useNavigate } from "react-router-dom";
import "../css/PatientPage.css";

const socket = io.connect("http://localhost:8080");
const room = "as_" + Math.random().toString(16).slice(2);

const RequestForm = ({ requestFormClass }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleRequestAppointment = () => {
    socket.emit("request-appointment", { name, description, room });
  };

  return (
    <section className={requestFormClass}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleRequestAppointment}>Request an Appointment</button>
    </section>
  );
};

const PatientPage = () => {
  const { user, isLoggedIn } = useContext(AuthContext);
  const [requestFormClass, setRequestFormClass] =
    useState("request-popup-form");

  const handleMakeAppointment = () => {
    setRequestFormClass("request-popup-form active");
  };

  useEffect(() => {
    socket.emit("join-room", room);
  }, []);

  return (
    <section className="patient-page">
      <div className="greettings">
        <h1>
          Welcome
          {isLoggedIn && (
            <span className="link">{user.forename + " " + user.surname}</span>
          )}
          {!isLoggedIn && (
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
      <RequestForm requestFormClass={requestFormClass} />
    </section>
  );
};

export default PatientPage;
