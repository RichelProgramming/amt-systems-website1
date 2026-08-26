
import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar, Footer } from "./components";
import HomePage from "./pages/HomePage";
import AvisPage from "./pages/AvisPage";
import GaleriePage from "./pages/GaleriePage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/projectsPage";
import CursorAnimation from "./components/CustumPointer";
import ContactPage from "./pages/ContactPage";
import AboutUs from "./pages/AboutUs";
import { getNavbarData, getFooterData } from "./data/SiteData";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();
  const navProps = getNavbarData(t);
  const footerProps = getFooterData(t);
 import logo from './logo.svg';
import './App.css';
import React from "react";
import { NavBar, ServicesGrid, Footer } from "./components";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  const navbarData = {
    logo: { src: "/logo192.png", alt: "AMT Systems Engineering" },
    nav: [
      { label: "Home", href: "#" },
      { label: "About Us", href: "#" },
      {
        label: "Services",
        items: [
          { label: "Website Creation", href: "#" },
          { label: "Custom Website Development", href: "#" },
          { label: "Web Portal Development", href: "#" },
          { label: "Software Development", href: "#" },
        ],
      },
      { label: "Blog", items: [{ label: "Latest", href: "#" }] },
      { label: "Contact", href: "#" },
    ],
    languages: { current: "Français", options: ["English", "Français"], onSelect: (lng) => console.log(lng) },
  };

  const services = [
    {
      icon: "🖥️",
      title: "Web & Mobile app",
      description:
        "If your site isn’t mobile-friendly or responsive, you're missing key traffic. We provide responsive web design and mobile app development services.",
      href: "#",
    },
    {
      icon: "📈",
      title: "SEO & Digital Marketing",
      description:
        "If you need to connect with your target audience, we have the digital marketing package for you! We deliver winning campaigns that integrate full SEO and PPC strategies.",
      href: "#",
    },
    {
      icon: "🛍️",
      title: "E-Commerce Platforms",
      description:
        "We're ready to create a cutting-edge, high performance, fully secure e-Commerce website for your business.",
      href: "#",
    },
  ];

  const footerData = {
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
    contact: { city: "Douala", country: "Cameroon", phone: "+237 6 98 98 74 85", email: "amtsystemsengineering@gmail.com" },
    socials: [
      { label: "Facebook", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Twitter", href: "#" },
    ],
    languages: { options: ["English", "Français"], onSelect: (lng) => console.log(l

  return (
    <BrowserRouter>
      <div className="page">
        <NavBar {...navProps} />
        <CursorAnimation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/reviews" element={<AvisPage />} />
          <Route path="/galerie" element={<GaleriePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
        <Footer {...footerProps} />
      </div>
    </BrowserRouter>
  );
}