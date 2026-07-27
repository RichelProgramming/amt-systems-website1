import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

// Icônes adaptées aux thématiques
import HandymanIcon from "@mui/icons-material/Handyman";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Business from "@mui/icons-material/Business";
import { useTranslation } from "react-i18next";

const primaryGradient = "linear-gradient(90deg, rgb(102, 188, 70), rgb(65, 66, 141), red)";
const iconGradient = "linear-gradient(135deg, #5263ff 0%, #364999 100%)";

const timelineEvents = [
  { dateKey: "aboutHistory.mid2020", titleKey: "aboutHistory.projectLaunch", descKey: "aboutHistory.foundationDesc" },
  { dateKey: "aboutHistory.year2025", titleKey: "aboutHistory.officialRegistration", descKey: "aboutHistory.officialRegistrationDesc" },
  { dateKey: "aboutHistory.year2026", titleKey: "aboutHistory.firstAchievements", descKey: "aboutHistory.firstAchievementsDesc" },
];

const historyBlocks = [
  {
    icon: ShuffleIcon,
    tagKey: "aboutHistory.block1Tag",
    titleKey: "aboutHistory.block1Title",
    descKey: "aboutHistory.block1Desc",
  },
  {
    icon: HandymanIcon,
    tagKey: "aboutHistory.block2Tag",
    titleKey: "aboutHistory.block2Title",
    descKey: "aboutHistory.block2Desc",
  },
  {
    icon: CorporateFareIcon,
    tagKey: "aboutHistory.block3Tag",
    titleKey: "aboutHistory.block3Title",
    descKey: "aboutHistory.block3Desc",
  },
  {
    icon: Business,
    tagKey: "aboutHistory.block4Tag",
    titleKey: "aboutHistory.block4Title",
    descKey: "aboutHistory.block4Desc",
  },
  {
    icon: RocketLaunchIcon,
    tagKey: "aboutHistory.block5Tag",
    titleKey: "aboutHistory.block5Title",
    descKey: "aboutHistory.block5Desc",
  },
  {
    icon: VerifiedUserIcon,
    tagKey: "aboutHistory.block6Tag",
    titleKey: "aboutHistory.block6Title",
    descKey: "aboutHistory.block6Desc",
  },
];

export default function HistorySection() {
  const { t } = useTranslation();

  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.02 }}
      transition={{ duration: 1 }}
      sx={{
        position: "relative",
        overflow: "hidden",
        pt: { xs: 12, md: 16, xl: 20 },
        pb: { xs: 12, md: 16, xl: 20 },
        px: { xs: 3, sm: 6, md: 10, xl: 14 },
        background: "linear-gradient(180deg, #f3f7ff 0%, #e3ecff 100%)",
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Orbes de fond lumineuses pour la profondeur visuelle */}
      <Box sx={{ position: "absolute", top: "8%", left: "-10%", width: "450px", height: "450px", borderRadius: "50%", background: "rgba(82, 99, 255, 0.07)", filter: "blur(90px)", pointerEvents: "none" }} />
      <Box sx={{ position: "absolute", bottom: "12%", right: "-5%", width: "550px", height: "550px", borderRadius: "50%", background: "rgba(102, 188, 70, 0.05)", filter: "blur(110px)", pointerEvents: "none" }} />

      <Box sx={{ maxWidth: "1440px", mx: "auto", position: "relative", zIndex: 1 }}>
        
        {/* ================= TITRE PRINCIPAL ================= */}
        <Typography
          sx={{
            fontSize: { xs: "2.4rem", sm: "3.2rem", md: "4rem", xl: "4.8rem" },
            fontWeight: 950,
            letterSpacing: "-0.03em",
            textAlign: "center",
            mb: 2,
            lineHeight: 1.1,
            background: primaryGradient,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          {t("aboutHistory.title")}
        </Typography>

        <Box sx={{ width: 120, height: 6, background: "linear-gradient(90deg, #5263ff 0%, #66bc46 100%)", mx: "auto", mb: 10, borderRadius: 4 }} />

        {/* ================= GRILLE PRINCIPALE ASYMÉTRIQUE SUR DESKTOP ================= */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: 8, lg: 6, xl: 8 },
            alignItems: "flex-start",
          }}
        >
          
          {/* COLONNE GAUCHE (Sticky) : Fondation & Chronologie */}
          <Box
            sx={{
              width: { xs: "100%", lg: "430px", xl: "480px" },
              flexShrink: 0,
              position: { lg: "sticky" },
              top: "40px",
            }}
          >
            {/* Bloc Fondation & Objectif */}
            <Box
              sx={{
                background: "rgba(255, 255, 255, 0.85)",
                backdropFilter: "blur(20px)",
                p: { xs: 4, xl: 5 },
                borderRadius: "32px",
                boxShadow: "0 30px 60px rgba(10, 22, 51, 0.03), inset 0 1px 0 rgba(255,255,255,0.6)",
                border: "1px solid rgba(226, 232, 240, 0.8)",
                mb: 5,
              }}
            >
              <Typography sx={{ fontSize: "1.5rem", fontWeight: 900, color: "#0B132B", mb: 2, display: "flex", alignItems: "center", gap: 1.5 }}>
                <span style={{ width: "8px", height: "24px", background: "#5263ff", borderRadius: "4px", display: "inline-block" }}></span>
                {t("aboutHistory.foundation")}
              </Typography>
              <Typography sx={{ color: "#4A5568", fontSize: "1rem", lineHeight: 1.8, fontWeight: 500 }}>
                <strong>{t("aboutHistory.company")}</strong> {t("aboutHistory.foundationDesc1")}
              </Typography>
            </Box>

            {/* Chronologie Interactive */}
            <Box sx={{ position: "relative", pl: 4, ml: 3 }}>
              {/* Ligne de frise */}
              <Box sx={{ position: "absolute", left: 0, top: "12px", bottom: "12px", width: "3px", background: "linear-gradient(180deg, #5263ff 0%, #66bc46 100%)", borderRadius: 2 }} />

              {timelineEvents.map((event, index) => (
                <Box 
                  key={index} 
                  component={motion.div}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  sx={{ position: "relative", mb: index === timelineEvents.length - 1 ? 0 : 4 }}
                >
                  {/* Point indicateur */}
                  <Box 
                    sx={{ 
                      position: "absolute", 
                      left: "-42px", 
                      top: "4px", 
                      width: 15, 
                      height: 15, 
                      borderRadius: "50%", 
                      backgroundColor: index === 2 ? "#66bc46" : "#5263ff",
                      border: "4px solid #f3f7ff",
                      boxShadow: "0 0 12px rgba(82, 99, 255, 0.4)"
                    }} 
                  />
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
                    <AccessTimeIcon sx={{ fontSize: 16, color: "#5263ff" }} />
                    <Typography sx={{ fontSize: "0.95rem", fontWeight: 800, color: "#5263ff", letterSpacing: "0.05em" }}>
                      {t(event.dateKey)}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "1.15rem", fontWeight: 800, color: "#0B132B" }}>
                    {t(event.titleKey)}
                  </Typography>
                  <Typography sx={{ fontSize: "0.95rem", color: "#64748B", mt: 0.5, lineHeight: 1.5, fontWeight: 500 }}>
                    {t(event.descKey)}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* COLONNE DROITE : Blocs thématiques horizontaux intégraux */}
          <Box sx={{ flexGrow: 1, width: "100%", display: "grid", gap: 4 }}>
            {historyBlocks.map((block, idx) => {
              const IconComponent = block.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.7, delay: idx * 0.08, ease: "easeOut" }}
                >
                  <Box
                    sx={{
                      background: "#ffffff",
                      borderRadius: "28px",
                      boxShadow: "0 12px 40px rgba(10, 22, 51, 0.02)",
                      p: { xs: 4, md: 4.5 },
                      border: "1px solid rgba(10, 22, 51, 0.04)",
                      position: "relative",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      gap: { xs: 3, sm: 4 },
                      alignItems: "flex-start",
                      transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                      "&:hover": {
                        boxShadow: "0 30px 70px rgba(82, 99, 255, 0.08)",
                        transform: "translateX(8px)",
                        borderColor: "rgba(82, 99, 255, 0.15)",
                        "& .icon-container": {
                          transform: "scale(1.08) rotate(4deg)",
                        }
                      },
                    }}
                  >
                    {/* Badge contextuel */}
                    <Box 
                      sx={{ 
                        position: "absolute", 
                        top: 20, 
                        right: 24, 
                        background: "rgba(82, 99, 255, 0.05)", 
                        px: 2, 
                        py: 0.5, 
                        borderRadius: "20px" 
                      }}
                    >
                      <Typography sx={{ fontSize: "0.72rem", fontWeight: 700, color: "#5263ff", textTransform: "uppercase", letterSpacing: "0.02em" }}>
                        {t(block.tagKey)}
                      </Typography>
                    </Box>

                    {/* Icône du bloc */}
                    <Box
                      className="icon-container"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 56,
                        height: 56,
                        borderRadius: "18px",
                        background: iconGradient,
                        flexShrink: 0,
                        boxShadow: "0 10px 20px rgba(54, 73, 153, 0.12)",
                        transition: "transform 0.3s ease",
                        mt: 0.5
                      }}
                    >
                      <IconComponent sx={{ color: "#fff", fontSize: 26 }} />
                    </Box>

                    {/* Contenu textuel étalé horizontalement */}
                    <Box sx={{ flexGrow: 1, pr: { sm: 5 } }}>
                      <Typography
                        sx={{
                          fontSize: { xs: "1.25rem", md: "1.35rem" },
                          fontWeight: 800,
                          color: "#0B132B",
                          mb: 1.5,
                          lineHeight: 1.3,
                          letterSpacing: "-0.01em"
                        }}
                      >
                        {t(block.titleKey)}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#55627c",
                          fontSize: { xs: "0.98rem", md: "1.02rem" },
                          lineHeight: 1.85,
                          fontWeight: 500,
                          textAlign: "justify"
                        }}
                      >
                        {t(block.descKey)}
                      </Typography>
                    </Box>
                  </Box>
                </motion.div>
              );
            })}
          </Box>

        </Box>
      </Box>
    </Box>
  );
}