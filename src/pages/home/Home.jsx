import "./Home.css";
import { NavLink } from "react-router-dom";
import { useRef, useState } from "react";
import kapil from "/kapil.jpg";

import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

function Home() {
  const [isAboutHovered, setIsAboutHovered] = useState(false);
  const [isWorkHovered, setIsWorkHovered] = useState(false);
  const [isContactHovered, setIsContactHovered] = useState(false);
  const [isOverlayClicked, setIsOverlayClicked] = useState(false);
  const overlay = useRef();
  return (
    <header
      className={
        "min-h-screen bg-primary_dark_bg text-stone-100 overflow-hidden flex flex-row h-screen justify-around"
      }
    >
      <div
        className={`${
          isOverlayClicked
            ? "hidden"
            : "mobile__overlay h-screen w-screen absolute top-0 left-0 bg-transparent cursor-pointer laptop:hidden"
        }`}
        onClick={() => {
          setIsAboutHovered(true);
          setIsWorkHovered(true);
          setIsContactHovered(true);
          setIsOverlayClicked(true);
        }}
      ></div>

      {!isOverlayClicked && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ type: "spring", stiffness: 500, delay: 0.6 }}
          className={
            "overlay__message text-stone-100 absolute bottom-20 m-auto laptop:hidden w-screen text-center"
          }
        >
          Click anywhere on the screen
        </motion.div>
      )}

      <motion.nav
        // initial={{ opacity: 0, x: -30 }}
        // animate={{ opacity: 1, x: 0 }}
        // exit={{ opacity: 0, x: -30 }}
        className="flex h-screen flex-col items-center justify-center gap-y-4 w-[500px] laptop:w-[30vw] shrink-0 laptop:z-10"
      >
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            className="about__wrapper navLinksWrapper"
            onMouseEnter={() => {
              setIsAboutHovered(true);
            }}
            onMouseLeave={() => {
              isOverlayClicked
                ? setIsAboutHovered(true)
                : setIsAboutHovered(false);
            }}
          >
            {isAboutHovered && (
              <NavLink to={"about"} className={"navLinks text-stone-100"}>
                About
              </NavLink>
            )}

            {!isAboutHovered && (
              <div className={"navLinks text-stone-100"}>Hello.</div>
            )}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
          className="work__wrapper navLinksWrapper"
          onMouseEnter={() => setIsWorkHovered(true)}
          onMouseLeave={() => {
            isOverlayClicked ? setIsWorkHovered(true) : setIsWorkHovered(false);
          }}
        >
          {isWorkHovered && (
            <NavLink to={"work"} className={"navLinks"}>
              Projects
            </NavLink>
          )}

          {!isWorkHovered && <div className={"navLinks"}>I am</div>}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
          className="contact__wrapper navLinksWrapper"
          onMouseEnter={() => setIsContactHovered(true)}
          onMouseLeave={() => {
            isOverlayClicked
              ? setIsContactHovered(true)
              : setIsContactHovered(false);
          }}
        >
          {isContactHovered && (
            <NavLink to={"contact"} className={"navLinks"}>
              Contact
            </NavLink>
          )}
          {!isContactHovered && <div className={"navLinks"}>Kapil</div>}
        </motion.div>
      </motion.nav>
      <div className={"overflow-hidden "}>
        <motion.img
          src={kapil}
          alt="image"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
          className={
            "hidden laptop:inline tablet:w-[800px]  desktop:w-[100%] h-full bg-contain"
          }
        />
      </div>
    </header>
  );
}

export default Home;
