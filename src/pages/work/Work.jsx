import Navbar from "../../components/navbar/Navbar.jsx";

function Work() {
  const workData = [
    {
      projectName: "Mapty App",
      URL: "https://6534d6068b4dfd3fdc51f582--exquisite-cupcake-56e0eb.netlify.app/",
      infos: "An application where you can track your workout.",
    },
    {
      projectName: "Bankist App",
      URL: "https://65355f0112f69417c7f5d98c--gregarious-cascaron-9af8d0.netlify.app/",
      infos: "A mock banking web application with multiple functionalities",
    },
    {
      projectName: "Bankist Site",
      URL: "https://653564359c63b36359358e2f--golden-alfajores-084589.netlify.app/",
      infos:
        "A visually appealing banking website to create an account or know about the bank.",
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
                "flex flex-col gap-y-4 tablet:gap-y-[2vw] hover:translate-x-7 transition-all ease-out duration-300"
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
