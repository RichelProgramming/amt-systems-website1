// SiteData.js
// (retire l'import "motion/react-client" qui ne sert pas ici)

export const getNavbarData = (t) => ({
  logo: { src: "/logo192.png", alt: "AMT Systems Engineering" },
  nav: [
    { label: t("navbar.home"), href: "/" },
    { label: t("navbar.about"), href: "/aboutus" },
    { label: t("navbar.services"), href: "/services" },
    { label: t("navbar.contact"), href: "/contact" },
    { label: t("navbar.reviews"), href: "/reviews" },
  ],
});

export const getFooterData = (t) => ({
  logo: { src: "/logo192.png", alt: "AMT Systems Engineering" },
  about:
    t("common.heroDesc"),
  columns: [
    {
      title: "Web & Mobile App", // tu peux aussi créer des clés i18n si tu veux tout traduire
      links: [
        { label: "Website Creation" },
        { label: "Custom website Development" },
        { label: "Web Portal Development" },
        { label: "Software Development" },
        { label: "CMS Website Development" },
        { label: "Progressive Web Applications" },
        { label: "Mobile Applications Development" },
        { label: "E-Commerce Development" },
      ],
    },
    {
      title: "SEO & Digital Marketing",
      links: [
        { label: "Digital Marketing" },
        { label: "Local SEO Services" },
        { label: "Social Media Optimization" },
        { label: "Lead Generation" },
        { label: "Pay Per Click (PPC)" },
        { label: "Bulk SMS" },
        { label: "Branding And Design" },
        { label: "Corporate Identity" },
      ],
    },
  ],
  contact: {
    city: "Douala",
    country: "Cameroon",
    phone: "+237 6 98 98 74 85",
    email: "amtsystemsengineering@gmail.com",
  },
  socials: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Twitter", href: "#" },
  ],
});

export const getServices = (t) =>
  t("servicesTexts.items", { returnObjects: true });
