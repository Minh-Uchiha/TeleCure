import React from "react";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import "../../css/DoctorInfoCard.css";

const InfoCard = () => {
  const { userInfo } = useUserContext();
  const navigate = useNavigate();
  const {
    imageUrl,
    title,
    hospital,
    yearsOfExperience,
    specialty,
    foreName,
    surName,
  } = userInfo;

  const handleEditInfo = () => {
    navigate("/account");
  };

  return (
    <section className="info-container">
      <div className="avatar">
        <img src={imageUrl} alt="doctor image" />
        <p>{`${title} ${foreName} ${surName}`}</p>
      </div>
      <div className="info">
        <h2>{hospital}</h2>
        <p>{specialty}</p>
        <p>{yearsOfExperience} years of experience</p>
        <button onClick={handleEditInfo}>Edit info</button>
      </div>
    </section>
  );
};

const DoctorInfoCard = () => {
  return <InfoCard />;
};

export default DoctorInfoCard;
