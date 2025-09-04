import React, { useEffect, useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher({ align = "right", size = "small" }) {
  const { i18n } = useTranslation();
  const normalize = (lng) => (lng?.startsWith("fr") ? "fr" : "en");
  const [lang, setLang] = useState(normalize(i18n.language));

  useEffect(() => {
    setLang(normalize(i18n.language));
  }, [i18n.language]);

  const handleChange = (_e, newLang) => {
    if (!newLang) return;
    setLang(newLang);
    i18n.changeLanguage(newLang);
    localStorage.setItem("lng", newLang);
  };

  return (
    <div style={{ display: "flex", justifyContent: align, marginBottom: 0 }}>
      <ToggleButtonGroup
        exclusive
        value={lang}
        onChange={handleChange}
        size={size}
        sx={{
          // transparent bg (for dark headers), buttons in white
          bgcolor: "transparent",
          "& .MuiToggleButton-root": {
            color: "#fff",
            borderColor: "rgba(255,255,255,0.6)",
            textTransform: "none",
            fontWeight: 600,
            px: 1.25,
            lineHeight: 1.2,
          },
          // remove the double border between buttons
          "& .MuiToggleButtonGroup-grouped:not(:first-of-type)": {
            borderLeft: "none",
            ml: 0,
          },
          "& .MuiToggleButton-root:hover": {
            bgcolor: "rgba(255,255,255,0.08)",
            borderColor: "#fff",
          },
          // selected button: white background, dark text
          "& .Mui-selected": {
            bgcolor: "#fff !important",
            color: "#0e0e2c !important",
            borderColor: "#fff !important",
          },
          // focus ring subtle
          "& .MuiToggleButton-root.Mui-focusVisible": {
            outline: "2px solid rgba(255,255,255,0.6)",
            outlineOffset: 2,
          },
        }}
      >
        <ToggleButton value="en">EN</ToggleButton>
        <ToggleButton value="fr">FR</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}
