/* =========================================================================
   MindMe! — i18n dictionaries (EN / DE / IT)
   Full translations for all three languages. DE/IT written for review by
   Antonino (native IT, fluent DE) — adjust nuance as needed.
   Keys in I18N_HTML may contain inline markup and are set via innerHTML.
   ========================================================================= */

const I18N_HTML = new Set(["hero.title"]);

const EN = {
  "nav.about":   "About",
  "nav.beta":    "Beta",
  "nav.team":    "Team",
  "nav.concept": "Concept",
  "nav.contact": "Contact",

  "hero.title":  'Cognitive Enrichment for <span class="accent">Dogs</span>',
  "hero.sub":    "A touchscreen platform for adaptive cognitive stimulation, built on more than a decade of neuroscience research.",
  "hero.cta1":   "Watch the concept",
  "hero.cta2":   "Contact us",

  "caps.eyebrow":   "Inside the device",
  "caps.brain.t":   "Cognitive games",
  "caps.brain.d":   "Advanced activities developed to rigorous scientific standards, refined over more than a decade of research with primates.",
  "caps.track.t":   "Performance tracking",
  "caps.track.d":   "Every session is recorded, so you can follow your dog's progress and wellbeing over time.",
  "caps.self.t":    "Independent play",
  "caps.self.d":    "Adaptive games your dog plays whenever they like, at their own pace, with no training or handler needed.",

  "about.tag": "Lola in action",

  "beta.title": "Become a beta tester",
  "beta.p":     "Our current beta wave is full. Leave your email to reserve a place in the next wave and we'll be in touch when spots open.",
  "beta.full":  "Beta applications closed",
  "beta.wl_label": "Reserve a spot for the next wave",
  "beta.wl_btn":   "Reserve my spot",
  "beta.wl_ok":    "Thanks, opening your email app to reserve your spot.",

  "concept.eyebrow": "The concept",
  "concept.title":   "Felix explains the idea",
  "concept.lead":    "Grab a coffee and let Felix walk you through the thinking behind MindMe!.",
  "concept.note":    "Video narration is in German for now.",

  "team.eyebrow": "The team",
  "team.title":   "Built by neuroscience",
  "team.anto.name": "Antonino Calapai",
  "team.anto.role": "Cofounder",
  "team.anto.bio":  "Neuroscientist specialising in autonomous systems for cognitive and behavioural science.",
  "team.felix.name": "Felix Schneider",
  "team.felix.role": "Cofounder",
  "team.felix.bio":  "Neuroscientist specialising in social decision making and sensory processing for cognitive and behavioural science.",

  "contact.eyebrow":  "Contact",
  "contact.title":    "Get in touch",
  "contact.lead":     "Questions, partnerships, or press? Send us a note and we'll get back to you.",
  "contact.name":     "Name",
  "contact.email":    "Email",
  "contact.message":  "Message",
  "contact.send":     "Send message",
  "contact.privacy":  "Your details are stored securely and used only to respond to your message. A full privacy policy will follow.",
  "contact.ok":       "Thanks, your message is on its way.",
  "contact.err":      "Something went wrong. Please email us instead.",
  "contact.mailto":   "Opening your email app, just press send to finish.",

  "footer.impressum": "Impressum",
  "footer.privacy":   "Privacy policy",
  "footer.rights":    "Germany 2026",
  "footer.totop":     "Back to top",
};

const DE = Object.assign({}, EN, {
  "nav.about":   "Über uns",
  "nav.beta":    "Beta",
  "nav.team":    "Team",
  "nav.concept": "Konzept",
  "nav.contact": "Kontakt",

  "hero.title":  'Kognitive Bereicherung für <span class="accent">Hunde</span>',
  "hero.sub":    "Eine Touchscreen Plattform für adaptive kognitive Stimulation, basierend auf über einem Jahrzehnt neurowissenschaftlicher Forschung.",
  "hero.cta1":   "Konzept ansehen",
  "hero.cta2":   "Kontakt",

  "caps.eyebrow":   "Unser Gerät",
  "caps.brain.t":   "Kognitive Spiele",
  "caps.brain.d":   "Anspruchsvolle Aktivitäten nach strengen wissenschaftlichen Standards, verfeinert über mehr als ein Jahrzehnt Forschung mit Primaten.",
  "caps.track.t":   "Performance tracking",
  "caps.track.d":   "Jede Sitzung wird aufgezeichnet, sodass du die Fortschritte und das Wohlbefinden deines Hundes verfolgen kannst.",
  "caps.self.t":    "Eigenständiges Spielen",
  "caps.self.d":    "Adaptive Spiele, die dein Hund spielt wann immer er möchte, in seinem eigenen Tempo, ganz ohne Training oder Betreuung.",

  "about.tag": "Lola in Aktion",

  "beta.title": "Werde Beta Tester",
  "beta.p":     "Unsere aktuelle Beta Runde ist voll. Hinterlasse deine E-Mail, um einen Platz in der nächsten Runde zu reservieren, und wir melden uns, sobald Plätze frei werden.",
  "beta.full":  "Beta Anmeldung geschlossen",
  "beta.wl_label": "Platz für die nächste Runde reservieren",
  "beta.wl_btn":   "Platz reservieren",
  "beta.wl_ok":    "Danke, dein Mailprogramm wird geöffnet, um deinen Platz zu reservieren.",

  "concept.eyebrow": "Das Konzept",
  "concept.title":   "Felix erklärt die Idee",
  "concept.lead":    "Hol dir einen Kaffee und lass dir von Felix die Motivation hinter MindMe! erklären.",
  "concept.note":    "Die Videovertonung ist vorerst nur auf Deutsch.",

  "team.eyebrow": "Das Team",
  "team.title":   "Von Neurowissenschaftlern entwickelt",
  "team.anto.role": "Gründer",
  "team.anto.bio":  "Neurowissenschaftler mit Schwerpunkt auf autonomen Systemen für die kognitive und verhaltensbezogene Forschung.",
  "team.felix.role": "Gründer",
  "team.felix.bio":  "Neurowissenschaftler mit Schwerpunkt auf sozialer Entscheidungsfindung und sensorischer Verarbeitung für die kognitive und verhaltensbezogene Forschung.",

  "contact.eyebrow":  "Kontakt",
  "contact.title":    "Schreib uns",
  "contact.lead":     "Fragen, Kooperationen oder Presse? Schreib uns eine Nachricht und wir melden uns.",
  "contact.name":     "Name",
  "contact.email":    "E-Mail",
  "contact.message":  "Nachricht",
  "contact.send":     "Nachricht senden",
  "contact.privacy":  "Deine Daten werden sicher gespeichert und nur verwendet, um auf deine Nachricht zu antworten. Eine vollständige Datenschutzerklärung folgt.",
  "contact.ok":       "Danke, deine Nachricht ist unterwegs.",
  "contact.err":      "Etwas ist schiefgelaufen. Bitte schreib uns stattdessen eine E-Mail.",
  "contact.mailto":   "Dein Mailprogramm wird geöffnet, bitte zum Abschluss auf Senden klicken.",

  "footer.impressum": "Impressum",
  "footer.privacy":   "Datenschutz",
  "footer.rights":    "Deutschland 2026",
  "footer.totop":     "Nach oben",
});

const IT = Object.assign({}, EN, {
  "nav.about":   "Chi siamo",
  "nav.beta":    "Beta",
  "nav.team":    "Team",
  "nav.concept": "Concetto",
  "nav.contact": "Contatti",

  "hero.title":  'Arricchimento cognitivo per <span class="accent">cani</span>',
  "hero.sub":    "Una piattaforma touchscreen per la stimolazione cognitiva adattiva, basata su oltre un decennio di ricerca neuroscientifica.",
  "hero.cta1":   "Guarda il concetto",
  "hero.cta2":   "Contattaci",

  "caps.eyebrow":   "Il dispositivo",
  "caps.brain.t":   "Giochi cognitivi",
  "caps.brain.d":   "Attività avanzate sviluppate secondo rigorosi standard scientifici, perfezionate in oltre un decennio di ricerca sui primati.",
  "caps.track.t":   "Monitoraggio dei progressi",
  "caps.track.d":   "Ogni sessione viene registrata, così puoi seguire i progressi e il benessere del tuo cane nel tempo.",
  "caps.self.t":    "Gioco autonomo",
  "caps.self.d":    "Giochi adattivi a cui il tuo cane gioca quando vuole, al proprio ritmo, senza bisogno di addestramento o supervisione.",

  "about.tag": "Lola in azione",

  "beta.title": "Diventa beta tester",
  "beta.p":     "L'attuale fase beta è al completo. Lascia la tua email per riservare un posto nella prossima fase e ti contatteremo quando si libereranno posti.",
  "beta.full":  "Iscrizioni beta chiuse",
  "beta.wl_label": "Riserva un posto per la prossima fase",
  "beta.wl_btn":   "Riserva un posto",
  "beta.wl_ok":    "Grazie, apertura dell'app email per riservare il tuo posto.",

  "concept.eyebrow": "Il concetto",
  "concept.title":   "Felix spiega l'idea",
  "concept.lead":    "Prendi un caffè e lascia che Felix ti illustri l'idea dietro MindMe!.",
  "concept.note":    "La narrazione del video è per ora solo in tedesco.",

  "team.eyebrow": "Il team",
  "team.title":   "Costruito dalle neuroscienze",
  "team.anto.role": "Cofondatore",
  "team.anto.bio":  "Neuroscienziato specializzato in sistemi autonomi per la ricerca cognitiva e comportamentale.",
  "team.felix.role": "Cofondatore",
  "team.felix.bio":  "Neuroscienziato specializzato nel processo decisionale sociale e nell'elaborazione sensoriale per la ricerca cognitiva e comportamentale.",

  "contact.eyebrow":  "Contatti",
  "contact.title":    "Mettiti in contatto",
  "contact.lead":     "Domande, collaborazioni o stampa? Scrivici un messaggio e ti risponderemo.",
  "contact.name":     "Nome",
  "contact.email":    "Email",
  "contact.message":  "Messaggio",
  "contact.send":     "Invia messaggio",
  "contact.privacy":  "I tuoi dati sono conservati in modo sicuro e usati solo per risponderti. Seguirà un'informativa completa sulla privacy.",
  "contact.ok":       "Grazie, il tuo messaggio è in arrivo.",
  "contact.err":      "Qualcosa è andato storto. Scrivici via email.",
  "contact.mailto":   "Apertura dell'app email, premi invia per completare.",

  "footer.impressum": "Note legali",
  "footer.privacy":   "Privacy",
  "footer.rights":    "Germania 2026",
  "footer.totop":     "Torna su",
});

const I18N = { en: EN, de: DE, it: IT };
const I18N_LANGS = ["en", "de", "it"];
const I18N_DEFAULT = "en";
