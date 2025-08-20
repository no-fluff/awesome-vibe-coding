import TOML from 'toml';
import fs from 'fs';
import path from 'path';

export function loadData() {
  const dataPath = path.join(process.cwd(), 'data.toml');
  const data = fs.readFileSync(dataPath, 'utf-8');
  const parsed = TOML.parse(data);
  
  // Extract categories from data.toml
  const categories = parsed.categories || {};
  
  // Process each section
  ['agents', 'apps', 'interfaces', 'tools', 'workflows', 'hosted-agents'].forEach(section => {
    if (parsed[section]) {
      // Sort items alphabetically by name
      parsed[section] = parsed[section].sort((a, b) => 
        a.name.toLowerCase().localeCompare(b.name.toLowerCase())
      );
    }
  });
  
  return {
    data: parsed,
    categories
  };
}