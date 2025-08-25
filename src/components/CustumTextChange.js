import "../App.css";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AppBar, Toolbar, Button, Typography, Box, Container } from "@mui/material";
const RotateWords = ({
  text = "we can",
  words = [
           "innovate your business", 
           "Update Web developpment", 
           "Management System info",
           "Conseil IT and Digital",
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
        <Typography variant="h3" component="h3" fontWeight="bold" gutterBottom>
            {text} 
         </Typography>
       
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
