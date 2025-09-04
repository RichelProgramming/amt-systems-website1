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
        },
        navbar: {
            home: "Home",
            about: "About Us",
            services: "Services",
            contact: "Contact",
            reviews: "Reviews",
            },
            aboutSection: {
            title: "About Us",
            desc:
                "From brand development, website and application development, eCommerce solutions, Content Management Systems (CMS), Search Engine Optimization (SEO) and digital marketing.",
            cta: "Learn more",
            },
            aboutUs: {
            heading: "Why choose AMT Systems-Engineering SARL as your business partner?",
            cards: {
                deliver_title: "Delivering products",
                deliver_desc: "Delivering products is important, but excellence means more than fulfilling customers' explicit needs.",
                innovate_title: "Innovations",
                innovate_desc: "Creating sustainable value requires more than a technical resolution of challenges.",
                pm_title: "Project Management",
                pm_desc: "To achieve this, AMT Systems-Engineering SARL stays attentive to the real challenges customers face in their ecosystem.",
                it_title: "IT Consulting",
                it_desc: "A customer-centric, user-focused approach that prioritizes service and tailored solutions for all stakeholders.",
            },
            },
            servicesTexts: {
            items: [
                {
                title: "IT Solutions and Data Services",
                desc:
                    "We design web platforms and mobile apps for performance, craft visual identities, and analyze data to deliver strategic insights tailored to your business.",
                },
                {
                title: "Systems Engineering and Prototyping",
                desc:
                    "We co-create customized local solutions: systems engineering, mechanical/electronic design, and rapid prototyping backed by advanced simulation.",
                },
                {
                title: "Technical procurement and supplies",
                desc:
                    "We connect partners with suppliers and manage technical supplies so you can focus on your core business.",
                },
            ],
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
        navbar: {
            home: "Accueil",
            about: "À propos",
            services: "Services",
            contact: "Contact",
            reviews: "Avis",
            },
            aboutSection: {
            title: "À propos",
            desc:
                "Du développement de marque au développement d’applications web, e-commerce, CMS, SEO et marketing digital.",
            cta: "En savoir plus",
            },
            aboutUs: {
            heading: "Pourquoi choisir AMT Systems-Engineering SARL comme partenaire ?",
            cards: {
                deliver_title: "Livraison de produits",
                deliver_desc: "Livrer des produits est essentiel, mais l’excellence va au-delà des besoins explicites du client.",
                innovate_title: "Innovations",
                innovate_desc: "Créer de la valeur durable exige plus qu’une simple réponse technique.",
                pm_title: "Gestion de projet",
                pm_desc: "Pour y parvenir, AMT Systems-Engineering SARL reste à l’écoute des enjeux réels de ses clients.",
                it_title: "Conseil IT",
                it_desc: "Une approche centrée client et orientée usages, avec des solutions sur mesure pour tous les acteurs.",
            },
            },
            servicesTexts: {
            items: [
                {
                title: "Solutions IT et services data",
                desc:
                    "Nous concevons des plateformes web et apps mobiles performantes, des identités visuelles, et analysons vos données pour des insights stratégiques adaptés.",
                },
                {
                title: "Systèmes-engineering et prototypage",
                desc:
                    "Nous co-créons des solutions locales sur mesure : ingénierie systèmes, conception méca/électronique et prototypage rapide, soutenus par la simulation avancée.",
                },
                {
                title: "Approvisionnement technique et fournitures",
                desc:
                    "Nous connectons les partenaires aux fournisseurs et gérons les approvisionnements techniques pour vous recentrer sur l’essentiel.",
                },
            ],
            }
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
