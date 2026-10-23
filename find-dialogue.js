const fs = require('fs');

const js = fs.readFileSync('landing-page-chunk.js', 'utf8');

// find be array
const idx = js.indexOf('var be=');
if (idx !== -1) {
  console.log(js.slice(idx, idx + 1500));
} else {
  // search for "game developer"
  const gIdx = js.indexOf('game developer');
  console.log(js.slice(gIdx - 200, gIdx + 800));
}
