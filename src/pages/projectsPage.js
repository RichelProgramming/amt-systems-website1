import React from 'react';
import HomeCard from "../components/HomeCard";
import Projet from '../components/Galerie/Projet';
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";


const primaryGradient = "linear-gradient(90deg, rgb(102, 188, 70), rgb(65, 66, 141), red)";
const ProjectsPage = () => {
  const { t } = useTranslation();
  const homeData = {
    title: t("common.heroTitle"),
    description: t("common.heroDesc"),
    logo: "/logo192.png",
    alt: t("common.brandAlt"),
    buttonText: t("common.getStarted"),
    page: "projects",
  };

  return (
    <div>
      <HomeCard homeData={homeData}/>
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
                Content coming soon...
              </Typography>
      {/* <Projet /> */}
    </div>
  );
}

export default ProjectsPage;
