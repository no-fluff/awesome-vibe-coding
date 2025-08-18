#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const toml = require('toml');
const handlebars = require('handlebars');

// Register the dynamic-categories helper
handlebars.registerHelper('dynamic-categories', function(sectionKey, data, options) {
  if (!data.categories || !data.categories[sectionKey]) {
    return '';
  }
  
  const items = data[sectionKey];
  const categories = data.categories[sectionKey];
  const usedCategories = new Set();
  
  // Find which categories are actually used
  if (items && Array.isArray(items)) {
    items.forEach(item => {
      if (item.category && categories.includes(item.category)) {
        usedCategories.add(item.category);
      }
    });
  }
  
  // Generate category links
  const categoryLinks = [];
  categories.forEach(category => {
    if (usedCategories.has(category)) {
      categoryLinks.push(`* [${category}](#${category.toLowerCase()})`);
    }
  });
  
  return categoryLinks.join('\n    ');
});

// Register the render-section helper
handlebars.registerHelper('render-section', function(items, options) {
  if (!items || !Array.isArray(items)) {
    return '';
  }

  const categories = options.hash.categories;
  
  if (categories && Array.isArray(categories)) {
    // Group items by category
    const groupedItems = {};
    
    items.forEach(item => {
      const category = item.category || 'Other';
      if (!groupedItems[category]) {
        groupedItems[category] = [];
      }
      groupedItems[category].push(item);
    });

    // Sort categories according to the provided order
    const sortedCategories = categories.filter(cat => groupedItems[cat]);
    
    // Add any remaining categories not in the provided list
    Object.keys(groupedItems).forEach(cat => {
      if (!categories.includes(cat)) {
        sortedCategories.push(cat);
      }
    });

    let result = '';
    sortedCategories.forEach(category => {
      if (groupedItems[category] && groupedItems[category].length > 0) {
        result += `#### ${category}\n\n`;
        
        // Sort items with hot entries first, then alphabetically within each group
        const sortedItems = groupedItems[category].sort((a, b) => {
          // Hot items come first
          if (a.hot && !b.hot) return -1;
          if (!a.hot && b.hot) return 1;
          // Within the same hot/non-hot group, sort alphabetically
          return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        });
        
        sortedItems.forEach(item => {
          result += renderItem(item) + '\n\n';
        });
      }
    });
    
    return result.trim();
  } else {
    // No categories, sort with hot entries first, then alphabetically
    const sortedItems = items.sort((a, b) => {
      // Hot items come first
      if (a.hot && !b.hot) return -1;
      if (!a.hot && b.hot) return 1;
      // Within the same hot/non-hot group, sort alphabetically
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });
    
    return sortedItems.map(item => renderItem(item)).join('\n\n');
  }
});

function renderItem(item) {
  const url = item.website || item.repo || '#';
  const summary = item.summary || '';
  const detail = item.detail || '';
  const hotPrefix = item.hot ? '🔥 ' : '';
  
  return `<details>
  <summary><strong>${hotPrefix}<a href="${url}">${item.name}</a></strong> ${summary}</summary>

  <blockquote>${detail}</blockquote>
</details>`;
}

function main() {
  try {
    // Read data.toml
    const dataPath = path.join(process.cwd(), 'data.toml');
    const dataContent = fs.readFileSync(dataPath, 'utf8');
    const data = toml.parse(dataContent);
    
    // Read README.template
    const templatePath = path.join(process.cwd(), 'README.template');
    const templateContent = fs.readFileSync(templatePath, 'utf8');
    
    // Compile and execute template
    const template = handlebars.compile(templateContent);
    const result = template(data);
    
    // Write README.md
    const outputPath = path.join(process.cwd(), 'README.md');
    fs.writeFileSync(outputPath, result);
    
    console.log('README.md generated successfully');
  } catch (error) {
    console.error('Error generating README.md:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main };