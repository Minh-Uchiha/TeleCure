import React, { useContext} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import "../../css/SignupNav.css";
import { useUserContext } from "../../context/UserContext";
import { AuthContext } from '../../context/auth.context';

const SignupNav = () => {
  const { isDoctor } = useUserContext();
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  const handleClick = () =>{
    logOutUser()
  }
  return (
    <div>
      {!isLoggedIn ?(
      <Link
        className="signup-link link"
        to={`/signup/${isDoctor ? "doctor" : "patient"}`}
      >
        Sign up
        <FontAwesomeIcon className="icon" icon={faRightToBracket} />
      </Link>
        ):(
      <Link
        className="signup-link link"
        to={`/signup/${isDoctor ? "doctor" : "patient"}`} onClick={handleClick} style={{marginLeft: 10}}
      >
        Log out
        <FontAwesomeIcon className="icon" icon={faRightToBracket} />
      </Link>
      )}
    </div>
  );
};

export default SignupNav;
