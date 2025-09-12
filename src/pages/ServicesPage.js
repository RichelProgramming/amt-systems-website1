import React from "react";
import ServicesGrid from "../components/ServicesGrid";
import { getServices } from "../data/SiteData";
import { useTranslation } from "react-i18next";
import WhyChooseUs from "../components/WhyChoose";
import HomeCard from "../components/HomeCard";

export default function ServicesPage() {
  const { t } = useTranslation();
  const homeData = {
    title: t("common.heroTitle"),
    description: t("common.heroDesc"),
    logo: "/logo192.png",
    alt: t("common.brandAlt"),
    buttonText: t("common.getStarted"),
    page: t("contact.page"),
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
      <ServicesGrid services={services} />
      <WhyChooseUs />
    </div>
  );
}
