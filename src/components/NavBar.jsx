import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Dropdown from "./Dropdown";            // pour les sous-menus éventuels
import LanguageSwitcher from "./LanguageSwitcher"; // toggle EN/FR (blanc)

export default function NavBar({
  logo = { src: "", alt: "AMT Systems Engineering" },
  nav = [],
}) {
  const [open, setOpen] = useState(false);

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
      <a className={className} href={href} onClick={() => mobile && setOpen(false)}>
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

          {/* Toggle langue (blanc) */}
          <LanguageSwitcher align="right" size="small" />
        </nav>

        {/* Burger mobile */}
        <button className="nav__burger" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="nav__mobile">
          {/* Toggle langue aussi dispo en mobile */}
          <div className="nav__mobile-langs" style={{ padding: "8px 16px" }}>
            <LanguageSwitcher align="left" size="small" />
          </div>

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
        </div>
      )}
    </header>
  );
}
