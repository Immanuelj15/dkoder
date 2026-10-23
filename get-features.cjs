const fs = require('fs');

const js = fs.readFileSync('landing-page-chunk.js', 'utf8');

const dtIdx = js.indexOf('var Dt=');
console.log('Dt:', js.slice(dtIdx, dtIdx + 1200));
