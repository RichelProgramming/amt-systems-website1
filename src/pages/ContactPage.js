import React from 'react';
import SocialMedia from '../components/Contact/SocialMedia.components';
import From from '../components/Contact/Form.components';
import HomeCard from "../components/HomeCard";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";

const ContactPage = () => {
  const { t } = useTranslation();
  const homeData = {
    title: t("common.heroTitle"),
    description: t("common.heroDesc"),
    logo: "/logo192.png",
    alt: t("common.brandAlt"),
    buttonText: t("common.getStarted"),
    page: t("contact.page"),
  };
  return (
    <div>
      <LanguageSwitcher />
      <HomeCard homeData={homeData}/>
      <SocialMedia />
      <From />
    </div>
  );
}
export default ContactPage;
