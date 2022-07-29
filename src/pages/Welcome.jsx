import React from "react";
import welcome from "../images/welcome.jpg";
import "./Welcome.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useState } from "react";
import { useEffect } from "react";
import { UserDatabase } from "../data/UserDatabase";
import { dateToStarSign } from "../util/dateToStarSign";
import { useCurrentUser } from "../hooks/useCurrentUser";

const Welcome = (props) => {
  const navigate = useNavigate();

  const { authToken } = useContext(AuthContext);

  const currentUser = useCurrentUser(authToken);

  const navigateHoroscope = () => {
    navigate(`/horoscope`);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${welcome})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "100%",
        marginTop: 0,
      }}
    >
      <div className="shadow_welcome">
        {currentUser !== undefined ? (
          <div>
            <h1 className="shadow_welcome">
              {`WELCOME, ${currentUser.firstName}`}
              {/* {props.name} */}
            </h1>

            <span className="subtitle_welcome">
              your star sign is{" "}
              <button className="button_sign" onClick={navigateHoroscope}>
                {dateToStarSign(currentUser.dateOfBirth)}
              </button>
            </span>
          </div>
        ) : (
          <h3>Loading user data</h3>
        )}
      </div>
    </div>
  );
};

export default Welcome;
