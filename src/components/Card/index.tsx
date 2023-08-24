// src/components/Card/index.tsx

import "./Card.css"; // Importing the styles

import React, { ReactNode } from "react";

type CardProps = {
  image?: string; // Background image URL
  borderRadius?: string; // Corner radius, e.g., '15px'
  children?: ReactNode; // Other JSX elements
  className?: string; // Other CSS classes
};

const Card: React.FC<CardProps> = ({
  image,
  borderRadius = "10px",
  children,
  className = "",
}) => {
  // Style object with background image and border radius
  const cardStyle = {
    backgroundImage: image ? `url(${image})` : undefined,
    borderRadius,
  };

  return (
    <div className={`card ${className}`} style={cardStyle}>
      <div className="card-content">
        {children} {/* Render any children JSX elements */}
      </div>
    </div>
  );
};

export default Card;
