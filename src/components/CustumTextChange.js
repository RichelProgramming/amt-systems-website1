import "../App.css";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Typography } from "@mui/material";

const RotateWords = ({
  words = [
    "Delivery & release",
    "Ux-Implementaton",
    "Quality Functional",
    "Leading my Business",
    "Customer user journey",
    "Feecback & Continuous implovement",
  ],
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key={words[index]}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h5"
            className="outlined-text"
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: {
                xs: "1.5rem",
                sm: "1.6rem", 
                md: "4rem",
                lg: "5rem",
              },
            }}
          >
            {words[index]}
          </Typography>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default RotateWords;
