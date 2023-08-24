import "./Card.css"; // Importing the styles

import Card from ".";
import TestImage from "../../assets/me.jpeg";
import { motion } from "framer-motion";

type CardsProps = {
  rotationDegree: number;
};

const Cards: React.FC<CardsProps> = ({ rotationDegree }) => {
  return (
    <div className="card-container mt-6 pt-40 col-span-1">
      <motion.div
        animate={{
          rotate: rotationDegree - 20,
          translateX: -15,
        }}
        className="h-fit w-full"
      >
        <Card image={TestImage} borderRadius="15px" />
      </motion.div>
      <motion.div
        animate={{
          rotate: rotationDegree - 10,
          translateX: 30,
          translateY: 45,
        }}
        className="h-fit w-full"
      >
        <Card image={TestImage} borderRadius="15px" />
      </motion.div>
      <motion.div
        animate={{
          rotate: rotationDegree - 5,
          translateX: 75,
          translateY: 90,
        }}
        className="h-fit w-full"
      >
        <Card image={TestImage} borderRadius="15px" />
      </motion.div>
    </div>
  );
};

export default Cards;
