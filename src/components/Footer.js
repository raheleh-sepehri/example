import { NavLink } from "react-router-dom";
import { IoBagHandleOutline } from "react-icons/io5";
import { SlHome } from "react-icons/sl";
import { BsPerson } from "react-icons/bs";
import { TfiViewGrid } from "react-icons/tfi";
import { useState } from "react";
import PayDtail from "./PayDtail";

const Footer = () => {
  const [active, setActive] = useState(0);
  return (
    <div className=" bg-gray-50 px-1  w-full fixed bottom-0">
      <PayDtail/>
      <ul className="py-2 px-2 flex justify-between border-t  border-gray-400 ">
        <li>
          <NavLink
            onClick={() => {
              setActive(1);
            }}
            to="/earns"
            className={`flex flex-col gap-y-4 justify-center items-center text-gray-500 font-bold text-md font-[iransans]  
            ${active === 1 ? "text-slate-950 font-black " : ""}`}
          >
            <span>
              <IoBagHandleOutline className="w-8 h-8" />
            </span>
            <span>کسب درآمد</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              setActive(2);
            }}
            to="/services"
            className={`flex flex-col gap-y-4 justify-center items-center text-gray-500 font-bold text-md font-[iransans]  
            ${active === 2 ? "text-slate-950 font-black " : ""} `}
          >
            <span>
              <TfiViewGrid className="w-8 h-8 text-gray-500" />
            </span>
            <span>خدمات</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              setActive(3);
            }}
            to="/"
            className={`flex flex-col gap-y-4 justify-center items-center text-gray-500 font-bold text-md font-[iransans]  
            ${active === 3 ? "text-slate-950 font-black " : ""} `}
          >
            <span>
              <SlHome className="w-8 h-8" />
            </span>
            <span>خانه</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              setActive(4);
            }}
            to="/orders"
            className={`flex flex-col gap-y-4 justify-center items-center text-gray-500 font-bold text-md font-[iransans]  
            ${active === 4 ? "text-slate-950 font-black " : ""} `}
          >
            <div className="relative">
              <IoBagHandleOutline className="w-8 h-8" />
              <span
                className={`absolute top-0 left-4 border border-primary bg-primary flex justify-center items-center text-white  rounded-full w-6 h-6 `}
              >
                4
              </span>
            </div>
            <span>سفارش ها</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              setActive(5);
            }}
            to="/account"
            className={`flex flex-col gap-y-4 justify-center items-center text-gray-500 font-bold text-md font-[iransans]  
            ${active === 5 ? "text-slate-950 font-black " : ""} `}
          >
            <span>
              <BsPerson className="w-8 h-8" />
            </span>
            <span>حساب کاربری</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
