import { useEffect, useState } from "react";
import profileImg from "/img/pp.jpeg";
import { optionNavbar } from "../data/optionNavbar";
import { Link } from "react-router-dom";
import AboutMe from "../component/page/aboutMe";
import Default from "../component/page/default";
import Education from "../component/page/education";
import Skills from "../component/page/skills";
import { socmed } from "../data/socmed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Project from "../component/page/project";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const [activePage, setActivePage] = useState("default");
  const [listContact, setListContact] = useState([]);
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    document.title = "CV Andra";

    setListContact(socmed);
  }, []);

  const handleNavigation = (page) => {
    setActivePage(page);
    setOpenSidebar(false);
  };

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div className="min-h-screen w-full relative">
      <div
        className={`${
          openSidebar ? "translate-x-0" : "-translate-x-full"
        } z-30 min-h-screen bg-slate-800 fixed w-[300px] sm:translate-x-0 flex flex-col items-center justify-center duration-500 ease-in-out`}
      >
        <div className="flex flex-col items-center w-full">
          <img
            src={profileImg}
            alt="profile"
            className="w-[130px] h-[130px] object-cover rounded-full border-[5px] border-white border-opacity-35"
          />
          <div className="flex flex-col items-center w-full mt-8">
            {optionNavbar.map(({ name }) => (
              <div
                key={name}
                onClick={() => handleNavigation(name)}
                className={`${
                  activePage === name
                    ? "text-slate-400"
                    : "text-white hover:text-slate-400"
                } text-base font-bold py-2 w-full text-center uppercase duration-300 ease-in-out`}
              >
                {name}
              </div>
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

      <div className="sm:hidden">
        <div className="fixed top-0 left-0 p-4 bg-slate-800 w-full z-40">
          <div className="flex">
            <button onClick={toggleSidebar}>
              <FontAwesomeIcon
                icon={openSidebar ? faTimes : faBars}
                className="text-white text-xl"
              />
            </button>
            <p className="text-white font-semibold ms-3">Kevin Andra</p>
          </div>
        </div>
          <div
            className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-40 duration-500 ease-in-out ${
              openSidebar ? "opacity-100 pointer-events-auto z-20" : "opacity-0 pointer-events-none"
            }`}
            onClick={toggleSidebar}
          />
      </div>

      <div className="transition-all duration-300 sm:ml-[300px]">
        <div className="w-full">
          {activePage === "default" && (
            <Default handleNavigation={handleNavigation} />
          )}
          {activePage === "Tentang Saya" && <AboutMe />}
          {activePage === "Pendidikan" && <Education />}
          {activePage === "Keterampilan" && <Skills />}
          {activePage === "Project" && <Project />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
