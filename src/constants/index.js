// index.js
export const servicesData = [
  {
    title: "FullStack Entwicklung",
    description:
      "Dein Unternehmen verdient eine digitale Grundlage, die automatisiert, effizient und zukunftssicher ist.\nIch entwickle smarte Tools mit klarer Struktur, skalierbaren Datenflüssen und nahtloser Systemintegration –\nfür maximale Geschwindigkeit, Sicherheit und digitale Wirkung.",
    items: [
      {
        title: "Systemarchitektur",
        description: "(Struktur, Modularität, Zukunftssicherheit)",
      },
      {
        title: "Datenfluss und Automatisierung",
        description: "(Automatisierte Prozesse, effiziente Workflows)"
      },
      {
        title: "Skalierbare Schnittstellen",
        description: "(APIs, Integrationen, Wachstum)"
      },
    ],
  },
  {
    title: "DevOps & Cloud-Lösungen",
    description:
      "Software-Deployment sollte kein Glücksspiel sein. Ich automatisiere Infrastruktur, erzwinge Sicherheit und nutze Cloud-Plattformen (AWS/Azure), um deine App reibungslos laufen zu lassen—24/7, in jeder Größe.",
    items: [
      {
        title: "CI/CD Pipelines",
        description: "(GitHub Actions, Docker, Kubernetes)",
      },
      {
        title: "Server-Management",
        description: "(Linux, Nginx, Load Balancing)",
      },
      {
        title: "Performance-Optimierung",
        description: "(Caching, Komprimierung, Lighthouse 90+ Scores)",
      },
    ],
  },
  {
    title: "Sicherheit & Optimierung",
    description:
      "Langsame oder gehackte Apps zerstören Vertrauen. Ich härte Sicherheit (XSS/SQLI-Schutz, OAuth) und optimiere Engpässe, damit deine App schnell, sicher und skalierbar bleibt, während du wächst.",
    items: [
      {
        title: "Code-Audits",
        description: "(Refactoring, Tech-Debt-Bereinigung)",
      },
      {
        title: "Penetrationstests",
        description: "(Schwachstellenbewertungen)",
      },
      {
        title: "SEO Tech Stack",
        description: "(SSR, Metadaten, Strukturierte Daten)",
      },
    ],
  },
  {
    title: "Web & Mobile Apps",
    description:
      "Ein umständliches Interface kann selbst die besten Ideen versenken. Ich erstelle responsive, pixelperfekte Web- und Mobile-Apps (React Native/Flutter), die Benutzer lieben—und verbinde Design und Funktionalität nahtlos.",
    items: [
      {
        title: "Cross-Platform Apps",
        description: "(Ein Codebase für iOS/Android/Web)",
      },
      {
        title: "PWAs",
        description: "(Offline-Modus, Push-Benachrichtigungen)",
      },
      {
        title: "E-Commerce",
        description: "(Checkout-Flows, Zahlungsgateways, Inventar-APIs)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "Mobile Zubehör E-Commerce",
    description:
      "Ein Online-Shop, der sich auf Telefonzubehör spezialisiert, einschließlich Hüllen, Ladegeräte, Kabel und Powerbanks mit MagSafe-Kompatibilität.",
    href: "",
    image: "/assets/projects/mobile-accessories-store.jpg",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Tailwind CSS" },
    ],
  },
  {
    id: 2,
    name: "Pflanzen-Shop E-Commerce",
    description:
      "Ein Online-Shop, der sich auf seltene und dekorative Pflanzen mit einer sauberen, benutzerfreundlichen Oberfläche spezialisiert.",
    href: "",
    image: "/assets/projects/plant-shop.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Next.js" },
      { id: 3, name: "Stripe API" },
      { id: 4, name: "Tailwind CSS" },
    ],
  },
  {
    id: 3,
    name: "Apple Tech Marktplatz",
    description:
      "Eine E-Commerce-Plattform für Apple-Produkte und Zubehör mit Angeboten und Kategorie-Filterung.",
    href: "",
    image: "/assets/projects/apple-tech-store.jpg",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "Blazor" },
      { id: 2, name: "ASP.NET Core" },
      { id: 3, name: "SQL Server" },
      { id: 4, name: "Bootstrap" },
    ],
  },
  {
    id: 4,
    name: "Elektronik & Gadgets Store",
    description:
      "Ein Multi-Kategorie-Online-Shop mit Elektronik, Haushaltsgeräten und Gaming-Ausrüstung mit Sonderangeboten.",
    href: "",
    image: "/assets/projects/electronics-store.jpg",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "Vue.js" },
      { id: 2, name: "Laravel" },
      { id: 3, name: "MySQL" },
      { id: 4, name: "SCSS" },
    ],
  },
  {
    id: 5,
    name: "Home Decor Marktplatz",
    description:
      "Eine kuratierte Sammlung von Designer-Home-Decor-Artikeln, einschließlich Möbel und Kunsthandwerk-Vasen.",
    href: "",
    image: "/assets/projects/home-decor-store.jpg",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "Angular" },
      { id: 2, name: "Firebase" },
      { id: 3, name: "GraphQL" },
      { id: 4, name: "Material UI" },
    ],
  },
  {
    id: 6,
    name: "Digital Game Store",
    description:
      "Eine Gaming-Plattform mit vergünstigten Titeln, Bestsellern und genrebasiertem Browsen.",
    href: "",
    image: "/assets/projects/game-store.jpg",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "Svelte" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "MongoDB" },
      { id: 4, name: "Chakra UI" },
    ],
  },
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/ali.sanatidev/reels/" },
  {
    name: "Youtube",
    href: "https://www.youtube.com/channel/UCZhtUWTtk3bGJiMPN9T4HWA",
  },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ali-sanati/" },
  { name: "GitHub", href: "https://github.com/Ali-Sanati" },
];
