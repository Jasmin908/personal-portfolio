import type { ImageMetadata } from 'astro';
import type { Localized } from '../i18n/config';

/**
 * PROJECT DATA
 *
 * To add a project, append one entry to `projects` below. The card on the
 * home page and the detail page in every language are generated from it.
 *
 * Real images: put them in src/assets/projects/, import them at the top of
 * this file and set `image` / `screenshots`. Until then the generated
 * placeholder cover (`cover`) is shown.
 *
 * Links: leave `demoUrl` / `repoUrl` out until they exist. Missing links are
 * shown as "to follow" and are not clickable.
 */

export type ProjectStatus = 'live' | 'in-development' | 'prototype' | 'planned';
export type CoverVariant = 'grid' | 'dialog' | 'timeline' | 'scan';
export type Accent = 'violet' | 'blue' | 'lime';

export interface CaseStudy {
  overview: string;
  problem: string;
  solution: string;
  implementation: string;
  challenges: string;
  /** Leave out while there is nothing honest to report yet. */
  learnings?: string;
}

export interface Screenshot {
  src: ImageMetadata;
  alt: Localized<string>;
}

export interface Project {
  /** Used in the URL: /projekte/<slug>/ and /en/projects/<slug>/ */
  slug: string;
  status: ProjectStatus;
  /** Placeholder artwork, used as long as `image` is not set. */
  cover: CoverVariant;
  accent: Accent;
  image?: ImageMetadata;
  imageAlt?: Localized<string>;
  screenshots?: Screenshot[];
  stack: string[];
  demoUrl?: string;
  repoUrl?: string;
  title: Localized<string>;
  tagline: Localized<string>;
  summary: Localized<string>;
  caseStudy: Localized<CaseStudy>;
}

export const projects: Project[] = [
  {
    slug: 'habitflow',
    status: 'in-development',
    cover: 'grid',
    accent: 'violet',
    stack: ['JavaScript', 'HTML', 'CSS'],
    title: { de: 'HabitFlow', en: 'HabitFlow' },
    tagline: { de: 'Gewohnheiten & Fortschritt', en: 'Habits & Progress' },
    summary: {
      de: 'Eine Webanwendung, mit der sich persönliche Gewohnheiten festhalten und Fortschritte verfolgen lassen. Diagramme und Statistiken sollen dabei helfen, die eigene Entwicklung besser zu verstehen.',
      en: 'A web application for tracking personal habits and monitoring progress. Charts and statistics will help users better understand how their habits develop over time.',
    },
    caseStudy: {
      de: {
        overview:
          'HabitFlow soll Gewohnheiten nicht nur abhaken, sondern Muster zeigen: Was klappt regelmässig, und wann bricht etwas ab? Das Projekt ist in Entwicklung, Funktionsumfang und Oberfläche verändern sich noch.',
        problem:
          'Viele Habit-Tracker zeigen vor allem eine Reihe von Häkchen. Daraus lässt sich schwer ablesen, warum eine Gewohnheit hält oder scheitert.',
        solution:
          'Geplant ist eine schlichte tägliche Erfassung, kombiniert mit Auswertungen über längere Zeiträume – etwa Verläufe und Vergleiche zwischen Wochen.',
        implementation:
          'Der technische Aufbau entsteht gerade. Im Zentrum steht ein sauberes Datenmodell für Gewohnheiten und Einträge, auf dem die Auswertungen aufbauen. Details folgen, sobald die Architektur steht.',
        challenges:
          'Auswertungen, die ehrlich bleiben: Lücken in den Daten sinnvoll behandeln und nur Statistiken zeigen, die wirklich etwas aussagen.',
      },
      en: {
        overview:
          "HabitFlow is meant to do more than tick off habits: it should reveal patterns. What works consistently, and when do things fall apart? The project is in development, so features and interface are still changing.",
        problem:
          'Many habit trackers mostly show a row of check marks. That makes it hard to see why a habit sticks or fails.',
        solution:
          'The plan is a simple daily log combined with analysis over longer periods, such as trends and week-to-week comparisons.',
        implementation:
          'The technical structure is taking shape right now. At its centre is a clean data model for habits and entries that the analytics build on. Details will follow once the architecture has settled.',
        challenges:
          'Keeping the analytics honest: handling gaps in the data sensibly and only showing statistics that actually mean something.',
      },
    },
  },
  {
    slug: 'ai-coding-mentor',
    status: 'prototype',
    cover: 'dialog',
    accent: 'blue',
    stack: ['Python'],
    title: { de: 'AI Coding Mentor', en: 'AI Coding Mentor' },
    tagline: { de: 'Programmieren lernen mit KI', en: 'Learning to Code with AI' },
    summary: {
      de: 'Ein KI-gestützter Programmierassistent, der dabei hilft, Fehler zu verstehen, Code zu verbessern und neue Konzepte zu lernen. Statt fertige Lösungen vorzugeben, unterstützt er beim selbstständigen Problemlösen.',
      en: 'An AI-powered coding assistant that helps users understand errors, improve their code, and learn new programming concepts. Instead of simply providing solutions, it encourages independent problem-solving.',
    },
    caseStudy: {
      de: {
        overview:
          'Der AI Coding Mentor soll beim Programmierenlernen begleiten. Ein erster Prototyp existiert, die Weiterentwicklung ist geplant.',
        problem:
          'KI-Assistenten liefern oft sofort fertigen Code. Zum Lernen ist das wenig hilfreich: Die Aufgabe ist gelöst, verstanden hat man kaum mehr als vorher.',
        solution:
          'Der Mentor soll sich wie eine gute Lehrperson verhalten: nachfragen, Hinweise geben und Fehler erklären, damit man die Lösung selbst findet.',
        implementation:
          'Der Prototyp dient dazu, die Grundidee zu testen. Für die nächste Version überarbeite ich Aufbau und Funktionsumfang – eine genauere Beschreibung folgt mit dem Neuaufbau.',
        challenges:
          'Die richtige Menge Hilfe finden: genug, um nicht stecken zu bleiben, aber nicht so viel, dass das Denken abgenommen wird.',
      },
      en: {
        overview:
          'The AI Coding Mentor is meant to support people who are learning to program. A first prototype exists, and further development is planned.',
        problem:
          "AI assistants often produce finished code straight away. That doesn't help much with learning: the task is solved, but you understand barely more than before.",
        solution:
          'The mentor should behave like a good teacher: ask questions, give hints and explain mistakes, so you find the solution yourself.',
        implementation:
          "The prototype exists to test the basic idea. For the next version I'm reworking the structure and scope, and a more detailed description will follow with the rebuild.",
        challenges:
          "Finding the right amount of help: enough to avoid getting stuck, but not so much that it does the thinking for you.",
      },
    },
  },
  {
    slug: 'smart-study-planner',
    status: 'planned',
    cover: 'timeline',
    accent: 'lime',
    // Technology not decided yet; an empty stack is shown as "not decided".
    stack: [],
    title: { de: 'Smart Study Planner', en: 'Smart Study Planner' },
    tagline: { de: 'Intelligente Lernplanung', en: 'Smart Study Planning' },
    summary: {
      de: 'Eine Anwendung, die das Lernen und die Prüfungsvorbereitung erleichtern soll. Anhand von anstehenden Prüfungen, Aufgaben und verfügbarer Zeit werden individuelle Lernpläne erstellt.',
      en: 'An application designed to make studying and exam preparation easier. It will create personalized study schedules based on upcoming exams, tasks, and available time.',
    },
    caseStudy: {
      de: {
        overview:
          'Der Smart Study Planner ist in Planung. Die Idee: aus Prüfungsterminen, Stoffumfang und freier Zeit einen Lernplan ableiten, der sich tatsächlich einhalten lässt.',
        problem:
          'Lernpläne scheitern selten am Willen, sondern an der Planung: zu viel Stoff an zu wenigen Tagen, und nach dem ersten verpassten Tag stimmt nichts mehr.',
        solution:
          'Der Planer soll den Stoff auf die verfügbare Zeit verteilen und sich anpassen, wenn etwas dazwischenkommt, statt einfach veraltet zu sein.',
        implementation:
          'Noch offen. Als Erstes kläre ich, wie sich Stoff, Termine und Zeitfenster sinnvoll modellieren lassen. Die Technologie wähle ich danach.',
        challenges:
          'Voraussichtlich die Planungslogik: eine Verteilung, die realistisch bleibt und sich nachvollziehbar anpasst.',
      },
      en: {
        overview:
          'The Smart Study Planner is at the planning stage. The idea is to derive a study plan from exam dates, the amount of material and free time, one that can actually be kept.',
        problem:
          'Study plans rarely fail for lack of motivation. They fail in the planning: too much material on too few days, and after the first missed day nothing fits any more.',
        solution:
          'The planner should spread the material across the available time and adapt when something gets in the way, instead of simply going out of date.',
        implementation:
          "Still open. First I'll work out how material, deadlines and time slots can be modelled sensibly. The technology choice comes after that.",
        challenges:
          'Most likely the planning logic: a distribution that stays realistic and adapts in a way you can follow.',
      },
    },
  },
  {
    slug: 'accessibility-analyzer',
    status: 'planned',
    cover: 'scan',
    accent: 'violet',
    stack: ['JavaScript', 'HTML', 'CSS'],
    title: { de: 'Website Accessibility Analyzer', en: 'Website Accessibility Analyzer' },
    tagline: { de: 'Barrierefreiheit im Web', en: 'Web Accessibility' },
    summary: {
      de: 'Ein Tool, das Webseiten auf mögliche Barrierefreiheitsprobleme untersucht. Es soll beispielsweise fehlende Bildbeschreibungen oder unzureichende Farbkontraste erkennen und passende Verbesserungsvorschläge liefern.',
      en: 'A tool designed to identify potential accessibility issues on websites, such as missing image descriptions or insufficient color contrast, and suggest ways to improve them.',
    },
    caseStudy: {
      de: {
        overview:
          'Der Website Accessibility Analyzer ist in Planung. Er soll Webseiten auf häufige Barrieren untersuchen und erklären, was das für betroffene Menschen bedeutet.',
        problem:
          'Barrierefreiheit geht in vielen Webprojekten unter. Bestehende Prüfberichte sind oft lang und technisch – wer neu im Thema ist, weiss danach nicht, wo anfangen.',
        solution:
          'Das Werkzeug soll typische Probleme wie fehlende Alternativtexte, schwache Kontraste oder eine unklare Überschriftenstruktur finden und in klarer Sprache erklären, warum sie wichtig sind und wie man sie behebt.',
        implementation:
          'Noch offen. Zuerst lege ich fest, welche Prüfungen sich zuverlässig automatisieren lassen und welche eine manuelle Einschätzung brauchen.',
        challenges:
          'Voraussichtlich die Grenze der Automatisierung: Viele Barrieren lassen sich nicht maschinell erkennen. Das Werkzeug muss ehrlich zeigen, was es prüft und was nicht.',
      },
      en: {
        overview:
          'The Website Accessibility Analyzer is at the planning stage. It is meant to examine web pages for common barriers and explain what they mean for the people affected.',
        problem:
          "Accessibility gets lost in many web projects. Existing audit reports are often long and technical, and anyone new to the topic doesn't know where to begin.",
        solution:
          'The tool should find typical problems such as missing alternative text, weak contrast or an unclear heading structure, and explain in plain language why they matter and how to fix them.',
        implementation:
          "Still open. First I'll decide which checks can be automated reliably and which need a manual assessment.",
        challenges:
          "Most likely the limits of automation: many barriers can't be detected by a machine. The tool has to be honest about what it checks and what it doesn't.",
      },
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
