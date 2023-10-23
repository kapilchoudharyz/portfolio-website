import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header
        className={
          "w-screen fixed flex flex-row justify-end mt-6 tablet:mt-12 laptop:mt-24 overflow-x-hidden"
        }
      >
        <div className="pr-6 laptop:pr-24 desktop:pr-28 pl-2 laptop:pl-24 desktop:pl-28">
          <NavLink
            to={"/"}
            className={
              "after:content-['Hello'] after:transition-all after:opacity-0 hover:after:content-['Hello'] hover:after:opacity-100 text-white tablet:text-2xl"
            }
          >
            Kapil.
          </NavLink>
        </div>
      </header>
    </>
  );
}

export default Navbar;
