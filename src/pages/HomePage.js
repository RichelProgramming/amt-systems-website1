import React from "react";
import ServicesGrid from "../components/ServicesGrid";
import HomeCard from "../components/HomeCard";
import AboutSection from '../components/AboutSection';
import FloatingActionButton from '../components/FloatingActionButton';
import RecentsProjet from '../components/RecentsProjet';
import ServiceSolution from '../components/ServiceSolution';

import WhyChoose from "../components/WhyChoose";
import { getServices } from "../data/SiteData";
import { useTranslation } from "react-i18next";

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

  const services = getServices(t).map((s, i) => ({
    icon: ["🖥️", "📈", "🛍️"][i] ?? "🔹",
    title: s.title,
    description: s.desc,  
    href: s.href ?? "#",
  }));

  return (
    <div>
      <HomeCard homeData={homeData}/>
      <AboutSection />
      <RecentsProjet />
      <ServiceSolution />
    </div>
  );
}
