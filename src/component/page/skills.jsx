import { faCode, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { listProgrammingLanguage } from "../../data/programmingLanguage";
import Card from "../card/Card";
import { framework } from "../../data/framework";

const Skills = () => {
  const [listLanguage, setListLanguage] = useState([]);
  const [listFramework, setListFramework] = useState([]);

  useEffect(() => {
    document.title = "Andra - Skills";

    setListLanguage(listProgrammingLanguage);
    setListFramework(framework);
  });

  return (
    <div className="min-h-screen px-8 bg-slate-100 flex flex-col items-start justify-center">
      <div className="w-full">
        <h1
          className="sm:text-4xl text-2xl font-bold uppercase"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <FontAwesomeIcon icon={faLightbulb} className="me-3" />
          My <span className="text-sky-600">Skills</span>
        </h1>
        <div className="mt-8">
          <h1
            className="text-lg sm:text-2xl font-semibold"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-delay="300"
          >
            Programming Language Used
          </h1>
          <div className="overflow-x-scroll scrollbar scrollbar-none pb-8 flex items-center gap-x-6 mt-4 font-medium">
            {listLanguage.map((language) => (
              <div
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-delay={language.id * 500}
              >
                <Card
                  key={language.id}
                  text={language.name}
                  icon={language.icon}
                />
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1
            className="text-lg sm:text-2xl font-semibold"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-easing="ease-in-out"
            data-aos-delay="800"
          >
            Framework Used
          </h1>
          <div className="overflow-x-scroll scrollbar scrollbar-none pb-8 lg:overflow-hidden flex items-center gap-x-6 mt-4 font-medium">
            {listFramework.map((language) => (
              <div
                data-aos="fade-right"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                data-aos-delay={language.id * 500}
              >
                <Card
                  key={language.id}
                  text={language.name}
                  icon={language.icon}
                  img={language.img}
                  customStyle={"w-[40px] h-auto mb-3 fill-black"}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
