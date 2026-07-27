import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import StarIcon from "@mui/icons-material/Star";
import GavelIcon from "@mui/icons-material/Gavel";
import SchoolIcon from "@mui/icons-material/School";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {useTranslation} from "react-i18next";

const gradientStyle = {
  background: "linear-gradient(90deg,rgb(102, 188, 70),rgb(65, 66, 141),red)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
};

const sections = [
  {
    id: "core-values",
    titleKey: "howToCreateValue.coreValues",
    icon: StarIcon,
    contentKey: "howToCreateValue.coreValuesIntro",
    items: [
      { label: "howToCreateValue.reliability", desc: "howToCreateValue.reliabilityDesc" },
      { label: "howToCreateValue.excellence", desc: "howToCreateValue.excellenceDesc" },
      { label: "howToCreateValue.kaizen", desc: "howToCreateValue.kaizenDesc" },
      { label: "howToCreateValue.respect", desc: "howToCreateValue.respectDesc" },
    ],
  },
  {
    id: "environment-behaviors",
    titleKey: "howToCreateValue.environment",
    icon: GavelIcon,
    contentKey: "howToCreateValue.environmentDesc",
    keyElements: [
      "howToCreateValue.keyElements.systemsThinking",
      "howToCreateValue.keyElements.dataDrivenEngineering",
      "howToCreateValue.keyElements.qualitySafety",
      "howToCreateValue.keyElements.continuousLearning",
      "howToCreateValue.keyElements.buildItQuick",
    ],
  },
  {
    id: "capabilities",
    titleKey: "howToCreateValue.capabilities",
    icon: SchoolIcon,
    contentKey: "howToCreateValue.capabilitiesDesc",
    coreDomains: [
      "howToCreateValue.coreDomains.systemsArchitecture",
      "howToCreateValue.coreDomains.informationTechnology",
      "howToCreateValue.coreDomains.technicalProject",
      "howToCreateValue.coreDomains.digitalEngineering",
    ],
  },
];

const HowToCreateValue = () => {
   const { t } = useTranslation();
  return (
    <Box
      component={motion.section}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.85, ease: "easeOut" }}
      sx={{
        position: "relative",
        overflow: "hidden",
        pt: { xs: 12, md: 16 },
        pb: { xs: 12, md: 16 },
        px: { xs: 4, md: 10 },
        background: "linear-gradient(180deg, #fafbff 0%, #f0f2ff 100%)",
      }}
    >
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        {/* Main Title */}
        <Typography
          sx={{
            fontSize: { xs: "2.2rem", md: "3.2rem" },
            fontWeight: 900,
            letterSpacing: "-0.02em",
            textAlign: "center",
            mb: 2,
            ...gradientStyle,
          }}
        >
          {t("howToCreateValue.title")}
        </Typography>

        <Box sx={{ width: 80, height: 5, background: "linear-gradient(90deg, #5263ff 0%, #1d284f 100%)", mx: "auto", mb: 6, borderRadius: 4 }} />

        {/* Sections Grid */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 4, mt: 4 }}>
          {sections.map((section, idx) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.12, ease: "easeOut" }}
              >
                <Box
                  sx={{
                    h: "100%",
                    background: "rgba(255,255,255,0.95)",
                    borderRadius: "24px",
                    boxShadow: "0 30px 70px rgba(10, 22, 51, 0.1)",
                    p: { xs: 4, md: 5 },
                    border: "1px solid rgba(10, 22, 51, 0.06)",
                    transition: "all 0.35s ease",
                    "&:hover": {
                      boxShadow: "0 40px 90px rgba(10, 22, 51, 0.14)",
                      transform: "translateY(-6px)",
                    },
                  }}
                >
                  {/* Icon + Title */}
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 3 }}>
                    <Box
                      className="vision-icon-circle"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon sx={{ color: "#fff", fontSize: 32 }} />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "1.35rem", md: "1.55rem" },
                        fontWeight: 800,
                        color: "#0A1633",
                        lineHeight: 1.2,
                      }}
                    >
                      {t(section.titleKey)}
                    </Typography>
                  </Box>

                  {/* Content Text */}
                  {section.contentKey && (
                    <Typography
                      sx={{
                        color: "#33415c",
                        fontSize: { xs: "0.95rem", md: "1.02rem" },
                        lineHeight: 1.85,
                        fontWeight: 500,
                        mb: section.items || section.keyElements || section.coreDomains ? 3 : 0,
                      }}
                    >
                      {t(section.contentKey)}
                    </Typography>
                  )}

                  {/* Items List (Core Values) */}
                  {section.items && (
                    <Box sx={{ display: "grid", gap: 2.5, mt: 0 }}>
                      {section.items.map((item) => (
                        <Box key={item.label} sx={{ display: "flex", gap: 2 }}>
                          <CheckCircleIcon
                            sx={{
                              color: "#5263ff",
                              fontSize: 24,
                              flexShrink: 0,
                              mt: 0.5,
                            }}
                          />
                          <Box>
                            <Typography
                              sx={{
                                fontWeight: 700,
                                color: "#0A1633",
                                fontSize: "1rem",
                                mb: 0.5,
                              }}
                            >
                              {t(item.label)}
                            </Typography>
                            <Typography
                              sx={{
                                color: "#55627c",
                                fontSize: "0.95rem",
                                lineHeight: 1.6,
                              }}
                            >
                              {t(item.desc)}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>
                  )}

                  {/* Key Elements (Environment and Behaviors) */}
                  {section.keyElements && (
                    <Box sx={{ display: "grid", gap: 2.5, mt: 0 }}>
                      {section.keyElements.map((element, i) => (
                        <Box key={i} sx={{ display: "flex", gap: 2 }}>
                          <CheckCircleIcon
                            sx={{
                              color: "#5263ff",
                              fontSize: 20,
                              flexShrink: 0,
                              mt: 0.5,
                            }}
                          />
                          <Typography
                            sx={{
                              color: "#55627c",
                              fontSize: "0.95rem",
                              lineHeight: 1.6,
                            }}
                          >
                            {t(element)}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )}

                  {/* Core Domains (Capabilities) */}
                  {section.coreDomains && (
                    <Box sx={{ display: "grid", gap: 2, mt: 0 }}>
                      {section.coreDomains.map((domain, i) => (
                        <Box key={i} sx={{ display: "flex", gap: 2 }}>
                          <CheckCircleIcon
                            sx={{
                              color: "#5263ff",
                              fontSize: 20,
                              flexShrink: 0,
                              mt: 0.5,
                            }}
                          />
                          <Typography
                            sx={{
                              color: "#55627c",
                              fontSize: "0.95rem",
                              lineHeight: 1.6,
                            }}
                          >
                            {t(domain)}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  )}
                </Box>
              </motion.div>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default HowToCreateValue;
