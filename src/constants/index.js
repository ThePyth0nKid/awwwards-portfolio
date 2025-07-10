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
    title: "Automation und smarte Infrastruktur",
    description:
      "Digitale Prozesse dürfen keine Zeitfresser sein.\nIch automatisiere Abläufe mit Tools wie n8n, sorge für stabile Infrastrukturen und setze auf moderne Cloud-Technologien,\num deine digitalen Systeme rund um die Uhr effizient und skalierbar laufen zu lassen – DSGVO-konform und wartungsarm.",
    items: [
      {
        title: "Workflow-Automatisierung mit n8n",
        description: "(Automatisierte Abläufe, Integration von Tools)"
      },
      {
        title: "Skalierbare Infrastruktur und Cloud-Plattformen",
        description: "(AWS, Azure, moderne Cloud-Architekturen)"
      },
      {
        title: "Stabile Deployments und System-Monitoring",
        description: "(Zuverlässigkeit, Überwachung, Wartung)"
      },
    ],
  },
  {
    title: "Sicherheit & Optimierung",
    description:
      "Unsichere Systeme und langsame Abläufe kosten Vertrauen und Effizienz.\nIch sichere digitale Infrastrukturen, schließe Schwachstellen und optimiere Prozesse –\nfür stabile, skalierbare und wartungsarme Systeme, die mit deinem Unternehmen mitwachsen.",
    items: [
      {
        title: "Sicherheitsaudits und Schwachstellenanalyse",
        description: "(Systemprüfung, Risikoerkennung, Schutzmaßnahmen)"
      },
      {
        title: "Prozessoptimierung und Systemhärtung",
        description: "(Effizienzsteigerung, Angriffsflächen minimieren)"
      },
      {
        title: "DSGVO-konforme Datenverarbeitung",
        description: "(Datenschutz, Compliance, sichere Abläufe)"
      },
    ],
  },
  {
    title: "Web und Mobile Tools für jedes Unternehmen",
    description:
      "Komplizierte Interfaces kosten Zeit und bremsen Abläufe.\nIch entwickle smarte responsive Tools für Web und Mobile\nmaßgeschneidert für Startups KMUs und große Unternehmen.\nDesign und Funktionalität greifen nahtlos ineinander damit Prozesse schneller und intuitiver ablaufen.",
    items: [
      {
        title: "Cross Platform Anwendungen für jede Branche",
        description: "(Web, Mobile, Desktop – alles aus einer Hand)"
      },
      {
        title: "Progressive Web Apps für maximale Effizienz",
        description: "(Offline-Fähigkeit, Push, Performance)"
      },
      {
        title: "Individuelle E Commerce Lösungen für skalierbares Wachstum",
        description: "(Shop-Systeme, Zahlungsintegration, Wachstum)"
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "IGOULTRA – Hybride Trainings- und Lernplattform mit Gamification (in Arbeit)",
    description:
      "Hybride Plattform für digitales Lernen, Training und Gamification. Nutzer können Lerninhalte absolvieren, Fortschritte tracken und sich mit anderen messen.",
    href: "",
    image: "/assets/projects/igoultra.png",
    bgImage: "/assets/backgrounds/back1.png",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "Django" },
      { id: 3, name: "RESTful API" },
      { id: 4, name: "Tailwind CSS" },
      { id: 5, name: "Nude.js" },
    ],
  },
  {
    id: 2,
    name: "n8n Automation Suite – Automatisierte Datenflüsse und Aufgabensteuerung",
    description:
      "Automatisierung von Workflows und Datenflüssen mit n8n. Integration von Webhooks, REST APIs, Google Sheets und Notion für effiziente Prozesssteuerung.",
    href: "",
    image: "/assets/projects/n8n-screenshot-readme.png",
    bgImage: "/assets/backgrounds/back2.png",
    frameworks: [
      { id: 1, name: "n8n" },
      { id: 2, name: "Webhook Workflows" },
      { id: 3, name: "REST API" },
      { id: 4, name: "Google Sheets" },
      { id: 5, name: "Notion API" },
    ],
  },
  {
    id: 3,
    name: "3yAGI – Blogplattform rund um AGI und digitale Entwicklung",
    description:
      "Blogplattform mit Fokus auf AGI, KI und digitale Transformation. Moderne Backend-Architektur und Cloud-Deployment.",
    href: "",
    image: "/assets/projects/mockupBlog.png",
    bgImage: "/assets/backgrounds/back3.png",
    frameworks: [
      { id: 1, name: "Django" },
      { id: 2, name: "Python" },
      { id: 3, name: "PostgreSQL" },
      { id: 4, name: "Bootstrap" },
      { id: 5, name: "Cloudinary" },
      { id: 6, name: "Heroku" },
    ],
  },
  {
    id: 4,
    name: "Cyberpunk Memory – Interaktives Memory Game in dystopischer Ästhetik",
    description:
      "Ein Memory-Spiel mit Cyberpunk-Design, KI-generierten Grafiken und ChatGPT-Integration. Läuft komplett im Browser.",
    href: "",
    image: "/assets/projects/techsiniMemory.png",
    bgImage: "/assets/backgrounds/back4.png",
    frameworks: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "JavaScript" },
      { id: 4, name: "GitHub Pages" },
      { id: 5, name: "DALL·E 3" },
      { id: 6, name: "ChatGPT 4" },
    ],
  },
  {
    id: 5,
    name: "Fuut – Plattform für nachhaltige und automatisierte Food Innovation",
    description:
      "Webplattform für nachhaltige Food-Innovationen mit automatisierten Prozessen und modernen Webtechnologien.",
    href: "",
    image: "/assets/projects/fuut.png",
    bgImage: "/assets/backgrounds/back5.png",
    frameworks: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "JavaScript" },
      { id: 4, name: "GitHub Pages" },
      { id: 5, name: "Google Fonts" },
      { id: 6, name: "Font Awesome" },
    ],
  },
  {
    id: 6,
    name: "Make Automatisierung – No Code Workflows für E-Mail und Marketing Prozesse",
    description:
      "No-Code Automatisierung von E-Mail- und Marketing-Prozessen mit Make, Airtable, Google Drive und HTTP-Modulen.",
    href: "",
    image: "/assets/projects/make.png",
    bgImage: "/assets/backgrounds/back1.png",
    frameworks: [
      { id: 1, name: "Make" },
      { id: 2, name: "SMTP" },
      { id: 3, name: "HTTP Module" },
      { id: 4, name: "Airtable" },
      { id: 5, name: "Google Drive" },
    ],
  },
];
export const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nelson-mehlis-2aa216278/" },
  { name: "GitHub", href: "https://github.com/ThePyth0nKid" },
];
