import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="container mx-auto px-3 mt-9 ">
      <ul className="flex justify-between items-center px-4 ">
        <li>
          <NavLink
            onClick={() => setActive(1)}
            to="/current"
            className={`flex pb-3 ${
              active === 1 ? " border-b-4 border-b-primary" : ""
            }`}
          >
            <span
              className={`text-md font-bold ${
                active === 1 ? "text-primary  " : ""
              } `}
            >
              جاری
            </span>
            <span
              className={`border flex justify-center items-center text-white  rounded-full w-6 h-6 mr-2 ${
                active === 1 ? "bg-primary border-primary " : "bg-gray-800"
              }`}
            >
              1
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setActive(2)}
            to="/reseved"
            className={`flex pb-3 ${
              active === 2 ? " border-b-4 border-b-primary" : ""
            }`}
          >
            <span
              className={`text-md font-bold ${
                active === 2 ? "text-primary  " : ""
              } `}
            >
              رزروشده
            </span>
            <span
              className={`border flex justify-center items-center text-white  rounded-full w-6 h-6 mr-2 ${
                active === 2 ? "bg-primary border-primary " : "bg-gray-800"
              }`}
            >
              3
            </span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => setActive(3)}
            to="/finished"
            className={`flex pb-3 ${
              active === 3 ? " border-b-4 border-b-primary" : ""
            }`}
          >
            <span
              className={`text-md font-bold ${
                active === 3 ? "text-primary  " : ""
              } `}
            >
              تمام شده
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
