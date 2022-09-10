import React from "react";
import { useState } from "react";
import "../css/SignupPage.css";

const SignupForm = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [error, setError] = useState("");
  const [user, setUser] = useState({
    dr_forname: "",
    dr_surname: "",
    title: "",
    specialty: "",
    hospital: "",
    years_expirience: "",
    phone_number: "",
    password: "",
    reenteredPassword: "",
    email: "",
  });

  const handleChange = (e) => {
    setUser((oldUser) => {
      return { ...oldUser, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = () => {};

  return (
    <section className="sign-up-form">
      <p className="error">{error}</p>
      <div
        style={{ display: `${isSignUp ? "block" : "none"}` }}
        className="input-field"
      >
        <input
          type="text"
          name="foreName"
          placeholder="First name"
          value={user.fore_name}
          onChange={handleChange}
        />
      </div>
      <div
        style={{ display: `${isSignUp ? "block" : "none"}` }}
        className="input-field"
      >
        <input
          type="text"
          name="surName"
          placeholder="Last name"
          value={user.sur_name}
          onChange={handleChange}
        />
      </div>
      <div
        style={{ display: `${isSignUp ? "block" : "none"}` }}
        className="input-field"
      >
        <input
          type="text"
          name="title"
          placeholder="Job title"
          value={user.title}
          onChange={handleChange}
        />
      </div>
      <div
        style={{ display: `${isSignUp ? "block" : "none"}` }}
        className="input-field"
      >
        <input
          type="text"
          name="specialty"
          placeholder="Specialty"
          value={user.specialty}
          onChange={handleChange}
        />
      </div>
      <div
        style={{ display: `${isSignUp ? "block" : "none"}` }}
        className="input-field"
      >
        <input
          type="text"
          name="hospital"
          placeholder="Hospital"
          value={user.hospital}
          onChange={handleChange}
        />
      </div>
      <div
        style={{ display: `${isSignUp ? "block" : "none"}` }}
        className="input-field"
      >
        <input
          type="text"
          name="years_expirience"
          placeholder="Years of Experience"
          value={user.years_expirience}
          onChange={handleChange}
        />
      </div>
      <div className="input-field">
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />
      </div>
      <div
        style={{ display: `${isSignUp ? "block" : "none"}` }}
        className="input-field"
      >
        <input
          type="text"
          name="phonenumber"
          placeholder="Phone number"
          value={user.phone_number}
          onChange={handleChange}
        />
      </div>
      <div className="input-field">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />
      </div>
      <div
        style={{ display: `${isSignUp ? "block" : "none"}` }}
        className="input-field"
      >
        <input
          type="password"
          name="reenteredPassword"
          placeholder="Re-enter password"
          value={user.reenteredPassword}
          onChange={handleChange}
        />
      </div>
      <div className="submit-field">
        <input
          type="button"
          value={`${isSignUp ? "Sign up" : "Sign in"}`}
          onClick={handleSubmit}
        />
      </div>
      <p>
        {isSignUp ? `Already have an account?` : "Don't have an account?"}{" "}
        <span onClick={() => setIsSignUp((oldIsSignUp) => !oldIsSignUp)}>
          {isSignUp ? "Sign in" : "Sign up"}
        </span>
      </p>
    </section>
  );
};

const DoctorSignupPage = () => {
  return (
    <div className="signup-form-container">
      <h1 style={{ color: "#635bff" }}>Sign up to be a doctor at TeleCure!</h1>
      <SignupForm />
    </div>
  );
};

export default DoctorSignupPage;
