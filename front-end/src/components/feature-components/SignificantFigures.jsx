import React from "react";
import "../../css/SignificateFigures.css";
import { useUserContext } from "../../context/UserContext";

const SignificantFigures = () => {
  const { userInfo } = useUserContext();
  const { averageRatings, netEarnings, earnings, patientNumber } = userInfo;

  return (
    <section className="significant-figures">
      <div className="earning-container">
        <h2>Your net earnings</h2>
        <h1>{netEarnings} USD</h1>
        <p>Gross earnings: {earnings}</p>
      </div>
      <div className="additional-info">
        <h3>
          <span>{patientNumber}</span> adivising sessions completed
        </h3>
        <h3>
          <span>{averageRatings}</span> ratings in average
        </h3>
      </div>
    </section>
  );
};

export default SignificantFigures;
