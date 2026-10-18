import type { Localized } from '../i18n/config';
import type { IconName } from './icons';

export interface SkillSubgroup {
  label: Localized<string>;
  /** A plain string where the name is the same in both languages. */
  items: (string | Localized<string>)[];
}

export interface SkillGroup {
  id: string;
  icon: IconName;
  label: Localized<string>;
  items: string[];
}

export interface ToolGroup {
  icon: IconName;
  label: Localized<string>;
  subgroups: SkillSubgroup[];
}

/** One card per group. Add a technology by adding its name to `items`. */
export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    icon: 'code',
    label: { de: 'Programmiersprachen', en: 'Programming languages' },
    items: ['Python', 'Java', 'C#'],
  },
  {
    id: 'web',
    icon: 'globe',
    label: { de: 'Webentwicklung', en: 'Web development' },
    items: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'backend',
    icon: 'database',
    label: { de: 'Backend & Datenbanken', en: 'Backend & databases' },
    items: ['PHP', 'SQL'],
  },
  {
    id: 'games',
    icon: 'gamepad',
    label: { de: 'Game Development', en: 'Game development' },
    items: ['Godot', 'GDScript'],
  },
];

/** The wide card below the skill cards. */
export const tools: ToolGroup = {
  icon: 'terminal',
  label: { de: 'Werkzeuge', en: 'Tools' },
  subgroups: [
    {
      label: { de: 'Entwicklungsumgebungen', en: 'Development environments' },
      items: ['Visual Studio Code', 'PyCharm', 'IntelliJ IDEA', 'Apache NetBeans'],
    },
    {
      label: { de: 'Versionsverwaltung & Deployment', en: 'Version control & deployment' },
      items: ['Git', 'GitHub', 'GitLab', 'Netlify'],
    },
    {
      // Godot is a tool too, but already listed under Game Development.
      // Claude Code runs in the terminal, so it belongs with the command line.
      label: { de: 'Kommandozeile & Virtualisierung', en: 'Command line & virtualisation' },
      items: [
        { de: 'Windows-Eingabeaufforderung (CMD)', en: 'Windows Command Prompt (CMD)' },
        'Claude Code',
        'Microsoft Hyper-V',
        'VMware Workstation',
      ],
    },
  ],
};
