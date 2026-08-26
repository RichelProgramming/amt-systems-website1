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
          homeData.page==="home" ? 
          <Box sx={{ maxWidth: 500 }}>
          <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
            {homeData.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            {homeData.description}
          </Typography>
          {homeData.buttonText?
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

      {/* {!isMobile && ( */}
      <motion.div
  initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.5 }}
  viewport={{ once: true }}
>
  {/* Ce Box s'adapte à la taille naturelle du globe grâce à display: inline-flex */}
  <Box
    sx={{
      position: "relative",
      display: "inline-flex", 
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {/* 1. Le Globe : Strictement identique à votre code de départ */}
    <img src={globe} className="App-logo" alt="logo" />

    {/* 2. Le conteneur invisible de l'orbite */}
    <Box
      sx={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        // Élargit le cercle invisible pour que le logo ne touche pas le globe
        transform: "scale(1)", // Un peu plus grand pour l'espace des 4 logos
        animation: "spin 9s linear infinite",
        "@keyframes spin": {
          "0%": { transform: "scale(1) rotate(0deg)" },
          "100%": { transform: "scale(1) rotate(360deg)" },
        },
      }}
    >
      {/* --- Les 4 instances du Logo --- */}
      {/* Pour garantir une visibilité optimale, nous ajoutons un zIndex élevé et une ombre */}
      {[
        // Positionnement cardinal (Haut, Droite, Bas, Gauche)
        { top: "-30px", left: "50%", transform: "translateX(-50%)" },
        
        { bottom: "-30px", left: "50%", transform: "translateX(-50%)" },
       
      ].map((position, index) => (
        <img
          key={index}
          src={logoamt} // <--- Remplacez par votre variable de logo
          alt={`Logo du site instance ${index + 1}`}
          style={{
            position: "absolute",
            width: "auto", // Taille de vos logos qui tournent
            height: "auto",
            objectFit: "contain",
            borderRadius: "50%", // Optionnel : arrondir si le logo n'est pas rond
            zIndex:4, // S'assure qu'ils sont par-dessus le globe
            ...position, // Applique les coordonnées uniques
          }}
        />
      ))}
    </Box>
  </Box>
</motion.div>
    </Box>
  );
};

export default HeroSection;
