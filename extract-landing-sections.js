const fs = require('fs');

const js = fs.readFileSync('landing-page-chunk.js', 'utf8');

// Let's find all function declarations or component definitions in landing-page-chunk.js
// Look for exported component or default export
const exportMatch = js.match(/export\s*\{([^}]+)\}/);
console.log('Exports:', exportMatch ? exportMatch[1] : 'None');

// Let's write out formatted sections or search for key components:
// Hero dialogue, Thought cloud, Practice demo, Career tracks, Daily practice, Features, Proof, Leaderboard/batch view, CTA
const matches = js.match(/function\s+([a-zA-Z0-9_]+)\s*\([^)]*\)\s*\{/g);
console.log('Functions found:', matches);
