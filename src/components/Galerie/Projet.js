import React, { useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Grid,
  Typography,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";

const images = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
];

const features = [
  {
    title: "Installation rapide",
    description: "Mise en place facile et rapide",
    icon: "⚙️",
  },
  {
    title: "Support 24/7",
    description: "Notre équipe est disponible à ",
    icon: "📞",
  },
  {
    title: "Performance",
    description: "Des résultats rapides et ",
    icon: "⚡",
  },
  {
    title: "Sécurité garantie",
    description: "Vos données sont protégées .",
    icon: "🔒",
  },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

  const handlePrev = () => setIndex(index === 0 ? images.length - 1 : index - 1);
  const handleNext = () => setIndex(index === images.length - 1 ? 0 : index + 1);

  // Défilement automatique toutes les 5s
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  });

  return (
    <Box>
      {/* === SECTION CAROUSEL === */}
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          bgcolor: "#33336687",
          width: "70%",
          height: isSmall ? "250px" : "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin:"0 auto"
        }}
      >
        <motion.img
          key={index}
          src={images[index]}
          alt={`slide-${index}`}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.8 }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            top: "50%",
            left: 15,
            color: "white",
            transform: "translateY(-50%)",
            bgcolor: "rgba(0,0,0,0.4)",
            "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
          }}
        >
          <ArrowBackIos />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            top: "50%",
            right: 15,
            color: "white",
            transform: "translateY(-50%)",
            bgcolor: "rgba(0,0,0,0.4)",
            "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
          }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Box>

      {/* === SECTION FONCTIONNALITÉS === */}
      <Grid
        container
        spacing={isSmall ? 2 : 4}
        sx={{
          py: isSmall ? 4 : 6,
          px: isSmall ? 2 : 8,
          textAlign: "center",
          width: "80%",
          margin:"0 auto",
          display: "flex",
          justifyContent:"space-between"
        }}
      >
        {features.map((feature, i) => (
          <Grid item xs={12} sm={6} md={3} key={i}>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.2 }}
              style={{ display: "flex", alignItems: "center" }}
            >
             <div>
                 <Avatar
                sx={{
                  bgcolor: "#333366df",
                  width: 70,
                  height: 70,
                  mx: "auto",
                  mb: 2,
                  fontSize: "1.8rem",
                }}
              >
                {feature.icon}
              </Avatar>
             </div>
              <div>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                {feature.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>
                {feature.description}
              </Typography>
              </div>
            </motion.div>
          </Grid>
        ))}
      </Grid>

    </Box>
  );
}
