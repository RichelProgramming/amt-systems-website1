import React from "react";
import ServicesGrid from "../components/ServicesGrid";
import { services } from "../data/SiteData";
import HomeCard from "../components/HomeCard";
import AboutSection from '../components/AboutSection';
import FloatingActionButton from '../components/FloatingActionButton';
import RecentsProjet from '../components/RecentsProjet';
import ServiceSolution from '../components/ServiceSolution';

import WhyChoose from "../components/WhyChoose";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";
import globe from '../assets/globe.png';
export default function HomePage() {
  const { t } = useTranslation();
   const homeData = {
    title: "Innovative Solutions for Your Busines",
    description: "We offer a complete Web development Service. We have expertise and knolage to deliver digital solution to clients across a wide range of sectors in Africa.",
    logo:globe,
    alt: "AMT Systems Engineering",
    buttonText: "Get Started",
    page: "home"
  }
  return(
    <div>
      <HomeCard homeData={homeData}/>
      <AboutSection />
      <RecentsProjet />
      <ServiceSolution />
    </div>
  );
}
