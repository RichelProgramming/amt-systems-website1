import globe from '../assets/globe.png';
import React from 'react';
import { Box, Button, Typography, useMediaQuery, useTheme } from '@mui/material';
import { motion } from "framer-motion";
import CustumTextChange from './CustumTextChange';

const HeroSection = ({homeData}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
          homeData.page=="home" ? 
          <Box sx={{ maxWidth: 500 }}>
          <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
            {homeData.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>
            {homeData.description}
          </Typography>
          {homeData.buttonText?
            <Button variant="contained" color="primary">
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

      {!isMobile && (
       <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <Box
          sx={{
            width: "auto",
            height: "auto",
          }}
        >
         <img src={globe} className="App-logo" alt="logo" />
       </Box>
      </motion.div>
      )}
    </Box>
  );
};

export default HeroSection;


        <img src={globe} className="App-logo" alt="logo" />
      
