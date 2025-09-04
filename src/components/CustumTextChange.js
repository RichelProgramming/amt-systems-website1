import "../App.css";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AppBar, Toolbar, Button, Typography, Box, Container } from "@mui/material";
const RotateWords = ({
  text = "we can",
  words = [
           "Delivery & release", 
           "Ux-Implementaton", 
           "Quality Functional ",
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
        <motion.p
          key={words[index]}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5 }}
        > 
        <p className="outlined-text"> {words[index]}</p>
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default RotateWords;
