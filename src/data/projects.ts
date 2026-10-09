import type { ImageMetadata } from 'astro';
import type { Localized } from '../i18n/config';

// Screenshots of the live applications (real captures, with demo data).
import habitflowCalendar from '../assets/projects/habitflow-calendar.webp';
import habitflowDashboard from '../assets/projects/habitflow-dashboard.webp';
import habitflowStatistics from '../assets/projects/habitflow-statistics.webp';

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

export type ProjectStatus = 'completed' | 'in-development' | 'prototype' | 'planned';
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
  /** Short list shown on the detail page. Only list what really exists. */
  features?: Localized<string[]>;
  caseStudy: Localized<CaseStudy>;
}

export const projects: Project[] = [
  {
    slug: 'habitflow',
    status: 'completed',
    cover: 'grid',
    accent: 'violet',
    image: habitflowDashboard,
    imageAlt: {
      de: 'HabitFlow-Dashboard mit Tagesübersicht, Wochenleiste und fünf Beispiel-Gewohnheiten',
      en: 'HabitFlow dashboard with the daily overview, week strip and five example habits',
    },
    screenshots: [
      {
        src: habitflowStatistics,
        alt: {
          de: 'Statistikseite von HabitFlow mit Wochen- und Monatsquote sowie zwei Diagrammen',
          en: 'HabitFlow statistics page with weekly and monthly rates and two charts',
        },
      },
      {
        src: habitflowCalendar,
        alt: {
          de: 'Kalenderseite von HabitFlow mit Monatsansicht und den Gewohnheiten des gewählten Tages',
          en: 'HabitFlow calendar page with the month view and the habits of the selected day',
        },
      },
    ],
    stack: ['JavaScript', 'HTML', 'CSS', 'Vite', 'Chart.js'],
    demoUrl: 'https://jasmin-habitflow.netlify.app',
    repoUrl: 'https://github.com/Jasmin908/habitflow',
    title: { de: 'HabitFlow', en: 'HabitFlow' },
    tagline: { de: 'Gewohnheiten & Fortschritt', en: 'Habits & Progress' },
    summary: {
      de: 'Ein Habit-Tracker, der komplett im Browser läuft: Gewohnheiten anlegen, täglich abhaken und den Fortschritt über Serien, Statistiken und einen Kalender verfolgen. Ohne Konto, die Daten bleiben auf dem eigenen Gerät.',
      en: 'A habit tracker that runs entirely in the browser: create habits, tick them off each day, and follow your progress through streaks, statistics and a calendar. No account, and the data stays on your own device.',
    },
    features: {
      de: [
        'Gewohnheiten anlegen, bearbeiten und löschen, mit Kategorie und Symbol',
        'Flexible Zeitpläne: täglich oder an ausgewählten Wochentagen',
        'Täglicher Fortschritt auf einem Dashboard mit Wochenübersicht',
        'Serien, die nur geplante Tage zählen',
        'Statistiken und Diagramme zu Wochen- und Monatsquoten',
        'Interaktiver Kalender, in dem sich vergangene Tage korrigieren lassen',
        'Dunkles und helles Design',
        'Speicherung lokal im Browser, ohne Konto',
        'Export und Import der Daten als JSON',
        'Responsives Layout für Desktop und Smartphone',
      ],
      en: [
        'Create, edit and delete habits, each with a category and an icon',
        'Flexible schedules: every day or on selected weekdays',
        'Daily progress on a dashboard with a week overview',
        'Streaks that only count the days a habit was scheduled for',
        'Statistics and charts for weekly and monthly completion',
        'An interactive calendar where past days can be corrected',
        'Dark and light themes',
        'Data stored locally in the browser, with no account',
        'JSON export and import',
        'Responsive layout for desktop and phones',
      ],
    },
    caseStudy: {
      de: {
        overview:
          'HabitFlow ist ein Habit-Tracker mit vier Ansichten: einem Dashboard für den Tag, einer Statistikseite, einem Monatskalender und den Einstellungen. Die Anwendung ist veröffentlicht und läuft vollständig im Browser.',
        problem:
          'Viele Habit-Tracker zeigen vor allem eine Reihe von Häkchen. Daraus lässt sich schwer ablesen, wie regelmässig man wirklich dranbleibt – besonders bei Gewohnheiten, die nicht jeden Tag anstehen.',
        solution:
          'HabitFlow verbindet eine schlichte tägliche Erfassung mit Auswertungen über längere Zeit: Serien pro Gewohnheit, Wochen- und Monatsquoten, zwei Diagramme und ein Kalender, der jeden Tag als erledigt, teilweise erledigt oder verpasst zeigt. Gezählt werden nur Tage, an denen eine Gewohnheit geplant war.',
        implementation:
          'Die Anwendung ist in JavaScript mit ES-Modulen geschrieben, ohne Framework, und wird mit Vite gebaut. Die Logik für Daten, Zeitpläne und Statistiken ist von der Darstellung getrennt und wird mit dem Test-Runner von Node geprüft. Chart.js wird erst geladen, wenn die Statistikseite geöffnet wird. Gespeichert wird im localStorage des Browsers; die Daten lassen sich als JSON exportieren und wieder importieren.',
        challenges:
          'Am meisten Sorgfalt brauchten die Datumslogik und die Zeitpläne. Tage richten sich nach dem lokalen Kalender statt nach UTC, damit sich ein Eintrag um Mitternacht nicht verschiebt. Und wenn man die Wochentage einer Gewohnheit ändert, darf das die Vergangenheit nicht umschreiben: Jede Gewohnheit führt deshalb einen Verlauf ihrer Zeitpläne.',
        learnings:
          'Statistiken sind nur so gut wie die Regeln dahinter. Erst klar festzulegen, was als geplant, erledigt oder verpasst gilt, und diese Regeln dann mit Tests abzusichern, hat mehr gebracht als jede zusätzliche Funktion.',
      },
      en: {
        overview:
          'HabitFlow is a habit tracker with four views: a dashboard for the day, a statistics page, a monthly calendar and settings. The application is released and runs entirely in the browser.',
        problem:
          "Many habit trackers mostly show a row of check marks. That makes it hard to see how consistently you are really keeping up, especially with habits that aren't due every day.",
        solution:
          'HabitFlow combines a simple daily log with a view over longer periods: a streak for each habit, weekly and monthly completion rates, two charts, and a calendar that shows every day as done, partly done or missed. Only the days a habit was scheduled for are counted.',
        implementation:
          "The application is written in JavaScript with ES modules, without a framework, and built with Vite. The logic for dates, schedules and statistics is kept separate from the interface and is checked with Node's test runner. Chart.js is only loaded when the statistics page is opened. Data is stored in the browser's localStorage and can be exported and imported as JSON.",
        challenges:
          "The date logic and the schedules needed the most care. Days follow the local calendar instead of UTC, so an entry doesn't shift around midnight. And changing a habit's weekdays must not rewrite the past, so each habit keeps a history of its schedules.",
        learnings:
          'Statistics are only as good as the rules behind them. Deciding clearly what counts as scheduled, done or missed, and then securing those rules with tests, was worth more than any additional feature.',
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
