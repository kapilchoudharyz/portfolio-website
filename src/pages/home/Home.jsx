import "./Home.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import kapil from "/kapil.jpg";

// import { motion } from "framer-motion";

function Home() {
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [isWorkVisible, setIsWorkVisible] = useState(false);
  const [isContactVisible, setIsContactVisible] = useState(false);
  return (
    <div className="home overflow-x-hidden">
      <div className="home__wrapper">
        <h1 className="nav__links ">
          <div
            className="nav__about nav__link "
            onMouseEnter={() => setIsAboutVisible(true)}
            onMouseLeave={() => setIsAboutVisible(false)}
          >
            {isAboutVisible ? (
              <NavLink className={"nav__link  font-extrabold"} to={"about"}>
                About
              </NavLink>
            ) : (
              <div className="label__hello font-extrabold"></div>
            )}
          </div>
          <div
            className="nav__work  nav__link "
            onMouseEnter={() => setIsWorkVisible(true)}
            onMouseLeave={() => setIsWorkVisible(false)}
          >
            {isWorkVisible ? (
              <NavLink
                className={"nav__link font-extrabold text-red-600 "}
                to={"work"}
              >
                Work
              </NavLink>
            ) : (
              <div className="label__iam label font-extrabold text-red-600"></div>
            )}
          </div>
          <div
            className="nav__contact nav__link "
            onMouseEnter={() => setIsContactVisible(true)}
            onMouseLeave={() => setIsContactVisible(false)}
          >
            {isContactVisible ? (
              <NavLink
                className={"nav__link text-red-600 font-extrabold "}
                to={"contact"}
              >
                Contact
              </NavLink>
            ) : (
              <div className="label__kapil label font-extrabold text-red-600"></div>
            )}
          </div>
        </h1>
        <img src={kapil} alt="Home-vector" className={"home__vector"} />
      </div>
    </div>
  );
}

export default Home;
