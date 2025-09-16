import TOML from 'toml';
import fs from 'fs';
import path from 'path';

const SECTION_DEFINITIONS = [
  {
    id: 'agents',
    title: 'Agents',
    tagline: 'Autonomous coders, copilots, and CLI partners.'
  },
  {
    id: 'apps',
    title: 'Vibe-coding apps',
    tagline: 'End-to-end workbenches and hosted experiences.'
  },
  {
    id: 'interfaces',
    title: 'Agent interfaces',
    tagline: 'Dashboards, GUIs, and bridges beyond the terminal.'
  },
  {
    id: 'tools',
    title: 'Tools and MCP servers',
    tagline: 'Plugins, skills, and extensions that supercharge the stack.'
  },
  {
    id: 'workflows',
    title: 'Vibe-coding workflows',
    tagline: 'Repeatable playbooks, autopilot patterns, and rituals.'
  },
  {
    id: 'hosted-agents',
    title: 'Cloud-only agents',
    tagline: 'Ready-to-run services with nothing to install.'
  }
];

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

function normalizeItems(sectionId, items) {
  if (!Array.isArray(items)) return [];

  return items
    .map((item) => {
      const slug = slugify(item.name || `${sectionId}-${Math.random().toString(36).slice(2, 8)}`);
      return {
        ...item,
        id: item.id || slug,
        slug,
        sectionId
      };
    })
    .sort((a, b) => {
      const hotScore = Number(!!b.hot) - Number(!!a.hot);
      if (hotScore !== 0) return hotScore;
      return (a.name || '').toLowerCase().localeCompare((b.name || '').toLowerCase());
    });
}

export function loadData() {
  const dataPath = path.join(process.cwd(), 'data.toml');
  const fileContents = fs.readFileSync(dataPath, 'utf-8');
  const parsed = TOML.parse(fileContents);

  const categories = parsed.categories || {};

  const sections = SECTION_DEFINITIONS.map((definition) => {
    const items = normalizeItems(definition.id, parsed[definition.id]);
    return {
      ...definition,
      items
    };
  });

  const entries = sections.flatMap((section) =>
    section.items.map((item) => ({
      ...item,
      sectionId: section.id,
      sectionTitle: section.title
    }))
  );

  return {
    sections,
    categories,
    entries
  };
}

export { SECTION_DEFINITIONS };
