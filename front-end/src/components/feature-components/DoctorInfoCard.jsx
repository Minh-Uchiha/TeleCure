import React, { useContext } from "react";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import "../../css/DoctorInfoCard.css";

const InfoCard = () => {
  const { userInfo } = useUserContext();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    title,
    hospital,
    years_expirience,
    specialty,
    dr_forename,
    dr_surname,
  } = user;

  const handleEditInfo = () => {
    navigate("/account");
  };

  return (
    <section className="info-container">
      <div className="avatar">
        <img
          src="https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000"
          alt="doctor image"
        />
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
