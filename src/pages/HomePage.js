import React from "react";
import ServicesGrid from "../components/ServicesGrid";
import { services } from "../data/SiteData";
import HomeCard from "../components/HomeCard";
import WhyChoose from "../components/WhyChoose";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";

export default function HomePage() {
  const { t } = useTranslation();
  const homeData = {
    title: t("common.heroTitle"),
    description: t("common.heroDesc"),
    logo: "/logo192.png",
    alt: t("common.brandAlt"),
    buttonText: t("common.getStarted"),
    page: t("service.page"),
  };
  return(
    <div>
      <LanguageSwitcher />
      <HomeCard homeData={homeData}/>
      <ServicesGrid services={services} /> 
      <WhyChoose />
    </div>
  );
}
