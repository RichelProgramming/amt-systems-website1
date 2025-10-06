import React from "react";
import ServicesGrid from "../components/ServicesGrid";
import HomeCard from "../components/HomeCard";
import AboutSection from '../components/AboutSection';
import FloatingActionButton from '../components/FloatingActionButton';
// import RecentsProjet from '../components/RecentsProjet';
import ServiceSolution from '../components/ServiceSolution';
import { motion } from 'framer-motion';
import WhyChoose from "../components/WhyChoose";
import { getServices } from "../data/SiteData";
import { useTranslation } from "react-i18next";
import AvisSlider from "../components/AvisHome";

export default function HomePage() {
  const { t } = useTranslation();

  const homeData = {
    title: t("common.heroTitle"),
    description: t("common.heroDesc"),
    logo: "/logo192.png",
    alt: t("common.brandAlt"),
    buttonText: t("common.getStarted"),
    page: 'home',
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
  
      <svg 
        style={{
          position: 'absolute',
          bottom: 'clamp(120px, 20vw, 150px)',
          left: 0,
          width: '100%',
          height: '80px',
          zIndex: 3,
          pointerEvents: 'none'
        }}
        viewBox="0 0 1920 80"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 0 40 Q 480 10 960 40 T 1920 40 L 1920 80 L 0 80 Z"
          fill="white"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        />
      </svg>
      <AboutSection />
      {/* <RecentsProjet /> */}
      <ServiceSolution />
      <AvisSlider />
    </div>
  );
}
