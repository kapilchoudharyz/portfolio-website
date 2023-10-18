import Navbar from "../../components/navbar/Navbar.jsx";

function Contact() {
  return (
    <>
      <Navbar></Navbar>
      <div
        className={
          "contact__page min-h-screen bg-primary_dark_bg text-stone-200 w-screen"
        }
      >
        <div className="contact__wrapper overflow-x-hidden w-full flex flex-col items-center justify-center ">
          <div className="contact__main__heading  flex flex-col items-center justify-center h-screen">
            <h1 className={"flex flex-col text-7vw font-bold"}>
              <span>Let's make</span> <span>something great </span>
            </h1>
          </div>
          <div className="contact__info min-h-screen flex flex-col gap-y-[2rem] items-center justify-center px-3 smallerMobile:px-6 tablet:px-28 laptop:w-aboutWidth laptop:px-0 py-4">
            <h2
              className={
                "text-2xl tablet:text-5xl laptop:text-6xl desktop:text-7vw font-extrabold text-start w-full text-red-600"
              }
            >
              Contact
            </h2>
            <h3 className={"flex flex-col gap-y-8 text-2xl"}>
              <span>
                I am currently looking for a front-end web developer role where
                I can use my skills and experience to help teams create
                innovative and user-friendly web products and services. I am a
                hard worker and I am always willing to learn new things. I am
                also a team player and I am eager to collaborate with others to
                achieve common goals.
              </span>
              <span>
                If you are looking for a front-end web developer who is
                passionate about their work and dedicated to delivering
                high-quality results, then I encourage you to contact me. I am
                confident that I have the skills and experience you are looking
                for.
              </span>
            </h3>
            <div className="contact__link__wrapper w-full flex flex-col gap-y-1">
              <a
                href="https://twitter.com/Kapilchoudharyz"
                target={"_blank"}
                className={"links"}
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/kapil-kumar-3b4647231/"
                target={"_blank"}
                className={"links"}
              >
                Linkedin
              </a>
              <a
                href="https://github.com/kapilchoudharyz"
                target={"_blank"}
                className={"links"}
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
