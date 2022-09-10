import React from "react";
import { DoctorInfoCard, SignificantFigures } from "../feature-components";
import "../../css/DoctorInfo.css";

const DoctorInfo = () => {
  return (
    <div className="doctor-info-card">
      <DoctorInfoCard />
      <SignificantFigures />
    </div>
  );
};

export default DoctorInfo;
