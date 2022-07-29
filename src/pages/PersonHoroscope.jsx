import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { StarSignDatabase } from "../data/StarSignDatabase";
import { useCurrentUser } from "../hooks/useCurrentUser";
import horoscope from "../images/horoscope.jpg";
import { dateToStarSign } from "../util/dateToStarSign";
import "./PersonHoroscope.css";

const PersonHoroscope = (props) => {
  const currentUser = useCurrentUser(useContext(AuthContext).authToken);

  return (
    <div
      style={{
        backgroundImage: `url(${horoscope})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

        width: "100%",
        height: "100%",
        marginTop: 0,
      }}
    >
      <div className="shadow_horoscope">
        {currentUser !== undefined ? (
          <>
            <h1>{dateToStarSign(currentUser.dateOfBirth)}</h1>

            <div className="box">
              {StarSignDatabase[dateToStarSign(currentUser.dateOfBirth)]}
              {/* <p>
                The twins are used to describe the sign of Gemini because
                typical Gemini people love to share ideas with someone else. The
                most important thing for a Gemini is communication. Gemini
                people are almost always curious about lots of different things.
                A typical Gemini person usually enjoys being with other people,
                and loves to talk about the latest thing he is doing. People
                usually like their Gemini friends, because they have something
                interesting to share with everybody.
              </p> */}
            </div>
          </>
        ) : (
          <h3>Loading user data</h3>
        )}
      </div>
    </div>
  );
};

export default PersonHoroscope;
