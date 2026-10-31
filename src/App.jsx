import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import {
  ArrowDown, ArrowDownRight, ArrowUpRight, BriefcaseBusiness, CheckCircle2,
  Download, Globe2, Languages, Mail, MapPin, Menu, Moon, Phone, Send,
  ShieldCheck, Sparkles, Sun, UserRoundCheck, X
} from "lucide-react";
import { jsPDF } from "jspdf";

const experience = [
  {
    period: "2026 — PRESENT", number: "01", role: "Customer Service & Logistics Support",
    company: "Magabby Logistics", type: "LOGISTICS & CUSTOMER CARE",
    summary: "Responding to customer concerns, handling first-line complaints, and keeping customers informed about shipment progress and service issues.",
    points: [
      "Handle customer complaints and resolve issues within my authority, escalating matters that need management involvement.",
      "Provide shipment-tracking updates and explain delivery progress or documentation requirements clearly to customers.",
      "Maintain accurate customer, shipment and case records to support complaint resolution and consistent customer follow-up."
    ]
  },
  {
    period: "2023 — 2026", number: "02", role: "Customer Service & Airfare Ticketing / Reservations",
    company: "Abilfat Aviation Company", type: "AVIATION & TRAVEL SERVICES",
    summary: "Supporting customers and travel agents through enquiries, reservations, and the details that make travel arrangements easier to navigate.",
    points: [
      "Handle approximately 50 customer interactions per day, answering enquiries and supporting ticket reservations.",
      "Manage relationships with travel agents and guide customers on bookings, fare rules, changes, and related requests.",
      "Communicate with customers and partners to clarify information, follow up, and support issue resolution.",
      "Maintain accurate booking information, customer records, and supporting documentation."
    ]
  },
  {
    period: "2017 — 2020", number: "03", role: "Customer Service & Property Client Support",
    company: "TUNEXWORLD Homes and Properties", type: "REAL ESTATE & CLIENT OPERATIONS",
    summary: "Responding to property enquiries, guiding clients through service steps, and following up as property transactions progress.",
    points: [
      "Responded to customer enquiries about property sales, rentals, availability and viewing arrangements, providing clear information and timely follow-up.",
      "Guided clients through transaction documentation requirements and kept them informed as property transactions progressed through closing stages.",
      "Contributed to at least three property transactions per month through client follow-up, documentation coordination and transaction support.",
      "Addressed client questions and documentation gaps, coordinating with colleagues and external stakeholders to keep customers updated."
    ]
  }
];

const strengths = [
  { icon: UserRoundCheck, no: "01", title: "Customer care", text: "Patient, helpful communication that starts with understanding what the customer needs." },
  { icon: ShieldCheck, no: "02", title: "Complaint resolution", text: "Listening carefully, investigating issues, following up, and escalating at the right time." },
  { icon: BriefcaseBusiness, no: "03", title: "Service coordination", text: "Keeping requests, bookings, documents, and hand-offs organised from start to finish." },
  { icon: Languages, no: "04", title: "Multilingual perspective", text: "French C1 proficiency, alongside continuing Mandarin studies and English and Yoruba." }
];

const education = [
  { date: "2019 — 2023", title: "B.A.Ed. French Education", place: "Tai Solarin University of Education (TASUED)", tag: "DEGREE" },
  { date: "2022", title: "Certificate in French Language", place: "IUP Pan Africa School, Porto-Novo, Benin Republic", tag: "LANGUAGE" },
  { date: "2024", title: "Diploma in Airfare Ticketing & Reservation", place: "Abilfat Aviation Business School", tag: "AVIATION" },
  { date: "PROFESSIONAL COURSE", title: "Mandarin Chinese", place: "Confucius Institute · HSK 2 level, currently learning", tag: "IN PROGRESS" }
];

const languages = [
  { short: "FR", name: "French", level: "C1 proficiency", caption: "A core professional strength", type: "primary", mark: "01" },
  { short: "中文", name: "Mandarin Chinese", level: "HSK 2 level", caption: "Professional course · currently learning", type: "learning", mark: "02" },
  { short: "EN", name: "English", level: "Fluent", caption: "Confident professional communication", type: "standard", mark: "03" },
  { short: "YO", name: "Yoruba", level: "Native", caption: "Local and community communication", type: "standard", mark: "04" }
];

const leadership = [
  { role: "Vice President", org: "National French Students Association · TASUED Chapter", year: "2023" },
  { role: "Regional Secretary", org: "Lions Club", year: "2023" },
  { role: "CDS Secretary", org: "NYSC · ICT & Education", year: "2025" }
];

const cv = {
  name: "Abesin Oluwaseun Aminat",
  title: "CUSTOMER SERVICE & CLIENT OPERATIONS",
  contact: "Lagos, Nigeria | +234 916 207 0665 | aminatabesin523@gmail.com",
  summary: "Customer service professional with customer-facing experience across aviation, logistics, and real estate. Skilled in handling customer enquiries, reservations, complaints, travel-agent relationships, client follow-up, and service documentation. French C1 proficiency with ongoing Mandarin Chinese training at HSK 2 level through the Confucius Institute.",
  strengths: [
    "Customer support and client relations",
    "Complaint handling, escalation, and issue resolution",
    "Ticketing, reservations, fare rules, and travel-agent coordination",
    "Client follow-up, property transaction paperwork, and documentation",
    "Customer records, service documentation, and case coordination",
    "Multichannel communication and cross-team collaboration"
  ],
  education: [
    "B.A.Ed. French Education | Tai Solarin University of Education (TASUED) | 2019 - 2023",
    "Certificate in French Language | IUP Pan Africa School, Porto-Novo, Benin Republic | 2022",
    "Diploma in Airfare Ticketing & Reservation | Abilfat Aviation Business School | 2024",
    "Mandarin Chinese professional language course | Confucius Institute | HSK 2 level, currently learning",
    "HRM & Customer Service | Mastercard"
  ],
  languages: ["French: C1 proficiency", "Mandarin Chinese: HSK 2 level, currently learning", "English: Fluent", "Yoruba: Native"],
  leadership: [
    "Vice President, National French Students Association (TASUED Chapter), 2023",
    "Regional Secretary, Lions Club, 2023",
    "CDS Secretary, NYSC (ICT & Education), 2025"
  ]
};


const translations = {
  en: {
    htmlLang: "en",
    pageTitle: "Aminat Abesin — Customer Service & Client Experience",
    pageDescription: "Aminat Abesin is a customer service professional with experience in aviation, logistics and real estate, French C1 proficiency and ongoing Mandarin studies.",
    languageLabel: "Choose portfolio language",
    languageNames: { en: "English", fr: "French", zh: "Chinese" },
    navLabel: "Main navigation",
    nav: { about: "About", experience: "Experience", languages: "Languages", education: "Education", leadership: "Leadership", contact: "Contact", talk: "Let's talk", getInTouch: "Get in touch" },
    brandSubtitle: "Customer service & client experience",
    theme: { dark: "Dark", light: "Light", switchDark: "Switch to dark theme", switchLight: "Switch to light theme", toggle: "Toggle colour theme" },
    menu: { open: "Open menu", close: "Close menu" },
    hero: {
      eyebrow: "CUSTOMER SERVICE PROFESSIONAL · FRENCH C1",
      titleA: "Creating better",
      titleB: "customer experiences.",
      intro: "Customer service professional with experience across aviation, logistics, and real estate. I support customers through enquiries, reservations, complaints, and follow-up, with a focus on clear communication and reliable service. I also bring C1 French proficiency and ongoing Mandarin Chinese study through the Confucius Institute.",
      download: "Download CV (English)",
      explore: "Explore my experience",
      open: "Open to customer service opportunities",
      location: "Lagos, Nigeria · Remote, hybrid & on-site",
      portraitAlt: "Professional portrait of Aminat Abesin",
      portraitNote: "Customer service · Client experience",
      scroll: "SCROLL TO EXPLORE"
    },
    ribbon: [
      "French · C1 proficiency",
      "English · Fluent",
      "Yoruba · Native",
      "Mandarin · HSK 2 level, learning"
    ],
    about: {
      kicker: "01 / ABOUT ME",
      titleA: "Good service is more than a script.",
      titleB: "It is how people feel.",
      intro: "Customers remember when someone takes ownership. I bring a calm approach to questions and complaints, attention to detail, and a commitment to keeping people informed until the next step is clear.",
      strengths: [
        { title: "Customer care", text: "Patient, helpful communication that starts with understanding what the customer needs." },
        { title: "Complaint resolution", text: "Listening carefully, investigating issues, following up, and escalating at the right time." },
        { title: "Service coordination", text: "Keeping requests, bookings, documents, and hand-offs organised from start to finish." },
        { title: "Multilingual perspective", text: "French C1 proficiency, alongside continuing Mandarin studies and English and Yoruba." }
      ],
      statsKicker: "THE WORK IN NUMBERS",
      statsTitleA: "Steady service.",
      statsTitleB: "Careful follow-through.",
      statOne: "Customer interactions handled per day in aviation",
      statTwo: "Property transactions supported per month",
      statNote: "Focused on clear communication, accurate records, and reliable follow-up."
    },
    experienceSection: {
      kicker: "02 / EXPERIENCE",
      titleA: "Different industries.",
      titleB: "The same care.",
      intro: "From travel bookings to shipment concerns and property paperwork, each role has taught me how much good communication matters when people need help.",
      sideLabel: "MY JOURNEY",
      sideText: "Customer support\nClient coordination\nOperational follow-through",
      cvLink: "Get the full CV"
    },
    experience: [
      {
        period: "2026 — PRESENT",
        role: "Customer Service & Logistics Support",
        type: "LOGISTICS & CUSTOMER CARE",
        summary: "Responding to customer concerns, handling first-line complaints, and keeping customers informed about shipment progress and service issues.",
        points: [
          "Handle customer complaints and resolve issues within my authority, escalating matters that need management involvement.",
          "Provide shipment-tracking updates and explain delivery progress or documentation requirements clearly to customers.",
          "Maintain accurate customer, shipment and case records to support complaint resolution and consistent customer follow-up."
        ]
      },
      {
        period: "2023 — 2026",
        role: "Customer Service & Airfare Ticketing / Reservations",
        type: "AVIATION & TRAVEL SERVICES",
        summary: "Supporting customers and travel agents through enquiries, reservations, and the details that make travel arrangements easier to navigate.",
        points: [
          "Handle approximately 50 customer interactions per day, answering enquiries and supporting ticket reservations.",
          "Manage relationships with travel agents and guide customers on bookings, fare rules, changes, and related requests.",
          "Communicate with customers and partners to clarify information, follow up, and support issue resolution.",
          "Maintain accurate booking information, customer records, and supporting documentation."
        ]
      },
      {
        period: "2017 — 2020",
        role: "Customer Service & Property Client Support",
        type: "REAL ESTATE & CLIENT OPERATIONS",
        summary: "Responding to property enquiries, guiding clients through service steps, and following up as property transactions progress.",
        points: [
          "Responded to customer enquiries about property sales, rentals, availability and viewing arrangements, providing clear information and timely follow-up.",
          "Guided clients through transaction documentation requirements and kept them informed as property transactions progressed through closing stages.",
          "Contributed to at least three property transactions per month through client follow-up, documentation coordination and transaction support.",
          "Addressed client questions and documentation gaps, coordinating with colleagues and external stakeholders to keep customers updated."
        ]
      }
    ],
    languages: {
      kicker: "03 / LANGUAGES",
      titleA: "Language opens the door.",
      titleB: "Listening builds trust.",
      intro: "French is a core strength I can bring to customer support today. Mandarin Chinese is an active learning journey through the Confucius Institute.",
      items: [
        { short: "FR", name: "French", level: "C1 proficiency", caption: "A core professional strength", type: "primary" },
        { short: "中文", name: "Mandarin Chinese", level: "HSK 2 level", caption: "Confucius Institute course · currently learning", type: "learning" },
        { short: "EN", name: "English", level: "Fluent", caption: "Confident professional communication", type: "standard" },
        { short: "YO", name: "Yoruba", level: "Native", caption: "Local and community communication", type: "standard" }
      ],
      inProgress: "In progress",
      professionalStrength: "Professional strength",
      note: "Interested in opportunities supporting customers across language and cultural boundaries."
    },
    education: {
      kicker: "04 / EDUCATION & TRAINING",
      titleA: "Learning that supports",
      titleB: "better service.",
      intro: "A background in French education, complemented by aviation training and ongoing Mandarin study.",
      items: [
        { date: "2019 — 2023", title: "B.A.Ed. French Education", tag: "DEGREE" },
        { date: "2022", title: "Certificate in French Language", tag: "LANGUAGE" },
        { date: "2024", title: "Diploma in Airfare Ticketing & Reservation", tag: "AVIATION" },
        { date: "PROFESSIONAL COURSE", title: "Mandarin Chinese", tag: "IN PROGRESS" }
      ],
      certificateLabel: "ADDITIONAL CERTIFICATE",
      certificateTitle: "HRM & Customer Service"
    },
    leadership: {
      kicker: "05 / LEADERSHIP & SERVICE",
      titleA: "Leadership is",
      titleB: "service, too.",
      intro: "Volunteering and leadership experiences have strengthened my organisation, communication, and collaboration skills.",
      items: [
        { role: "Vice President", org: "National French Students Association · TASUED Chapter", year: "2023" },
        { role: "Regional Secretary", org: "Lions Club", year: "2023" },
        { role: "CDS Secretary", org: "NYSC · ICT & Education", year: "2025" }
      ]
    },
    download: {
      kicker: "KEEP MY DETAILS",
      titleA: "Let my experience",
      titleB: "do the talking.",
      intro: "Download my CV for a fuller view of my skills, experience, language profile, and training.",
      note: "Prepared for recruiters and hiring teams",
      pdf: "Download CV",
      pdfSub: "PDF · English version",
      word: "Editable CV",
      wordSub: "Word-compatible · English version",
      disclaimer: "The downloadable CV is currently provided in English. Please review it before submitting an application."
    },
    contact: {
      kicker: "LET'S CONNECT",
      titleA: "Let's make the",
      titleB: "next interaction count.",
      intro: "Open to customer service, customer experience, client support, and operations opportunities—remote, hybrid, or on-site, in Nigeria and internationally.",
      location: "Lagos, Nigeria · Open to global opportunities",
      panel: "GET IN TOUCH",
      email: "EMAIL",
      phone: "PHONE",
      send: "Send an email"
    },
    footer: { made: "Made with care.", back: "Back to top" }
  },

  fr: {
    htmlLang: "fr",
    pageTitle: "Aminat Abesin — Service client et expérience client",
    pageDescription: "Aminat Abesin est une professionnelle du service client, avec une expérience dans l’aviation, la logistique et l’immobilier, un niveau C1 en français et un apprentissage du mandarin en cours.",
    languageLabel: "Choisir la langue du portfolio",
    languageNames: { en: "Anglais", fr: "Français", zh: "Chinois" },
    navLabel: "Navigation principale",
    nav: { about: "À propos", experience: "Expérience", languages: "Langues", education: "Formation", leadership: "Engagement", contact: "Contact", talk: "Me contacter", getInTouch: "Prendre contact" },
    brandSubtitle: "Service client et expérience client",
    theme: { dark: "Sombre", light: "Clair", switchDark: "Passer au thème sombre", switchLight: "Passer au thème clair", toggle: "Changer de thème" },
    menu: { open: "Ouvrir le menu", close: "Fermer le menu" },
    hero: {
      eyebrow: "PROFESSIONNELLE DU SERVICE CLIENT · FRANÇAIS C1",
      titleA: "Créer de meilleures",
      titleB: "expériences client.",
      intro: "Professionnelle du service client, j’ai acquis de l’expérience dans l’aviation, la logistique et l’immobilier. J’accompagne les clients dans leurs demandes, réservations, réclamations et suivis, en privilégiant une communication claire et un service fiable. Je possède un niveau C1 en français et poursuis actuellement l’apprentissage du mandarin à l’Institut Confucius.",
      download: "Télécharger le CV (anglais)",
      explore: "Découvrir mon expérience",
      open: "À l’écoute d’opportunités dans le service client",
      location: "Lagos, Nigéria · À distance, hybride ou sur site",
      portraitAlt: "Portrait professionnel d’Aminat Abesin",
      portraitNote: "Service client · Expérience client",
      scroll: "FAITES DÉFILER POUR EXPLORER"
    },
    ribbon: [
      "Français · Niveau C1",
      "Anglais · Courant",
      "Yoruba · Langue maternelle",
      "Mandarin · Niveau HSK 2, en apprentissage"
    ],
    about: {
      kicker: "01 / À PROPOS",
      titleA: "Un bon service ne se limite pas à un script.",
      titleB: "Il se ressent.",
      intro: "Les clients se souviennent des personnes qui prennent leurs demandes en charge. J’adopte une approche calme face aux questions et aux réclamations, avec le souci du détail et la volonté de tenir chacun informé jusqu’à la prochaine étape.",
      strengths: [
        { title: "Relation client", text: "Une communication patiente et attentive, fondée sur la compréhension des besoins du client." },
        { title: "Gestion des réclamations", text: "Écouter avec attention, examiner les problèmes, assurer le suivi et transmettre les dossiers au bon moment." },
        { title: "Coordination du service", text: "Organiser les demandes, réservations, documents et relais entre interlocuteurs, du début à la fin." },
        { title: "Ouverture multilingue", text: "Français de niveau C1, apprentissage continu du mandarin, anglais et yoruba." }
      ],
      statsKicker: "L’EXPÉRIENCE EN CHIFFRES",
      statsTitleA: "Un service constant.",
      statsTitleB: "Un suivi rigoureux.",
      statOne: "Interactions clients traitées chaque jour dans l’aviation",
      statTwo: "Transactions immobilières accompagnées par mois",
      statNote: "Une communication claire, des dossiers précis et un suivi fiable."
    },
    experienceSection: {
      kicker: "02 / EXPÉRIENCE",
      titleA: "Des secteurs différents.",
      titleB: "La même attention.",
      intro: "Des réservations de voyage aux demandes liées aux livraisons et aux dossiers immobiliers, chaque expérience m’a montré l’importance d’une communication de qualité lorsque les clients ont besoin d’aide.",
      sideLabel: "MON PARCOURS",
      sideText: "Accompagnement client\nCoordination des demandes\nSuivi opérationnel",
      cvLink: "Voir le CV complet"
    },
    experience: [
      {
        period: "2026 — AUJOURD’HUI",
        role: "Service client et assistance logistique",
        type: "LOGISTIQUE ET SERVICE CLIENT",
        summary: "Répondre aux préoccupations des clients, traiter les réclamations de premier niveau et les tenir informés de l’avancement des expéditions et des incidents de service.",
        points: [
          "Traiter les réclamations relevant de mon périmètre et résoudre les problèmes, en transmettant à la direction les situations qui nécessitent son intervention.",
          "Communiquer les informations de suivi des expéditions et expliquer clairement l’avancement des livraisons ou les documents nécessaires.",
          "Tenir à jour les dossiers clients, les informations d’expédition et les suivis afin de faciliter la résolution des réclamations et la continuité du service."
        ]
      },
      {
        period: "2023 — 2026",
        role: "Service client et billetterie aérienne / réservations",
        type: "AVIATION ET SERVICES DE VOYAGE",
        summary: "Accompagner les clients et les agences de voyages dans leurs demandes, réservations et démarches liées à l’organisation de leurs déplacements.",
        points: [
          "Traiter environ 50 interactions clients par jour, répondre aux demandes et accompagner les réservations de billets.",
          "Entretenir les relations avec les agences de voyages et renseigner les clients sur les réservations, les conditions tarifaires, les modifications et les demandes associées.",
          "Échanger avec les clients et les partenaires pour clarifier les informations, assurer le suivi et contribuer à la résolution des problèmes.",
          "Tenir à jour les informations de réservation, les dossiers clients et les documents associés."
        ]
      },
      {
        period: "2017 — 2020",
        role: "Service client et accompagnement immobilier",
        type: "IMMOBILIER ET RELATION CLIENT",
        summary: "Répondre aux demandes immobilières, accompagner les clients dans les différentes étapes du service et assurer le suivi des transactions.",
        points: [
          "Répondre aux demandes concernant les ventes, locations, disponibilités et visites de biens, avec des informations claires et un suivi dans les délais.",
          "Expliquer aux clients les documents nécessaires aux transactions et les tenir informés de l’avancement jusqu’aux étapes finales.",
          "Contribuer à au moins trois transactions immobilières par mois grâce au suivi des clients, à la coordination des documents et à l’accompagnement des dossiers.",
          "Répondre aux questions des clients et combler les informations manquantes en coordination avec les collègues et les interlocuteurs externes."
        ]
      }
    ],
    languages: {
      kicker: "03 / LANGUES",
      titleA: "Les langues ouvrent des portes.",
      titleB: "L’écoute crée la confiance.",
      intro: "Le français est une compétence que je peux mobiliser dans le service client dès aujourd’hui. J’apprends actuellement le mandarin à l’Institut Confucius.",
      items: [
        { short: "FR", name: "Français", level: "Niveau C1", caption: "Compétence professionnelle clé", type: "primary" },
        { short: "中文", name: "Chinois mandarin", level: "Niveau HSK 2", caption: "Formation à l’Institut Confucius · apprentissage en cours", type: "learning" },
        { short: "EN", name: "Anglais", level: "Courant", caption: "Communication professionnelle", type: "standard" },
        { short: "YO", name: "Yoruba", level: "Langue maternelle", caption: "Communication locale et communautaire", type: "standard" }
      ],
      inProgress: "En cours",
      professionalStrength: "Atout professionnel",
      note: "Intéressée par les opportunités d’accompagnement de clients de langues et de cultures différentes."
    },
    education: {
      kicker: "04 / ÉTUDES ET FORMATION",
      titleA: "Des apprentissages au service",
      titleB: "d’une meilleure expérience client.",
      intro: "Une formation en pédagogie du français, complétée par une spécialisation dans la billetterie aérienne et l’apprentissage du mandarin.",
      items: [
        { date: "2019 — 2023", title: "B.A.Ed. en enseignement du français", tag: "DIPLÔME" },
        { date: "2022", title: "Certificat de langue française", tag: "LANGUE" },
        { date: "2024", title: "Diplôme en billetterie et réservation aériennes", tag: "AVIATION" },
        { date: "FORMATION PROFESSIONNELLE", title: "Chinois mandarin", tag: "EN COURS" }
      ],
      certificateLabel: "CERTIFICATION COMPLÉMENTAIRE",
      certificateTitle: "Gestion des ressources humaines et service client"
    },
    leadership: {
      kicker: "05 / LEADERSHIP ET ENGAGEMENT",
      titleA: "Le leadership, c’est",
      titleB: "aussi être au service des autres.",
      intro: "Mes expériences de bénévolat et de leadership ont renforcé mes capacités d’organisation, de communication et de collaboration.",
      items: [
        { role: "Vice-présidente", org: "National French Students Association · section TASUED", year: "2023" },
        { role: "Secrétaire régionale", org: "Lions Club", year: "2023" },
        { role: "Secrétaire CDS", org: "NYSC · TIC et éducation", year: "2025" }
      ]
    },
    download: {
      kicker: "MON CV",
      titleA: "Laissez mon expérience",
      titleB: "parler d’elle-même.",
      intro: "Téléchargez mon CV pour découvrir plus en détail mes compétences, mon expérience, mes langues et mes formations.",
      note: "Préparé pour les recruteurs et les équipes de recrutement",
      pdf: "Télécharger le CV",
      pdfSub: "PDF · version anglaise",
      word: "CV modifiable",
      wordSub: "Format compatible Word · version anglaise",
      disclaimer: "Le CV téléchargeable est actuellement disponible en anglais. Veuillez le relire avant toute candidature."
    },
    contact: {
      kicker: "ÉCHANGEONS",
      titleA: "Faisons de chaque",
      titleB: "échange une expérience positive.",
      intro: "Ouverte aux opportunités dans le service client, l’expérience client, l’assistance aux clients et les opérations — à distance, en mode hybride ou sur site, au Nigéria et à l’international.",
      location: "Lagos, Nigéria · Ouverte aux opportunités internationales",
      panel: "COORDONNÉES",
      email: "E-MAIL",
      phone: "TÉLÉPHONE",
      send: "Envoyer un e-mail"
    },
    footer: { made: "Réalisé avec soin.", back: "Retour en haut" }
  },

  zh: {
    htmlLang: "zh-CN",
    pageTitle: "Aminat Abesin — 客户服务与客户体验",
    pageDescription: "Aminat Abesin 是一名客户服务专业人士，拥有航空、物流和房地产行业经验，法语达到 C1 水平，并正在学习中文。",
    languageLabel: "选择作品集语言",
    languageNames: { en: "英语", fr: "法语", zh: "中文" },
    navLabel: "主导航",
    nav: { about: "关于我", experience: "工作经历", languages: "语言能力", education: "教育背景", leadership: "领导力", contact: "联系方式", talk: "联系我", getInTouch: "联系 Aminat" },
    brandSubtitle: "客户服务与客户体验",
    theme: { dark: "深色", light: "浅色", switchDark: "切换至深色模式", switchLight: "切换至浅色模式", toggle: "切换显示主题" },
    menu: { open: "打开菜单", close: "关闭菜单" },
    hero: {
      eyebrow: "客户服务专业人士 · 法语 C1",
      titleA: "创造更好的",
      titleB: "客户体验。",
      intro: "我是一名客户服务专业人士，拥有航空、物流和房地产行业的客户服务经验。我负责处理客户咨询、预订、投诉及后续跟进，注重清晰沟通与可靠服务。我具备法语 C1 水平，目前正在孔子学院继续学习中文。",
      download: "下载英文简历",
      explore: "查看工作经历",
      open: "欢迎客户服务相关工作机会",
      location: "尼日利亚拉各斯 · 远程、混合办公或现场办公",
      portraitAlt: "Aminat Abesin 的职业肖像",
      portraitNote: "客户服务 · 客户体验",
      scroll: "向下滚动，了解更多"
    },
    ribbon: [
      "法语 · C1 水平",
      "英语 · 流利",
      "约鲁巴语 · 母语",
      "中文（普通话）· HSK 2 学习阶段"
    ],
    about: {
      kicker: "01 / 关于我",
      titleA: "优质服务不只是照本宣科。",
      titleB: "更在于客户的真实感受。",
      intro: "客户会记住那些愿意主动负责的人。面对咨询和投诉时，我保持耐心与冷静，注重细节，并持续向客户说明进展，让他们清楚了解下一步安排。",
      strengths: [
        { title: "客户关怀", text: "耐心、友善地沟通，首先了解客户真正的需求。" },
        { title: "投诉处理", text: "认真倾听、调查问题、持续跟进，并在适当时机升级处理。" },
        { title: "服务协调", text: "有条理地协调客户请求、预订、文件及跨团队交接，确保流程顺畅。" },
        { title: "多语言沟通视角", text: "法语 C1 水平，持续学习中文，并能使用英语和约鲁巴语沟通。" }
      ],
      statsKicker: "工作成果一览",
      statsTitleA: "稳定可靠的服务。",
      statsTitleB: "认真负责的跟进。",
      statOne: "航空业务中每日处理的客户互动量",
      statTwo: "每月参与支持的房地产交易数量",
      statNote: "注重清晰沟通、准确记录和可靠跟进。"
    },
    experienceSection: {
      kicker: "02 / 工作经历",
      titleA: "不同行业。",
      titleB: "同样用心。",
      intro: "从机票预订到物流配送咨询，再到房地产文件跟进，每一段经历都让我更加理解：当客户需要帮助时，清晰沟通有多么重要。",
      sideLabel: "职业历程",
      sideText: "客户支持\n客户协调\n运营跟进",
      cvLink: "查看完整简历"
    },
    experience: [
      {
        period: "2026 — 至今",
        role: "客户服务与物流支持",
        type: "物流与客户服务",
        summary: "回应客户需求，处理一线投诉，并及时向客户更新货运进度及服务问题。",
        points: [
          "处理职责范围内的客户投诉并解决相关问题；需要管理层介入的事项及时上报。",
          "提供货运追踪信息，向客户清楚说明配送进度及所需文件。",
          "准确维护客户、货运和服务个案记录，支持投诉解决与持续客户跟进。"
        ]
      },
      {
        period: "2023 — 2026",
        role: "客户服务与机票预订",
        type: "航空与旅行服务",
        summary: "为客户及旅行代理提供咨询和预订支持，协助客户顺利了解并安排出行事项。",
        points: [
          "每天处理约 50 次客户互动，解答咨询并协助机票预订。",
          "维护旅行代理合作关系，并向客户说明预订信息、票价规则、行程变更及相关事项。",
          "与客户及合作伙伴沟通，核实信息、跟进请求并协助解决问题。",
          "准确维护预订信息、客户记录及相关文件。"
        ]
      },
      {
        period: "2017 — 2020",
        role: "客户服务与房地产客户支持",
        type: "房地产与客户运营",
        summary: "回应房地产咨询，协助客户了解服务流程，并在交易推进过程中持续跟进。",
        points: [
          "回复客户有关房产买卖、租赁、房源情况及看房安排的咨询，并及时提供清晰信息和后续跟进。",
          "向客户说明交易所需文件，并在交易推进至后续阶段时及时告知进展。",
          "通过客户跟进、文件协调和交易支持，每月至少参与支持三笔房地产交易。",
          "回应客户问题并补充缺失资料，与同事及外部相关方协调，及时向客户更新情况。"
        ]
      }
    ],
    languages: {
      kicker: "03 / 语言能力",
      titleA: "语言让沟通成为可能。",
      titleB: "倾听建立信任。",
      intro: "法语是我目前可直接用于客户服务工作的一项优势。中文仍在学习中，我通过孔子学院持续提升中文能力。",
      items: [
        { short: "FR", name: "法语", level: "C1 水平", caption: "核心专业优势", type: "primary" },
        { short: "中文", name: "中文（普通话）", level: "HSK 2 水平", caption: "孔子学院课程 · 学习中", type: "learning" },
        { short: "EN", name: "英语", level: "流利", caption: "能够进行专业沟通", type: "standard" },
        { short: "YO", name: "约鲁巴语", level: "母语", caption: "本地及社区沟通", type: "standard" }
      ],
      inProgress: "学习中",
      professionalStrength: "专业优势",
      note: "期待运用语言和跨文化沟通能力，为不同背景的客户提供支持。"
    },
    education: {
      kicker: "04 / 教育背景与培训",
      titleA: "持续学习，",
      titleB: "提升服务品质。",
      intro: "拥有法语教育背景，并接受过航空票务培训，目前也在持续学习中文。",
      items: [
        { date: "2019 — 2023", title: "法语教育学学士学位（B.A.Ed.）", tag: "学位" },
        { date: "2022", title: "法语语言证书", tag: "语言" },
        { date: "2024", title: "航空票务与预订文凭", tag: "航空" },
        { date: "专业课程", title: "中文（普通话）", tag: "学习中" }
      ],
      certificateLabel: "其他证书",
      certificateTitle: "人力资源管理与客户服务"
    },
    leadership: {
      kicker: "05 / 领导力与服务",
      titleA: "领导力，",
      titleB: "也意味着服务。",
      intro: "志愿服务和领导经历提升了我的组织协调、沟通及团队合作能力。",
      items: [
        { role: "副主席", org: "全国法语专业学生协会 · TASUED 分会", year: "2023" },
        { role: "地区秘书", org: "狮子会（Lions Club）", year: "2023" },
        { role: "CDS 秘书", org: "NYSC · 信息通信技术与教育", year: "2025" }
      ]
    },
    download: {
      kicker: "下载简历",
      titleA: "让我的经验",
      titleB: "为我发声。",
      intro: "下载简历，进一步了解我的技能、工作经历、语言能力和专业培训。",
      note: "面向招聘人员及招聘团队",
      pdf: "下载简历",
      pdfSub: "PDF · 英文版本",
      word: "可编辑简历",
      wordSub: "兼容 Word · 英文版本",
      disclaimer: "目前提供英文版可下载简历。正式投递前，请先检查简历内容。"
    },
    contact: {
      kicker: "欢迎联系",
      titleA: "让下一次",
      titleB: "客户互动更有价值。",
      intro: "欢迎客户服务、客户体验、客户支持及运营相关工作机会，可接受远程、混合办公或现场办公，也欢迎尼日利亚及国际机会。",
      location: "尼日利亚拉各斯 · 欢迎国际工作机会",
      panel: "联系方式",
      email: "电子邮箱",
      phone: "电话",
      send: "发送邮件"
    },
    footer: { made: "用心制作。", back: "返回顶部" }
  }
};


const rise = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] } }
};

function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div className={className} variants={rise}
      initial={reduceMotion ? false : "hidden"} whileInView="visible"
      viewport={{ once: true, amount: 0.16 }}
      transition={{ delay }}>
      {children}
    </motion.div>
  );
}

function buildPdf() {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 17, width = pageWidth - margin * 2;
  let y = 18;
  const purple = [83, 105, 96], coral = [130, 154, 145];
  const ink = [23, 43, 58], muted = [98, 112, 122];
  const ensure = (height = 8) => {
    if (y + height > pageHeight - 17) {
      doc.addPage(); y = 19;
      doc.setFillColor(...purple); doc.rect(margin, 10, 20, 1.4, "F");
      doc.setFillColor(...coral); doc.rect(margin + 23, 10, 8, 1.4, "F");
    }
  };
  const textBlock = (text, { size = 9.5, bold = false, color = ink, gap = 2.7, indent = 0 } = {}) => {
    doc.setFont("helvetica", bold ? "bold" : "normal"); doc.setFontSize(size); doc.setTextColor(...color);
    const lines = doc.splitTextToSize(text, width - indent);
    const lineHeight = size * 0.48; ensure(lines.length * lineHeight + gap);
    doc.text(lines, margin + indent, y); y += lines.length * lineHeight + gap;
  };
  const sectionTitle = (title) => {
    ensure(12); y += 2; doc.setFont("helvetica", "bold"); doc.setFontSize(10.5);
    doc.setTextColor(...purple); doc.text(title.toUpperCase(), margin, y);
    y += 2; doc.setFillColor(...coral); doc.rect(margin, y, 11, 1.1, "F"); y += 4.5;
  };
  const bullet = (text) => textBlock("- " + text, { size: 9, color: [68, 61, 81], indent: 1, gap: 2 });
  doc.setFillColor(...purple); doc.rect(0, 0, pageWidth, 4, "F");
  doc.setFillColor(...coral); doc.rect(0, 4, pageWidth * 0.25, 1.5, "F");
  textBlock(cv.name, { size: 22, bold: true, gap: 1.5 });
  textBlock(cv.title, { size: 9.3, bold: true, color: purple, gap: 2.5 });
  textBlock(cv.contact, { size: 8.2, color: muted, gap: 5 });
  sectionTitle("Professional summary"); textBlock(cv.summary, { size: 9.3, gap: 2 });
  sectionTitle("Core strengths"); cv.strengths.forEach(bullet);
  sectionTitle("Professional experience");
  experience.forEach((job) => {
    textBlock(job.role, { size: 10, bold: true, gap: 1 });
    textBlock(job.company + " | " + job.period, { size: 8.4, bold: true, color: purple, gap: 2 });
    job.points.forEach(bullet); y += 2;
  });
  sectionTitle("Education & professional training"); cv.education.forEach(bullet); bullet("HRM & Customer Service | Mastercard");
  sectionTitle("Languages"); cv.languages.forEach(bullet);
  sectionTitle("Leadership"); cv.leadership.forEach(bullet);
  for (let i = 1; i <= doc.getNumberOfPages(); i++) {
    doc.setPage(i); doc.setFontSize(7.5); doc.setTextColor(...muted);
    doc.text("AMINAT ABESIN · PROFESSIONAL PORTFOLIO", margin, pageHeight - 8);
    doc.text(i + " / " + doc.getNumberOfPages(), pageWidth - margin, pageHeight - 8, { align: "right" });
  }
  doc.save("Abesin_Oluwaseun_Aminat_Master_CV.pdf");
}

function downloadWord() {
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const list = (arr) => "<ul>" + arr.map((v) => "<li>" + esc(v) + "</li>").join("") + "</ul>";
  const jobs = experience.map((job) => "<h3>" + esc(job.role) + "</h3><p class='meta'>" + esc(job.company + " | " + job.period) + "</p>" + list(job.points)).join("");
  const html = `<!doctype html><html><head><meta charset="utf-8"><style>body{font-family:Arial,sans-serif;color:#172b3a;line-height:1.55;margin:34pt}h1{font-size:23pt;margin-bottom:3pt}h2{font-size:13pt;color:#536a60;border-bottom:1px solid #829a91;padding-bottom:4pt;margin-top:19pt}h3{font-size:11pt;margin:12pt 0 2pt}.meta{font-weight:bold;color:#536a60;font-size:9pt}p,li{font-size:10pt}ul{margin-top:4pt}.title{font-weight:bold;color:#536a60;letter-spacing:1pt;font-size:9pt}.muted{color:#61717b;font-size:9pt}</style></head><body><h1>${esc(cv.name)}</h1><p class="title">${esc(cv.title)}</p><p class="muted">${esc(cv.contact)}</p><h2>Professional Summary</h2><p>${esc(cv.summary)}</p><h2>Core Strengths</h2>${list(cv.strengths)}<h2>Professional Experience</h2>${jobs}<h2>Education &amp; Professional Training</h2>${list(cv.education.concat("HRM & Customer Service | Mastercard"))}<h2>Languages</h2>${list(cv.languages)}<h2>Leadership</h2>${list(cv.leadership)}<p>References available on request.</p></body></html>`;
  const blob = new Blob(["\ufeff", html], { type: "application/msword;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a"); a.href = url; a.download = "Abesin_Oluwaseun_Aminat_Master_CV.doc";
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}

function ButtonLink({ href, children, kind = "primary", ...props }) {
  return <a className={`button button--${kind}`} href={href} {...props}>{children}</a>;
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("aminat-theme") === "dark" ? "dark" : "light"; }
    catch { return "light"; }
  });
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem("aminat-language");
      return ["en", "fr", "zh"].includes(saved) ? saved : "en";
    } catch { return "en"; }
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, { stiffness: 110, damping: 25, mass: 0.25 });
  const year = useMemo(() => new Date().getFullYear(), []);
  const c = translations[language];
  const experienceItems = experience.map((job, index) => ({ ...job, ...c.experience[index] }));
  const languageItems = c.languages.items;
  const educationItems = education.map((item, index) => ({ ...item, ...c.education.items[index] }));
  const leadershipItems = c.leadership.items;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#141C24" : "#F7F6F2");
    try { localStorage.setItem("aminat-theme", theme); } catch {}
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = c.htmlLang;
    document.title = c.pageTitle;
    document.querySelector('meta[name="description"]')?.setAttribute("content", c.pageDescription);
    try { localStorage.setItem("aminat-language", language); } catch {}
  }, [language, c.htmlLang, c.pageTitle, c.pageDescription]);

  useEffect(() => {
    const sections = ["home", "about", "experience", "languages", "education", "leadership", "download-cv", "contact"]
      .map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.25, 0.5] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    ["about", c.nav.about],
    ["experience", c.nav.experience],
    ["languages", c.nav.languages],
    ["education", c.nav.education],
    ["leadership", c.nav.leadership],
  ];
  const closeMenu = () => setMenuOpen(false);
  const languageChoices = [["en", "EN"], ["fr", "FR"], ["zh", "中文"]];

  const LanguageSwitcher = ({ mobile = false }) => (
    <div className={mobile ? "language-switch language-switch--mobile" : "language-switch"} role="group" aria-label={c.languageLabel}>
      {languageChoices.map(([code, label]) => (
        <button
          key={code}
          type="button"
          className={language === code ? "language-choice is-active" : "language-choice"}
          aria-label={c.languageNames[code]}
          aria-pressed={language === code}
          onClick={() => { setLanguage(code); closeMenu(); }}
        >
          {label}
        </button>
      ))}
    </div>
  );

  return (
    <div className="app-shell">
      <motion.div className="reading-progress" style={{ scaleX: progressScale }} />
      <header className="site-header">
        <nav className="nav container" aria-label={c.navLabel}>
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Aminat Abesin home">
            <span className="brand-mark">AA<span>.</span></span>
            <span className="brand-name">Aminat Abesin<small>{c.brandSubtitle}</small></span>
          </a>
          <div className="desktop-nav">
            {navItems.map(([id, label]) => (
              <a key={id} className={activeSection === id ? "nav-link is-active" : "nav-link"} href={"#" + id}>{label}</a>
            ))}
            <LanguageSwitcher />
            <button className="theme-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label={theme === "light" ? c.theme.switchDark : c.theme.switchLight}>
              {theme === "light" ? <Moon size={17}/> : <Sun size={17}/>}<span>{theme === "light" ? c.theme.dark : c.theme.light}</span>
            </button>
            <a className="nav-contact" href="#contact">{c.nav.talk} <ArrowUpRight size={16}/></a>
          </div>
          <div className="mobile-actions">
            <LanguageSwitcher mobile />
            <button className="theme-toggle theme-toggle--mobile" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label={c.theme.toggle}>
              {theme === "light" ? <Moon size={18}/> : <Sun size={18}/>}
            </button>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? c.menu.close : c.menu.open} aria-expanded={menuOpen}>
              {menuOpen ? <X size={21}/> : <Menu size={21}/>}
            </button>
          </div>
        </nav>
        <AnimatePresence>
          {menuOpen && <motion.div className="mobile-nav" initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}} transition={{duration:.22}}>
            {navItems.map(([id, label]) => <a key={id} href={"#" + id} onClick={closeMenu}>{label}<ArrowUpRight size={16}/></a>)}
            <a href="#contact" onClick={closeMenu}>{c.nav.getInTouch}<ArrowUpRight size={16}/></a>
          </motion.div>}
        </AnimatePresence>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-orbit hero-orbit--one" aria-hidden="true"/>
          <div className="hero-orbit hero-orbit--two" aria-hidden="true"/>
          <div className="hero-grid container">
            <div className="hero-copy">
              <motion.div initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.5}} className="eyebrow"><span className="eyebrow-dot"/> {c.hero.eyebrow}</motion.div>
              <motion.h1 initial={reduceMotion ? false : {opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.65,delay:.08}} className="hero-title">{c.hero.titleA}<br/><span>{c.hero.titleB}</span></motion.h1>
              <motion.p initial={reduceMotion ? false : {opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.65,delay:.15}} className="hero-intro">{c.hero.intro}</motion.p>
              <motion.div initial={reduceMotion ? false : {opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.65,delay:.22}} className="hero-actions">
                <button className="button button--dark" onClick={buildPdf}><Download size={17}/> {c.hero.download} <ArrowDownRight size={17}/></button>
                <ButtonLink href="#experience" kind="outline">{c.hero.explore} <ArrowDown size={16}/></ButtonLink>
              </motion.div>
              <div className="hero-signals"><span><span className="signal-dot"/>{c.hero.open}</span><span><MapPin size={15}/>{c.hero.location}</span></div>
            </div>
            <motion.div className="hero-visual" initial={reduceMotion ? false : {opacity:0,scale:.94,y:18}} animate={{opacity:1,scale:1,y:0}} transition={{duration:.75,delay:.12}}>
              <div className="portrait-frame"><img src="/assets/aminat-profile.webp" alt={c.hero.portraitAlt} fetchPriority="high"/><span className="portrait-sticker">CLIENT<br/>SUPPORT <BriefcaseBusiness size={16}/></span></div>
              <motion.div className="floating-card floating-card--top" animate={reduceMotion ? {} : {y:[0,-7,0]}} transition={{duration:4,repeat:Infinity,ease:"easeInOut"}}><span className="mini-icon mini-icon--mint"><Languages size={18}/></span><span><strong>{language === "zh" ? "法语 C1" : language === "fr" ? "Français C1" : "French C1"}</strong><small>{language === "zh" ? "多语言服务" : language === "fr" ? "Service multilingue" : "Multilingual service"}</small></span></motion.div>
              <motion.div className="floating-card floating-card--bottom" animate={reduceMotion ? {} : {y:[0,6,0]}} transition={{duration:4.5,repeat:Infinity,ease:"easeInOut"}}><span className="mini-icon mini-icon--yellow"><UserRoundCheck size={18}/></span><span><strong>50+ {language === "zh" ? "次客户互动" : language === "fr" ? "interactions clients" : "interactions"}</strong><small>{language === "zh" ? "航空业务每日处理" : language === "fr" ? "Traitées chaque jour dans l’aviation" : "Handled per day in aviation"}</small></span></motion.div>
              <div className="portrait-note">{c.hero.portraitNote}</div>
            </motion.div>
          </div>
          <div className="hero-bottom container"><span>{c.hero.scroll}</span><span className="hero-bottom-line"/><span>01 — 05</span></div>
        </section>

        <section className="language-ribbon" aria-label={c.languages.kicker}>
          <div className="ribbon-track">
            <div className="ribbon-set">
              {c.ribbon.map((label, index) => <span key={label}><b>{["FR", "EN", "YO", "中文"][index]}</b> {label}</span>)}
            </div>
          </div>
        </section>

        <section className="section section-about" id="about">
          <div className="container">
            <Reveal className="section-intro"><div><span className="section-kicker">{c.about.kicker}</span><h2>{c.about.titleA}<br/><span>{c.about.titleB}</span></h2></div><p>{c.about.intro}</p></Reveal>
            <div className="strength-grid">
              {c.about.strengths.map((item,index)=>(
                <Reveal key={index} delay={index*.07}>
                  <article className={"strength-card strength-card--" + (index + 1)}>
                    <div className="strength-card-top"><span className="strength-number">0{index+1}</span><span className="strength-icon">{index===0?<UserRoundCheck size={22}/>:index===1?<ShieldCheck size={22}/>:index===2?<BriefcaseBusiness size={22}/>:<Languages size={22}/>}</span></div>
                    <h3>{item.title}</h3><p>{item.text}</p><ArrowUpRight className="card-arrow" size={18}/>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal className="stats-panel">
              <div className="stats-intro"><span className="section-kicker">{c.about.statsKicker}</span><h3>{c.about.statsTitleA}<br/>{c.about.statsTitleB}</h3></div>
              <div className="stat"><strong>50<span>+</span></strong><p>{c.about.statOne}</p></div>
              <div className="stat"><strong>3<span>+</span></strong><p>{c.about.statTwo}</p></div>
              <div className="stat stat-note"><CheckCircle2 size={20}/><p>{c.about.statNote}</p></div>
            </Reveal>
          </div>
        </section>

        <section className="section section-experience" id="experience">
          <div className="container">
            <Reveal className="section-intro section-intro--experience"><div><span className="section-kicker">{c.experienceSection.kicker}</span><h2>{c.experienceSection.titleA}<br/><span>{c.experienceSection.titleB}</span></h2></div><p>{c.experienceSection.intro}</p></Reveal>
            <div className="experience-layout">
              <div className="experience-side"><span className="experience-side-label">{c.experienceSection.sideLabel}</span><div className="experience-side-line"/><p>{c.experienceSection.sideText}</p><a href="#download-cv" className="text-link">{c.experienceSection.cvLink} <ArrowUpRight size={16}/></a></div>
              <div className="experience-list">{experienceItems.map((job,index)=><Reveal key={job.number} delay={index*.08}><article className="experience-item"><div className="experience-meta"><span>{job.period}</span><span>{job.number} / 03</span></div><div className="experience-body"><span className="experience-type">{job.type}</span><h3>{job.role}</h3><div className="experience-company">{job.company}</div><p className="experience-summary">{job.summary}</p><ul>{job.points.map(point=><li key={point}>{point}</li>)}</ul></div></article></Reveal>)}</div>
            </div>
          </div>
        </section>

        <section className="section section-languages" id="languages">
          <div className="container">
            <Reveal className="section-intro"><div><span className="section-kicker">{c.languages.kicker}</span><h2>{c.languages.titleA}<br/><span>{c.languages.titleB}</span></h2></div><p>{c.languages.intro}</p></Reveal>
            <div className="language-grid">{languageItems.map((lang,index)=><Reveal key={lang.short} delay={index*.06}><article className={"language-card language-card--" + lang.type}><div className="language-card-head"><span className="language-short">{lang.short}</span><span className="language-mark">0{index+1}</span></div><h3>{lang.name}</h3><strong>{lang.level}</strong><p>{lang.caption}</p>{lang.type==="learning"&&<span className="learning-chip"><span/>{c.languages.inProgress}</span>}{lang.type==="primary"&&<span className="primary-chip">{c.languages.professionalStrength} <ArrowUpRight size={13}/></span>}</article></Reveal>)}</div>
            <div className="language-footnote"><span className="footnote-icon"><Globe2 size={19}/></span><p>{c.languages.note}</p><span className="footnote-mark">多语言 · Multilingual</span></div>
          </div>
        </section>

        <section className="section section-education" id="education">
          <div className="container">
            <Reveal className="section-intro"><div><span className="section-kicker">{c.education.kicker}</span><h2>{c.education.titleA}<br/><span>{c.education.titleB}</span></h2></div><p>{c.education.intro}</p></Reveal>
            <div className="education-grid">{educationItems.map((item,index)=><Reveal key={item.title}><article className="education-card"><div className="education-top"><span>{item.date}</span><span className="education-tag">{item.tag}</span></div><div className="education-dot"/><h3>{item.title}</h3><p>{item.place}</p></article></Reveal>)}</div>
            <Reveal className="certificate-bar"><div className="certificate-mark"><ShieldCheck size={22}/></div><div><span>{c.education.certificateLabel}</span><strong>{c.education.certificateTitle}</strong><p>Mastercard</p></div><ArrowUpRight size={19} className="certificate-arrow"/></Reveal>
          </div>
        </section>

        <section className="section section-leadership" id="leadership">
          <div className="container leadership-layout"><Reveal><span className="section-kicker">{c.leadership.kicker}</span><h2>{c.leadership.titleA}<br/><span>{c.leadership.titleB}</span></h2><p className="leadership-copy">{c.leadership.intro}</p></Reveal><div className="leadership-list">{leadershipItems.map((item,index)=><Reveal key={item.role} delay={index*.07}><article className="leadership-row"><span className="leadership-no">0{index+1}</span><div><h3>{item.role}</h3><p>{item.org}</p></div><span className="leadership-year">{item.year}</span></article></Reveal>)}</div></div>
        </section>

        <section className="section section-download" id="download-cv">
          <div className="container download-card">
            <div className="download-copy"><span className="section-kicker">{c.download.kicker}</span><h2>{c.download.titleA}<br/><span>{c.download.titleB}</span></h2><p>{c.download.intro}</p><div className="download-note"><ShieldCheck size={17}/>{c.download.note}</div></div>
            <div className="download-options">
              <button className="download-option download-option--primary" onClick={buildPdf}><span className="download-file"><span>PDF</span><Download size={18}/></span><span className="download-option-text"><strong>{c.download.pdf}</strong><small>{c.download.pdfSub}</small></span><ArrowUpRight size={18}/></button>
              <button className="download-option" onClick={downloadWord}><span className="download-file download-file--word"><span>DOC</span><Download size={18}/></span><span className="download-option-text"><strong>{c.download.word}</strong><small>{c.download.wordSub}</small></span><ArrowUpRight size={18}/></button>
              <p className="download-disclaimer">{c.download.disclaimer}</p>
            </div>
          </div>
        </section>

        <section className="section section-contact" id="contact">
          <div className="container contact-layout">
            <Reveal className="contact-copy"><span className="section-kicker">{c.contact.kicker}</span><h2>{c.contact.titleA}<br/><span>{c.contact.titleB}</span></h2><p>{c.contact.intro}</p><div className="contact-location"><MapPin size={16}/>{c.contact.location}</div></Reveal>
            <Reveal className="contact-panel" delay={.08}><span className="contact-panel-kicker">{c.contact.panel}</span><a className="contact-row" href="mailto:aminatabesin523@gmail.com"><span className="contact-row-icon"><Mail size={19}/></span><span><small>{c.contact.email}</small><strong>aminatabesin523@gmail.com</strong></span><ArrowUpRight size={17}/></a><a className="contact-row" href="tel:+2349162070665"><span className="contact-row-icon"><Phone size={19}/></span><span><small>{c.contact.phone}</small><strong>+234 916 207 0665</strong></span><ArrowUpRight size={17}/></a><a className="contact-send" href="mailto:aminatabesin523@gmail.com?subject=Customer%20Service%20Opportunity">{c.contact.send} <Send size={17}/></a></Reveal>
          </div>
        </section>
      </main>
      <footer className="site-footer"><div className="container footer-inner"><a className="brand footer-brand" href="#home"><span className="brand-mark">AA<span>.</span></span><span className="brand-name">Aminat Abesin<small>{c.brandSubtitle}</small></span></a><span>© {year} Aminat Abesin. {c.footer.made}</span><a href="#home" className="back-top">{c.footer.back} ↑</a></div></footer>
    </div>
  );
}