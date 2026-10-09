import type { Locale } from './config';

/**
 * All interface and page copy. German is the source; `Dictionary` is derived
 * from it, so every other language must provide exactly the same keys.
 * Project texts live with the projects in src/data/projects.ts.
 */
const de = {
  meta: {
    title: 'Jasmin Loeffel – Lernende Informatikerin EFZ, Applikationsentwicklung',
    description:
      'Portfolio von Jasmin Loeffel, lernende Informatikerin EFZ (Applikationsentwicklung) aus der Schweiz: Projekte, Skills und was mich an Software fasziniert.',
    ogAlt: 'JL. – Portfolio von Jasmin Loeffel',
  },
  nav: {
    label: 'Hauptnavigation',
    home: 'Zur Startseite',
    projects: 'Projekte',
    about: 'Über mich',
    skills: 'Skills',
    contact: 'Kontakt',
    menuOpen: 'Menü öffnen',
    menuClose: 'Menü schliessen',
    skip: 'Zum Inhalt springen',
    language: 'Sprache',
  },
  hero: {
    eyebrow: 'Lernende Informatikerin EFZ · Applikationsentwicklung',
    name: 'Jasmin Loeffel',
    titleLead: 'Aus Neugier',
    titleAccent: 'wird Code.',
    intro:
      'Ich bin Jasmin, angehende Applikationsentwicklerin mit einer Begeisterung für Software, Technologie und kreative Ideen. Am liebsten lerne ich, indem ich Dinge selbst ausprobiere, Herausforderungen annehme und eigene Projekte entwickle.',
    ctaPrimary: 'Projekte entdecken',
    ctaSecondary: 'Mehr über mich',
    metaLocation: 'Schweiz',
    metaFocus: 'Software · KI · Games · Web',
    scroll: 'Scrollen',
  },
  projects: {
    label: 'Projekte',
    title: 'Woran ich arbeite',
    intro:
      'Hier findest du eine Auswahl meiner Projekte – von ersten Ideen bis hin zu Anwendungen, an denen ich bereits arbeite. Jedes Projekt bietet mir die Möglichkeit, Neues auszuprobieren, meine Kenntnisse zu erweitern und praktische Erfahrungen zu sammeln.',
    caseStudy: 'Zum Projekt',
    stack: 'Stack',
    stackPlanned: 'Geplanter Stack',
    stackPlannedShort: 'Geplant',
    stackOpen: 'Technologie noch offen',
    demo: 'Live-Demo',
    repo: 'GitHub',
    demoPending: 'Demo folgt',
    repoPending: 'Repository folgt',
    placeholderNote: 'Platzhalter-Grafik',
  },
  status: {
    completed: 'Abgeschlossen',
    'in-development': 'In Entwicklung',
    prototype: 'Prototyp',
    planned: 'Geplant',
  },
  project: {
    back: 'Alle Projekte',
    status: 'Status',
    links: 'Links',
    overview: 'Überblick',
    features: 'Funktionen',
    problem: 'Problem',
    solution: 'Lösung',
    implementation: 'Technische Umsetzung',
    challenges: 'Herausforderungen',
    learnings: 'Erkenntnisse',
    learningsPending:
      'Dieser Abschnitt wird ergänzt, sobald das Projekt weit genug ist, um ehrlich Bilanz zu ziehen.',
    screenshots: 'Screenshots',
    screenshotsPending: 'Noch keine Screenshots vorhanden. Sie folgen, sobald es etwas Echtes zu zeigen gibt.',
    next: 'Nächstes Projekt',
    contactTitle: 'Fragen zu diesem Projekt?',
    contactCta: 'Kontakt aufnehmen',
  },
  about: {
    label: 'Über mich',
    title: 'Verstehen, wie es funktioniert',
    lead: 'Ich mache meine Lehre als Informatikerin EFZ in der Fachrichtung Applikationsentwicklung – und programmiere auch dann weiter, wenn es niemand verlangt.',
    paragraphs: [
      'Am Programmieren mag ich den Moment, in dem ein Problem plötzlich Sinn ergibt. Bis dahin heisst es: zerlegen, ausprobieren, nachlesen, nochmals versuchen. Genau dieser Weg interessiert mich.',
      'Ich stehe am Anfang meines Berufswegs, und das ist in Ordnung. Dafür lerne ich gezielt: Jedes Projekt hier hat einen Grund – ein Thema, das ich verstehen will, oder ein Werkzeug, das mir selbst gefehlt hat.',
    ],
    facts: [
      { term: 'Ausbildung', value: 'Informatikerin EFZ' },
      { term: 'Fachrichtung', value: 'Applikationsentwicklung' },
      { term: 'Standort', value: 'Schweiz' },
      { term: 'Interessen', value: 'KI, Game Development, Web, Sprachen' },
    ],
    languages: {
      title: 'Sprachen',
      items: [
        { name: 'Deutsch & Schweizerdeutsch', level: 'Fliessend' },
        { name: 'Englisch', level: 'Fliessend' },
        { name: 'Spanisch', level: 'B1' },
        { name: 'Französisch', level: 'A2' },
        { name: 'Portugiesisch', level: 'Passives Verständnis' },
      ],
      learning: 'Aktuell am Lernen: Japanisch und Mandarin-Chinesisch',
      note: 'B1 und A2 sind Selbsteinschätzungen.',
    },
  },
  skills: {
    label: 'Skills',
    title: 'Womit ich arbeite',
    intro:
      'Technologien, die ich in der Ausbildung und in eigenen Projekten einsetze. Bewusst ohne Prozentbalken: Was ich kann, zeigen die Projekte besser als eine Zahl.',
  },
  beyond: {
    label: 'Neben dem Code',
    title: 'Was mich sonst antreibt.',
    intro:
      'Neben dem Programmieren gibt es viele andere Dinge, die mich begeistern. Ich lerne gerne Neues, beschäftige mich mit unterschiedlichen Themen und entdecke immer wieder neue Interessen.',
    items: {
      languages: {
        title: 'Sprachen & Kulturen',
        text: 'Ich liebe es, neue Sprachen zu lernen und dadurch andere Kulturen und Denkweisen kennenzulernen.',
      },
      science: {
        title: 'Wissenschaft & Psychologie',
        text: 'Astronomie, Physik und die Frage, wie Menschen denken und handeln, finde ich unglaublich spannend.',
      },
      creative: {
        title: 'Kreativität & Design',
        text: 'Beim Zeichnen, Gestalten und Entwickeln eigener Ideen kann ich meiner Kreativität freien Lauf lassen.',
      },
      chess: {
        title: 'Schach & Strategie',
        text: 'Schach begeistert mich, weil es strategisches Denken, Konzentration und das Finden neuer Lösungswege verbindet.',
      },
      music: {
        title: 'Musik',
        text: 'Musik begleitet mich im Alltag und ist für mich eine schöne Möglichkeit, abzuschalten und neue Inspiration zu finden.',
      },
      growth: {
        title: 'Persönliche Weiterentwicklung',
        text: 'Ich setze mir gerne neue Ziele, lerne neue Fähigkeiten und möchte mich sowohl persönlich als auch fachlich weiterentwickeln.',
      },
    },
  },
  contact: {
    label: 'Kontakt',
    title: 'Lust auf einen Austausch?',
    text: 'Ob Frage, Feedback oder eine Idee für ein gemeinsames Projekt – ich freue mich über Nachrichten.',
    email: 'E-Mail',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    built: 'Gestaltet und entwickelt mit Astro.',
    top: 'Nach oben',
  },
  notFound: {
    title: 'Seite nicht gefunden',
    text: 'Diese Seite gibt es nicht (mehr).',
    cta: 'Zur Startseite',
  },
};

export type Dictionary = typeof de;

const en: Dictionary = {
  meta: {
    title: 'Jasmin Loeffel – Software Development Apprentice',
    description:
      'Portfolio of Jasmin Loeffel, a software development apprentice from Switzerland: projects, skills and what fascinates me about software.',
    ogAlt: 'JL. – Portfolio of Jasmin Loeffel',
  },
  nav: {
    label: 'Main navigation',
    home: 'Go to home page',
    projects: 'Projects',
    about: 'About',
    skills: 'Skills',
    contact: 'Contact',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    skip: 'Skip to content',
    language: 'Language',
  },
  hero: {
    eyebrow: 'Software development apprentice · Switzerland',
    name: 'Jasmin Loeffel',
    titleLead: 'Curiosity,',
    titleAccent: 'turned into code.',
    intro:
      "I'm Jasmin, an aspiring software developer with a passion for software, technology, and creative ideas. I learn best by experimenting, taking on new challenges, and developing projects of my own.",
    ctaPrimary: 'Explore projects',
    ctaSecondary: 'More about me',
    metaLocation: 'Switzerland',
    metaFocus: 'Software · AI · Games · Web',
    scroll: 'Scroll',
  },
  projects: {
    label: 'Projects',
    title: "What I'm working on",
    intro:
      "Here you'll find a selection of my projects, from early ideas to applications I'm already working on. Each project gives me an opportunity to try something new, develop my skills, and gain practical experience.",
    caseStudy: 'View project',
    stack: 'Stack',
    stackPlanned: 'Planned stack',
    stackPlannedShort: 'Planned',
    stackOpen: 'Technology not decided yet',
    demo: 'Live demo',
    repo: 'GitHub',
    demoPending: 'Demo to follow',
    repoPending: 'Repository to follow',
    placeholderNote: 'Placeholder artwork',
  },
  status: {
    completed: 'Completed',
    'in-development': 'In development',
    prototype: 'Prototype',
    planned: 'Planned',
  },
  project: {
    back: 'All projects',
    status: 'Status',
    links: 'Links',
    overview: 'Overview',
    features: 'Features',
    problem: 'Problem',
    solution: 'Solution',
    implementation: 'Technical implementation',
    challenges: 'Challenges',
    learnings: 'Lessons learned',
    learningsPending:
      'This section will be added once the project is far enough along to take an honest look back.',
    screenshots: 'Screenshots',
    screenshotsPending: "No screenshots yet. They'll follow once there is something real to show.",
    next: 'Next project',
    contactTitle: 'Questions about this project?',
    contactCta: 'Get in touch',
  },
  about: {
    label: 'About',
    title: 'Understanding how it works',
    lead: "I'm training as a software developer in Switzerland (Informatikerin EFZ, application development), and I keep programming when nobody is asking me to.",
    paragraphs: [
      'What I like about programming is the moment a problem suddenly makes sense. Getting there means taking it apart, trying things, reading up, and trying again. That path is the part I enjoy.',
      "I'm at the start of my career, and that's fine. I learn deliberately: every project here exists for a reason, either a topic I want to understand or a tool I was missing myself.",
    ],
    facts: [
      { term: 'Training', value: 'Informatikerin EFZ (Swiss federal diploma apprenticeship)' },
      { term: 'Specialisation', value: 'Application development' },
      { term: 'Location', value: 'Switzerland' },
      { term: 'Interests', value: 'AI, game development, web, languages' },
    ],
    languages: {
      title: 'Languages',
      items: [
        { name: 'German & Swiss German', level: 'Fluent' },
        { name: 'English', level: 'Fluent' },
        { name: 'Spanish', level: 'B1' },
        { name: 'French', level: 'A2' },
        { name: 'Portuguese', level: 'Passive understanding' },
      ],
      learning: 'Currently learning: Japanese and Mandarin Chinese',
      note: 'B1 and A2 are self-assessed.',
    },
  },
  skills: {
    label: 'Skills',
    title: 'What I work with',
    intro:
      'Technologies I use in my apprenticeship and in my own projects. No percentage bars on purpose: the projects say more about what I can do than a number would.',
  },
  beyond: {
    label: 'Beyond code',
    title: 'What Drives Me Beyond Coding.',
    intro:
      "Beyond programming, there are many other things I'm passionate about. I enjoy learning new things, exploring different subjects, and discovering new interests.",
    items: {
      languages: {
        title: 'Languages & Cultures',
        text: 'I love learning new languages and discovering different cultures and ways of thinking.',
      },
      science: {
        title: 'Science & Psychology',
        text: 'I find astronomy, physics, and understanding how people think and behave incredibly fascinating.',
      },
      creative: {
        title: 'Creativity & Design',
        text: 'Drawing, designing, and developing my own ideas allow me to express my creativity.',
      },
      chess: {
        title: 'Chess & Strategy',
        text: 'I enjoy chess because it combines strategic thinking, concentration, and finding new approaches to problems.',
      },
      music: {
        title: 'Music',
        text: 'Music is part of my everyday life and helps me unwind and find inspiration.',
      },
      growth: {
        title: 'Personal Growth',
        text: 'I enjoy setting new goals, learning new skills, and developing both personally and professionally.',
      },
    },
  },
  contact: {
    label: 'Contact',
    title: 'Fancy a chat?',
    text: "A question, feedback or an idea for a project together: I'm always happy to hear from you.",
    email: 'Email',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    built: 'Designed and built with Astro.',
    top: 'Back to top',
  },
  notFound: {
    title: 'Page not found',
    text: "This page doesn't exist (any more).",
    cta: 'Back to home',
  },
};

const dictionaries: Record<Locale, Dictionary> = { de, en };

export function useTranslations(locale: Locale): Dictionary {
  return dictionaries[locale];
}
