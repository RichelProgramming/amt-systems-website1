import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar, Footer } from "./components";
import HomePage from "./pages/HomePage";
import AvisPage from "./pages/AvisPage";
import GaleriePage from "./pages/GaleriePage";
import ServicesPage from "./pages/ServicesPage";
import CursorAnimation from "./components/CustumPointer";
import ContactPage from "./pages/ContactPage";
import AboutUs from "./pages/AboutUs";
import { getNavbarData, getFooterData } from "./data/SiteData";
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();
  const navProps = getNavbarData(t);
  const footerProps = getFooterData(t);

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
        </Routes>
        <Footer {...footerProps} />
      </div>
    </BrowserRouter>
  );
}
