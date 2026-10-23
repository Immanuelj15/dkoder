const fs = require('fs');

const js = fs.readFileSync('landing-page-chunk.js', 'utf8');

// Find questions or presets in landing-page-chunk.js
// Look for "Escape Sequences in Strings" or "Rotation & Sorting"
const idx = js.indexOf('Escape Sequences');
console.log('Index of Escape Sequences:', idx);
if (idx !== -1) {
  console.log(js.slice(idx - 300, idx + 800));
} else {
  // Let's search for Me, Ae, Pe
  const meIdx = js.indexOf('var Me=');
  console.log('Me & Ae:', js.slice(meIdx, meIdx + 1500));
}
