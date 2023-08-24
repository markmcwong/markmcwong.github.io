import "./Card.css"; // Importing the styles

import Card from ".";
import Helper from "../../utils/helper";
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
          translateX: "0vw",
        }}
        className="h-fit w-full"
      >
        <Card
          image={Helper.getImgUrl("/assets/me/me.jpeg")}
          borderRadius="15px"
        />
      </motion.div>
      <motion.div
        animate={{
          rotate: rotationDegree - 10,
          translateX: "15%",
          translateY: "8vw",
        }}
        className="h-fit w-full"
      >
        <Card
          image={Helper.getImgUrl("/assets/me/me3.jpg")}
          borderRadius="15px"
        />
      </motion.div>
      <motion.div
        animate={{
          rotate: rotationDegree - 5,
          translateX: "30%",
          translateY: "15vw",
        }}
        className="h-fit w-full"
      >
        <Card
          image={Helper.getImgUrl("/assets/me/me2.jpg")}
          borderRadius="15px"
        />
      </motion.div>
    </div>
  );
};

export default Cards;
