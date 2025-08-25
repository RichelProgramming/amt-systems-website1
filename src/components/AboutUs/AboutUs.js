import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import InsightsIcon from "@mui/icons-material/Insights";
import { motion } from "framer-motion";

const services1 = [
  { title: "Delivering products", icon: <DeveloperModeIcon style={{fontSize:'50px',color:"#0A1633"}} />, description: "Delivering products is important, but excellence means more than just fulfilling the explicit needs of our customers. " },
  { title: "Innovations", icon: <HeadsetMicIcon style={{fontSize:'50px',color:"#0A1633"}} />, description: "Creating sustainabale value requests more than technical resolution of the challenges. " },
];

const services2 = [
  { title: "projet Management ", icon: <BusinessCenterIcon style={{fontSize:'50px',color:"#0A1633"}} />, description: "To achieve this, AMT systems-Engineering SARL remains attentive to the real challenges the customer face in their ecosystem." },
  { title: "Conseil IT", icon: <InsightsIcon style={{fontSize:'50px',color:"#0A1633"}} />, description: "This customer-centric and user-focused approach prioritizes exceptional customer service by delivering tailored solutions that meet all stakeholders' needs." },
];

const gradientStyle = {
  background: "linear-gradient(90deg,rgb(102, 188, 70),rgb(65, 66, 141),red)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
};

const StarGrid = () => {
  return (
    <Box sx={{ textAlign: "center", p: 5 }}>
      <p className='title-text-color'>AMT Systems –Engineering SARLs</p>
      <h2>Why to choose  AMT Systems –Engineering SARL  as your business partner?</h2>
      <br></br>
      <br></br>
      <br></br>
      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} justifyContent="center" alignItems="center" gap={4} p={2}>
        {services1.map((service, index) => (
          
          <Box
            p={3} width="100%" borderRadius={2} bgcolor="transparent"
            key={index}
            sx={{
              p: 3,
              backgroundColor: "white",
              textAlign: "center",
              position: "relative",
              borderBottom: index < 2 ? "2px solid #0A1633" : "none",
              borderRadius:"20px",
              borderTop: index >= 2 ? "2px solid #0A1633" : "none",
              borderRight: index % 2 === 0 ? "2px solid #0A1633" : "none",
              borderLeft: index % 2 !== 0 ? "2px solid #0A1633" : "none",
             
              
            }}
          >
            <motion.div
                          initial={{ opacity: 0, x: -100 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.9 }}
                          viewport={{ once: true }}
                        >
            <Box sx={{ color: "#6c63ff", mb: 1 }}>{service.icon}</Box>
            <Typography variant="h6" fontWeight="bold" sx={{ color: "#0A1633" }}>
              {service.title}
            </Typography>
            <Typography variant="h6" color="textSecondary">
              {service.description}
            </Typography>
            </motion.div>
          </Box> 
        ))}
      </Box>

       <Box display="flex" flexDirection={{ xs: "column", md: "row" }} justifyContent="center" alignItems="center" gap={4} p={2}>
        {services2.map((service, index) => (
          
          <Box
            p={3} width="100%" borderRadius={2} bgcolor="transparent"
            key={index}
            sx={{
              p: 3,
              backgroundColor: "white",
              textAlign: "center",
              position: "relative",
              borderBottom: index < 2 ? "2px solid #0A1633" : "none",
              borderRadius:"20px",
              borderTop: index >= 2 ? "2px solid #0A1633" : "none",
              borderRight: index % 2 === 0 ? "2px solid #0A1633" : "none",
              borderLeft: index % 2 !== 0 ? "2px solid #0A1633" : "none",
             
              
            }}
          >
            <motion.div
                          initial={{ opacity: 0, x: -100 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.9 }}
                          viewport={{ once: true }}
                        >
            <Box sx={{ color: "#6c63ff", mb: 1 }}>{service.icon}</Box>
            <Typography variant="h6" fontWeight="bold" sx={{ color: "#0A1633" }}>
              {service.title}
            </Typography>
            <Typography variant="h6" color="textSecondary">
              {service.description}
            </Typography>
            </motion.div>
          </Box> 
        ))}
      </Box>
    </Box>
    
  );
};

export default StarGrid;
