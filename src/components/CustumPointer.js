import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CursorAnimation = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      
      <motion.div
        style={{
          position: "fixed",
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          background: "transparent",
          border: "2px solid transparent",
          backgroundImage: "linear-gradient(white, white), linear-gradient(70deg,rgb(103, 218, 74), #8B00FF)",
          backgroundOrigin: "border-box",
          backgroundClip: "content-box, border-box",
          pointerEvents: "none",
          zIndex: 9999,
        }}
        animate={{ x: position.x - 15, y: position.y - 15 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      />

      {/* Point central avec un dégradé lisse */}
      <motion.div
        style={{
          position: "fixed",
          width: "15px",
          height: "15px",
          background: "linear-gradient(45deg, #D4FF00, #8B00FF)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 10000,
        }}
        animate={{ x: position.x - 7.5, y: position.y - 7.5 }} // Centrage parfait
        transition={{ type: "spring", stiffness: 150, damping: 20 }}
      />
    </div>
  );
};

export default CursorAnimation;
