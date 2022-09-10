import React from "react";
import "../../css/AppointmentHistory.css";

const Appointment = ({ customer_name, Date, ratings }) => {
  return (
    <div className="appointment">
      <p>{customer_name}</p>
      <p>
        {Date.getDate() +
          "/" +
          Date.getMonth() +
          "/" +
          Date.getFullYear() +
          " " +
          Date.getHours() +
          ":" +
          Date.getMinutes()}
      </p>
      <p>{ratings} ratings received</p>
    </div>
  );
};

const AppointmentHistory = () => {
  const appointment_data = [
    {
      customer_name: "Alex",
      Date: new Date("September 01, 2022 01:15:00"),
      ratings: 4.5,
    },
    {
      customer_name: "Amy",
      Date: new Date("September 03, 2022 12:50:00"),
      ratings: 4.5,
    },
    {
      customer_name: "Shira",
      Date: new Date("September 07, 2022 07:47:00"),
      ratings: 4.5,
    },
  ];

  return (
    <div className="appointment-history-container">
      <h1>Appointment History</h1>
      {appointment_data.map((appointment, idx) => {
        return <Appointment {...appointment} key={idx} />;
      })}
    </div>
  );
};

export default AppointmentHistory;
