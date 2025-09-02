import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import InsightsIcon from "@mui/icons-material/Insights";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const StarGrid = () => {
  const { t } = useTranslation();

  const services1 = [
    {
      icon: <DeveloperModeIcon style={{ fontSize:'50px', color:"#0A1633" }} />,
      title: t("aboutUs.cards.deliver_title"),
      description: t("aboutUs.cards.deliver_desc"),
    },
    {
      icon: <HeadsetMicIcon style={{ fontSize:'50px', color:"#0A1633" }} />,
      title: t("aboutUs.cards.innovate_title"),
      description: t("aboutUs.cards.innovate_desc"),
    },
  ];

  const services2 = [
    {
      icon: <BusinessCenterIcon style={{ fontSize:'50px', color:"#0A1633" }} />,
      title: t("aboutUs.cards.pm_title"),
      description: t("aboutUs.cards.pm_desc"),
    },
    {
      icon: <InsightsIcon style={{ fontSize:'50px', color:"#0A1633" }} />,
      title: t("aboutUs.cards.it_title"),
      description: t("aboutUs.cards.it_desc"),
    },
  ];

  return (
    <Box sx={{ textAlign: "center", p: 5 }}>
      <p className='title-text-color'>AMT Systems-Engineering SARL</p>
      <h2>{t("aboutUs.heading")}</h2>
      <br /><br /><br />

      <Box display="flex" flexDirection={{ xs: "column", md: "row" }} justifyContent="center" alignItems="center" gap={4} p={2}>
        {services1.map((service, index) => (
          <Box
            key={index}
            p={3}
            width="100%"
            borderRadius={2}
            bgcolor="transparent"
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
            key={index}
            p={3}
            width="100%"
            borderRadius={2}
            bgcolor="transparent"
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
