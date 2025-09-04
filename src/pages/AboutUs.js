import React from 'react';
import HomeCard from "../components/HomeCard";
import Aboutus from '../components/AboutUs/AboutUs';
import Team from '../components/AboutUs/Team';
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
      <HomeCard homeData={homeData}/>
      <Aboutus />
      <Team />
    </div>
  );
}
export default AboutUs;
