import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useUserContext } from "../context/UserContext";
import { DoctorInfo, AppointmentHistory } from "../components/main-components";
import io from "socket.io-client";
import { AuthContext } from "../context/auth.context";
import "../css/DoctorPage.css";
import { useNavigate } from "react-router-dom";

const socket = io.connect("http://localhost:8080");

const doctor_room = "as_" + Math.random().toString(16).slice(2);

const RequestNotification = ({ requestPopUpClass }) => {
  const { user } = useContext(AuthContext);
  const { dr_forename, title, dr_surname, specialty } = user;

  const handleAcceptRequest = () => {
    socket.emit("accept-request", {
      dr_forename,
      title,
      dr_surname,
      specialty,
      doctor_room,
    });
  };

  const handleRejectRequest = () => {
    socket.emit("reject-request", doctor_room);
  };

  return (
    <section className={requestPopUpClass}>
      <h3>There is a request from Minh</h3>
      <h1>Description: Will die soon</h1>
      <button onClick={handleAcceptRequest}>Accept</button>
      <button onClick={handleRejectRequest}>Reject</button>
    </section>
  );
};

const DoctorPage = () => {
  const { setUserToDoctor } = useUserContext();
  const navigate = useNavigate();
  const [isAvailable, setIsAvailable] = useState(false);
  const [requestPopUpClass, setRequestPopUpClass] = useState("request-popup");

  const turnOnAvailability = () => {
    socket.connect();
    setIsAvailable(!isAvailable);
  };

  const turnOffAvailability = () => {
    setIsAvailable(!isAvailable);
    socket.disconnect();
  };

  useEffect(() => {
    setUserToDoctor(true);

    socket.on("receive-appointment", ({ name, description, room }) => {
      doctor_room = room;
      setRequestPopUpClass("request-popup active");
      console.log("Hello");
      socket.emit("join-room", doctor_room);
    });

    socket.on("navtigate-chatroom", (room) => {
      navigate("/chatroom/" + doctor_room);
    });
  }, []);

  return (
    <main className="doctor-page-container">
      <DoctorInfo />
      <section className="availability-switch-btn-container">
        <button
          onClick={isAvailable ? turnOffAvailability : turnOnAvailability}
        >
          {isAvailable ? "STOP" : "START"} RECEIVING REQUEST
        </button>
      </section>
      <AppointmentHistory />
      <RequestNotification requestPopUpClass={requestPopUpClass} />
    </main>
  );
};

export default DoctorPage;
