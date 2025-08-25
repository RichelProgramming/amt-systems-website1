import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

const iconFromName = (nameOrLabel) => {
  const key = String(nameOrLabel || "").toLowerCase();
  if (key.includes("facebook")) return Facebook;
  if (key.includes("instagram")) return Instagram;
  if (key.includes("linkedin")) return Linkedin;
  if (key.includes("twitter") || key.includes("x")) return Twitter;
  return null;
};

const LANG_LABELS = { en: "English", fr: "Français" };

export default function Footer({
  logo = { src: " ", alt: "AMT Systems Engineering" },
  about,
  columns = [],
  contact = {
    city: "Douala",
    country: "Cameroon",
    phone: "+237 6 81 24 98 14",
    email: "contact@amtsyseng.com",
  },
  socials = [],
  // languages prop gardée pour compat, mais on utilise i18n
  languages: _languagesProp,
  year = new Date().getFullYear(),
}) {
  const { t, i18n } = useTranslation();
  const currentLng = i18n.language?.startsWith("fr") ? "fr" : "en";

  const changeLang = async (code) => {
    await i18n.changeLanguage(code);
    localStorage.setItem("lng", code);
  };

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <div className="footer__brand">
            {logo?.src ? (
              <img src={logo.src} alt={logo.alt} />
            ) : (
              <div className="footer__logo-fallback" />
            )}
          </div>

          {about && <p className="footer__about">{about}</p>}

          <div className="footer__socials">
            {socials.map((s, i) => {
              const Icon = iconFromName(s.icon || s.label);
              return (
                <a
                  key={i}
                  href={s.href || "#"}
                  className="footer__social"
                  aria-label={s.icon || s.label || "social"}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.icon || s.label}
                >
                  {Icon ? <Icon size={18} /> : <span>•</span>}
                </a>
              );
            })}
          </div>

          <hr className="footer__rule" />
        </div>

        {columns.map((col, i) => (
          <div key={i}>
            <h4 className="footer__title">{col.title}</h4>
            <ul className="footer__list">
              {col.links?.map((l, k) => (
                <li key={k}>
                  <a href={l.href || "#"}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="footer__title">
            {currentLng === "fr" ? "Adresse" : "Address"}
          </h4>
          <ul className="footer__contact">
            <li>
              <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
                <MapPin size={16} /> {contact.city} - {contact.country}
              </span>
            </li>
            <li>
              <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
                <Phone size={16} /> {contact.phone}
              </span>
            </li>
            <li>
              <span style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
                <Mail size={16} /> {contact.email}
              </span>
            </li>
          </ul>

          <div className="footer__langs">
            {["en", "fr"].map((code) => (
              <button
                key={code}
                className={`footer__langbtn ${code === currentLng ? "is-active" : ""}`}
                onClick={() => changeLang(code)}
                title={currentLng === "fr" ? `Passer en ${LANG_LABELS[code]}` : `Switch to ${LANG_LABELS[code]}`}
              >
                {LANG_LABELS[code]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          ©{year} <strong>AMT System Engineering</strong> {currentLng === "fr" ? "propulsé par" : "is proudly Powered by"}{" "}
          <strong>AMT Team</strong>
        </p>
        <div className="footer__legal">
          <a href="#">{currentLng === "fr" ? "Politique de confidentialité" : "Privacy Policy"}</a>
          <a href="#">{currentLng === "fr" ? "Conditions générales" : "Terms & Conditions"}</a>
        </div>
      </div>
    </footer>
  );
}
