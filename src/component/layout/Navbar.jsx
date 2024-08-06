import { socmed } from "../data/socmed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profileImg from "../assets/img/pp.jpeg";
import { optionNavbar } from "../data/optionNavbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [listContact, setListContact] = useState([]);

  useEffect(() => {
    setListContact(socmed);
  });

  return (
    <div className="min-h-screen bg-[#032541] fixed w-[300px] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center w-full">
        <img
          src={profileImg}
          alt="profile"
          className="w-[130px] h-[130px] object-cover rounded-full border-[5px] border-white border-opacity-35"
        />
        <div className="flex flex-col items-center w-full mt-8">
          {optionNavbar.map(({ name }) => (
            <Link
              key={name}
              onClick={() => handleNavigation(name)}
              className={`${
                activePage === name
                  ? "text-slate-400"
                  : "text-white hover:text-slate-400"
              } text-base font-bold py-2 w-full text-center uppercase duration-300 ease-in-out`}
            >
              {name}
            </Link>
          ))}
        </div>
        <div className="flex gap-x-3 mt-12">
          {listContact.map((socmed) => (
            <a href={socmed.link} key={socmed.id} target="_blank">
              <FontAwesomeIcon
                icon={socmed.icon}
                className="size-5 text-white"
              />
            </a>
          ))}
        </div>
        <p className="text-white mt-2 text-xs">© 2024 Kevin Andra</p>
        <p className="text-white text-[10px]">All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Navbar;
