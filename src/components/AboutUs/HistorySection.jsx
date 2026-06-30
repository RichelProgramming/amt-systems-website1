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

const primaryGradient = "linear-gradient(90deg, rgb(102, 188, 70), rgb(65, 66, 141), red)";
const iconGradient = "linear-gradient(135deg, #5263ff 0%, #364999 100%)";

const timelineEvents = [
  { date: "Mi‑2020", title: "Lancement du projet", desc: "Finalisation du business plan et création d’un mini‑laboratoire pour l’apprentissage et le prototypage." },
  { date: "2025", title: "Immatriculation officielle", desc: "Immatriculation officielle de la société." },
  { date: "2026", title: "Premières réalisations", desc: "Premières réalisations concrètes validées et mises en œuvre." },
];

const historyBlocks = [
  {
    icon: ShuffleIcon,
    tag: "Secteurs",
    title: "Domaines d’activité et secteurs cibles",
    desc: "AMT se concentre sur la mécatronique, les logiciels embarqués, les solutions logicielles et la mécanique. Les principaux secteurs visés sont l’agro‑transformation, le génie civil, l’ingénierie mécanique et l’éducation professionnelle. L’entreprise développe des produits et services tels que des stations de transformation agro‑alimentaire, des incubateurs chauffés par biomasse, des systèmes de traçabilité et des lignes de production adaptées au contexte local.",
  },
  {
    icon: HandymanIcon,
    tag: "R&D",
    title: "Processus de développement et prototypage",
    desc: "Le modèle opérationnel repose sur un cycle complet : idéation, conception, ingénierie, prototypage et réalisation. Chaque projet suit une démarche structurée avec cahier des charges, schémas de réalisation, mise en pratique et expérimentation jusqu’à la validation du prototype. Les services offerts incluent l’ingénierie système, le design industriel, le prototypage rapide et la maintenance.",
  },
  {
    icon: CorporateFareIcon,
    tag: "Structure",
    title: "Organisation et infrastructures",
    desc: "L’entreprise est structurée autour d’une direction générale et de fonctions supports (ressources humaines, marketing, finances, technique, logistique). Les infrastructures prévues comprennent des ateliers spécialisés : mécanique et soudure, traitement thermique et surfaces, prototypage et reverse engineering (impression 3D, scan 3D), électronique, mesures et analyse, pneumatique/hydraulique, et automatisme. Un espace de partage de postes et de laboratoires permet la mutualisation d’outils et la location d’espaces de travail.",
  },
  {
    icon: Business,
    tag: "Modèle Éco",
    title: "Modèle économique et canaux de revenus",
    desc: "Le modèle économique combine prestations d’ingénierie (conception, études, simulation), services de prototypage rapide, location d’espaces et d’équipements (workplace sharing, labs), contrats de maintenance, formations professionnelles et développement/vente de produits réalisés. Ces activités visent à générer des revenus diversifiés et à soutenir la croissance progressive des capacités de production.",
  },
  {
    icon: RocketLaunchIcon,
    tag: "Déploiement",
    title: "Plan de déploiement et ressources",
    desc: "Le déploiement se fait par étapes : légalisation et immatriculation (effectuée en 2025), recherche de locaux, installation d’ateliers de base, acquisition d’équipements essentiels (impression 3D, outils de laboratoire, machines d’atelier), recrutement et formation progressive du personnel, puis extension des ateliers et commercialisation. L’effort initial privilégie l’autonomie technique, la montée en compétences et la validation de concepts à travers des prototypes opérationnels.",
  },
  {
    icon: VerifiedUserIcon,
    tag: "Impact",
    title: "Engagements et perspectives",
    desc: "AMT s’engage à développer des solutions « local for local », favorisant la création de valeur sur place et la transmission de compétences. À terme, l’entreprise vise à soutenir l’émergence d’écosystèmes locaux d’innovation industrielle, à former des professionnels compétents et à promouvoir des chaînes de production adaptées aux réalités régionales.",
  },
];

export default function HistorySection() {
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
          Historique et présentation
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
                Fondation et objectif
              </Typography>
              <Typography sx={{ color: "#4A5568", fontSize: "1rem", lineHeight: 1.8, fontWeight: 500 }}>
                <strong>AMT‑systems‑Engineering SARL</strong> (African Machinery Technologies) a été créée à la mi‑2020 avec pour ambition de concevoir, prototyper et fabriquer des solutions mécatroniques adaptées aux besoins locaux. L’objectif de l’entreprise est d’améliorer la viabilité économique locale en transformant des matières premières jusqu’à des produits finis, tout en soutenant l’entrepreneuriat et la formation des jeunes.
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
                      {event.date}
                    </Typography>
                  </Box>
                  <Typography sx={{ fontSize: "1.15rem", fontWeight: 800, color: "#0B132B" }}>
                    {event.title}
                  </Typography>
                  <Typography sx={{ fontSize: "0.95rem", color: "#64748B", mt: 0.5, lineHeight: 1.5, fontWeight: 500 }}>
                    {event.desc}
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
                        {block.tag}
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
                        {block.title}
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
                        {block.desc}
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