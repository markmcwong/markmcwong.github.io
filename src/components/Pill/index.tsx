import "./Pill.css"; // Importing the styles

import { ReactNode } from "react";

type PillProps = {
  text?: string;
  children?: ReactNode;
  className?: string;
  textSize?: string;
};

const Pill: React.FC<PillProps> = ({
  className,
  children,
  text,
  textSize = "xs:text-xs lg:text-lg",
}) => {
  return (
    <div
      className={`pill w-fit px-3 py-3 lg:px-6 lg:py-4 rounded-3xl sm:rounded-flex ${textSize} ${className}`}
    >
      {text}
      {children}
    </div>
  );
};

export default Pill;
