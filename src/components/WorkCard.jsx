import { NavLink } from "react-router-dom";
import "./WorkCard.css";

function WorkCard({ url, info, techUsed }) {
  return (
    <>
      <div className="h-full w-full px-2 py-4 navlink__wrapper">
        <a href={url} target={"_blank"} className={"flex flex-col gap-y-3"}>
          <h2 className={"text-red-600 text-2xl"}>Mapty App</h2>
          <ul className={"px-8"}>
            {info.map((info) => (
              <li
                key={Math.random() * 1000}
                className={"text-stone-100 list-disc"}
              >
                {info}
              </li>
            ))}
          </ul>
        </a>
      </div>
    </>
  );
}

export default WorkCard;
