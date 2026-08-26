import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import SchoolIcon from "@mui/icons-material/School";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {useTranslation} from "react-i18next";

const gradientStyle = {
  background: "linear-gradient(90deg, rgb(102, 188, 70), rgb(65, 66, 141), red)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
};

const sections = [
  {
    id: "identity",
    titleKey: "ourVision.identity",
    icon: AutoAwesomeIcon,
    contentKey: "ourVision.identityDesc",
  },
  {
    id: "vision",
    titleKey: "ourVision.vision",
    icon: VisibilityIcon,
    contentKey: "ourVision.visionDesc",
  },
  {
    id: "mission",
    titleKey: "ourVision.mission",
    icon: LocalFireDepartmentIcon,
    // Organisation des piliers en sous-grille pour une meilleure occupation horizontale
    pillars: [
      { labelKey: "ourVision.developLocal", descKey: "ourVision.developLocalDesc" },
      { labelKey: "ourVision.systemIntegration", descKey: "ourVision.systemIntegrationDesc" },
      { labelKey: "ourVision.advisory", descKey: "ourVision.advisoryDesc" },
      { labelKey: "ourVision.promoteEntrepreneurship", descKey: "ourVision.promoteEntrepreneurshipDesc" },
    ],
  },
  {
    id: "philosophy",
    titleKey: "ourVision.philosophy",
    icon: SchoolIcon,
    contentKey: "ourVision.sustainable",
  },
];

function VisionCard({ section, index }) {
  const Icon = section.icon;
   const { t } = useTranslation();
  
  return (
    <motion.div
      key={section.id}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: "easeOut" }}
    >
      <Box
        sx={{
          background: "rgba(255,255,255,0.95)",
          borderRadius: "24px",
          boxShadow: "0 20px 50px rgba(10, 22, 51, 0.05)",
          p: { xs: 4, md: 5 },
          border: "1px solid rgba(10, 22, 51, 0.06)",
          transition: "all 0.35s ease",
          
          // LA MAGIE DE LA LARGEUR : Passage en ligne (row) sur grand écran
          display: "flex",
          flexDirection: { xs: "column", lg: "row" }, 
          gap: { xs: 3, lg: 5 },
          alignItems: "flex-start",
          
          "&:hover": {
            boxShadow: "0 35px 70px rgba(10, 22, 51, 0.1)",
            transform: "translateY(-4px)",
          },
        }}
      >
        {/* Partie Gauche : Icône + Titre (Largeur fixe sur desktop pour s'aligner) */}
        <Box 
          sx={{ 
            display: "flex", 
            flexDirection: { xs: "row", lg: "column" }, 
            alignItems: { xs: "center", lg: "flex-start" }, 
            gap: 2.5,
            width: { xs: "100%", lg: "280px" }, // Bloque la largeur à gauche pour laisser le texte s'étaler à droite
            flexShrink: 0 
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 54,
              height: 54,
              borderRadius: "14px",
              background: "linear-gradient(135deg, #5263ff 0%, #364999 100%)",
              flexShrink: 0,
              boxShadow: "0 8px 20px rgba(82, 99, 255, 0.2)",
            }}
          >
            <Icon sx={{ color: "#fff", fontSize: 20 }} />
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "1.35rem", md: "1.55rem", xl: "1.65rem" },
              fontWeight: 800,
              color: "#0A1633",
              lineHeight: 1.2,
            }}
          >
            {t(section.titleKey)}
          </Typography>
        </Box>

        {/* Partie Droite : Contenu textuel qui profite de toute la largeur restante */}
        <Box sx={{ flexGrow: 1, width: "100%" }}>
          {section.contentKey && (
            <Typography
              sx={{
                color: "#33415c",
                fontSize: { xs: "0.95rem", md: "1.05rem", xl: "1.1rem" },
                lineHeight: 1.8,
                fontWeight: 500,
                textAlign: "justify", // Aligne proprement le texte sur les côtés
              }}
            >
              {t(section.contentKey)}
            </Typography>
          )}

          {section.pillars && (
            // Les piliers de la mission s'organisent en 2 colonnes horizontales sur desktop
            <Box 
              sx={{ 
                display: "grid", 
                gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, 
                gap: 3 
              }}
            >
              {section.pillars.map((pillar) => (
                <Box key={pillar.labelKey} sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
                  <CheckCircleIcon sx={{ color: "#5263ff", fontSize: 22, flexShrink: 0, mt: 0.3 }} />
                  <Box>
                                <Typography sx={{ fontWeight: 700, color: "#0A1633", fontSize: "1rem", mb: 0.5 }}>
                        {t(pillar.labelKey)}
                      </Typography>
                      <Typography sx={{ color: "#55627c", fontSize: "0.95rem", lineHeight: 1.5 }}>
                        {t(pillar.descKey)}
                      </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </motion.div>
  );
}

const OurVision = () => {
  const { t } = useTranslation();

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
        pt: { xs: 10, md: 14, xl: 16 },
        pb: { xs: 10, md: 14, xl: 16 },
        px: { xs: 3, sm: 6, md: 10, xl: 12 },
        background: "linear-gradient(180deg, #f8faff 0%, #eef3ff 100%)",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* On utilise une largeur maximale confortable pour le format paysage */}
      <Box sx={{ maxWidth: "1400px", mx: "auto" }}>
        
        {/* Title */}
        <Typography
          sx={{
            fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.5rem", xl: "4rem" },
            fontWeight: 900,
            letterSpacing: "-0.02em",
            textAlign: "center",
            mb: 2,
            lineHeight: 1.15,
            ...gradientStyle,
          }}
        >
          {t("ourVision.pageTitle")}
        </Typography>

        <Box sx={{ width: 100, height: 5, background: "linear-gradient(90deg, #5263ff 0%, #1d284f 100%)", mx: "auto", mb: 8, borderRadius: 4 }} />

        {/* Grille principale : 
          Au lieu de faire plusieurs colonnes de cartes, on fait 1 seule colonne de cartes très larges (1fr).
          Chaque carte s'étale sur toute la largeur disponible.
        */}
        <Box 
          sx={{ 
            display: "grid", 
            gridTemplateColumns: "1fr", 
            gap: 4 
          }}
        >
          {sections.map((section, idx) => (
            <VisionCard 
              key={section.id} 
              section={section} 
              index={idx} 
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default OurVision;