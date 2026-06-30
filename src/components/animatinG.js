import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

// Importation des icônes Material-UI
import MemoryIcon from "@mui/icons-material/Memory";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SchemaIcon from "@mui/icons-material/Schema";
import StorageIcon from "@mui/icons-material/Storage";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InventoryIcon from "@mui/icons-material/Inventory";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const gradientStyle = {
  background: "linear-gradient(90deg, rgb(102, 188, 70), rgb(65, 66, 141), red)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const engineeringServices = [
  {
    icon: MemoryIcon,
    title: "Prototyping & Reverse Engineering",
    items: ["CAD-modelling", "3D-Printing and 3D scanning", "HW-Layout design & PCB prototyping"],
  },
  {
    icon: PhoneAndroidIcon,
    title: "Web & Mobile App Design",
    items: ["Mobile App Design", "Embedded SW design", "Web App Design"],
  },
  {
    icon: SchemaIcon,
    title: "Systems-Engineering Services",
    items: ["Requirement engineering", "Architecture Design incl. technical implementation in HW / SW", "Verification and validation"],
  },
  {
    icon: StorageIcon,
    title: "Data Engineering & Analytics",
    items: ["Data acquisition and transformation", "Data analysis", "Data modeling"],
  },
];

const procurementServices = [
  {
    icon: LocalShippingIcon,
    title: "Procurement Services",
    items: [
      "Customer needs Identification & Specification",
      "Supplier Identification & Selection",
      "Supplier Relationship Management",
      "Risk Management in procurement",
    ],
  },
  {
    icon: InventoryIcon,
    title: "Supply Management",
    items: ["Inventory Management", "Supply Chain Optimization"],
  },
];

function ServiceCard({ icon: IconComponent, title, items, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}
      style={{ height: "100%" }} // Force le conteneur motion à prendre toute la hauteur
    >
      <Box
        sx={{
          height: "100%",
          background: "rgba(255,255,255,0.95)",
          borderRadius: "24px",
          boxShadow: "0 30px 70px rgba(10, 22, 51, 0.05)",
          p: { xs: 3.5, md: 4, xl: 5 }, // Augmentation du padding interne sur très grand écran (xl)
          border: "1px solid rgba(10, 22, 51, 0.06)",
          transition: "all 0.35s ease",
          display: "flex",
          flexDirection: "column",
          "&:hover": {
            boxShadow: "0 40px 90px rgba(10, 22, 51, 0.12)",
            transform: "translateY(-6px)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 56,
            height: 56,
            borderRadius: "14px",
            background: "linear-gradient(135deg, #5263ff 0%, #364999 100%)",
            mb: 3,
          }}
        >
          <IconComponent sx={{ color: "#fff", fontSize: 30 }} />
        </Box>

        <Typography
          sx={{
            fontSize: { xs: "1.2rem", md: "1.35rem", xl: "1.5rem" }, // Titre plus grand sur écran large
            fontWeight: 800,
            color: "#0A1633",
            mb: 3,
            lineHeight: 1.3,
          }}
        >
          {title}
        </Typography>

        <Box sx={{ display: "grid", gap: 2, mt: "auto" }}> {/* mt: 'auto' aligne les listes si les titres ont des longueurs différentes */}
          {items.map((item, itemIdx) => (
            <Box key={itemIdx} sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
              <CheckCircleIcon sx={{ color: "#5263ff", fontSize: 18, flexShrink: 0, mt: 0.4 }} />
              <Typography sx={{ color: "#55627c", fontSize: "0.95rem", lineHeight: 1.5, fontWeight: 500 }}>
                {item}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </motion.div>
  );
}

export default function Animating() {
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.85, ease: "easeOut" }}
      sx={{
        position: "relative",
        overflow: "hidden",
        pt: { xs: 8, md: 12, xl: 16 }, // Plus d'espace aérien en haut sur très grand écran
        pb: { xs: 8, md: 12, xl: 16 },
        px: { xs: 3, sm: 6, md: 10, xl: 14 }, // Élargissement des marges extérieures sur Desktop (xl)
        background: "linear-gradient(180deg, #f8faff 0%, #f0f3ff 100%)",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* 1. Changement majeur : Extension du conteneur à 1440px pour occuper l'espace large */}
      <Box sx={{ maxWidth: "1440px", mx: "auto" }}>
        
        {/* ================= HERO / INTRODUCTION ================= */}
        <Typography
          sx={{
            fontSize: { xs: "1.1rem", md: "1.35rem" },
            fontWeight: 700,
            letterSpacing: "0.12em",
            textAlign: "center",
            color: "#0A1633",
            textTransform: "uppercase",
            mb: 2,
          }}
        >
          AMT Systems-Engineering Services
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: "2rem", sm: "2.6rem", md: "3.2rem", xl: "4rem" }, // Titre géant sur ultra-wide
            fontWeight: 900,
            letterSpacing: "-0.02em",
            textAlign: "center",
            mb: 2,
            lineHeight: 1.2,
            ...gradientStyle,
          }}
        >
          A Unique Cross-Domain Ecosystem
        </Typography>

        <Box
          sx={{
            width: 120, // Légèrement élargi pour équilibrer les grands écrans
            height: 5,
            background: "linear-gradient(90deg, #5263ff 0%, #1d284f 100%)",
            mx: "auto",
            mb: 4,
            borderRadius: 4,
          }}
        />

        {/* 2. Élargissement du texte d'intro (passé de 850 à 1000 max) */}
        <Typography
          sx={{
            fontSize: { xs: "1rem", md: "1.15rem", xl: "1.25rem" },
            color: "#55627c",
            textAlign: "center",
            maxWidth: 1000, 
            mx: "auto",
            mb: 12,
            lineHeight: 1.8,
          }}
        >
          What sets AMT Systems Engineering SARL apart is our ability to break down silos. 
          Traditional firms often specialize in just one area. We offer a unique selling point: 
          a strong cross-connection between Hardware Engineering, Software Engineering, and Mechanical Engineering. 
          By integrating Artificial Intelligence (AI) into this ecosystem, we link and enhance all these domains, 
          delivering smart, innovative solutions from a single source.
        </Typography>

        {/* ================= SECTION A : ENGINEERING SERVICES ================= */}
        <Box sx={{ mb: 12 }}>
          <Typography
            sx={{
              fontSize: { xs: "1.6rem", md: "2.2rem", xl: "2.6rem" },
              fontWeight: 800,
              color: "#0A1633",
              mb: 2,
              borderLeft: "5px solid #5263ff",
              pl: 2,
            }}
          >
            Engineering Services
          </Typography>
          
          <Typography
            sx={{
              fontSize: { xs: "0.95rem", md: "1.05rem", xl: "1.15rem" },
              color: "#55627c",
              maxWidth: 1000, // Étendu pour éviter des lignes trop courtes et hachées
              lineHeight: 1.7,
              mb: 6,
            }}
          >
            There is no smart technology without the incorporation of IT-solutions. In today's rapidly advancing 
            technological landscape, integrating Information Technology (IT) is crucial for creating smart and efficient solutions. 
            Our IT solutions enable you to access, analyze, and interpret vast amounts of data, optimizing operations and strategies.
          </Typography>

          {/* 3. Modification de la Grille : Passage fluide de 1 à 2, puis 3, et enfin 4 colonnes sur écrans XL */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { 
                xs: "1fr", 
                sm: "1fr 1fr", 
                md: "1fr 1fr 1fr", // 3 colonnes sur PC portables standard pour éviter que les cartes soient trop serrées
                xl: "1fr 1fr 1fr 1fr" // 4 colonnes parfaites sur les écrans de bureau larges
              },
              gap: { xs: 3.5, xl: 4.5 }, // Plus d'espace entre les cartes sur grand écran
            }}
          >
            {engineeringServices.map((service, idx) => (
              <ServiceCard
                key={idx}
                index={idx}
                icon={service.icon}
                title={service.title}
                items={service.items}
              />
            ))}
          </Box>
        </Box>

        {/* ================= SECTION B : PROCUREMENT & SUPPLY SERVICES ================= */}
        <Box sx={{ mb: 6 }}>
          <Typography
            sx={{
              fontSize: { xs: "1.6rem", md: "2.2rem", xl: "2.6rem" },
              fontWeight: 800,
              color: "#0A1633",
              mb: 2,
              borderLeft: "5px solid #364999",
              pl: 2,
            }}
          >
            Procurement and Supply Services
          </Typography>
          
          <Typography
            sx={{
              fontSize: { xs: "0.95rem", md: "1.05rem", xl: "1.15rem" },
              color: "#55627c",
              maxWidth: 1000,
              lineHeight: 1.7,
              mb: 6,
            }}
          >
            As companies and institutions increasingly focus on their core competencies, the demand for outsourcing 
            secondary activities like spare part procurement continues to rise. AMT Systems-Engineering SARL, a global 
            player with associates worldwide, offers these services to its customers. Connecting our business partners 
            with potential suppliers or managing supplies on their behalf is a key aspect of our operations.
          </Typography>

          {/* 4. Grille Logistique : Étirée en 2 colonnes larges et massives en Desktop */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 4, xl: 5 },
              justifyContent:"center",
            }}
          >
            {procurementServices.map((service, idx) => (
              <ServiceCard
                key={idx}
                index={idx + 4}
                icon={service.icon}
                title={service.title}
                items={service.items}
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}