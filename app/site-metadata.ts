import type { Metadata } from "next";

const sharedOgImage = "/techsio-logo.svg";

type SiteRoute = "/" | "/ecommerce" | "/integrace" | "/portfolio";

export const siteMetadata = {
  "/": {
    title: "Techsio - E-shop podle vašich pravidel, ne podle omezení platformy",
    description:
      "Vytváříme robustní e-commerce řešení na míru pro střední a velké firmy. Bez limitů, s plnou kontrolou a nekonečnými možnostmi integrace.",
    openGraph: {
      images: [sharedOgImage],
    },
  },
  "/ecommerce": {
    title: "E-commerce řešení na míru | Techsio",
    description:
      "Pokročilé B2B a B2C e-shopy s funkcemi jako firemní účty, více košíků, rychlý nákup a produktové varianty. Multisklad a multishop řešení.",
    openGraph: {
      images: [sharedOgImage],
    },
  },
  "/integrace": {
    title: "Systémové integrace | Techsio",
    description:
      "Propojení s ERP, CRM, účetními systémy, platebními branami a dopravci. Automatizace procesů a API integrace pro váš e-shop.",
    openGraph: {
      images: [sharedOgImage],
    },
  },
  "/portfolio": {
    title: "Portfolio | Techsio",
    description:
      "Podívejte se na reálné výsledky našich klientů. Každý projekt je příběhem úspěchu a růstu. 50+ úspěšných projektů.",
    openGraph: {
      images: [sharedOgImage],
    },
  },
} satisfies Record<SiteRoute, Metadata>;

