import { useAnimation, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Helper from "../../utils/helper";
import Project from "../../components/Project";
import Projects from "./description.json";
import Section from "../../components/Section";
import colors from "tailwindcss/colors";

const Work = () => {
  const backgroundColorControls = useAnimation();
  const { scrollYProgress } = useScroll();
  const [position, setPosition] = useState(0);

  useEffect(() => {
    // Attach a listener to scrollYProgress
    return scrollYProgress.onChange((value) => {
      // Calculate and update the rotation degree
      setPosition(Helper.calcPosition(value));
    });
  }, [scrollYProgress]);

  return (
    <>
      <div className="w-full px-24 sm:px-48 bg-neutral-900">
        <div className="border-t-white border-t-2 w-full" />
      </div>

      <Section
        animate={backgroundColorControls}
        className="flex-col sm:px-24 bg-neutral-900"
      >
        <div className="my-10 sm:my-24 w-full sm:justify-center sm:items-center sm:flex sm:px-20">
          <div className="sm:flex sm:w-full">
            <div className="text-7xl sm:text-work font-medium font-title text-left text-white w-fit">
              Prev<a className="text-4xl text-white font-cursive">ious</a>
            </div>
            <div className="text-7xl sm:text-work sm:mt-12 font-medium font-title text-right w-ful sm:w-fit text-white">
              Works
            </div>
          </div>
          <FontAwesomeIcon
            icon="chevron-down"
            color="white"
            size="5x"
            className="mb-8 sm:justify-end"
          />
        </div>
        <div className="grid gap-y-12 sm:gap-y-16 xl:gap-y-32 grid-cols-5 w-full sm:mt-12">
          {Projects.map((project, index) => (
            <Project
              key={index}
              projectName={project.projectName}
              date={project.date}
              description={project.description}
              coverPhoto={Helper.getImgUrl(project.coverPhoto)}
              projectLink={project.projectLink}
              icon={Helper.getImgUrl(project.icon)}
              projectColor={project.color || colors.neutral[900]}
              backgroundColorControls={backgroundColorControls}
              positionOffset={position}
            />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Work;
