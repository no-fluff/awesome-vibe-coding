/*
 * Generate filtered markdown for entries that have Claude Code in their agents field
 * Filters all sections to only include entries where agents array contains "claude-code"
 */

import fs from "fs";
import path from "path";
import { loadData } from "./data-loader.js";

function renderItem(item) {
  const url = item.website || item.repo || "#";
  const summary = item.summary || "";
  const detail = item.detail || "";
  const hotPrefix = item.hot ? "🔥 " : "";

  // Add GitHub icon link if repo exists
  const githubIcon = item.repo
    ? ` <a href="${item.repo}"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a>`
    : "";

  return `<details>
  <summary><strong>${hotPrefix}<a href="${url}">${item.name}</a>${githubIcon}</strong> ${summary}</summary>

  <blockquote>${detail}</blockquote>
</details>`;
}

function renderSection(items, sectionId, categoriesConfig) {
  if (!items || !Array.isArray(items)) {
    return "";
  }

  // Filter items to only include those with claude-code in agents array
  const filteredItems = items.filter(
    (item) =>
      item.agents &&
      Array.isArray(item.agents) &&
      item.agents.includes("claude-code")
  );

  if (filteredItems.length === 0) {
    return "";
  }

  const categories = categoriesConfig[sectionId];

  if (categories && Array.isArray(categories)) {
    // Group items by category
    const groupedItems = {};
    const uncategorizedItems = [];

    filteredItems.forEach((item) => {
      if (item.category && categories.includes(item.category)) {
        if (!groupedItems[item.category]) {
          groupedItems[item.category] = [];
        }
        groupedItems[item.category].push(item);
      } else {
        uncategorizedItems.push(item);
      }
    });

    let result = "";

    // Render uncategorized items at the top
    if (uncategorizedItems.length > 0) {
      const sortedUncategorized = uncategorizedItems.sort((a, b) => {
        if (a.hot && !b.hot) return -1;
        if (!a.hot && b.hot) return 1;
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      });

      sortedUncategorized.forEach((item) => {
        result += renderItem(item) + "\n\n";
      });

      result += "<br />\n\n";
    }

    // Render items in defined categories
    categories.forEach((category) => {
      if (groupedItems[category] && groupedItems[category].length > 0) {
        if (result.length > 0 && result.indexOf("###") === -1) {
          result += "\n";
        }

        result += `### &bull; ${category}\n\n`;

        const sortedItems = groupedItems[category].sort((a, b) => {
          if (a.hot && !b.hot) return -1;
          if (!a.hot && b.hot) return 1;
          return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        });

        sortedItems.forEach((item) => {
          result += renderItem(item) + "\n\n";
        });

        result += "<br />\n\n";
      }
    });

    return result.trim();
  } else {
    // No categories, sort with hot entries first
    const sortedItems = filteredItems.sort((a, b) => {
      if (a.hot && !b.hot) return -1;
      if (!a.hot && b.hot) return 1;
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });

    return sortedItems.map((item) => renderItem(item)).join("\n\n");
  }
}

function renderCategories(sectionKey, data, categoriesConfig) {
  // Only the tools section has categories in data.toml
  if (!categoriesConfig || !categoriesConfig[sectionKey]) {
    return "";
  }

  const items = data[sectionKey];
  const categories = categoriesConfig[sectionKey];

  if (!Array.isArray(categories)) {
    return "";
  }

  // Filter items to only include those with claude-code in agents array
  const filteredItems = items
    ? items.filter(
        (item) =>
          item.agents &&
          Array.isArray(item.agents) &&
          item.agents.includes("claude-code")
      )
    : [];

  const usedCategories = new Set();

  // Find which categories are actually used
  if (filteredItems.length > 0) {
    filteredItems.forEach((item) => {
      if (item.category && categories.includes(item.category)) {
        usedCategories.add(item.category);
      }
    });
  }

  // Generate category links
  const categoryLinks = [];
  categories.forEach((category) => {
    if (usedCategories.has(category)) {
      categoryLinks.push(
        `* [${category}](#${category.toLowerCase().replace(/\s+/g, "-")})`
      );
    }
  });

  return categoryLinks.join("\n    ");
}

export function generatePimpMyClaudeCode() {
  const { data, categories } = loadData();

  // Filter each section to only include entries with claude-code in agents array
  const hasClaudeCodeEntries = (section) => {
    return (
      data[section] &&
      data[section].some(
        (item) =>
          item.agents &&
          Array.isArray(item.agents) &&
          item.agents.includes("claude-code")
      )
    );
  };

  let markdown = `# Pimp My Claude Code

Resources for enhancing your Claude Code ride.

Don't miss any fresh Claude Code tools: [Star this on GitHub](https://github.com/no-fluff/awesome-vibe-coding)

See vibe-coding resources for all agents: [View All](/)

`;

  // Build navigation only for sections that have claude-code entries
  const sections = [
    "agents",
    "apps",
    "interfaces",
    "tools",
    "workflows",
    "hosted-agents",
  ];
  const sectionsWithEntries = sections.filter((section) =>
    hasClaudeCodeEntries(section)
  );

  if (sectionsWithEntries.includes("agents")) {
    markdown += `* [**Agents**](#-agents)\n    ${renderCategories(
      "agents",
      data,
      categories
    )}\n`;
  }
  if (sectionsWithEntries.includes("apps")) {
    markdown += `* [**Vibe-coding apps**](#-vibe-coding-apps)\n    ${renderCategories(
      "apps",
      data,
      categories
    )}\n`;
  }
  if (sectionsWithEntries.includes("interfaces")) {
    markdown += `* [**Agent interfaces**](#-agent-interfaces)\n    ${renderCategories(
      "interfaces",
      data,
      categories
    )}\n`;
  }
  if (sectionsWithEntries.includes("tools")) {
    markdown += `* [**Tools and MCP servers**](#-tools-and-mcp-servers)\n    ${renderCategories(
      "tools",
      data,
      categories
    )}\n`;
  }
  if (sectionsWithEntries.includes("workflows")) {
    markdown += `* [**Vibe-coding workflows**](#-vibe-coding-workflows)\n    ${renderCategories(
      "workflows",
      data,
      categories
    )}\n`;
  }
  if (sectionsWithEntries.includes("hosted-agents")) {
    markdown += `* [**Cloud-only agents**](#-cloud-only-agents)\n    ${renderCategories(
      "hosted-agents",
      data,
      categories
    )}\n`;
  }

  markdown += "\n<br />\n\n";

  // Add sections with content
  if (hasClaudeCodeEntries("agents")) {
    markdown += `## <img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/agents.png" width="36" height="36" alt="Agents" align="absmiddle" />&nbsp; Agents

${renderSection(data.agents, "agents", categories)}

<br />

`;
  }

  if (hasClaudeCodeEntries("apps")) {
    markdown += `## <img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/apps.png" width="36" height="36" alt="Apps" align="absmiddle" />&nbsp; Vibe-coding apps

*Soup-to-nuts apps for vibing with Claude Code.*

${renderSection(data.apps, "apps", categories)}

<br />

`;
  }

  if (hasClaudeCodeEntries("interfaces")) {
    markdown += `## <img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/interfaces.png" width="36" height="36" alt="Interfaces" align="absmiddle" />&nbsp; Agent interfaces

*Use Claude Code outside the terminal.*

${renderSection(data.interfaces, "interfaces", categories)}

<br />

`;
  }

  if (hasClaudeCodeEntries("tools")) {
    markdown += `## <img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/tools.png" width="36" height="36" alt="Tools" align="absmiddle" />&nbsp; Tools and MCP servers

*Everything you can plug into Claude Code.*

${renderSection(data.tools, "tools", categories)}

<br />

`;
  }

  if (hasClaudeCodeEntries("workflows")) {
    markdown += `## <img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/workflows.png" width="36" height="36" alt="Workflows" align="absmiddle" />&nbsp; Vibe-coding workflows

*Claude Code rules and processes to help you ship higher-quality code, faster.*

${renderSection(data.workflows, "workflows", categories)}

<br />

`;
  }

  if (hasClaudeCodeEntries("hosted-agents")) {
    markdown += `## <img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/hosted-agents.png" width="36" height="36" alt="Workflows" align="absmiddle" />&nbsp; Cloud-only agents

*These closed-source agents with Claude Code integration are hosted for you.*

${renderSection(data["hosted-agents"], "hosted-agents", categories)}

<br />

`;
  }

  return markdown;
}

// If running directly, generate the file
if (import.meta.url === `file://${process.argv[1]}`) {
  const markdown = generatePimpMyClaudeCode();
  fs.writeFileSync(
    path.join(process.cwd(), "PIMP-MY-CLAUDE-CODE.md"),
    markdown
  );
  console.log("Generated PIMP-MY-CLAUDE-CODE.md");
}
