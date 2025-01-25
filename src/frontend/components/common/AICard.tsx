import React, { useState } from "react";
import { Card } from "../ui/card";

// Define the Props interface
interface Props {
  children: React.ReactNode;
  className?: string;
  backgroundColor?: string;
  hoverColor?: string;
  style?: React.CSSProperties; // Type definition for style prop
}

const AICard: React.FC<Props> = ({
  children,
  className = "",
  backgroundColor = "#f4f5f7",
  hoverColor = "#fdba74", // Default hover color
  style = {},
}) => {
  const [currentColor, setCurrentColor] = useState(backgroundColor);

  return (
    <Card
      className={`${className} transition-all duration-300`}
      style={{ backgroundColor: currentColor, ...style }} // Merging backgroundColor with custom styles
      onMouseEnter={() => setCurrentColor(hoverColor)} // Apply hover color
      onMouseLeave={() => setCurrentColor(backgroundColor)} // Revert to original background color
    >
      {children}
    </Card>
  );
};

export default AICard;
