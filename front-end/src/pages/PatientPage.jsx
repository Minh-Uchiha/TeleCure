import React from "react";
import { useEffect } from "react";
import { useUserContext } from "../context/UserContext";

const PatientPage = () => {
  const { setUserToDoctor } = useUserContext();

  useEffect(() => {
    setUserToDoctor(false);
  }, []);

  return <div>PatientPage</div>;
};

export default PatientPage;
