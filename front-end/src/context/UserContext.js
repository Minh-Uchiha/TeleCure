import React from "react";
import { useContext } from "react";
import { useState } from "react";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [isDoctor, setIsDoctor] = useState(true);
  const [userInfo, setUserInfo] = useState({
    dr_forename: "",
    dr_surname: "",
    title: "",
    specialty: "",
    hospital: "",
    phone_number: "",
    password: "",
    years_expirience: 0,
    average_ratings: 0,
    net_earnings: 0,
    earnings: 0,
    patients_number: 0,
    email_address: "",
    avatar:
      "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000",
  });
  const [signedIn, setSignedIn] = useState(true);

  const setUserToDoctor = (isDoctor) => {
    setIsDoctor(isDoctor);
  };

  const setStatusToSignedIn = (isSignedIn) => setSignedIn(isSignedIn);

  return (
    <UserContext.Provider
      value={{
        isDoctor,
        userInfo,
        setUserToDoctor,
        setUserInfo,
        setStatusToSignedIn,
        signedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
