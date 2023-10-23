import "./About.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import { motion } from "framer-motion";

// import img from "public/kapil.jpg";

function About() {
  //TODO Add animations.
  return (
    <>
      <Navbar></Navbar>
      <div
        className={
          "about bg-primary_dark_bg   min-h-screen  overflow-x-hidden "
        }
      >
        <div className="flex w-screen flex-col items-center justify-center text-white about__wrapper min-h-screen-screen">
          <div className="flex h-screen w-full flex-col items-center justify-center gap-y-8 heading__wrapper">
            <h1 className="font-bold text-5vw">
              I craft beautiful <br /> and engaging web <br /> experiences.
            </h1>
          </div>
          <div className="flex min-h-screen flex-col items-center justify-center gap-y-8 px-3 py-4 laptop:px-0 smallerMobile:px-6 tablet:px-28 info__about__me laptop:w-aboutWidth">
            <h2
              className={
                "text-7vw  font-extrabold text-red-600 text-start  w-full "
              }
            >
              About
            </h2>
            <h3 className={"flex flex-col gap-y-8 text-xl"}>
              <span className={"block text-2xl "}>
                Hi, I'm Kapil. I am a self taught front end web developer.
              </span>
              <span>
                As a skilled front-end web developer, I possess a strong
                foundation in HTML, CSS, JavaScript, Tailwind CSS, and React,
                enabling me to craft engaging and interactive web applications.
                My expertise in responsive web development ensures that my
                creations seamlessly adapt to various devices, delivering an
                optimal user experience across desktops, tablets, and
                smartphones.
              </span>
              <span>
                My proficiency extends to utilizing industry-leading tools and
                technologies, including WebStorm, GitHub, and Firebase,
                streamlining my development process and enhancing my
                productivity. I am passionate about creating visually appealing
                and user-friendly websites that not only captivate users but
                also meet their specific needs.
              </span>
            </h3>
            <div className="w-full resume__wrapper">
              <a
                href={"public/kapil_resume.pdf"}
                className={"links"}
                download={true}
              >
                Download resume (pdf 67kb)
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
