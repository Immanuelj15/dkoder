const fs = require('fs');

const js = fs.readFileSync('landing-page-chunk.js', 'utf8');

// Find companies in Ce
const ceIdx = js.indexOf('function Ce()');
const seIdx = js.indexOf('function Se(');
console.log('Se function (individual company item):', js.slice(seIdx, seIdx + 800));

// find array passed to Ce or Se
const matchCompanies = js.slice(seIdx - 1500, seIdx);
console.log('Companies list before Se:', matchCompanies);
