import React from "react";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import "../../css/DoctorInfoCard.css";

const InfoCard = () => {
  const { userInfo } = useUserContext();
  const navigate = useNavigate();
  const {
    avatar,
    title,
    hospital,
    years_expirience,
    specialty,
    dr_forename,
    dr_surname,
  } = userInfo;

  const handleEditInfo = () => {
    navigate("/account");
  };

  return (
    <section className="info-container">
      <div className="avatar">
        <img src={avatar} alt="doctor image" />
        <p>{`${title} ${dr_forename} ${dr_surname}`}</p>
      </div>
      <div className="info">
        <h2>{hospital}</h2>
        <p>{specialty}</p>
        <p>{years_expirience} years of experience</p>
        <button onClick={handleEditInfo}>Edit info</button>
      </div>
    </section>
  );
};

const DoctorInfoCard = () => {
  return <InfoCard />;
};

export default DoctorInfoCard;
