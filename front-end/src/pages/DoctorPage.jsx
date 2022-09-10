import React from "react";
import { useEffect } from "react";
import { useUserContext } from "../context/UserContext";
import { DoctorInfo, AppointmentHistory } from "../components/main-components";
import "../css/DoctorPage.css";

const DoctorPage = () => {
  const { setUserToDoctor } = useUserContext();

  useEffect(() => {
    setUserToDoctor(true);
  }, []);

  return (
    <main className="doctor-page-container">
      <DoctorInfo />
      <AppointmentHistory />
    </main>
  );
};

export default DoctorPage;
