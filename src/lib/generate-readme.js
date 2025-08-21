import fs from 'fs';
import path from 'path';
import ejs from 'ejs';
import { loadData } from './data-loader.js';

function renderItem(item) {
  const url = item.website || item.repo || '#';
  const summary = item.summary || '';
  const detail = item.detail || '';
  const hotPrefix = item.hot ? '🔥 ' : '';

  // Add GitHub icon link if repo exists
  const githubIcon = item.repo
    ? ` <a href="${item.repo}"><img src="https://raw.githubusercontent.com/no-fluff/awesome-vibe-coding/main/src/images/github.svg" width="16" height="16" alt="GitHub" align="absmiddle" /></a>`
    : '';

  return `<details>
  <summary><strong>${hotPrefix}<a href="${url}">${item.name}</a>${githubIcon}</strong> ${summary}</summary>

  <blockquote>${detail}</blockquote>
</details>`;
}

function renderSection(items, sectionId, categoriesConfig) {
  if (!items || !Array.isArray(items)) {
    return '';
  }

  const categories = categoriesConfig[sectionId];

  if (categories && Array.isArray(categories)) {
    // Group items by category
    const groupedItems = {};
    const uncategorizedItems = [];

    items.forEach((item) => {
      if (item.category && categories.includes(item.category)) {
        if (!groupedItems[item.category]) {
          groupedItems[item.category] = [];
        }
        groupedItems[item.category].push(item);
      } else {
        uncategorizedItems.push(item);
      }
    });

    let result = '';

    // Render uncategorized items at the top
    if (uncategorizedItems.length > 0) {
      const sortedUncategorized = uncategorizedItems.sort((a, b) => {
        if (a.hot && !b.hot) return -1;
        if (!a.hot && b.hot) return 1;
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      });

      sortedUncategorized.forEach((item) => {
        result += renderItem(item) + '\n\n';
      });

      result += '<br />\n\n';
    }

    // Render items in defined categories
    categories.forEach((category) => {
      if (groupedItems[category] && groupedItems[category].length > 0) {
        if (result.length > 0 && result.indexOf('###') === -1) {
          result += '\n';
        }

        result += `### &bull; ${category}\n\n`;

        const sortedItems = groupedItems[category].sort((a, b) => {
          if (a.hot && !b.hot) return -1;
          if (!a.hot && b.hot) return 1;
          return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        });

        sortedItems.forEach((item) => {
          result += renderItem(item) + '\n\n';
        });

        result += '<br />\n\n';
      }
    });

    return result.trim();
  } else {
    // No categories, sort with hot entries first
    const sortedItems = items.sort((a, b) => {
      if (a.hot && !b.hot) return -1;
      if (!a.hot && b.hot) return 1;
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });

    return sortedItems.map((item) => renderItem(item)).join('\n\n');
  }
}

function renderCategories(sectionKey, data, categoriesConfig) {
  // Only the tools section has categories in data.toml
  if (!categoriesConfig || !categoriesConfig[sectionKey]) {
    return '';
  }

  const items = data[sectionKey];
  const categories = categoriesConfig[sectionKey];
  
  if (!Array.isArray(categories)) {
    return '';
  }
  
  const usedCategories = new Set();

  // Find which categories are actually used
  if (items && Array.isArray(items)) {
    items.forEach((item) => {
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
        `* [${category}](#-${category.toLowerCase().replace(/\s+/g, '-')})`
      );
    }
  });

  return categoryLinks.join('\n    ');
}

export function generateReadme() {
  const { data, categories } = loadData();
  
  // Read the EJS template
  const templatePath = path.join(process.cwd(), 'README.ejs');
  const template = fs.readFileSync(templatePath, 'utf8');
  
  // Render the template with EJS
  const readme = ejs.render(template, {
    data,
    categories,
    renderSection,
    renderCategories
  });
  
  return readme;
}