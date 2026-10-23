const fs = require('fs');
const chunks = JSON.parse(fs.readFileSync('all-chunks.json', 'utf8'));
chunks.sort();
console.log(chunks.join('\n'));
