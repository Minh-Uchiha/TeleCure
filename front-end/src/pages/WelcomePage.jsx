import React from "react";
import { DoctorNav, PatientNav } from "../components/main-components";

const WelcomePage = () => {
  return (
    <main className="welcome-page">
      <h1>Welcome to our remote healthcare provision service</h1>
      <h3>Choose to continue</h3>
      <section className="welcome-options">
        <DoctorNav />
        <PatientNav />
      </section>
    </main>
  );
};

export default WelcomePage;
