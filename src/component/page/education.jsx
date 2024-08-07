import { useEffect, useState } from "react";
import { listSchool } from "../../data/listSchool";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import useAOS from "../../hooks/useAOS";

const Education = () => {
  const [list, setList] = useState([]);
  useAOS();

  useEffect(() => {
    document.title = "Andra - Education"

    setList(listSchool);
  }, []);

  return (
    <div className="h-screen px-8 bg-slate-100 flex flex-col items-start justify-center">
      <div className="w-full">
        <h1 className="sm:text-4xl text-2xl font-bold uppercase mb-8"
          data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-out">
          <FontAwesomeIcon icon={faGraduationCap} className="me-2" />
          Education
        </h1>
        <div className="flex flex-col">
          <div className="w-[100%] lg:w-[75%]">
            {list.map((school) => (
              <div key={school.id} className="mb-4 w-[100%] lg:w-[75%] my-8"
                data-aos="fade-right" data-aos-duration="800" data-aos-easing="ease-in-out" data-aos-delay={school.id * 500}>
                <h1 className="font-semibold text-lg sm:text-2xl">{school.name}</h1>
                <p className="text-[11px] sm:text-xs">{school.address}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
