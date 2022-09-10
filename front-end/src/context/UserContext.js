import React from "react";
import { useContext } from "react";
import { useState } from "react";

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [isDoctor, setIsDoctor] = useState(true);
  const [userInfo, setUserInfo] = useState({
    foreName: "Minh",
    surName: "Pham",
    title: "Dr",
    specialty: "Neurological Surgeon",
    hospital: "XYZ Hospital",
    phonenumber: "8134056519",
    password: "Password",
    yearsOfExperience: 10,
    averageRatings: 3.5,
    netEarnings: 10000,
    earnings: 17226,
    patientNumber: 1000,
    email: "minhquangpham@telecure.com",
    imageUrl:
      "https://img.freepik.com/free-vector/doctor-character-background_1270-84.jpg?w=2000",
  });
  const [signedIn, setSignedIn] = useState(true);

  const setUserToDoctor = (isDoctor) => {
    setIsDoctor(isDoctor);
  };

  const setStatusToSignedIn = (isSignedIn) => setSignedIn(isSignedIn);

  const updateUserInfo = (user) => {
    setUserInfo((oldUserInfo) => {
      return { ...oldUserInfo, ...user };
    });
  };

  return (
    <UserContext.Provider
      value={{
        isDoctor,
        userInfo,
        setUserToDoctor,
        updateUserInfo,
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
