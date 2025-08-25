import React from "react";

export default function ServiceCard({ icon = "", title, description, href = "#" }) {
  return (
    <div className="card">
      <div className="card__icon" aria-hidden>{icon || "⬣"}</div>
      <h3 className="card__title">{title}</h3>
      <p className="card__text">{description}</p>
      <a className="card__cta" href={href}>View details →</a>
    </div>
  );
}