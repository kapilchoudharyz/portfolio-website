import "./About.css";
import Navbar from "../../components/navbar/Navbar.jsx";

// import img from "public/kapil.jpg";

function About() {
  return (
    <>
      <Navbar></Navbar>
      <div
        className={
          "about bg-primary_dark_bg   min-h-screen  overflow-x-hidden "
        }
      >
        <div className="about__wrapper min-h-screen-screen  text-white w-screen flex flex-col items-center justify-center">
          <div className="heading__wrapper h-screen flex flex-col items-center justify-center gap-y-8 w-full  ">
            <h1 className="text-5vw font-bold ">
              I craft beautiful <br /> and engaging web <br /> experiences.
            </h1>
          </div>
          <div className="info__about__me min-h-screen px-3 laptop:w-aboutWidth flex flex-col items-center justify-center gap-y-8 smallerMobile:px-6 tablet:px-28 py-4 laptop:px-0">
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
            <div className="resume__wrapper w-full">
              <a href={"public/kapil.jpg"} className={"links"} download={true}>
                Download resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
