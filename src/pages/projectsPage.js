import React from 'react';
import HomeCard from "../components/HomeCard";
import Projet from '../components/Galerie/Projet';
import { useTranslation } from "react-i18next";

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
      {/* <Projet /> */}
    </div>
  );
}

export default ProjectsPage;
