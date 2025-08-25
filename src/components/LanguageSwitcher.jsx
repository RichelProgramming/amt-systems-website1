import React, { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher({ align = "right", size="small" }) {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);

  const handleChange = (_e, newLang) => {
    if (!newLang) return;
    setLang(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem("lng", newLang);
  };

  return (
    <div style={{ display: "flex", justifyContent: align, marginBottom: 8 }}>
      <ToggleButtonGroup exclusive value={lang} onChange={handleChange} size={size}>
        <ToggleButton value="en">EN</ToggleButton>
        <ToggleButton value="fr">FR</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
