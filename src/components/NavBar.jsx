import React, { useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";
import { useTranslation } from "react-i18next";

const LANG_LABELS = {
  en: "English",
  fr: "Français",
};

export default function NavBar({
  logo = { src: "", alt: "AMT Systems Engineering" },
  nav = [],
  // props.languages restent optionnels; on privilégie i18n, mais on garde la compat.
  languages: _languagesProp,
}) {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  // langue actuelle + libellé affiché
  const currentLng = i18n.language?.startsWith("fr") ? "fr" : "en";
  const currentLabel = LANG_LABELS[currentLng];

  const languageOptions = useMemo(
    () => ([
      { code: "en", label: LANG_LABELS.en },
      { code: "fr", label: LANG_LABELS.fr },
    ]),
    []
  );

  const changeLang = async (code) => {
    await i18n.changeLanguage(code);
    localStorage.setItem("lng", code);
    setOpen(false);
  };

  const RenderLink = ({ item, className = "nav__link", mobile = false }) => {
    const href = item.href || "#";
    const isInternal = typeof href === "string" && href.startsWith("/");

    if (isInternal) {
      return (
        <NavLink
          to={href}
          className={({ isActive }) => (isActive ? `${className} is-active` : className)}
          onClick={() => mobile && setOpen(false)}
        >
          {item.label}
        </NavLink>
      );
    }
    return (
      <a
        className={className}
        href={href}
        onClick={() => mobile && setOpen(false)}
      >
        {item.label}
      </a>
    );
  };

  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__brand" href="/" aria-label={logo.alt}>
          {logo.src ? <img src={logo.src} alt={logo.alt} /> : <div className="nav__logo-fallback" />}
        </a>

        {/* Desktop nav */}
        <nav className="nav__links nav__links--desktop">
          {nav.map((item, i) => (
            <div key={i} className="nav__linkwrap">
              {item.items ? (
                <Dropdown label={item.label} items={item.items} />
              ) : (
                <RenderLink item={item} />
              )}
            </div>
          ))}

          {/* Sélecteur de langue */}
          <Dropdown
            label={
              <span style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
                🌐 {currentLabel}
              </span>
            }
            align="right"
            items={languageOptions.map((opt) => ({
              label: opt.label,
              href: "#",
              onClick: () => changeLang(opt.code),
            }))}
          />
        </nav>

        {/* Burger mobile */}
        <button className="nav__burger" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="nav__mobile">
          {nav.map((item, i) => (
            <div key={i} className="nav__mobile-group">
              {item.items ? (
                <details>
                  <summary className="nav__mobile-summary">{item.label}</summary>
                  <div className="nav__mobile-sub">
                    {item.items.map((sub, k) => (
                      <RenderLink key={k} item={sub} className="nav__mobile-link" mobile />
                    ))}
                  </div>
                </details>
              ) : (
                <RenderLink item={item} className="nav__mobile-link" mobile />
              )}
            </div>
          ))}

          <div className="nav__mobile-langs">
            <div className="nav__mobile-langs-title">
              {currentLng === "fr" ? "Langue" : "Language"}
            </div>
            {languageOptions.map((opt) => (
              <button
                key={opt.code}
                className={`nav__mobile-lang ${opt.code === currentLng ? "is-active" : ""}`}
                onClick={() => changeLang(opt.code)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
