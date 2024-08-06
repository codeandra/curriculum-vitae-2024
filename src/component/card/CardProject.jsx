import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardProject = ({ CardImg, CardText, CardIcon }) => {
  return (
    <div
      className="w-full lg:w-[250px] my-5 relative group bg-black border-[3px] border-slate-300 cursor-pointer shadow-xl"
    >
      <img
        src={CardImg}
        alt=""
        className="w-full h-full object-cover group-hover:scale-105 duration-500 group-hover:opacity-40 ease-in-out group-hover:blur-sm"
      />
      <div className="group-hover:flex duration-300 hidden ease-in-out absolute top-0 left-0 w-full h-full flex-col justify-center items-center text-white">
        <h2 className="text-lg text-center leading-5 font-semibold">{CardText}</h2>
        <FontAwesomeIcon icon={CardIcon} className="size-10 mt-2" />
      </div>
    </div>
  );
};

export default CardProject;
