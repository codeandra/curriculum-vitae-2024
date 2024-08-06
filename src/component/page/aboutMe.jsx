import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { hobbies } from "../../data/hobbies";
import useAOS from "../../hooks/useAOS";
import Card from "../card/Card";

const AboutMe = () => {
  const [litsHobbies, setListHobbies] = useState([]);
  useAOS();

  useEffect(() => {
    document.title = "Andra - About Me";
    setListHobbies(hobbies);
  }, []);

  return (
    <div className="min-h-screen  px-8 bg-slate-100 flex flex-col items-start justify-center">
      <div className="w-full">
        <h1
          className="text-2xl sm:text-4xl font-bold uppercase"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <FontAwesomeIcon icon={faUser} className="me-3" />
          About <span className="text-sky-600">Me</span>
        </h1>
        <div className="flex flex-col sm:flex-col lg:flex-row mt-3 gap-x-8 gap-y-6 md:gap-y-4 lg:gap-y-0">
          <p
            className="font-medium lg:w-[45%] w-full h-full text-[15px]"
            data-aos="fade-right"
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos-easing="ease-in-out"
          >
            Hai, nama saya Kevin Andra Nugroho, biasa dipanggil Kevin atau
            Andra. Lahir di Surakarta, Jawa Tengah. Saya anak pertama dari
            keluarga. Saya sekolah di SMK Negeri 5 Surakarta dan dari jurusan
            RPL. Dengan rasa penasaran yang tinggi saya menjadi ingin mempelajari
            dunia IT.
          </p>
          <div className="font-semibold text-[13px] sm:text-sm flex flex-col gap-y-[2px] sm:gap-y-0">
            <p
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="300"
              data-aos-easing="ease-in-out"
              className="text-sky-600"
            >
              Age <span className="text-black ms-2">16</span>
            </p>
            <p
              className="text-sky-600"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="400"
              data-aos-easing="ease-in-out"
            >
              Adress{" "}
              <span className="text-black ms-2">Sukoharjo, Central Java</span>
            </p>
            <p
              className="text-sky-600"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="500"
              data-aos-easing="ease-in-out"
            >
              Residence <span className="text-black ms-2">Indonesia</span>
            </p>
            <p
              className="text-sky-600"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="600"
              data-aos-easing="ease-in-out"
            >
              Email{" "}
              <span className="text-black ms-2">
                kevinandranugroho732@gmail.com
              </span>
            </p>
            <p
              className="text-sky-600"
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="600"
              data-aos-easing="ease-in-out"
            >
              Phone{" "}
              <span className="text-black ms-2">
                083825757229
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h1
          className="text-2xl sm:text-4xl font-bold uppercase"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="500"
          data-aos-easing="ease-in-out"
        >
          My <span className="text-sky-600">Hobbies</span>
        </h1>
        <div className="overflow-x-scroll scrollbar scrollbar-none mt-5 font-medium gap-x-6 flex w-full">
          {litsHobbies.map((hobby) => (
            <div data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-out" data-aos-delay={hobby.id * 250}>
              <Card icon={hobby.icon} text={hobby.text} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
