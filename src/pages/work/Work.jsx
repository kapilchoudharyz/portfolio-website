import Navbar from "../../components/navbar/Navbar.jsx";

function Work() {
  const workData = [
    {
      projectName: "Mapty App",
      URL: "https://workoutplace-tracker.netlify.app/",
      infos: "An application where you can track your workout.",
    },
    {
      projectName: "Bankist App",
      URL: "https://bankk-app.netlify.app/",
      infos: "A mock banking web application with multiple functionalities",
    },
    {
      projectName: "Bankist Site",
      URL: "https://bankistt-website.netlify.app/",
      infos:
        "A visually appealing banking website to create an account or know about the bank.",
    },
    {
      projectName: "Track your trip",
      URL: "https://track-your-trip.netlify.app/",
      infos: "Track your trip on the map throughout the world",
    },
  ];
  return (
    <>
      <Navbar></Navbar>
      <section className="min-h-screen max-w-screen overflow-x-hidden text-stone-100 work bg-primary_dark_bg">
        <div className="flex h-full w-full flex-col gap-y-16 px-5 work__wrapper tablet:gap-y-[5vw] py-[30vh] smallerMobile:px-10 tablet:px-32 laptop:px-48 desktop:px-64">
          {workData.map((work) => (
            <a
              className={
                "flex flex-col gap-y-4 tablet:gap-y-[2vw] hover:translate-x-6 tablet:hover:translate-x-16 transition-all ease-out duration-300"
              }
              href={work.URL}
              key={Math.random() * 18}
              target={"_blank"}
            >
              <span
                className={
                  "block text-stone-100 text-3xl font-semibold  smallerMobile:text-4xl  tablet:text-5xl laptop:text-[5vw]"
                }
              >
                {work.projectName}
              </span>
              <span
                className={
                  "block text-red-600 text-xl smallerMobile:text-2xl tablet:text-3xl laptop:text-[2vw]"
                }
              >
                {work.infos}
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}

export default Work;
