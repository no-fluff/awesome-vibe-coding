export function buildSearchText(item, sectionTitle) {
  const fragments = [
    item.name,
    item.summary,
    item.detail,
    item.category,
    sectionTitle,
    Array.isArray(item.agents) ? item.agents.join(' ') : ''
  ];

  return fragments
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
}

export function colorFromString(value) {
  // Use a consistent dark gray instead of random colors
  return '#3a3a3a';
}

export function tileStyle(item) {
  const color = colorFromString(item.slug || item.name || item.sectionId || 'vibes');
  const rawImage =
    item.hero_image || item.heroImage || item.image || item.poster || item.cover || item.thumbnail;
  const escapedImage = rawImage ? String(rawImage).replace(/"/g, '\\"') : null;
  const imageValue = escapedImage ? `url("${escapedImage}")` : 'none';
  return `--tile-color: ${color}; --tile-image: ${imageValue};`;
}

export function getAggregatedCategories(categories) {
  return Array.from(
    new Set(
      Object.values(categories || {}).flatMap((list) => (Array.isArray(list) ? list : []))
    )
  ).sort((a, b) => a.localeCompare(b));
}
