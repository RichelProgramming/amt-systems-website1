import React from "react";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import StarIcon from "@mui/icons-material/Star";
import GavelIcon from "@mui/icons-material/Gavel";
import SchoolIcon from "@mui/icons-material/School";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const gradientStyle = {
  background: "linear-gradient(90deg,rgb(102, 188, 70),rgb(65, 66, 141),red)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent"
};

const sections = [
  {
    id: "core-values",
    title: "Our Core Values",
    icon: StarIcon,
    content: "Our operations are governed by a strict ethical code:",
    items: [
      { label: "Reliability", desc: "We keep our promises." },
      { label: "Excellence", desc: "We strive for the highest quality in every prototype and product." },
      { label: "Kaizen", desc: "We improve continuously." },
      { label: "Respect", desc: "We respect our customers, our partners, and the environment." },
    ],
  },
  {
    id: "environment-behaviors",
    title: "Environment and Behaviors",
    icon: GavelIcon,
    content:
      "A urban legend still denies Africans the capabilities to develop high-tech products. At AMT Systems Engineering SARL, we demystify these beliefs and set the benchmarks. We adopt a growth mindset and invest in high-tech infrastructures. Some key elements to implement this right attitude are:",
    keyElements: [
      "Systems thinking: design decisions consider full lifecycle, interfaces, and emergent behavior",
      "Data-driven engineering and leading: single source of truth (models, requirements repository) and measurable evidence",
      "Quality and safety first: blameless reviews, formal verification, continuous compliance checks",
      "Continuous learning: post-mortems, knowledge base, training and mentoring",
      "Build it quick and check: Test and prototyping equipment",
    ],
  },
  {
    id: "capabilities",
    title: "Capabilities",
    icon: SchoolIcon,
    content:
      "AMT Systems Engineering SARL delivers high-quality products and services. To become so, we continuously improve, adjust capabilities, and shape the necessary environment so that engineers can work effectively. We differentiate between individual and company capabilities. Our individual capabilities focus on managerial, technical, and methodical skills. Our young team members are daily trained and coached for self-improvement.",
    coreDomains: [
      "Systems architecture & model-based components and systems engineering (MBSE, SysML) including technical risks, safety and hazard analysis",
      "Information technology and embedded software engineering to complete the implementation of smart products",
      "Technical project and risk management to lead your projects to expected goals",
      "Digital engineering including modelling & simulation techniques, as well as data analytics",
    ],
  },
];

const HowToCreateValue = () => {
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
          How to Create Value
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
                      {section.title}
                    </Typography>
                  </Box>

                  {/* Content Text */}
                  {section.content && (
                    <Typography
                      sx={{
                        color: "#33415c",
                        fontSize: { xs: "0.95rem", md: "1.02rem" },
                        lineHeight: 1.85,
                        fontWeight: 500,
                        mb: section.items || section.keyElements || section.coreDomains ? 3 : 0,
                      }}
                    >
                      {section.content}
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
                              {item.label}
                            </Typography>
                            <Typography
                              sx={{
                                color: "#55627c",
                                fontSize: "0.95rem",
                                lineHeight: 1.6,
                              }}
                            >
                              {item.desc}
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
                            {element}
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
                            {domain}
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
