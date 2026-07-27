import React from "react";
import { useTranslation } from "react-i18next";

export default function ServiceCard({ icon = "", title, description, href= "/services"}) {
  const { t } = useTranslation();
  return (
    <div className="card">
      <div className="card__icon" aria-hidden>{icon || "⬣"}</div>
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{description}</p>
      <a className="card__cta" href={href}>{t("serviceCard.viewDetails")}</a>
    </div>
  );
}