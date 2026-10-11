import type { ImageMetadata } from 'astro';
import type { Localized } from '../i18n/config';

// Screenshots of the live applications (real captures, with demo data).
import mentorExercises from '../assets/projects/ai-coding-mentor-exercises.webp';
import mentorPractice from '../assets/projects/ai-coding-mentor-practice.webp';
import mentorWorkspace from '../assets/projects/ai-coding-mentor-workspace.webp';
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
  /** What the project deliberately does not or cannot do. Shown as its own chapter when set. */
  limitations?: string;
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
    status: 'completed',
    cover: 'dialog',
    accent: 'blue',
    image: mentorWorkspace,
    imageAlt: {
      de: 'Arbeitsbereich von AI Coding Mentor: Code-Editor mit einem Python-Beispiel und daneben die Erklärung des simulierten Mentors',
      en: 'AI Coding Mentor workspace: the code editor with a Python example and, next to it, the explanation from the simulated mentor',
    },
    screenshots: [
      {
        src: mentorExercises,
        alt: {
          de: 'Übungsbibliothek von AI Coding Mentor mit Filtern für Sprache, Schwierigkeit und Thema sowie den Übungskarten',
          en: 'AI Coding Mentor exercise library with filters for language, difficulty and topic, and the exercise cards',
        },
      },
      {
        src: mentorPractice,
        alt: {
          de: 'Übungsansicht von AI Coding Mentor: links die Rückmeldung mit erkannten, nicht erkannten und nicht überprüfbaren Anforderungen, rechts der Editor',
          en: 'AI Coding Mentor practice view: feedback with recognised, not recognised and not verifiable requirements on the left, the editor on the right',
        },
      },
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Monaco Editor', 'CSS', 'Vitest', 'React Testing Library', 'localStorage'],
    demoUrl: 'https://jasmin-ai-coding-mentor.netlify.app',
    repoUrl: 'https://github.com/Jasmin908/ai-coding-mentor',
    title: { de: 'AI Coding Mentor', en: 'AI Coding Mentor' },
    tagline: { de: 'Programmieren lernen & üben', en: 'Learn & Practise Coding' },
    summary: {
      de: 'Eine Lern-Webanwendung für alle, die programmieren lernen: Code in einem echten Editor schreiben, ihn von einem simulierten Mentor erklären lassen, Hinweise holen und mit 18 Übungen in Python, JavaScript und Java üben. Der Mentor arbeitet mit festen Regeln, nicht mit einem KI-Modell.',
      en: 'A learning web application for programming beginners: write code in a real editor, have a simulated mentor explain it, ask for hints, and practise with 18 exercises in Python, JavaScript and Java. The mentor works with fixed rules, not with an AI model.',
    },
    features: {
      de: [
        'Code-Editor (Monaco) mit Syntaxhervorhebung für Python, JavaScript und Java',
        'Erklären: beschreibt bei erkannten Mustern, was ein Programm tut, und erläutert die verwendeten Konzepte',
        'Debuggen: sucht nach 16 typischen Anfängerfehlern und begründet jeden Fund',
        'Hinweise in drei Stufen, vom kleinen Anstoss bis zum konkreten Vorschlag',
        'Übungsbibliothek mit 18 Aufgaben, filterbar nach Sprache, Schwierigkeit und Thema',
        'Übungsansicht mit Aufgabe, Startcode, Anforderungsprüfung und eigenen Hinweisen pro Übung',
        'Rückmeldung in drei Kategorien: erkannt, nicht erkannt, nicht überprüfbar',
        'Entwürfe pro Sprache und pro Übung, lokal im Browser gespeichert',
        'Seite «How the demo works», die offenlegt, was der Mentor erkennt und was nicht',
        'Responsives Layout mit einklappbarer Seitenleiste',
      ],
      en: [
        'Code editor (Monaco) with syntax highlighting for Python, JavaScript and Java',
        'Explain: describes what a program does where it recognises the pattern, and explains the concepts used',
        'Debug: looks for 16 typical beginner mistakes and gives a reason for each finding',
        'Hints in three levels, from a gentle nudge to a concrete suggestion',
        'Exercise library with 18 tasks, filterable by language, difficulty and topic',
        'Practice view with the task, starter code, a requirement check and hints written for each exercise',
        'Feedback in three categories: recognised, not recognised, not verifiable',
        'Drafts for each language and each exercise, stored locally in the browser',
        'A "How the demo works" page that discloses what the mentor recognises and what it does not',
        'Responsive layout with a collapsible sidebar',
      ],
    },
    caseStudy: {
      de: {
        overview:
          'AI Coding Mentor ist eine Webanwendung zum Programmierenlernen mit zwei Bereichen: einem Arbeitsbereich mit Code-Editor und Mentor sowie einer Übungsbibliothek mit 18 Aufgaben in Python, JavaScript und Java. Die Anwendung ist in Version 2.0 veröffentlicht und läuft vollständig im Browser. Sie ersetzt einen früheren Python-Prototyp und wurde mit Unterstützung von Claude Code entwickelt.',
        problem:
          'Wer programmieren lernt, bekommt von KI-Assistenten oft sofort fertigen Code. Die Aufgabe ist dann gelöst, verstanden hat man kaum mehr als vorher. Zum Lernen hilft es mehr, den eigenen Code erklärt zu bekommen, auf typische Fehler hingewiesen zu werden und Hinweise zu erhalten, die das Denken nicht abnehmen.',
        solution:
          'Der Mentor bietet drei Aktionen: Erklären, Debuggen und Hinweis geben. Er ist eine Simulation: Feste, nachvollziehbare Regeln suchen im Code nach bekannten Mustern und wählen dazu vorbereitete Texte aus. Für denselben Code kommt immer dieselbe Antwort. Wenn nichts passt, sagt der Mentor das, statt etwas zu erfinden. In den Übungen vergleicht eine Anforderungsprüfung den Code mit dem, was die Aufgabe verlangt, zum Beispiel eine Funktion mit bestimmtem Namen, eine Schleife oder eine Rückgabe. Jede Anforderung wird als erkannt, nicht erkannt oder nicht überprüfbar gemeldet und begründet. Hinweise gibt es in drei Stufen, damit die Lösung nicht vorweggenommen wird.',
        implementation:
          'Die Oberfläche ist mit React und TypeScript gebaut, Vite erstellt daraus statische Dateien. Als Editor dient Monaco, der erst nachgeladen wird, wenn die Seite sichtbar ist. Die Logik ist von der Oberfläche getrennt: Mentor und Übungssystem liegen in eigenen Modulen ohne React. Die Oberfläche spricht den Mentor nur über eine kleine Schnittstelle an, sodass er sich später durch einen echten Dienst ersetzen liesse. Bevor Regeln angewendet werden, blendet ein Vorverarbeitungsschritt Kommentare und Zeichenketten aus, damit Text darin keine Regel auslöst. Die Übungen sind reine Daten; jede Anforderung verweist auf eine typisierte Prüfung. Entwürfe werden im localStorage gespeichert und beim Laden validiert. 335 automatisierte Tests mit Vitest und React Testing Library decken Mentor, Übungsprüfung, Speicherung und Oberfläche ab.',
        challenges:
          'Die grösste Schwierigkeit war die Ehrlichkeit der Rückmeldungen. Eine Prüfung, die nur Text vergleicht, darf eine Lösung nie als richtig bezeichnen. Deshalb gibt es die Kategorie «nicht überprüfbar», und die Zusammenfassung spricht von erkannten Mustern, nicht von bestandenen Tests. Ebenso wichtig war, Fehlalarme zu vermeiden: Auskommentierter Code oder Code in einer Zeichenkette darf nicht zählen, gängige alternative Schreibweisen dagegen schon. Beides ist mit Tests abgesichert.',
        limitations:
          'Der Mentor ist kein KI-Modell und versteht Code nicht. Er erkennt nur eine begrenzte Zahl von Mustern, kann echte Fehler übersehen und gelegentlich korrekten Code beanstanden. Code wird nirgends ausgeführt. Die Anforderungsprüfung kann darum nicht feststellen, ob ein Programm funktioniert: Eine Lösung kann alle erwarteten Muster enthalten und trotzdem falsch sein, und eine ungewöhnlich geschriebene, funktionierende Lösung kann als «nicht erkannt» gelten. Es gibt keinen Lernfortschritt und keine Konten, und die Oberfläche ist nur auf Englisch verfügbar.',
        learnings:
          'Das Projekt zeigt, wie viel sich mit klar getrennter Logik und Oberfläche gewinnen lässt: Regeln und Übungen lassen sich einzeln testen und erweitern, ohne die Darstellung anzufassen. Es zeigt auch, wo statische Prüfungen enden. Ob Code wirklich funktioniert, lässt sich nur klären, indem man ihn ausführt. Ein Lernwerkzeug sollte diese Grenze offen benennen, statt Sicherheit vorzutäuschen.',
      },
      en: {
        overview:
          'AI Coding Mentor is a web application for learning to program, with two areas: a workspace with a code editor and a mentor, and an exercise library with 18 tasks in Python, JavaScript and Java. Version 2.0 is released and runs entirely in the browser. It replaces an earlier Python prototype and was developed with assistance from Claude Code.',
        problem:
          'People who are learning to program often get finished code from AI assistants straight away. The task is solved, but they understand barely more than before. For learning, it helps more to have your own code explained, to be pointed to typical mistakes, and to get hints that do not do the thinking for you.',
        solution:
          'The mentor offers three actions: Explain, Debug and Give hint. It is a simulation: fixed, transparent rules look for known patterns in the code and choose prepared texts to match. The same code always gets the same answer. When nothing matches, the mentor says so instead of making something up. In the exercises, a requirement check compares the code with what the task asks for, such as a function with a certain name, a loop or a return value. Each requirement is reported as recognised, not recognised or not verifiable, with a reason. Hints come in three levels, so the solution is not given away.',
        implementation:
          'The interface is built with React and TypeScript, and Vite turns it into static files. The editor is Monaco, loaded only once the page is visible. Logic is kept apart from the interface: the mentor and the exercise system live in their own modules without React. The interface talks to the mentor through one small interface, so it could later be replaced by a real service. Before any rule is applied, a preprocessing step blanks out comments and strings so that text inside them cannot trigger a rule. Exercises are plain data, and each requirement refers to a typed check. Drafts are stored in localStorage and validated when loaded. 335 automated tests with Vitest and React Testing Library cover the mentor, the exercise checks, storage and the interface.',
        challenges:
          'The hardest part was keeping the feedback honest. A check that only compares text must never call a solution correct. That is why there is a "not verifiable" category, and why the summary speaks of recognised patterns rather than passed tests. Avoiding false alarms mattered just as much: commented-out code or code inside a string must not count, while common alternative ways of writing a solution should. Both are secured with tests.',
        limitations:
          'The mentor is not an AI model and does not understand code. It recognises only a limited number of patterns, can miss real errors and can occasionally flag code that is fine. No code is executed anywhere. The requirement check therefore cannot tell whether a program works: a solution can contain every expected pattern and still be wrong, and a working solution written in an unusual way can be "not recognised". There is no progress tracking and there are no accounts, and the interface is available in English only.',
        learnings:
          'The project shows how much is gained by keeping logic and interface clearly apart: rules and exercises can be tested and extended one at a time without touching the presentation. It also shows where static checks end. Whether code really works can only be settled by running it. A learning tool should state that limit openly instead of suggesting certainty it does not have.',
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
