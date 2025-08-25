import { label } from "motion/react-client";

// données de barre de navigation (header)
export const navbarData = {
  logo: { src: "/logo192.png", alt: "AMT Systems Engineering" },
  nav: [
    { label: "Home", href: "/" },
    {label: "About Us", href: "/aboutus" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "Reviews", href: "/reviews" }, 
  ],
  languages: {
    current: "Français",
    options: ["English", "Français"],
    onSelect: (lng) => console.log(lng),
  },
};

// données du pied de (footer)
export const footerData = {
  logo: { src: "/logo192.png", alt: "AMT Systems Engineering" },
  about:
    "At AMT, We boast of the best and most experienced team of professional website designers and developers. This is why we build websites that are not only beautiful but also responsive and Search Engine Friendly.",
  columns: [
    {
      title: "Web & Mobile App",
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
  languages: { options: ["English", "Français"], onSelect: (lng) => console.log(lng) },
};

// données de la grille de services
 export const services = [
    {
      icon: "🖥️",
      title: "IT Solutions and Data Services",
      description:
        "The  Services performed by AMT Systems- Engineering SARL  offer high-quality financial solutions by: Designing Web platforms and Mobile Applications for Optimal Performance. Creating Visual Identities and Branding Solutions. Collecting, Analyzing Data and deriving strategic Insights for your business. All tailored to fit the unique needs of your business.",
      href: "#",
    },
    {
      icon: "📈",
      title: "Systems-Engineering and Prototyping",
      description:
        "Many business partners face unique challenges requiring tailored solutions. AMT Systems Engineering SARL works closely with customers to develop local, highly customized solutions addressing their specific needs. Our services include :systems engineering mechanical and electronic designrapid prototyping All those supported by expertise in advanced engineering methods and simulation techniques",
      href: "#",
    },
    {
      icon: "🛍️",
      title: "Technical, industrial procurement and supplies",
      description:
        "As Companies and institutions increasingly focus on core competencies. The demand for outsourcing secondary activities like spare part procurement continues to rise. AMT Systems Engineering SARL offers these services to its customers. Connecting our business partners with potential suppliers or managing supplies on their behalf is a key aspect of our operations",
      href: "#",
    },
  ];