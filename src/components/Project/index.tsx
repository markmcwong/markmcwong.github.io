import "./Project.css";

import { AnimationControls, motion, useAnimation } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Pill from "../Pill";
import React from "react";
import colors from "tailwindcss/colors";

type ProjectProps = {
  projectName: string;
  date: string;
  description: string;
  coverPhoto: string;
  projectLink?: string;
  icon?: string;
  projectColor: string;
  backgroundColorControls: AnimationControls;
  positionOffset?: number;
};

const Project: React.FC<ProjectProps> = ({
  projectName,
  date,
  description,
  coverPhoto,
  projectLink,
  icon,
  projectColor,
  backgroundColorControls,
  positionOffset,
}) => {
  const arrowControls = useAnimation();

  const handleHoverStart = () => {
    arrowControls.start({ pathLength: 1, pathOffset: 0 });
    backgroundColorControls.start({
      backgroundColor: projectColor,
      transition: { duration: 0.75, ease: "easeOut" },
    }); // Replace 'newColor' with the desired color: ;
  };

  const handleHoverEnd = () => {
    arrowControls.start({ pathLength: 0, pathOffset: 1 });
    backgroundColorControls.start({
      backgroundColor: colors.neutral[900],
      transition: { duration: 0.75, ease: "easeOut" },
    }); // Replace 'newColor' with the desired color: ;
  };

  return (
    <motion.div
      className="project col-span-5 sm:[&:nth-child(2)]:col-end-6 sm:[&:nth-child(2)]:col-start-3 sm:[&:nth-child(2)]:justify-self-end aspect-square sm:[&:nth-child(1)]:col-span-3"
      initial="initial"
      whileHover="hover"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <img
        src={icon}
        alt="Description"
        className="floating-image w-14 h-14 lg:w-24 lg:h-24 top-4 left-4"
      />
      <img
        src={coverPhoto}
        alt={projectName}
        className="cover-photo"
        style={{ objectPosition: `${positionOffset}% 50%` }}
      />
      <motion.div
        className="pills-container pl-4 bottom-4 lg:bottom-8 lg:pl-8"
        variants={base}
      >
        <div className="flex justify-between w-full">
          <div className="flex w-max flex-row items-center">
            <Pill textSize="text-base lg:text-2xl" className="mr-4 lg:px-12">
              {projectName}
            </Pill>
            <div
              className="cursor-pointer"
              onClick={() => window.open(projectLink, "_blank")}
            >
              <Pill className="h-fit px-4">
                <motion.div variants={seeMoreVariant}>
                  <FontAwesomeIcon icon="arrow-right" color="black" size="lg" />
                </motion.div>
              </Pill>
            </div>
          </div>
        </div>
        <motion.div variants={extraPillVariants}>
          <Pill textSize="text-xs lg:text-base" className="mb-2">
            {date}
          </Pill>
          <Pill textSize="text-xs lg:text-base" className="mb-2">
            {description}
          </Pill>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const base = {};

const seeMoreVariant = {
  initial: { x: "0px" },
  //   hover: { x: "35%", opacity: 1 },
  hover: { x: ["0px", "5px", "-5px", "0px"] },
  //   transition: { repeat: 1, duration: 0.3, ease: "easeInOut" },
};

const extraPillVariants = {
  initial: { y: "-25%", opacity: 0 },
  hover: { y: "-5%", opacity: 1 },
};

export default Project;
