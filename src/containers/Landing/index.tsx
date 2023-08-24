import "./Landing.css"; // Importing the styles

import { useEffect, useState } from "react";

import Cards from "../../components/Card/Cards";
import Profile from "../Profile";
import { useScroll } from "framer-motion";

const AboutMeSection: React.FC<{ rotationDegree: number }> = ({
  rotationDegree,
}) => {
  return (
    <div className="sm:col-span-3 col-span-3 sm:flex-row-reverse flex-col w-100 grid grid-cols-5 items-center sm:mx-36">
      <div className="col-span-5 sm:col-span-3 mb-2 sm:mb-0">
        <Cards rotationDegree={rotationDegree} />
      </div>
      <div className="col-span-5 sm:col-span-2">
        <Profile />
      </div>
    </div>
  );
};

const Landing = () => {
  const { scrollYProgress } = useScroll();
  const [rotationDegree, setRotationDegree] = useState(0);

  const calculateRotation = (value: number, constant: number) =>
    value * constant;

  useEffect(() => {
    // Attach a listener to scrollYProgress
    return scrollYProgress.onChange((value) => {
      // Calculate and update the rotation degree
      setRotationDegree(calculateRotation(value, 10));
    });
  }, [scrollYProgress]);

  return (
    <div className="sm:mt-20 mt-12 text-left grid grid-cols-3 gap-4 h-full flex-col items-center justify-center xl:my-40">
      <div className="sm:col-span-3 col-span-3 sm:mb-24 items-center">
        <div className="grid grid-cols-5">
          <h1 className="col-span-1 text-7xl sm:text-10xl font-semibold font-subtitle text-left text-white sm:ml-24 2xl:ml-36 w-fit">
            NLP
            <a className="text-3xl font-semibold text-white sm:hidden">
              rocessing
            </a>
          </h1>
          <div className="sm:col-start-3 sm:col-end-6 px-28 grid-cols-2 my-6 ml-2 text-xs sm:text-sm whitespace-pre-wrap uppercase hidden sm:grid items-center">
            <div className="col-span-1">
              Hailing from H.K. 🇭🇰 & {"\n"}currently thriving in S.G. 🇸🇬
            </div>

            <div className="col-span-1 max-w-sm">
              Passionate in using tech to make a positive difference to the
              world
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 sm:mx-36 items-end">
          <div className="col-span-5 sm:col-span-2 text-7xl sm:text-10xl font-light text-right sm:text-right w-full text-orange-400 font-cursive">
            <small className="sm:hidden font-title">— </small>
            Data
          </div>
          <div className="col-span-5 sm:col-span-3 text-7xl sm:text-10xl font-semibold font-subtitle text-center sm:w-full w-screen sm:ml-12 text-white">
            <small className="sm:hidden">{"\n"}</small>
            Scientist
            {/* <code>Data Scientist</code> */}
          </div>
        </div>
        <div className="grid grid-cols-2 my-6 sm:my-2 ml-2 text-xs sm:text-sm whitespace-pre-wrap uppercase sm:hidden">
          <div className="col-span-1">
            Hailing from H.K. 🇭🇰 & {"\n"}currently thriving in S.G. 🇸🇬
          </div>

          <div className="col-span-1">
            Passionate in using tech to make a positive difference to the world
          </div>
        </div>
      </div>
      <AboutMeSection rotationDegree={rotationDegree} />
    </div>
  );
};

export default Landing;
