import "./ContactItem.css";

import {
  IconDefinition,
  IconName,
  IconPrefix,
  IconProp,
} from "@fortawesome/fontawesome-svg-core";
import { motion, useAnimation } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type ContactProps = {
  name: string;
  link: string;
  icon: IconProp | [IconPrefix, IconName] | IconDefinition;
  className?: string;
  description?: string;
};

const ContactItem: React.FC<ContactProps> = ({
  name,
  link,
  icon,
  className,
  description,
}) => {
  const controls = useAnimation();
  const textControls = useAnimation();
  const [iconColor, setIconColor] = useState("black");

  const handleMouseEnter = () => {
    controls.start({ y: 0, transition: { duration: 0.5, ease: "easeInOut" } });
    textControls.start({
      paddingLeft: "1rem",
      paddingRight: "1rem",
      transition: { duration: 0.25, delay: 0.25, ease: "easeIn" },
    });
    setIconColor("white");
  };

  const handleMouseLeave = () => {
    controls.start({
      y: "-100%",
      transition: { duration: 0.5, ease: "easeInOut" },
    });
    textControls.start({
      paddingLeft: 0,
      paddingRight: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    });
    setIconColor("black");
  };

  return (
    <>
      <motion.div
        className={`flex overflow-hidden relative hover:text-white text-black justify-between items-center border-t-2 border-t-black w-full cursor-pointer font-subtitle ${className}`}
        onClick={() => window.open(link, "_blank")}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        animate={textControls}
      >
        <div className="py-6 text-2xl z-10 text-left">
          {name}
          <div className="font-light text-sm w-full">{description}</div>
        </div>
        <FontAwesomeIcon
          icon={icon}
          color={iconColor}
          size="xl"
          className="z-10"
        />
        {/* Sliding Rectangle */}
        <motion.div
          className="sliding-rectangle absolute top-0 left-0 right-0 h-full bg-black z-0"
          initial={{ y: "-100%" }} // Start above the container
          animate={controls} // Control the animation using the controls
        />
      </motion.div>
    </>
  );
};

export default ContactItem;
