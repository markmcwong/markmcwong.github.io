import { AnimationControls, motion } from "framer-motion";

import React from "react";

type SectionProps = {
  children: React.ReactNode; // Accepts JSX elements as children
  backgroundColor?: string;
  className?: string;
  animate?: AnimationControls;
};

const Section: React.FC<SectionProps> = ({
  children,
  className,
  backgroundColor = "dark grey",
  animate,
}) => {
  return (
    <motion.div
      className={`py-16 px-8 w-full flex items-center ${className} lg:py-24`}
      style={{ backgroundColor: backgroundColor }}
      animate={animate}
    >
      {children}
    </motion.div>
  );
};

export default Section;
