import type { ImageMetadata } from 'astro';
import type { Localized } from '../i18n/config';

// Screenshots of the live applications (real captures, with demo data).
import mentorExercises from '../assets/projects/ai-coding-mentor-exercises.webp';
import mentorPractice from '../assets/projects/ai-coding-mentor-practice.webp';
import mentorWorkspace from '../assets/projects/ai-coding-mentor-workspace.webp';
import everboundBat from '../assets/projects/everbound-bat.webp';
import everboundCave from '../assets/projects/everbound-cave.webp';
import everboundGameplay from '../assets/projects/everbound-gameplay.webp';
import everboundMenu from '../assets/projects/everbound-menu.webp';
import formaHero from '../assets/projects/forma-studio-hero.webp';
import formaPricing from '../assets/projects/forma-studio-pricing.webp';
import formaProjects from '../assets/projects/forma-studio-projects.webp';
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
 *
 * Order: featured projects first, in the order shown on the home page, then
 * the smaller ones under "More projects".
 */

export type ProjectStatus = 'completed' | 'in-development' | 'prototype' | 'planned';
export type CoverVariant = 'grid' | 'dialog' | 'timeline' | 'scan' | 'terminal';
/** Used by the filter above the project list. */
export type ProjectCategory = 'web-app' | 'game' | 'website' | 'tool';
export const projectCategories: ProjectCategory[] = ['web-app', 'game', 'website', 'tool'];
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
  category: ProjectCategory;
  /** Shown large under "Featured projects"; all others appear under "More projects". */
  featured?: boolean;
  /** Placeholder artwork, used as long as `image` is not set. */
  cover: CoverVariant;
  accent: Accent;
  image?: ImageMetadata;
  imageAlt?: Localized<string>;
  screenshots?: Screenshot[];
  /**
   * The images are pixel art. They are then shown from the original files,
   * without resizing or re-compression, and scaled with hard pixel edges, so
   * they stay sharp. The page header shows the whole picture instead of a crop.
   */
  pixelArt?: boolean;
  stack: string[];
  demoUrl?: string;
  /** Replaces the usual "Live demo" label and adds a prominent button on the detail page, e.g. "Play game". */
  demoLabel?: Localized<string>;
  /** Set when there is nothing to try online, e.g. a console program, so no "to follow" note is shown. */
  hideDemo?: boolean;
  repoUrl?: string;
  /** Set when no public repository is planned for now, so no "to follow" note is shown. */
  hideRepo?: boolean;
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
    category: 'web-app',
    featured: true,
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
    category: 'web-app',
    featured: true,
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
          'AI Coding Mentor ist eine Webanwendung zum Programmierenlernen mit zwei Bereichen: einem Arbeitsbereich mit Code-Editor und Mentor sowie einer Übungsbibliothek mit 18 Aufgaben in Python, JavaScript und Java. Sie ist als Prototyp in Version 2.0 veröffentlicht und läuft vollständig im Browser. Sie ersetzt einen früheren Python-Prototyp und wurde mit Unterstützung von Claude Code entwickelt.',
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
          'AI Coding Mentor is a web application for learning to program, with two areas: a workspace with a code editor and a mentor, and an exercise library with 18 tasks in Python, JavaScript and Java. It is published as a prototype in version 2.0 and runs entirely in the browser. It replaces an earlier Python prototype and was developed with assistance from Claude Code.',
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
    slug: 'everbound',
    status: 'prototype',
    category: 'game',
    featured: true,
    cover: 'grid',
    accent: 'violet',
    image: everboundGameplay,
    imageAlt: {
      de: 'Spielszene aus Everbound: Die Spielfigur sammelt Münzen auf einer Plattform über einem Stachelfeld, oben rechts die Herzanzeige und der Münzzähler',
      en: 'Gameplay scene from Everbound: the player character collects coins on a platform above a field of spikes, with the hearts and coin counter in the top right',
    },
    screenshots: [
      {
        src: everboundMenu,
        alt: {
          de: 'Titelbild von Everbound mit Pixel-Art-Landschaft bei Nacht, Logo und dem Hinweis «Press here to start»',
          en: 'Everbound title screen with a pixel-art landscape at night, the logo and the prompt "Press here to start"',
        },
      },
      {
        src: everboundBat,
        alt: {
          de: 'Spielszene aus Everbound: Die Spielfigur springt in der Höhle, links fliegt eine Fledermaus, rechts schweben Münzen',
          en: 'Gameplay scene from Everbound: the player character jumps in the cave, with a bat flying on the left and coins floating on the right',
        },
      },
      {
        src: everboundCave,
        alt: {
          de: 'Spielszene aus Everbound: Die Spielfigur steht vor einem Stachelfeld, darüber Münzen und Kristalle an der Höhlendecke',
          en: 'Gameplay scene from Everbound: the player character stands in front of a field of spikes, with coins above and crystals on the cave ceiling',
        },
      },
    ],
    stack: ['Godot 4.5', 'GDScript', '2D Game Development', 'Pixel Art'],
    demoUrl: 'https://jasmin-everbound.netlify.app',
    demoLabel: { de: 'Jetzt spielen', en: 'Play game' },
    hideRepo: true,
    pixelArt: true,
    title: { de: 'Everbound', en: 'Everbound' },
    tagline: { de: '2D-Pixel-Art-Plattformer', en: '2D Pixel Art Platformer' },
    summary: {
      de: 'Ein Fantasy-Plattformer in Pixel-Art, entwickelt mit Godot: durch eine Höhle laufen und springen, Münzen sammeln, Gegnern und Fallen ausweichen und Kristallsplitter finden. Ein spielbarer Prototyp, der direkt im Browser läuft, mit Tastatur oder Touch.',
      en: 'A fantasy platformer in pixel art, built with Godot: run and jump through a cave, collect coins, avoid enemies and traps, and find crystal shards. A playable prototype that runs directly in the browser, with keyboard or touch.',
    },
    features: {
      de: [
        'Laufen und Springen mit eigener Bewegungsphysik',
        'Nahkampfangriff mit eigener Trefferzone',
        'Lebenssystem mit Herzen, Rückstoss bei Treffern und Respawn',
        'Sammelbare Münzen mit Zähler',
        'Truhen, aus denen Kristallsplitter erscheinen',
        'Gegner und Hindernisse wie Fledermäuse, Stacheln und Pfeile',
        'Bewegliche Plattformen und Sprungfelder',
        'Mitlaufende Kamera und Parallax-Hintergründe',
        'Level-Übergänge mit Überblendung und Abschlussbildschirm mit Punktzahl',
        'Hauptmenü und Einstellungen mit Lautstärkeregler',
        'Steuerung per Tastatur oder Touch-Buttons',
      ],
      en: [
        'Running and jumping with custom movement physics',
        'A melee attack with its own hitbox',
        'A health system with hearts, knockback when hit, and respawning',
        'Collectible coins with a counter',
        'Chests that release crystal shards',
        'Enemies and hazards such as bats, spikes and arrows',
        'Moving platforms and jump pads',
        'A camera that follows the player, and parallax backgrounds',
        'Level transitions with fades, and a completion screen with a score',
        'A main menu and settings with a volume slider',
        'Keyboard controls or on-screen touch buttons',
      ],
    },
    caseStudy: {
      de: {
        overview:
          'Everbound ist ein 2D-Plattformer mit Fantasy-Thema. Die Spielfigur läuft und springt durch eine Höhle, sammelt Münzen, weicht Gegnern und Fallen aus und findet Kristallsplitter. Das Projekt verbindet Programmierung, Leveldesign, Pixel-Art und Spielmechanik. Es ist ein spielbarer Prototyp und kein fertiges Spiel. Die Browser-Version ist veröffentlicht und lässt sich mit Tastatur oder Touch spielen.',
        problem:
          'Ein Plattformer wirkt einfach, besteht aber aus vielen Systemen, die zusammenpassen müssen: Bewegung, Kollisionen, Leben, Gegner, Sammelobjekte, Kamera, Menüs und Ton. Ziel des Projekts war, diese Systeme selbst umzusetzen und zu einem spielbaren Ganzen zu verbinden.',
        solution:
          'Die Spielfigur hat eine eigene Bewegungsphysik mit Schwerkraft und Sprung, einen Nahkampfangriff und drei Herzen. Bei einem Treffer wird sie zurückgestossen, ohne Herzen startet sie am Ausgangspunkt neu. In den Leveln liegen Münzen, die ein Zähler erfasst, und Truhen, aus denen Kristallsplitter erscheinen. Fledermäuse, Stacheln und Pfeile machen den Weg schwieriger, bewegliche Plattformen und Sprungfelder bringen Abwechslung. Am Ende eines Levels fasst ein Abschlussbildschirm Münzen, Zeit und Tode zu einer Punktzahl zusammen.',
        implementation:
          'Das Spiel ist mit Godot 4.5 und GDScript umgesetzt. Jedes Spielelement ist eine eigene Szene mit eigenem Skript, zum Beispiel Spielfigur, Münze, Truhe, Fledermaus oder Plattform. Die Level setzen diese Szenen zusammen und verwenden eine TileMap für das Gelände. Die Elemente sprechen über Signale und Gruppen miteinander: Ein Hindernis meldet eine Berührung, und die Spielfigur reagiert darauf. Die Spielfigur ist ein CharacterBody2D mit Animationen für Laufen, Springen, Angriff, Treffer und Tod. Übergänge zwischen Szenen und die Musik werden mit Tweens ein- und ausgeblendet. Für den Browser wird das Projekt als Web-Version exportiert; diese Veröffentlichung wurde mit Unterstützung von Claude Code vorbereitet.',
        challenges:
          'Die Browser-Version brauchte eigene Anpassungen. Ein «Quit»-Button ergibt in einem Browser-Tab keinen Sinn und liess das Spiel dort einfrieren; er wird in der Web-Version ausgeblendet. Ein Signal war doppelt verbunden, einmal im Editor und einmal im Skript, was beim Laden eines Levels Fehlermeldungen auslöste. Und die Touch-Buttons sollten auf dem Smartphone sichtbar sein, bei Tastaturbedienung aber nicht stören: Sie erscheinen nun auf Touch-Geräten und beim ersten Berühren des Bildschirms und verschwinden, sobald eine Taste gedrückt wird.',
        limitations:
          'Everbound ist ein Prototyp. In der Browser-Version wurde der Anfang des ersten Levels getestet; weitere Bereiche sind im Projekt angelegt, aber nicht vollständig geprüft, und ein drittes Level ist erst als leere Szene vorhanden. Das Spiel speichert keinen Fortschritt. Der erste Aufruf lädt rund 43 MB. Getestet wurde in einem Chromium-Browser; auf echten Smartphones und in anderen Browsern steht ein Test noch aus.',
        learnings:
          'Das Projekt zeigt, dass ein Spiel aus vielen kleinen Systemen besteht, die erst im Zusammenspiel Spass machen, und dass eigene Szenen pro Element diese Systeme überschaubar halten. Es zeigt auch, dass eine Veröffentlichung im Browser ein eigener Arbeitsschritt ist: Was auf dem Desktop funktioniert, muss dort noch einmal geprüft werden.',
      },
      en: {
        overview:
          'Everbound is a 2D platformer with a fantasy theme. The player character runs and jumps through a cave, collects coins, avoids enemies and traps, and finds crystal shards. The project combines programming, level design, pixel art and game mechanics. It is a playable prototype, not a finished game. The browser version is published and can be played with a keyboard or by touch.',
        problem:
          'A platformer looks simple but consists of many systems that have to fit together: movement, collisions, health, enemies, collectibles, camera, menus and sound. The aim of the project was to build these systems and connect them into something playable.',
        solution:
          'The player character has its own movement physics with gravity and jumping, a melee attack and three hearts. A hit knocks it back, and with no hearts left it restarts from the starting point. The levels contain coins, tracked by a counter, and chests that release crystal shards. Bats, spikes and arrows make the way harder, while moving platforms and jump pads add variety. At the end of a level, a completion screen combines coins, time and deaths into a score.',
        implementation:
          'The game is built with Godot 4.5 and GDScript. Every game element is its own scene with its own script, for example the player, a coin, a chest, a bat or a platform. Levels assemble these scenes and use a TileMap for the terrain. Elements talk to each other through signals and groups: a hazard reports a touch, and the player reacts to it. The player is a CharacterBody2D with animations for running, jumping, attacking, being hit and dying. Scene transitions and music fade in and out with tweens. For the browser, the project is exported as a web build; this release was prepared with assistance from Claude Code.',
        challenges:
          'The browser version needed adjustments of its own. A "Quit" button makes no sense in a browser tab and froze the game there, so it is hidden in the web build. One signal was connected twice, once in the editor and once in a script, which caused error messages whenever a level loaded. And the touch buttons had to be visible on a phone without getting in the way of keyboard play: they now appear on touch devices and on the first touch of the screen, and disappear as soon as a key is pressed.',
        limitations:
          'Everbound is a prototype. In the browser version, the beginning of the first level has been tested; further areas exist in the project but have not been fully checked, and a third level is only an empty scene so far. The game does not save progress. The first visit downloads about 43 MB. Testing was done in a Chromium browser; real phones and other browsers have not been tested yet.',
        learnings:
          'The project shows that a game consists of many small systems that only become fun together, and that giving each element its own scene keeps those systems manageable. It also shows that publishing in the browser is a step of its own: what works on the desktop has to be checked again there.',
      },
    },
  },
  {
    slug: 'forma-studio',
    status: 'completed',
    category: 'website',
    featured: true,
    cover: 'grid',
    accent: 'lime',
    image: formaHero,
    imageAlt: {
      de: 'Startseite von Forma Studio: dunkler Hintergrund mit violettem Farbverlauf, Schlagzeile «Websites für Firmen mit Ambitionen» und zwei Buttons',
      en: 'Forma Studio home page: a dark background with a violet gradient, the headline "Websites für Firmen mit Ambitionen" and two buttons',
    },
    screenshots: [
      {
        src: formaProjects,
        alt: {
          de: 'Projektbereich von Forma Studio mit drei Konzeptprojekten: Café Lumière, NOVA Studio und ATELIER 27',
          en: 'Forma Studio projects section with three concept projects: Café Lumière, NOVA Studio and ATELIER 27',
        },
      },
      {
        src: formaPricing,
        alt: {
          de: 'Preisbereich von Forma Studio mit Einstiegspreisen für neue und bestehende Websites und einem Hinweis zu Domain und Hosting',
          en: 'Forma Studio pricing section with starting prices for new and existing websites, and a note on domain and hosting',
        },
      },
    ],
    stack: ['Astro', 'HTML', 'CSS', 'JavaScript', 'Netlify Forms'],
    demoUrl: 'https://forma-webdesign.netlify.app/',
    demoLabel: { de: 'Website ansehen', en: 'Visit website' },
    repoUrl: 'https://github.com/Jasmin908/forma-studio',
    title: { de: 'Forma Studio', en: 'Forma Studio' },
    tagline: { de: 'Website für mein Webdesign-Studio', en: 'Website for my web design studio' },
    summary: {
      de: 'Die zweisprachige Website von Forma Studio, meinem Webdesign-Angebot für kleine Unternehmen in der Schweiz: Leistungen, Einstiegspreise, der Ablauf eines Projekts, drei Konzept-Websites und ein Kontaktformular.',
      en: 'The bilingual website of Forma Studio, my web design offer for small businesses in Switzerland: services, starting prices, how a project runs, three concept websites and a contact form.',
    },
    features: {
      de: [
        'Zweisprachig: Deutsch als Hauptsprache, Englisch unter /en/',
        'Responsives Layout für Desktop, Tablet und Smartphone',
        'Leistungen und Preisliste, pro Sprache einmal definiert und in Leistungen, Preisen und Kontaktformular wiederverwendet',
        'Ablauf eines Projekts in fünf Schritten',
        'Portfolio mit drei Konzept-Websites für erfundene Unternehmen, jede mit eigener Live-Demo',
        'Kontaktformular über Netlify Forms, mit Honeypot-Feld und Mindestzeit gegen Spam',
        'Animationen beim Scrollen und dezente Hintergrundbewegungen, reduziert bei «Bewegung reduzieren»',
        'Impressum und Datenschutzerklärung in beiden Sprachen',
      ],
      en: [
        'Bilingual: German as the main language, English under /en/',
        'Responsive layout for desktop, tablet and phone',
        'Services and a price list, defined once per language and reused by the services, the prices and the contact form',
        'How a project runs, in five steps',
        'A portfolio of three concept websites for fictional businesses, each with its own live demo',
        'A contact form through Netlify Forms, with a honeypot field and a minimum time against spam',
        'Scroll animations and subtle background motion, reduced when "reduce motion" is set',
        'Legal notice and privacy policy in both languages',
      ],
    },
    caseStudy: {
      de: {
        overview:
          'Forma Studio ist mein Webdesign-Angebot für kleine Unternehmen in der Schweiz, und diese Website stellt es vor. Sie ist veröffentlicht und zeigt Leistungen, Preise, den Ablauf eines Projekts und drei Konzept-Websites. Anfragen kommen über ein Kontaktformular.',
        problem:
          'Wer ein Webdesign-Angebot startet, hat noch keine Kundenprojekte, die sich zeigen lassen. Gleichzeitig wollen Interessierte schnell sehen, was es kostet, wie die Zusammenarbeit abläuft und wie die Ergebnisse aussehen.',
        solution:
          'Die Website beantwortet diese Fragen auf einer Seite: Leistungen mit Einstiegspreisen, ein Ablauf in fünf Schritten und ein Portfolio. Statt Kundenarbeiten zeigt das Portfolio drei Konzept-Websites für erfundene Unternehmen aus Gastronomie, Beauty und Architektur. Sie sind klar als Konzeptprojekte gekennzeichnet.',
        implementation:
          'Die Website ist mit Astro gebaut und wird als statische Seite auf Netlify veröffentlicht. Alle Texte liegen pro Sprache in einer eigenen Datei; Leistungen und Preise sind dort einmal definiert und speisen den Leistungsbereich, die Preisliste und die Auswahl im Kontaktformular. Das Formular läuft über Netlify Forms und braucht keine API-Schlüssel. Browser-Icons und Bilder für das Teilen in sozialen Netzwerken erzeugt ein eigenes Skript. Die Website wurde mit Unterstützung von Claude Code entwickelt.',
        challenges:
          'Wichtig war, ehrlich zu bleiben: keine erfundenen Kunden, Bewertungen oder Erfahrungen, und Konzeptprojekte nie als Kundenaufträge darstellen. Dazu kam der Spamschutz ohne Captcha und ohne zusätzliche Dienste, gelöst mit einem versteckten Feld, einer Mindestzeit vor dem Absenden und dem Filter von Netlify.',
        limitations:
          'Das Kontaktformular funktioniert nur auf der veröffentlichten Website; in der lokalen Vorschau prüft es die Eingaben, sendet aber nichts. Das Portfolio enthält bisher nur Konzeptprojekte.',
      },
      en: {
        overview:
          'Forma Studio is my web design offer for small businesses in Switzerland, and this website presents it. It is published and shows the services, prices, how a project runs and three concept websites. Enquiries come in through a contact form.',
        problem:
          'Starting a web design offer means having no client projects to show yet. At the same time, people want to see quickly what it costs, how working together runs and what the results look like.',
        solution:
          'The website answers these questions on one page: services with starting prices, a process in five steps and a portfolio. Instead of client work, the portfolio shows three concept websites for fictional businesses in hospitality, beauty and architecture, clearly marked as concept projects.',
        implementation:
          'The website is built with Astro and published as a static site on Netlify. All texts live in one file per language; services and prices are defined there once and feed the services section, the price list and the choice in the contact form. The form runs through Netlify Forms and needs no API keys. A script of its own generates the browser icons and the images for sharing on social networks. The website was developed with assistance from Claude Code.',
        challenges:
          'Staying honest mattered most: no invented clients, reviews or experience, and concept projects never presented as client work. Spam protection was another point, without a captcha or extra services: a hidden field, a minimum time before sending and the Netlify filter.',
        limitations:
          'The contact form only works on the published website; in the local preview it checks the entries but sends nothing. So far the portfolio contains concept projects only.',
      },
    },
  },
  {
    slug: 'image-downloader',
    status: 'completed',
    category: 'tool',
    featured: true,
    cover: 'terminal',
    accent: 'blue',
    stack: ['C#', '.NET', 'LINQ', 'CSV', 'HttpClient', 'Async/Await'],
    hideDemo: true,
    hideRepo: true,
    title: { de: 'Image Downloader & Article Synchronizer', en: 'Image Downloader & Article Synchronizer' },
    tagline: { de: 'Artikelabgleich & Bilddownload', en: 'Article Sync & Image Download' },
    summary: {
      de: 'Ein Konsolenprogramm in C#, das eine aktuelle mit einer früheren Artikelliste vergleicht, neue und entfernte Artikel erkennt, die Ergebnisse als CSV speichert und für jeden neuen Artikel das Produktbild herunterlädt.',
      en: 'A C# console program that compares a current article list with a previous one, detects added and removed articles, saves the results as CSV and downloads the product image for every new article.',
    },
    features: {
      de: [
        'Einlesen der aktuellen und der früheren Artikelliste aus CSV-Dateien, ohne Kopfzeile und Leerzeilen',
        'Abgleich mit LINQ, unabhängig von Gross- und Kleinschreibung',
        'Erkennung neuer und entfernter Artikel',
        'Export der Ergebnisse in zwei CSV-Dateien',
        'Asynchroner Download der Bilder neuer Artikel mit HttpClient',
        'Ordner für die Bilder wird bei Bedarf angelegt',
        'Meldung pro Artikel, ob der Download geklappt hat',
        'Die aktuelle Liste wird am Ende zur Vergleichsbasis für den nächsten Lauf',
      ],
      en: [
        'Reads the current and the previous article list from CSV files, skipping the header and empty lines',
        'Compares them with LINQ, ignoring upper and lower case',
        'Detects added and removed articles',
        'Exports the results to two CSV files',
        'Downloads the images of new articles asynchronously with HttpClient',
        'Creates the image folder when needed',
        'Reports for each article whether the download worked',
        'Stores the current list as the basis for the next comparison',
      ],
    },
    caseStudy: {
      de: {
        overview:
          'Das Programm gleicht zwei Artikellisten ab und lädt für neue Artikel automatisch die Produktbilder herunter. Es ist eine Konsolenanwendung in C# auf .NET.',
        problem:
          'Wenn sich ein Artikelsortiment ändert, müssen für neue Artikel Bilder beschafft und entfernte Artikel erkannt werden. Von Hand heisst das: Listen vergleichen, Nummern abschreiben, Bilder einzeln herunterladen. Das kostet Zeit und führt leicht zu Fehlern.',
        solution:
          'Das Programm liest die aktuelle und die frühere Liste, berechnet daraus die neuen und die entfernten Artikel und speichert beide Ergebnisse als CSV. Für jeden neuen Artikel holt es das Bild von einem Bilddienst und legt es unter der Artikelnummer ab. Zum Schluss wird die aktuelle Liste zur Vergleichsbasis für den nächsten Lauf.',
        implementation:
          'Die Listen werden mit File.ReadAllLines gelesen und mit LINQ bereinigt: Kopfzeile überspringen, Leerzeilen entfernen, Leerzeichen kürzen. Except mit StringComparer.OrdinalIgnoreCase liefert die Unterschiede in beide Richtungen. Die Downloads laufen mit HttpClient und async/await; der Statuscode jeder Antwort wird geprüft, bevor das Bild gespeichert wird.',
        challenges:
          'Die Artikelnummern in der Liste beginnen mit einem «W», der Bilddienst erwartet sie aber ohne. Das Programm entfernt das Zeichen deshalb nur für die Anfrage und behält die ursprüngliche Nummer als Dateiname. Ausserdem darf eine leere aktuelle Liste die gespeicherte Vergleichsbasis nicht überschreiben; das wird vor dem Speichern geprüft.',
        limitations:
          'Die Bilder werden nacheinander geladen, ohne erneuten Versuch bei einem Fehler, und immer als .jpg gespeichert. Dateinamen sind im Code festgelegt. Die Adresse und der Zugangsschlüssel des Bilddienstes stehen im Code; vor einer Veröffentlichung des Quellcodes gehören sie in eine Umgebungsvariable. Der Quellcode ist darum nicht öffentlich.',
      },
      en: {
        overview:
          'The program compares two article lists and automatically downloads the product images for new articles. It is a C# console application on .NET.',
        problem:
          'When a range of articles changes, images have to be found for the new articles and removed articles have to be identified. By hand, that means comparing lists, copying numbers and downloading images one at a time. It takes time and invites mistakes.',
        solution:
          'The program reads the current and the previous list, works out the added and the removed articles and saves both results as CSV. For every new article it fetches the image from an image service and stores it under the article number. Finally, the current list becomes the basis for the next run.',
        implementation:
          'The lists are read with File.ReadAllLines and cleaned with LINQ: skip the header, drop empty lines, trim spaces. Except with StringComparer.OrdinalIgnoreCase gives the differences in both directions. Downloads use HttpClient with async/await, and the status code of every response is checked before the image is saved.',
        challenges:
          'The article numbers in the list start with a "W", but the image service expects them without it. The program therefore removes the letter for the request only and keeps the original number as the file name. Also, an empty current list must not overwrite the stored basis for comparison, so this is checked before saving.',
        limitations:
          'Images are downloaded one after another, with no retry after an error, and are always saved as .jpg. File names are fixed in the code. The address and the access key of the image service are in the code; before the source code is published they belong in an environment variable. That is why the source code is not public.',
      },
    },
  },
  {
    slug: 'week-planner',
    status: 'completed',
    category: 'tool',
    cover: 'terminal',
    accent: 'violet',
    stack: ['C#', '.NET', 'JSON', 'File I/O'],
    hideDemo: true,
    hideRepo: true,
    title: { de: 'Markdown Week Planner Generator', en: 'Markdown Week Planner Generator' },
    tagline: { de: 'Planungsdateien auf Knopfdruck', en: 'Planning Files on Demand' },
    summary: {
      de: 'Eine Konsolenanwendung in C#, die für einen wählbaren Zeitraum Markdown-Notizen für jeden Arbeitstag anlegt, geordnet in Ordnern nach Jahr, Monat und Kalenderwoche.',
      en: 'A C# console application that creates a Markdown note for every working day of a chosen period, sorted into folders by year, month and calendar week.',
    },
    features: {
      de: [
        'Startmonat und Anzahl Monate werden beim Start eingegeben',
        'Ordner für Jahr, Monat und Kalenderwoche werden automatisch angelegt',
        'Eine Markdown-Datei pro Tag, von Montag bis Freitag',
        'Vorlage mit Platzhaltern für Datum und Wochentag',
        'Kalenderwochen nach ISO 8601',
        'Speicherort und Vorlage in einer JSON-Konfiguration',
        'Bestehende Dateien werden nie überschrieben',
      ],
      en: [
        'Start month and number of months are entered at startup',
        'Folders for year, month and calendar week are created automatically',
        'One Markdown file per day, Monday to Friday',
        'A template with placeholders for the date and the weekday',
        'Calendar weeks according to ISO 8601',
        'Storage location and template in a JSON configuration',
        'Existing files are never overwritten',
      ],
    },
    caseStudy: {
      de: {
        overview:
          'Der Week Planner Generator ist ein Konsolenprogramm in C#. Er erzeugt für einen wählbaren Zeitraum eine Ordnerstruktur mit einer Markdown-Notiz für jeden Arbeitstag.',
        problem:
          'Wer seine Woche in Markdown-Dateien plant, legt Ordner und Dateien immer wieder von Hand an und kopiert dieselbe Vorlage. Das ist eintönig, und bei Kalenderwochen schleichen sich leicht Fehler ein.',
        solution:
          'Nach der Eingabe von Startmonat und Anzahl Monaten legt das Programm für jeden Monat die Ordner an, ermittelt die Wochen und erzeugt für Montag bis Freitag je eine Datei aus der Vorlage, mit Datum und Wochentag bereits eingesetzt. Wo schon eine Datei liegt, bleibt sie unverändert.',
        implementation:
          'Die Einstellungen werden mit System.Text.Json in eine eigene Settings-Klasse gelesen. Datumsangaben rechnet das Programm mit DateTime, die Kalenderwoche liefert ISOWeek.GetWeekOfYear. Ordner entstehen mit Directory.CreateDirectory, das bestehende Ordner einfach übernimmt. Vor dem Schreiben prüft File.Exists, ob eine Datei schon vorhanden ist.',
        challenges:
          'Knifflig war die Wochenlogik: Das Programm sucht den ersten Montag des Monats, geht von dort Woche für Woche weiter und hört am Monatsende mitten in der Woche auf. Die Kalenderwoche richtet sich nach ISO 8601, damit die Nummern zu üblichen Kalendern passen, auch an Jahreswechseln.',
        limitations:
          'Arbeitstage vor dem ersten Montag eines Monats erhalten keine Datei. Eingaben werden nicht geprüft, ein falsches Format beendet das Programm mit einem Fehler. Die Pfade sind für Windows geschrieben.',
      },
      en: {
        overview:
          'The Week Planner Generator is a C# console program. For a chosen period, it creates a folder structure with a Markdown note for every working day.',
        problem:
          'Planning your week in Markdown files means creating folders and files by hand again and again and copying the same template. It is repetitive, and calendar weeks are easy to get wrong.',
        solution:
          'After the start month and the number of months are entered, the program creates the folders for each month, works out the weeks and writes one file per day from Monday to Friday from the template, with the date and weekday already filled in. Where a file already exists, it is left unchanged.',
        implementation:
          'The settings are read into a Settings class of their own with System.Text.Json. Dates are calculated with DateTime, and ISOWeek.GetWeekOfYear provides the calendar week. Folders are created with Directory.CreateDirectory, which simply accepts existing ones. Before writing, File.Exists checks whether a file is already there.',
        challenges:
          'The week logic was the tricky part: the program looks for the first Monday of the month, moves on week by week from there and stops at the end of the month, even mid-week. Calendar weeks follow ISO 8601 so the numbers match common calendars, including around the turn of the year.',
        limitations:
          'Working days before the first Monday of a month get no file. Input is not validated, so a wrong format ends the program with an error. The paths are written for Windows.',
      },
    },
  },
  {
    slug: 'python-task-manager',
    status: 'completed',
    category: 'tool',
    cover: 'terminal',
    accent: 'lime',
    stack: ['Python'],
    hideDemo: true,
    hideRepo: true,
    title: { de: 'Python Task Manager', en: 'Python Task Manager' },
    tagline: { de: 'Aufgabenliste im Terminal', en: 'A To-Do List in the Terminal' },
    summary: {
      de: 'Ein kleines Kommandozeilenprogramm in Python: Über ein Menü lassen sich Aufgaben anzeigen, hinzufügen und entfernen. Eine Übung zu Funktionen, Schleifen, Listen und Fehlerbehandlung.',
      en: 'A small command-line program in Python: a menu lets you view, add and remove tasks. An exercise in functions, loops, lists and error handling.',
    },
    features: {
      de: [
        'Interaktives Menü mit vier Optionen, das sich wiederholt, bis man es beendet',
        'Nummerierte Aufgabenliste',
        'Aufgaben hinzufügen und über ihre Nummer entfernen',
        'Ungültige Nummern werden mit try/except abgefangen',
        'Hinweis, wenn die Liste leer ist',
      ],
      en: [
        'An interactive menu with four options that repeats until you exit',
        'A numbered task list',
        'Add tasks and remove them by their number',
        'Invalid numbers are caught with try/except',
        'A message when the list is empty',
      ],
    },
    caseStudy: {
      de: {
        overview:
          'Der Task Manager ist ein kurzes Python-Programm für die Kommandozeile. Er verwaltet eine Aufgabenliste über ein einfaches Menü.',
        problem:
          'Das Projekt ist eine Übung: Grundlagen wie Funktionen, Schleifen, Listen und Benutzereingaben sollten in einem kleinen, vollständigen Programm zusammenkommen.',
        solution:
          'Eine Endlosschleife zeigt das Menü, liest die Auswahl und ruft die passende Aktion auf, bis «Beenden» gewählt wird. Die Anzeige der Liste steckt in einer eigenen Funktion, die auch vor dem Entfernen genutzt wird.',
        implementation:
          'Die Aufgaben liegen in einer Python-Liste. enumerate mit Startwert 1 nummeriert sie für die Anzeige, append fügt hinzu und pop entfernt. Eingaben werden mit input gelesen und für das Entfernen in eine Zahl umgewandelt.',
        challenges:
          'Die Liste zählt ab 0, Menschen zählen ab 1: Die eingegebene Nummer wird deshalb vor dem Entfernen um eins verringert. Eingaben, die keine gültige Nummer sind, fängt ein try/except ab, statt das Programm abstürzen zu lassen.',
        limitations:
          'Die Aufgaben existieren nur, solange das Programm läuft, und werden nicht gespeichert. Eine ungültige Menüauswahl zeigt einfach das Menü erneut, ohne Hinweis. Das try/except fängt alle Fehler ab statt nur die erwarteten.',
      },
      en: {
        overview:
          'The Task Manager is a short Python program for the command line. It manages a task list through a simple menu.',
        problem:
          'The project is an exercise: basics such as functions, loops, lists and user input were meant to come together in one small, complete program.',
        solution:
          'An endless loop shows the menu, reads the choice and runs the matching action until "Exit" is chosen. Showing the list is a function of its own, which is also used before removing a task.',
        implementation:
          'The tasks are kept in a Python list. enumerate with a start value of 1 numbers them for display, append adds and pop removes. Input is read with input and converted to a number for removing.',
        challenges:
          'The list counts from 0, people count from 1, so the number entered is reduced by one before removing. Input that is not a valid number is caught by a try/except instead of crashing the program.',
        limitations:
          'Tasks only exist while the program is running and are not saved. An invalid menu choice simply shows the menu again, without a message. The try/except catches every error rather than only the expected ones.',
      },
    },
  },
  {
    slug: 'smart-study-planner',
    status: 'planned',
    category: 'web-app',
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
    category: 'tool',
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
