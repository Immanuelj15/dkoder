const fs = require('fs');

const js = fs.readFileSync('index-bundle.js', 'utf8');
const regex = /path:\s*["']\/["'],[^}]+element:[^}]+/gi;
console.log(js.match(regex));

// Also let's search for "Interview tomorrow" in all downloaded files or index-bundle.js
console.log('Contains Interview tomorrow in index-bundle.js:', js.includes('Interview tomorrow'));
