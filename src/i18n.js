import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
        mapTitle: "Google Map",
        namePlaceholder: "Your name",
        emailPlaceholder: "Email",
        messagePlaceholder: "Message",
        send: "Send",
        sentOk: "Message sent successfully!",
        sentError: "An error occurred while sending.",

        common: {
            heroTitle: "Innovative Solutions for Your Business",
            heroDesc: "We offer a complete Web development service. We have the expertise and knowledge to deliver digital solutions across a wide range of sectors in Africa.",
            getStarted: "Get Started",
            brandAlt: "AMT Systems Engineering",
        },
        home: { page: "home" },
        service: { page: "service" },
        contact: { page: "contact" },
        about: {
            heroTitle: "Innovative Solutions for Your Business",
            heroDesc: "We offer a complete Web development service. We deliver across sectors in Africa.",
            teamTitle: "Our Team",
        },
        reviews: {
            heroH1: "Your feedback matters",
            heroP: "Share your experience with AMT Systems Engineering. Thank you!",
            leaveReview: "Leave a review",
            allReviews: "All reviews",
            empty: "No reviews yet.",
            filterBy: "Filter by rating:",
            sortBy: "Sort:",
            sortNew: "Newest",
            sortTop: "Top rated",
            countSuffix: "reviews"
        }
    },
  },
  fr: {
    translation: {
      mapTitle: "Carte Google",
      namePlaceholder: "Votre nom",
      emailPlaceholder: "E-mail",
      messagePlaceholder: "Message",
      send: "Envoyer",
      sentOk: "Message envoyé avec succès !",
      sentError: "Une erreur est survenue lors de l’envoi.",

      common: {
        heroTitle: "Des solutions innovantes pour votre entreprise",
        heroDesc: "Nous offrons un service complet de développement Web. Nous avons l’expertise et le savoir-faire pour livrer des solutions numériques dans de nombreux secteurs en Afrique.",
        getStarted: "Commencer",
        brandAlt: "AMT Systems Engineering",
    },
        home: { page: "home" },
        service: { page: "service" },
        contact: { page: "contact" },
        about: {
            heroTitle: "Des solutions innovantes pour votre entreprise",
            heroDesc: "Nous offrons un service complet de développement Web. Nous livrons dans de nombreux secteurs en Afrique.",
            teamTitle: "Notre équipe",
        },
        reviews: {
            heroH1: "Vos avis comptent",
            heroP: "Partagez votre expérience avec AMT Systems Engineering. Merci !",
            leaveReview: "Laisser un avis",
            allReviews: "Tous les avis",
            empty: "Aucun avis pour le moment.",
            filterBy: "Filtrer par note :",
            sortBy: "Trier :",
            sortNew: "Plus récents",
            sortTop: "Mieux notés",
            countSuffix: "avis"
        },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem("lng") || "fr", // par défaut FR, et persiste le choix
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });

export default i18n;
