import React from 'react';
import HomeCard from "../components/HomeCard";
import Discover from '../components/Galerie/Discover';
import Welcom from '../components/Galerie/Welcom';
// import Team from '../components/AboutUs/Team';
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();
  const homeData = {
    title: t("about.heroTitle"),
    description: t("about.heroDesc"),
    logo: "/logo192.png",
    alt: t("common.brandAlt"),
    buttonText: t("common.getStarted"),
    page: t("contact.page"),
  };

  return (
    <div>
      <Welcom/>
      <Discover />
      {/* <Team /> */}
    </div>
  );
}
export default AboutUs;
