const fs = require('fs');

const js = fs.readFileSync('landing-page-chunk.js', 'utf8');

// Find Te and we
const teIdx = js.indexOf('var Te=');
const weIdx = js.indexOf('var we=');

console.log('Te:', js.slice(teIdx, teIdx + 1200));
console.log('we:', js.slice(weIdx, weIdx + 2000));
