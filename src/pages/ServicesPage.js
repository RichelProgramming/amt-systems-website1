import React from "react";
import ServicesGrid from "../components/ServicesGrid";
import { getServices } from "../data/SiteData";
import { useTranslation } from "react-i18next";

export default function ServicesPage() {
  const { t } = useTranslation();

  const services = getServices(t).map((s, i) => ({
    icon: ["🖥️", "📈", "🛍️"][i] ?? "🔹",
    title: s.title,
    description: s.desc,
    href: s.href ?? "#",
  }));

  return (
    <div>
      <ServicesGrid services={services} />
    </div>
  );
}
