import { useEffect, useState } from "react";
import useAOS from "../../hooks/useAOS";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardProject from "../card/CardProject";
import { listProject } from "../../data/project";
import { Link } from "react-router-dom";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const Project = () => {
  const [project, setProject] = useState([]);
  useAOS();
  useEffect(() => {
    document.title = "Andra - Project";

    setProject(listProject);
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 px-14 pt-20 flex flex-col justify-center items-center">
      <div className="w-full">
        <h1
          className="sm:text-4xl text-2xl font-bold uppercase mb-8"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <FontAwesomeIcon icon={faCode} className="me-2" />
          My <span className="text-sky-600">Project</span>
        </h1>
        <div className="flex-col flex md:flex-row items-center gap-x-4">
          {project.map((project) => (
            <Link to={project.to} target="_blank" key={project.id} rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={project.id * 500}
              data-aos-easing="ease-in-out"
            >
              <CardProject
                key={project.id}
                CardImg={project.img}
                CardText={project.name}
                CardIcon={project.frameworkUsed}
                to={project.to}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
