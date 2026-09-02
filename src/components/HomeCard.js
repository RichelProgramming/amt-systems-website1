import globe from '../assets/globe.png';
import React from 'react';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion } from "framer-motion";
import CustumTextChange from './CustumTextChange';
import {useNavigate} from "react-router-dom";
import logoamt from "../assets/logonew.svg";

const HeroSection = ({homeData}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const handleClick = () => {
    navigate ( "/contact#contact");
    setTimeout(() => {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  }

  const shouldRenderGlobe = !(isMobile && homeData.page === "home");

  return (
    <Box
      sx={{
        display: 'flex',
        margin: 'auto',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        justifyContent: 'space-evenly',
        px: 4,
        py: 8,
        background: 'linear-gradient(to right,#333366, #0d1b2a)',
        color: '#fff',
        height: '70vh',
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        {
          homeData.page === "home" ? 
          <Box sx={{ maxWidth: 500 }}>
          <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
            {homeData.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            {homeData.description}
          </Typography>
          {homeData.buttonText ?
            <Button variant="contained" color="primary" onClick={handleClick}>
              {homeData.buttonText}
            </Button>
            : null
          }
        </Box> :
        <Box sx={{ maxWidth: 500 }}>
          <CustumTextChange/>
        </Box>
        }
      </motion.div>

      {shouldRenderGlobe && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              position: "relative",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={globe} className="App-logo" alt="logo" />

            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                transform: "scale(1)",
                animation: "spin 9s linear infinite",
                "@keyframes spin": {
                  "0%": { transform: "scale(1) rotate(0deg)" },
                  "100%": { transform: "scale(1) rotate(360deg)" },
                },
              }}
            >
              {[
                { top: "-30px", left: "50%", transform: "translateX(-50%)" },
                { bottom: "-30px", left: "50%", transform: "translateX(-50%)" },
              ].map((position, index) => (
                <img
                  key={index}
                  src={logoamt}
                  alt={`Logo du site instance ${index + 1}`}
                  style={{
                    position: "absolute",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    borderRadius: "50%",
                    zIndex:4,
                    ...position,
                  }}
                />
              ))}
            </Box>
          </Box>
        </motion.div>
      )}
    </Box>
  );
};

export default HeroSection;
