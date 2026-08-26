// SiteData.js
// (retire l'import "motion/react-client" qui ne sert pas ici)

export const getNavbarData = (t) => ({
  logo: { src: "/logo192.png", alt: "AMT Systems Engineering" },
  nav: [
    { label: t("navbar.home"), href: "/" },
    { label: t("navbar.about"), href: "/aboutus" },
    { label: t("navbar.services"), href: "/services" },
    { label: t("navbar.projects"), href: "/projects" },
    { label: t("navbar.contact"), href: "/contact" },
    { label: t("navbar.reviews"), href: "/reviews" },
    { label: t("navbar.gallery"), href: "/galerie" },
  ],
});

export const getFooterData = (t) => ({
  logo: { src: "/logo192.png", alt: "AMT Systems Engineering" },
  about:
    t("common.heroDesc"),
  columns: [
    {
      title: t("footer.webMobileApp"),
      links: [
        { label: t("footer.services.websiteCreation") },
        { label: t("footer.services.customWebDev") },
        { label: t("footer.services.webPortal") },
        { label: t("footer.services.softwareDev") },
        { label: t("footer.services.cmsDev") },
        { label: t("footer.services.pwa") },
        { label: t("footer.services.mobileAppDev") },
        { label: t("footer.services.ecommerceDev") },
      ],
    },
    {
      title: t("footer.seoMarketing"),
      links: [
        { label: t("footer.services.digitalMarketing") },
        { label: t("footer.services.localSeo") },
        { label: t("footer.services.socialMediaOpt") },
        { label: t("footer.services.leadGen") },
        { label: t("footer.services.ppc") },
        { label: t("footer.services.bulkSms") },
        { label: t("footer.services.branding") },
        { label: t("footer.services.corporateId") },
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
    { icon: "facebook", label: t("footer.socials.facebook"), href: "https://www.facebook.com/AMTSystemsEngineering" },
    { icon: "instagram", label: t("footer.socials.instagram"), href: "https://www.instagram.com/amtsys/p/DaX2KzsjYMg/" },
    { icon: "linkedin", label: t("footer.socials.linkedin"), href: "https://www.linkedin.com/in/amt-systems-engineering-sarl-581b3541b/" },
    { icon: "twitter", label: t("footer.socials.twitter"), href: "https://twitter.com/AMTSystemsEng" },
  ],
});

export const getServices = (t) =>
  t("servicesTexts.items", { returnObjects: true });
