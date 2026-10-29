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
    period: "2026 — PRESENT", number: "01", role: "Administrative Assistant",
    company: "Magabby Logistics", type: "LOGISTICS & CUSTOMER CARE",
    summary: "Helping customers get answers, keeping records accurate, and making sure service issues do not fall through the cracks.",
    points: [
      "Handle customer complaints and resolve issues within my authority, escalating matters that need management involvement.",
      "Support shipment tracking and documentation updates while keeping customers informed.",
      "Maintain organised transaction and client records and support smooth day-to-day operations."
    ]
  },
  {
    period: "2023 — 2026", number: "02", role: "Airfare Ticketing & Reservations / Customer Support",
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
    period: "2017 — 2020", number: "03", role: "Administrative Assistant",
    company: "TUNEXWORLD Homes and Properties", type: "REAL ESTATE & CLIENT OPERATIONS",
    summary: "Coordinating the paperwork and client follow-up that help property transactions keep moving.",
    points: [
      "Managed client records, transaction paperwork, and administrative documentation.",
      "Followed up with clients and supported property transactions through the closing process.",
      "Contributed to coordinating at least three property transactions per month alongside other team members.",
      "Coordinated operational tasks and communicated with internal and external stakeholders."
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
  summary: "Customer service and client operations professional with experience across aviation, logistics, and real estate. Handles customer enquiries, reservations, complaints, travel-agent relationships, transaction paperwork, and client follow-up. French C1 proficiency with ongoing Mandarin Chinese training at HSK 2 level through the Confucius Institute.",
  strengths: [
    "Customer support and client relations",
    "Complaint handling, escalation, and issue resolution",
    "Ticketing, reservations, fare rules, and travel-agent coordination",
    "Client follow-up, property transaction paperwork, and documentation",
    "Customer records, administrative support, and operational coordination",
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
  const purple = [105, 61, 224], coral = [250, 99, 76];
  const ink = [35, 27, 49], muted = [105, 97, 121];
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
  const html = `<!doctype html><html><head><meta charset="utf-8"><style>body{font-family:Arial,sans-serif;color:#251a32;line-height:1.45;margin:34pt}h1{font-size:23pt;margin-bottom:3pt}h2{font-size:13pt;color:#6e38e8;border-bottom:2px solid #ff6248;padding-bottom:4pt;margin-top:19pt}h3{font-size:11pt;margin:12pt 0 2pt}.meta{font-weight:bold;color:#6e38e8;font-size:9pt}p,li{font-size:10pt}ul{margin-top:4pt}.title{font-weight:bold;color:#6e38e8;letter-spacing:1pt;font-size:9pt}.muted{color:#70647a;font-size:9pt}</style></head><body><h1>${esc(cv.name)}</h1><p class="title">${esc(cv.title)}</p><p class="muted">${esc(cv.contact)}</p><h2>Professional Summary</h2><p>${esc(cv.summary)}</p><h2>Core Strengths</h2>${list(cv.strengths)}<h2>Professional Experience</h2>${jobs}<h2>Education &amp; Professional Training</h2>${list(cv.education.concat("HRM & Customer Service | Mastercard"))}<h2>Languages</h2>${list(cv.languages)}<h2>Leadership</h2>${list(cv.leadership)}<p>References available on request.</p></body></html>`;
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
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, { stiffness: 110, damping: 25, mass: 0.25 });
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#15131d" : "#fffaf3");
    try { localStorage.setItem("aminat-theme", theme); } catch {}
  }, [theme]);

  useEffect(() => {
    const sections = ["home", "about", "experience", "languages", "education", "contact"]
      .map((id) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActiveSection(visible.target.id);
    }, { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.25, 0.5] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navItems = [["about", "About"], ["experience", "Experience"], ["languages", "Languages"], ["education", "Education"]];
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app-shell">
      <motion.div className="reading-progress" style={{ scaleX: progressScale }} />
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Aminat Abesin home">
            <span className="brand-mark">AA<span>.</span></span>
            <span className="brand-name">Aminat Abesin<small>Customer experience &amp; operations</small></span>
          </a>
          <div className="desktop-nav">
            {navItems.map(([id, label]) => <a key={id} className={activeSection === id ? "nav-link is-active" : "nav-link"} href={`#${id}`}>{label}</a>)}
            <button className="theme-toggle" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}>
              {theme === "light" ? <Moon size={17}/> : <Sun size={17}/>}<span>{theme === "light" ? "Dark" : "Light"}</span>
            </button>
            <a className="nav-contact" href="#contact">Let's talk <ArrowUpRight size={16}/></a>
          </div>
          <div className="mobile-actions">
            <button className="theme-toggle theme-toggle--mobile" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label="Toggle colour theme">
              {theme === "light" ? <Moon size={18}/> : <Sun size={18}/>}
            </button>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
              {menuOpen ? <X size={21}/> : <Menu size={21}/>}
            </button>
          </div>
        </nav>
        <AnimatePresence>
          {menuOpen && <motion.div className="mobile-nav" initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}} transition={{duration:.22}}>
            {navItems.map(([id,label]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}<ArrowUpRight size={16}/></a>)}
            <a href="#contact" onClick={closeMenu}>Get in touch<ArrowUpRight size={16}/></a>
          </motion.div>}
        </AnimatePresence>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-orbit hero-orbit--one" aria-hidden="true"/>
          <div className="hero-orbit hero-orbit--two" aria-hidden="true"/>
          <div className="hero-grid container">
            <div className="hero-copy">
              <motion.div initial={reduceMotion ? false : {opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:.5}} className="eyebrow"><span className="eyebrow-dot"/> CUSTOMER SERVICE · CLIENT SUPPORT · OPERATIONS</motion.div>
              <motion.h1 initial={reduceMotion ? false : {opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.65,delay:.08}} className="hero-title">Customer Service<br/><span>&amp; Client Operations</span></motion.h1>
              <motion.p initial={reduceMotion ? false : {opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.65,delay:.15}} className="hero-intro">Customer service and client operations professional with experience across aviation, logistics, and real estate. Skilled in handling customer enquiries, managing ticket reservations, coordinating with travel agents, resolving complaints, maintaining documentation, and following up with clients. Offers C1 French proficiency and ongoing Mandarin Chinese training through the Confucius Institute.</motion.p>
              <motion.div initial={reduceMotion ? false : {opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:.65,delay:.22}} className="hero-actions">
                <button className="button button--dark" onClick={buildPdf}><Download size={17}/> Download my CV <ArrowDownRight size={17}/></button>
                <ButtonLink href="#experience" kind="outline">Explore my work <ArrowDown size={16}/></ButtonLink>
              </motion.div>
              <div className="hero-signals"><span><span className="signal-dot"/>Open to customer service opportunities</span><span><MapPin size={15}/> Lagos, Nigeria · Remote, hybrid &amp; on-site</span></div>
            </div>
            <motion.div className="hero-visual" initial={reduceMotion ? false : {opacity:0,scale:.94,y:18}} animate={{opacity:1,scale:1,y:0}} transition={{duration:.75,delay:.12}}>
              <div className="portrait-frame"><img src="/assets/aminat-profile.webp" alt="Professional portrait of Aminat Abesin" fetchPriority="high"/><span className="portrait-sticker">CLIENT<br/>SUPPORT <BriefcaseBusiness size={16}/></span></div>
              <motion.div className="floating-card floating-card--top" animate={reduceMotion ? {} : {y:[0,-7,0]}} transition={{duration:4,repeat:Infinity,ease:"easeInOut"}}><span className="mini-icon mini-icon--mint"><Languages size={18}/></span><span><strong>French C1</strong><small>Multilingual service</small></span></motion.div>
              <motion.div className="floating-card floating-card--bottom" animate={reduceMotion ? {} : {y:[0,6,0]}} transition={{duration:4.5,repeat:Infinity,ease:"easeInOut"}}><span className="mini-icon mini-icon--yellow"><UserRoundCheck size={18}/></span><span><strong>50+ interactions</strong><small>Handled per day in aviation</small></span></motion.div>
              <div className="portrait-note">Customer service · Client operations</div>
            </motion.div>
          </div>
          <div className="hero-bottom container"><span>SCROLL TO EXPLORE</span><span className="hero-bottom-line"/><span>01 — 05</span></div>
        </section>

        <section className="language-ribbon" aria-label="Language overview">
          <div className="ribbon-track">
            {[0,1].map((copy) => <div className="ribbon-set" key={copy} aria-hidden={copy===1 ? "true" : undefined}>
              <span><b>FR</b> French · C1 proficiency</span><i>✳</i><span><b>EN</b> English · Fluent</span><i>✳</i><span><b>YO</b> Yoruba · Native</span><i>✳</i><span><b>中文</b> Mandarin · HSK 2 learning</span><i>✳</i>
            </div>)}
          </div>
        </section>

        <section className="section section-about" id="about">
          <div className="container">
            <Reveal className="section-intro"><div><span className="section-kicker">01 / ABOUT ME</span><h2>Good service isn't a script.<br/><span>It's how people feel.</span></h2></div><p>Customers remember when someone takes ownership. I bring a calm approach to questions and complaints, attention to detail, and a commitment to keeping people informed until the next step is clear.</p></Reveal>
            <div className="strength-grid">
              {strengths.map((item,index)=>{const Icon=item.icon;return <Reveal key={item.no} delay={index*.07}><article className={`strength-card strength-card--${index+1}`}><div className="strength-card-top"><span className="strength-number">{item.no}</span><span className="strength-icon"><Icon size={22}/></span></div><h3>{item.title}</h3><p>{item.text}</p><ArrowUpRight className="card-arrow" size={18}/></article></Reveal>;})}
            </div>
            <Reveal className="stats-panel"><div className="stats-intro"><span className="section-kicker">THE WORK IN NUMBERS</span><h3>Steady service.<br/>Careful follow-through.</h3></div><div className="stat"><strong>50<span>+</span></strong><p>Customer interactions<br/>handled per day in aviation</p></div><div className="stat"><strong>3<span>+</span></strong><p>Property transactions<br/>supported per month</p></div><div className="stat stat-note"><Sparkles size={20}/><p>Focused on clear communication, accurate records, and reliable follow-up.</p></div></Reveal>
          </div>
        </section>

        <section className="section section-experience" id="experience">
          <div className="container">
            <Reveal className="section-intro section-intro--experience"><div><span className="section-kicker">02 / EXPERIENCE</span><h2>Different industries.<br/><span>The same care.</span></h2></div><p>From travel bookings to shipment concerns and property paperwork, each role has taught me how much good communication matters when people need help.</p></Reveal>
            <div className="experience-layout">
              <div className="experience-side"><span className="experience-side-label">MY JOURNEY</span><div className="experience-side-line"/><p>Customer support<br/>Client coordination<br/>Operational follow-through</p><a href="#download-cv" className="text-link">Get the full CV <ArrowUpRight size={16}/></a></div>
              <div className="experience-list">{experience.map((job,index)=><Reveal key={job.number} delay={index*.08}><article className="experience-item"><div className="experience-meta"><span>{job.period}</span><span>{job.number} / 03</span></div><div className="experience-body"><span className="experience-type">{job.type}</span><h3>{job.role}</h3><div className="experience-company">{job.company}</div><p className="experience-summary">{job.summary}</p><ul>{job.points.map(point=><li key={point}>{point}</li>)}</ul></div></article></Reveal>)}</div>
            </div>
          </div>
        </section>

        <section className="section section-languages" id="languages">
          <div className="container">
            <Reveal className="section-intro"><div><span className="section-kicker">03 / LANGUAGES</span><h2>Language opens the door.<br/><span>Listening builds trust.</span></h2></div><p>French is a core strength I can bring to customer support today. Mandarin Chinese is an active learning journey through the Confucius Institute.</p></Reveal>
            <div className="language-grid">{languages.map((lang,index)=><Reveal key={lang.short} delay={index*.06}><article className={`language-card language-card--${lang.type}`}><div className="language-card-head"><span className="language-short">{lang.short}</span><span className="language-mark">{lang.mark}</span></div><h3>{lang.name}</h3><strong>{lang.level}</strong><p>{lang.caption}</p>{lang.type==="learning"&&<span className="learning-chip"><span/> In progress</span>}{lang.type==="primary"&&<span className="primary-chip">Professional strength <ArrowUpRight size={13}/></span>}</article></Reveal>)}</div>
            <div className="language-footnote"><span className="footnote-icon"><Globe2 size={19}/></span><p>Interested in opportunities supporting customers across language and cultural boundaries.</p><span className="footnote-mark">多语言 · Multilingual</span></div>
          </div>
        </section>

        <section className="section section-education" id="education">
          <div className="container">
            <Reveal className="section-intro"><div><span className="section-kicker">04 / EDUCATION & TRAINING</span><h2>Learning that supports<br/><span>better service.</span></h2></div><p>A background in French education, complemented by aviation training and ongoing Mandarin study.</p></Reveal>
            <div className="education-grid">{education.map((item,index)=><Reveal key={item.title} delay={index*.06}><article className="education-card"><div className="education-top"><span>{item.date}</span><span className="education-tag">{item.tag}</span></div><div className="education-dot"/><h3>{item.title}</h3><p>{item.place}</p></article></Reveal>)}</div>
            <Reveal className="certificate-bar"><div className="certificate-mark"><ShieldCheck size={22}/></div><div><span>ADDITIONAL CERTIFICATE</span><strong>HRM & Customer Service</strong><p>Mastercard</p></div><ArrowUpRight size={19} className="certificate-arrow"/></Reveal>
          </div>
        </section>

        <section className="section section-leadership" id="leadership">
          <div className="container leadership-layout"><Reveal><span className="section-kicker">05 / LEADERSHIP & SERVICE</span><h2>Leadership is<br/><span>service, too.</span></h2><p className="leadership-copy">Volunteering and leadership experiences have strengthened my organisation, communication, and collaboration skills.</p></Reveal><div className="leadership-list">{leadership.map((item,index)=><Reveal key={item.role} delay={index*.07}><article className="leadership-row"><span className="leadership-no">0{index+1}</span><div><h3>{item.role}</h3><p>{item.org}</p></div><span className="leadership-year">{item.year}</span></article></Reveal>)}</div></div>
        </section>

        <section className="section section-download" id="download-cv">
          <div className="container download-card">
            <div className="download-copy"><span className="section-kicker">KEEP MY DETAILS</span><h2>Let my experience<br/><span>do the talking.</span></h2><p>Download my CV for a fuller view of my skills, experience, language profile, and training.</p><div className="download-note"><ShieldCheck size={17}/> Prepared for recruiters and hiring teams</div></div>
            <div className="download-options">
              <button className="download-option download-option--primary" onClick={buildPdf}><span className="download-file"><span>PDF</span><Download size={18}/></span><span className="download-option-text"><strong>Download CV</strong><small>PDF · ready to share</small></span><ArrowUpRight size={18}/></button>
              <button className="download-option" onClick={downloadWord}><span className="download-file download-file--word"><span>DOC</span><Download size={18}/></span><span className="download-option-text"><strong>Editable CV</strong><small>Word-compatible document</small></span><ArrowUpRight size={18}/></button>
              <p className="download-disclaimer">CV content is generated from the information shown on this site. Please review before submitting an application.</p>
            </div>
          </div>
        </section>

        <section className="section section-contact" id="contact">
          <div className="container contact-layout">
            <Reveal className="contact-copy"><span className="section-kicker">LET'S CONNECT</span><h2>Let's make the<br/><span>next interaction count.</span></h2><p>Open to customer service, customer experience, client support, and operations opportunities—remote, hybrid, or on-site, in Nigeria and internationally.</p><div className="contact-location"><MapPin size={16}/> Lagos, Nigeria · Open to global opportunities</div></Reveal>
            <Reveal className="contact-panel" delay={.08}><span className="contact-panel-kicker">GET IN TOUCH</span><a className="contact-row" href="mailto:aminatabesin523@gmail.com"><span className="contact-row-icon"><Mail size={19}/></span><span><small>EMAIL</small><strong>aminatabesin523@gmail.com</strong></span><ArrowUpRight size={17}/></a><a className="contact-row" href="tel:+2349162070665"><span className="contact-row-icon"><Phone size={19}/></span><span><small>PHONE</small><strong>+234 916 207 0665</strong></span><ArrowUpRight size={17}/></a><a className="contact-send" href="mailto:aminatabesin523@gmail.com?subject=Customer%20Service%20Opportunity">Send an email <Send size={17}/></a></Reveal>
          </div>
        </section>
      </main>
      <footer className="site-footer"><div className="container footer-inner"><a className="brand footer-brand" href="#home"><span className="brand-mark">AA<span>.</span></span><span className="brand-name">Aminat Abesin<small>Customer experience &amp; operations</small></span></a><span>© {year} Aminat Abesin. Made with care.</span><a href="#home" className="back-top">Back to top ↑</a></div></footer>
    </div>
  );
}
