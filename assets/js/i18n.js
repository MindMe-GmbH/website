/* =========================================================================
   MindMe! — i18n dictionaries
   -------------------------------------------------------------------------
   EN  = real placeholder copy (English is needed anyway; refine before launch).
   DE / IT inherit EN, then override only the CHROME (nav, buttons, form
   labels, footer) with confident standard UI terms.
   >>> BODY COPY in DE / IT is intentionally left as the English fallback. <<<
   Antonino supplies native German (tightened) and Italian (written natively).
   A "translation pending" notice bar (see index.html) shows while DE/IT body
   copy is outstanding — DO NOT machine-translate the body strings here.
   Strings ending in keys listed in I18N_HTML may contain inline markup.
   ========================================================================= */

const I18N_HTML = new Set(["hero.title"]);   // keys rendered as HTML, not text

const EN = {
  "nav.about":   "About",
  "nav.concept": "Concept",
  "nav.team":    "Team",
  "nav.contact": "Contact",

  "hero.kicker": "10+ YEARS OF NEUROSCIENCE RESEARCH",
  "hero.title":  'The cognitive enrichment <span class="accent">platform.</span>',
  "hero.sub":    "A touchscreen platform for cognitive and behavioural science — built on more than a decade of neuroscience research.",
  "hero.cta1":   "Apply for the beta",
  "hero.cta2":   "Contact us",

  "about.eyebrow": "What MindMe! is",
  "about.title":   "Rigorous science, on a screen an animal actually wants to use.",
  "about.p1":      "MindMe! is a touchscreen-based cognitive enrichment and behavioural platform. It turns rigorous neuroscience into self-paced, screen-based tasks that animals engage with on their own terms.",
  "about.p2":      "Built for the home and the lab alike, the device pairs a waterproof touchscreen with an integrated feeder and adaptive software that meets each individual where they are — and tracks how they progress.",
  "about.tag":     "Lola, in action",

  "caps.eyebrow":   "Inside the device",
  "caps.brain.t":   "Cognitive games",
  "caps.brain.d":   "Self-paced tasks grounded in over a decade of cognitive and behavioural research.",
  "caps.track.t":   "Performance tracking",
  "caps.track.d":   "Every session is measured, so progress and well-being are visible over time.",
  "caps.self.t":    "Self-paced interaction",
  "caps.self.d":    "Animals engage voluntarily, at their own rhythm — no handler required.",
  "caps.figure":    "One device: waterproof touchscreen, integrated feeder, AI monitoring — fully customisable.",

  "beta.title": "Become a beta tester.",
  "beta.p":     "We're inviting a small group of owners and researchers to trial MindMe! before launch. Applications run through our short online form.",
  "beta.cta":   "Apply to the beta program",
  "beta.note":  "Beta applications are handled via Google Forms.",

  "concept.eyebrow":     "The concept",
  "concept.title":       "Watch Felix explain the idea.",
  "concept.lead":        "Grab a coffee and let Felix walk you through the thinking behind MindMe! in a few minutes.",
  "concept.placeholder": "Concept video goes here — add a YouTube or Vimeo ID to the data-embed attribute in index.html to activate it.",

  "team.eyebrow": "The team",
  "team.title":   "Built by neuroscientists.",
  "team.lead":    "Two researchers building the platform they wished existed.",
  "team.anto.name": "Antonino Calapai",
  "team.anto.role": "Co-founder · Neuroscientist",
  "team.anto.bio":  "Neuroscientist specialising in autonomous systems for cognitive and behavioural science.",
  "team.felix.name": "Felix Schneider",
  "team.felix.role": "Co-founder · Neuroscientist",
  "team.felix.bio":  "Neuroscientist specialising in social decision-making and sensory processing for cognitive and behavioural science.",

  "contact.eyebrow":  "Contact",
  "contact.title":    "Get in touch.",
  "contact.lead":     "Questions, partnerships, or press? Send us a note and we'll get back to you.",
  "contact.name":     "Name",
  "contact.email":    "Email",
  "contact.message":  "Message",
  "contact.send":     "Send message",
  "contact.privacy":  "Your details are stored securely and used only to respond to your message. A full privacy policy will follow.",
  "contact.aside_t":  "Prefer email?",
  "contact.aside_p":  "Reach the founders directly:",
  "contact.ok":       "Thanks — your message is on its way.",
  "contact.err":      "Something went wrong. Please email us instead.",
  "contact.mailto":   "Opening your email app — just press send to finish.",

  "footer.tagline":   "Cognitive Enrichment Platform",
  "footer.impressum": "Impressum",
  "footer.privacy":   "Privacy policy",
  "footer.rights":    "Germany · 2026",
};

/* DE / IT: inherit EN, override chrome only. Body copy stays English (pending). */
const DE = Object.assign({}, EN, {
  "nav.about": "Über uns",
  "nav.concept": "Konzept",
  "nav.team": "Team",
  "nav.contact": "Kontakt",
  "hero.cta1": "Zur Beta anmelden",
  "hero.cta2": "Kontakt",
  "beta.cta": "Am Beta-Programm teilnehmen",
  "contact.name": "Name",
  "contact.email": "E-Mail",
  "contact.message": "Nachricht",
  "contact.send": "Nachricht senden",
  "contact.aside_t": "Lieber per E-Mail?",
  "contact.aside_p": "Wende dich direkt an die Gründer:",
  "contact.mailto": "Dein E-Mail-Programm wird geöffnet — bitte zum Abschluss auf Senden klicken.",
  "footer.impressum": "Impressum",
  "footer.privacy": "Datenschutz",
});

const IT = Object.assign({}, EN, {
  "nav.about": "Chi siamo",
  "nav.concept": "Concetto",
  "nav.team": "Team",
  "nav.contact": "Contatti",
  "hero.cta1": "Iscriviti alla beta",
  "hero.cta2": "Contattaci",
  "beta.cta": "Partecipa al programma beta",
  "contact.name": "Nome",
  "contact.email": "Email",
  "contact.message": "Messaggio",
  "contact.send": "Invia messaggio",
  "contact.aside_t": "Preferisci l'email?",
  "contact.aside_p": "Scrivi direttamente ai fondatori:",
  "contact.mailto": "Apertura dell'app email — premi invia per completare.",
  "footer.impressum": "Note legali",
  "footer.privacy": "Privacy",
});

const I18N = { en: EN, de: DE, it: IT };
const I18N_LANGS = ["en", "de", "it"];
const I18N_DEFAULT = "en";
